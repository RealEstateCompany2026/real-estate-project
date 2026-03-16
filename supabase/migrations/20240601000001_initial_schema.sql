-- ============================================================
-- Migration 001 — Initial schema
-- Purpose : Document the schema currently managed by Prisma.
--           Apply with: supabase db push  OR  psql < this file
-- This file is generated from packages/database/prisma/schema.prisma
-- ============================================================

-- Enums
CREATE TYPE "ClientStatus"  AS ENUM ('PROPRIETAIRE','ACQUEREUR','BAILLEUR','LOCATAIRE');
CREATE TYPE "ClientGender"  AS ENUM ('HOMME','FEMME','AUTRE');
CREATE TYPE "MaritalStatus" AS ENUM ('SINGLE','MARRIED','DIVORCED','WIDOWED','OTHER');
CREATE TYPE "DealType"      AS ENUM ('VENTE','BAIL','ACQUISITION','LOCATION');
CREATE TYPE "DealStatus"    AS ENUM (
  'VENTE_ATTENTE_MANDAT','VENTE_MANDAT_EDITE',
  'VENTE_MANDAT_SIGNE_ANNONCE_EDITEE',
  'VENTE_MANDAT_SIGNE_ANNONCE_PUBLIEE_VISITES_PROGRAMMEES',
  'VENTE_MANDAT_SIGNE_ANNONCE_PUBLIEE_VISITES_EFFECTUEES_PROMESSE',
  'VENTE_MANDAT_SIGNE_ANNONCE_PUBLIEE_VISITES_EFFECTUEES_NOTAIRE',
  'BAIL_ATTENTE_MANDAT','BAIL_MANDAT_SIGNE',
  'ACQUISITION_RECHERCHE','LOCATION_RECHERCHE','OTHER'
);
CREATE TYPE "PropertyType"   AS ENUM ('STUDIO','T1','T2','T3','T4','MAISON_DE_VILLE','OTHER');
CREATE TYPE "PropertyStatus" AS ENUM ('OFF_MARKET','A_VENDRE','A_LOUER','LOUER','VENDU','OTHER');

-- Tables
CREATE TABLE IF NOT EXISTS "User" (
  id          TEXT        PRIMARY KEY,
  email       TEXT        NOT NULL UNIQUE,
  name        TEXT,
  role        TEXT        NOT NULL DEFAULT 'OWNER',
  supabase_id UUID        UNIQUE,          -- added in migration 002
  "createdAt" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "Client" (
  id                        TEXT         PRIMARY KEY,
  "userId"                  TEXT         UNIQUE REFERENCES "User"(id),
  "isActive"                BOOLEAN      NOT NULL DEFAULT true,
  status                    "ClientStatus"[],
  gender                    "ClientGender",
  "firstName"               TEXT         NOT NULL,
  "lastName"                TEXT         NOT NULL,
  "dateOfBirth"             TIMESTAMPTZ,
  "placeOfBirth"            TEXT,
  "maritalStatus"           "MaritalStatus",
  "addressId"               INT,
  address                   TEXT,
  "mobilePhone"             TEXT,
  "primaryEmail"            TEXT         NOT NULL,
  "secondaryEmail"          TEXT,
  "jobTitle"                TEXT,
  "incomeBracket"           TEXT,
  "kbisUrl"                 TEXT,
  "cniUrl"                  TEXT,
  "passportUrl"             TEXT,
  "totalOwnedProperties"    TEXT,
  "propertiesForSaleCount"  TEXT,
  "titleDeedUrl"            TEXT,
  "propertiesUnderMgmtCount" TEXT,
  "paySlipUrl"              TEXT,
  "taxStatementUrl"         TEXT,
  "loanOfferUrl"            TEXT,
  "createdAt"               TIMESTAMPTZ  NOT NULL DEFAULT now(),
  "updatedAt"               TIMESTAMPTZ  NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "Property" (
  id        TEXT             PRIMARY KEY,
  address   TEXT             NOT NULL,
  type      "PropertyType"   NOT NULL DEFAULT 'OTHER',
  status    "PropertyStatus" NOT NULL DEFAULT 'OFF_MARKET',
  "ownerId" TEXT             REFERENCES "User"(id),
  "clientId" TEXT            REFERENCES "Client"(id)
);

CREATE TABLE IF NOT EXISTS "PropertyAgent" (
  id               TEXT     PRIMARY KEY,
  "propertyId"     TEXT     NOT NULL REFERENCES "Property"(id),
  "agentId"        TEXT     NOT NULL REFERENCES "User"(id),
  "canSeeEstimations" BOOLEAN NOT NULL DEFAULT true,
  "canSeeTriggers"    BOOLEAN NOT NULL DEFAULT true,
  "createdAt"      TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE("propertyId","agentId")
);

CREATE TABLE IF NOT EXISTS "Deal" (
  id          TEXT         PRIMARY KEY,
  "clientId"  TEXT         NOT NULL REFERENCES "Client"(id),
  "propertyId" TEXT        REFERENCES "Property"(id),
  type        "DealType"   NOT NULL DEFAULT 'VENTE',
  status      "DealStatus" NOT NULL DEFAULT 'VENTE_ATTENTE_MANDAT',
  "createdAt" TIMESTAMPTZ  NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMPTZ  NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "SaleAnalysis" (
  id               TEXT        PRIMARY KEY,
  "propertyId"     TEXT        NOT NULL REFERENCES "Property"(id),
  "dealId"         TEXT        REFERENCES "Deal"(id),
  "estimatedValue" FLOAT,
  "targetPrice"    FLOAT,
  "finalPrice"     FLOAT,
  notes            TEXT        NOT NULL DEFAULT '',
  "createdAt"      TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt"      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "LoanAnalysis" (
  id               TEXT        PRIMARY KEY,
  "clientId"       TEXT        NOT NULL REFERENCES "Client"(id),
  "dealId"         TEXT        REFERENCES "Deal"(id),
  "maxLoanAmount"  FLOAT,
  "interestRate"   FLOAT,
  "durationMonths" INT,
  "monthlyPayment" FLOAT,
  "bankName"       TEXT,
  status           TEXT        NOT NULL DEFAULT 'PENDING',
  "createdAt"      TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updatedAt"      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "MaintenanceLog" (
  id          TEXT    PRIMARY KEY,
  category    TEXT    NOT NULL,
  description TEXT    NOT NULL,
  amount      FLOAT,
  "isPrivate" BOOLEAN NOT NULL DEFAULT true,
  "propertyId" TEXT   NOT NULL REFERENCES "Property"(id)
);

CREATE TABLE IF NOT EXISTS "OpportunityTrigger" (
  id          TEXT PRIMARY KEY,
  type        TEXT NOT NULL,
  description TEXT NOT NULL,
  "propertyId" TEXT NOT NULL REFERENCES "Property"(id)
);

CREATE TABLE IF NOT EXISTS "Document" (
  id          TEXT PRIMARY KEY,
  title       TEXT NOT NULL,
  url         TEXT NOT NULL,
  "propertyId" TEXT NOT NULL REFERENCES "Property"(id)
);
