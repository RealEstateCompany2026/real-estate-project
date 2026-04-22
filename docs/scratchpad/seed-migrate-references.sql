-- =============================================================================
-- Brief #89 — Migration references mandat : tiret (MV-0016) → points (MV.000.000.016)
-- Script de migration des donnees existantes
-- Date : 2026-04-22
-- =============================================================================
-- Ce script convertit toutes les references mandat existantes du format ancien
-- (PREFIX-NNNN) vers le nouveau format (PREFIX.NNN.NNN.NNN).
-- Gere les 4 prefixes : MV, MRA, MRL, MG (longueurs differentes).
-- =============================================================================

-- Dry-run : visualiser les changements avant execution
-- SELECT
--   reference AS old_ref,
--   CASE
--     WHEN reference LIKE 'MRA-%' THEN
--       'MRA.' || LPAD(SPLIT_PART(reference, '-', 2)::TEXT, 9, '0')
--     WHEN reference LIKE 'MRL-%' THEN
--       'MRL.' || LPAD(SPLIT_PART(reference, '-', 2)::TEXT, 9, '0')
--     WHEN reference LIKE 'MV-%' THEN
--       'MV.' || LPAD(SPLIT_PART(reference, '-', 2)::TEXT, 9, '0')
--     WHEN reference LIKE 'MG-%' THEN
--       'MG.' || LPAD(SPLIT_PART(reference, '-', 2)::TEXT, 9, '0')
--   END AS raw_padded
-- FROM "Deal"
-- WHERE reference ~ '^(MV|MRA|MRL|MG)-[0-9]+$';

-- ── Migration effective ─────────────────────────────────────────────────────

BEGIN;

UPDATE "Deal"
SET reference = CASE
  -- MRA (3 car) — traiter avant MR pour eviter collision de pattern
  WHEN reference LIKE 'MRA-%' THEN
    'MRA.'
    || SUBSTRING(LPAD(SPLIT_PART(reference, '-', 2), 9, '0') FROM 1 FOR 3) || '.'
    || SUBSTRING(LPAD(SPLIT_PART(reference, '-', 2), 9, '0') FROM 4 FOR 3) || '.'
    || SUBSTRING(LPAD(SPLIT_PART(reference, '-', 2), 9, '0') FROM 7 FOR 3)

  -- MRL (3 car)
  WHEN reference LIKE 'MRL-%' THEN
    'MRL.'
    || SUBSTRING(LPAD(SPLIT_PART(reference, '-', 2), 9, '0') FROM 1 FOR 3) || '.'
    || SUBSTRING(LPAD(SPLIT_PART(reference, '-', 2), 9, '0') FROM 4 FOR 3) || '.'
    || SUBSTRING(LPAD(SPLIT_PART(reference, '-', 2), 9, '0') FROM 7 FOR 3)

  -- MV (2 car)
  WHEN reference LIKE 'MV-%' THEN
    'MV.'
    || SUBSTRING(LPAD(SPLIT_PART(reference, '-', 2), 9, '0') FROM 1 FOR 3) || '.'
    || SUBSTRING(LPAD(SPLIT_PART(reference, '-', 2), 9, '0') FROM 4 FOR 3) || '.'
    || SUBSTRING(LPAD(SPLIT_PART(reference, '-', 2), 9, '0') FROM 7 FOR 3)

  -- MG (2 car)
  WHEN reference LIKE 'MG-%' THEN
    'MG.'
    || SUBSTRING(LPAD(SPLIT_PART(reference, '-', 2), 9, '0') FROM 1 FOR 3) || '.'
    || SUBSTRING(LPAD(SPLIT_PART(reference, '-', 2), 9, '0') FROM 4 FOR 3) || '.'
    || SUBSTRING(LPAD(SPLIT_PART(reference, '-', 2), 9, '0') FROM 7 FOR 3)

  ELSE reference
END
WHERE reference ~ '^(MV|MRA|MRL|MG)-[0-9]+$';

COMMIT;

-- ── Verification ────────────────────────────────────────────────────────────

-- SELECT reference FROM "Deal" WHERE reference ~ '^\w+\.\d{3}\.\d{3}\.\d{3}$' ORDER BY reference;
