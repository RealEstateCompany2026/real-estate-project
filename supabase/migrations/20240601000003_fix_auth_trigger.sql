-- ============================================================
-- Migration 003 — Fix auth trigger (search_path + robustness)
-- Apply in: Supabase Dashboard > SQL Editor
-- OR: psql 'your-db-url' -f supabase/migrations/20240601000003_fix_auth_trigger.sql
-- ============================================================

-- Drop and recreate the trigger function with SET search_path
CREATE OR REPLACE FUNCTION public.handle_new_auth_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO "User" (id, supabase_id, email, name, role)
  VALUES (
    gen_random_uuid()::TEXT,
    NEW.id,
    NEW.email,
    COALESCE(
      NEW.raw_user_meta_data->>'full_name',
      NEW.raw_user_meta_data->>'name',
      split_part(NEW.email, '@', 1)
    ),
    'AGENT'
  )
  ON CONFLICT (email) DO UPDATE
    SET supabase_id = EXCLUDED.supabase_id;

  RETURN NEW;

EXCEPTION WHEN OTHERS THEN
  -- Log the error but don't block the auth signup
  RAISE WARNING 'handle_new_auth_user error: % %', SQLERRM, SQLSTATE;
  RETURN NEW;
END;
$$;

-- Recreate the trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_auth_user();
