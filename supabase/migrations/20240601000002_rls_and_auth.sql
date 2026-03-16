-- ============================================================
-- Migration 002 — Supabase Auth + Row Level Security
-- Apply in Supabase Dashboard > SQL Editor, OR:
--   supabase db push  (if using Supabase CLI)
-- ============================================================

-- ────────────────────────────────────────────────────────────
-- 1. LINK SUPABASE AUTH TO THE "User" TABLE
-- ────────────────────────────────────────────────────────────

-- Add supabase_id column (UUID from auth.users.id)
ALTER TABLE "User"
  ADD COLUMN IF NOT EXISTS supabase_id UUID UNIQUE,
  ADD COLUMN IF NOT EXISTS "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  ADD COLUMN IF NOT EXISTS "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now();

-- Helper: get the internal User.id for the current session
CREATE OR REPLACE FUNCTION public.auth_user_id()
RETURNS TEXT
LANGUAGE sql STABLE SECURITY DEFINER
AS $$
  SELECT id FROM "User" WHERE supabase_id = auth.uid()
$$;

-- Helper: get the role of the current session user
CREATE OR REPLACE FUNCTION public.auth_user_role()
RETURNS TEXT
LANGUAGE sql STABLE SECURITY DEFINER
AS $$
  SELECT role FROM "User" WHERE supabase_id = auth.uid()
$$;

-- Trigger: auto-create a "User" row when someone signs up via Supabase Auth
CREATE OR REPLACE FUNCTION public.handle_new_auth_user()
RETURNS TRIGGER
LANGUAGE plpgsql SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO "User" (id, supabase_id, email, name, role)
  VALUES (
    gen_random_uuid()::TEXT,
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    'AGENT'
  )
  ON CONFLICT (email) DO UPDATE
    SET supabase_id = EXCLUDED.supabase_id,
        "updatedAt"  = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_auth_user();

-- ────────────────────────────────────────────────────────────
-- 2. ENABLE ROW LEVEL SECURITY ON ALL TABLES
-- ────────────────────────────────────────────────────────────

ALTER TABLE "User"               ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Client"             ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Property"           ENABLE ROW LEVEL SECURITY;
ALTER TABLE "PropertyAgent"      ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Deal"               ENABLE ROW LEVEL SECURITY;
ALTER TABLE "SaleAnalysis"       ENABLE ROW LEVEL SECURITY;
ALTER TABLE "LoanAnalysis"       ENABLE ROW LEVEL SECURITY;
ALTER TABLE "MaintenanceLog"     ENABLE ROW LEVEL SECURITY;
ALTER TABLE "OpportunityTrigger" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Document"           ENABLE ROW LEVEL SECURITY;

-- ────────────────────────────────────────────────────────────
-- 3. POLICIES — "User" table
-- ────────────────────────────────────────────────────────────

-- Any authenticated user can read all users (agents collaborate in same agency)
DROP POLICY IF EXISTS "user_select_authenticated" ON "User";
CREATE POLICY "user_select_authenticated" ON "User"
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Users can only update their own row
DROP POLICY IF EXISTS "user_update_own" ON "User";
CREATE POLICY "user_update_own" ON "User"
  FOR UPDATE
  USING      (supabase_id = auth.uid())
  WITH CHECK (supabase_id = auth.uid());

-- Allow the SECURITY DEFINER trigger to insert rows
DROP POLICY IF EXISTS "user_insert_system" ON "User";
CREATE POLICY "user_insert_system" ON "User"
  FOR INSERT WITH CHECK (true);

-- ────────────────────────────────────────────────────────────
-- 4. POLICIES — "Client" table
-- ── MVP: any authenticated agent can read & write all clients
-- ── (refine with organization_id in a later migration)
-- ────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "client_select" ON "Client";
CREATE POLICY "client_select" ON "Client"
  FOR SELECT USING (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "client_insert" ON "Client";
CREATE POLICY "client_insert" ON "Client"
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "client_update" ON "Client";
CREATE POLICY "client_update" ON "Client"
  FOR UPDATE USING (auth.uid() IS NOT NULL) WITH CHECK (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "client_delete" ON "Client";
CREATE POLICY "client_delete" ON "Client"
  FOR DELETE USING (auth.uid() IS NOT NULL);

-- ────────────────────────────────────────────────────────────
-- 5. POLICIES — "Property" table
-- ────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "property_select" ON "Property";
CREATE POLICY "property_select" ON "Property"
  FOR SELECT USING (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "property_insert" ON "Property";
CREATE POLICY "property_insert" ON "Property"
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "property_update" ON "Property";
CREATE POLICY "property_update" ON "Property"
  FOR UPDATE USING (auth.uid() IS NOT NULL) WITH CHECK (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "property_delete" ON "Property";
CREATE POLICY "property_delete" ON "Property"
  FOR DELETE USING (auth.uid() IS NOT NULL);

-- ────────────────────────────────────────────────────────────
-- 6. POLICIES — "PropertyAgent" table
-- ── Agents see their own assignments; Admins/Managers see all
-- ────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "property_agent_select" ON "PropertyAgent";
CREATE POLICY "property_agent_select" ON "PropertyAgent"
  FOR SELECT USING (
    auth.uid() IS NOT NULL AND (
      "agentId" = public.auth_user_id()
      OR public.auth_user_role() IN ('ADMIN', 'MANAGER')
    )
  );

DROP POLICY IF EXISTS "property_agent_write" ON "PropertyAgent";
CREATE POLICY "property_agent_write" ON "PropertyAgent"
  FOR ALL
  USING      (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- ────────────────────────────────────────────────────────────
-- 7. POLICIES — "Deal" table
-- ────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "deal_select" ON "Deal";
CREATE POLICY "deal_select" ON "Deal"
  FOR SELECT USING (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "deal_write" ON "Deal";
CREATE POLICY "deal_write" ON "Deal"
  FOR ALL
  USING      (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- ────────────────────────────────────────────────────────────
-- 8. POLICIES — "SaleAnalysis" & "LoanAnalysis"
-- ────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "sale_analysis_all" ON "SaleAnalysis";
CREATE POLICY "sale_analysis_all" ON "SaleAnalysis"
  FOR ALL USING (auth.uid() IS NOT NULL) WITH CHECK (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "loan_analysis_all" ON "LoanAnalysis";
CREATE POLICY "loan_analysis_all" ON "LoanAnalysis"
  FOR ALL USING (auth.uid() IS NOT NULL) WITH CHECK (auth.uid() IS NOT NULL);

-- ────────────────────────────────────────────────────────────
-- 9. POLICIES — "MaintenanceLog" (sensitive: isPrivate flag)
-- ── Agents assigned to the property can read logs.
-- ── If isPrivate = true, they should NOT see description/amount
-- ── (enforced at app layer; future: use a view with CASE logic)
-- ────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "maintenance_log_select" ON "MaintenanceLog";
CREATE POLICY "maintenance_log_select" ON "MaintenanceLog"
  FOR SELECT USING (
    auth.uid() IS NOT NULL AND (
      -- Agent is explicitly assigned to this property
      EXISTS (
        SELECT 1 FROM "PropertyAgent" pa
        WHERE pa."propertyId" = "MaintenanceLog"."propertyId"
          AND pa."agentId"    = public.auth_user_id()
      )
      -- OR user is the property owner
      OR EXISTS (
        SELECT 1 FROM "Property" p
        WHERE p.id       = "MaintenanceLog"."propertyId"
          AND p."ownerId" = public.auth_user_id()
      )
    )
  );

DROP POLICY IF EXISTS "maintenance_log_write" ON "MaintenanceLog";
CREATE POLICY "maintenance_log_write" ON "MaintenanceLog"
  FOR ALL USING (auth.uid() IS NOT NULL) WITH CHECK (auth.uid() IS NOT NULL);

-- ────────────────────────────────────────────────────────────
-- 10. POLICIES — "OpportunityTrigger"
-- ── Only agents assigned to the property see its triggers
-- ────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "trigger_select" ON "OpportunityTrigger";
CREATE POLICY "trigger_select" ON "OpportunityTrigger"
  FOR SELECT USING (
    auth.uid() IS NOT NULL AND
    EXISTS (
      SELECT 1 FROM "PropertyAgent" pa
      WHERE pa."propertyId" = "OpportunityTrigger"."propertyId"
        AND pa."agentId"    = public.auth_user_id()
    )
  );

DROP POLICY IF EXISTS "trigger_write" ON "OpportunityTrigger";
CREATE POLICY "trigger_write" ON "OpportunityTrigger"
  FOR ALL USING (auth.uid() IS NOT NULL) WITH CHECK (auth.uid() IS NOT NULL);

-- ────────────────────────────────────────────────────────────
-- 11. POLICIES — "Document"
-- ────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "document_all" ON "Document";
CREATE POLICY "document_all" ON "Document"
  FOR ALL USING (auth.uid() IS NOT NULL) WITH CHECK (auth.uid() IS NOT NULL);

-- ────────────────────────────────────────────────────────────
-- 12. GRANTS — allow authenticated role to access all tables
-- ────────────────────────────────────────────────────────────

GRANT USAGE ON SCHEMA public TO anon, authenticated;

GRANT SELECT, INSERT, UPDATE, DELETE ON "User"               TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON "Client"             TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON "Property"           TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON "PropertyAgent"      TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON "Deal"               TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON "SaleAnalysis"       TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON "LoanAnalysis"       TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON "MaintenanceLog"     TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON "OpportunityTrigger" TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON "Document"           TO authenticated;

-- Sequences (for tables using serial PKs if any)
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;
