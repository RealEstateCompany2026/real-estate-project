import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

/* ─── Color Swatch component ─── */
const Swatch = ({ name, cssVar }: { name: string; cssVar: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: `var(${cssVar})`,
        border: "1px solid var(--neutral-100)",
        flexShrink: 0,
      }}
    />
    <div>
      <div style={{ fontWeight: 600, fontSize: 14, color: "var(--text-headings)" }}>{name}</div>
      <code style={{ fontSize: 12, color: "var(--text-subtle)" }}>{cssVar}</code>
    </div>
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 40 }}>
    <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "var(--text-headings)", borderBottom: "1px solid var(--border-divider)", paddingBottom: 8 }}>
      {title}
    </h3>
    {children}
  </div>
);

const Grid = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 8 }}>
    {children}
  </div>
);

/* ─── Palette Story ─── */
const PaletteStory = () => (
  <div style={{ fontFamily: "var(--font-family)", padding: 24 }}>
    <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 32, color: "var(--text-headings)" }}>
      RealAgent Design Tokens
    </h2>

    <Section title="Neutral Palette">
      <Grid>
        {["white", "50", "100", "200", "300", "400", "500", "600", "700", "800", "black"].map((n) => (
          <Swatch key={n} name={`neutral-${n}`} cssVar={`--neutral-${n}`} />
        ))}
      </Grid>
    </Section>

    <Section title="Purple (Branded) Palette">
      <Grid>
        {["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"].map((n) => (
          <Swatch key={n} name={`purple-${n}`} cssVar={`--purple-${n}`} />
        ))}
      </Grid>
    </Section>

    <Section title="Green (Success) Palette">
      <Grid>
        {["50", "100", "200", "300", "400", "500", "600", "700", "800"].map((n) => (
          <Swatch key={n} name={`green-${n}`} cssVar={`--green-${n}`} />
        ))}
      </Grid>
    </Section>

    <Section title="Red (Error) Palette">
      <Grid>
        {["50", "100", "200", "300", "400", "500", "600", "700", "800"].map((n) => (
          <Swatch key={n} name={`red-${n}`} cssVar={`--red-${n}`} />
        ))}
      </Grid>
    </Section>

    <Section title="Blue (Information) Palette">
      <Grid>
        {["50", "100", "200", "300", "400", "500", "600", "700", "800"].map((n) => (
          <Swatch key={n} name={`blue-${n}`} cssVar={`--blue-${n}`} />
        ))}
      </Grid>
    </Section>

    <Section title="Orange (Warning) Palette">
      <Grid>
        {["50", "100", "200", "300", "400", "500", "600", "700", "800"].map((n) => (
          <Swatch key={n} name={`orange-${n}`} cssVar={`--orange-${n}`} />
        ))}
      </Grid>
    </Section>

    <Section title="Surface Tokens (Layer 3 — use these)">
      <Grid>
        <Swatch name="page" cssVar="--surface-page" />
        <Swatch name="neutral-default" cssVar="--surface-neutral-default" />
        <Swatch name="neutral-action" cssVar="--surface-neutral-action" />
        <Swatch name="neutral-action-hover" cssVar="--surface-neutral-action-hover" />
        <Swatch name="branded-default" cssVar="--surface-branded-default" />
        <Swatch name="branded-action" cssVar="--surface-branded-action" />
        <Swatch name="branded-action-hover" cssVar="--surface-branded-action-hover" />
        <Swatch name="branded-subtle" cssVar="--surface-branded-subtle" />
        <Swatch name="container" cssVar="--surface-container" />
        <Swatch name="disabled" cssVar="--surface-disabled" />
        <Swatch name="success" cssVar="--surface-success" />
        <Swatch name="error" cssVar="--surface-error" />
        <Swatch name="information" cssVar="--surface-information" />
        <Swatch name="warning" cssVar="--surface-warning" />
      </Grid>
    </Section>

    <Section title="Icon Tokens (Layer 3)">
      <Grid>
        <Swatch name="neutral-default" cssVar="--icon-neutral-default" />
        <Swatch name="neutral-action" cssVar="--icon-neutral-action" />
        <Swatch name="neutral-action-hover" cssVar="--icon-neutral-action-hover" />
        <Swatch name="neutral-on-action" cssVar="--icon-neutral-on-action" />
        <Swatch name="branded-default" cssVar="--icon-branded-default" />
        <Swatch name="branded-action" cssVar="--icon-branded-action" />
        <Swatch name="branded-action-hover" cssVar="--icon-branded-action-hover" />
        <Swatch name="placeholder" cssVar="--icon-placeholder" />
        <Swatch name="disabled" cssVar="--icon-disabled" />
        <Swatch name="success" cssVar="--icon-success" />
        <Swatch name="error" cssVar="--icon-error" />
        <Swatch name="information" cssVar="--icon-information" />
        <Swatch name="warning" cssVar="--icon-warning" />
      </Grid>
    </Section>

    <Section title="Text Tokens (Layer 3)">
      <Grid>
        <Swatch name="hero" cssVar="--text-hero" />
        <Swatch name="headings" cssVar="--text-headings" />
        <Swatch name="body" cssVar="--text-body" />
        <Swatch name="caption" cssVar="--text-caption" />
        <Swatch name="strong" cssVar="--text-strong" />
        <Swatch name="subtle" cssVar="--text-subtle" />
        <Swatch name="placeholder" cssVar="--text-placeholder" />
        <Swatch name="branded-action" cssVar="--text-branded-action" />
        <Swatch name="branded-strong" cssVar="--text-branded-strong" />
        <Swatch name="disabled" cssVar="--text-disabled" />
        <Swatch name="success" cssVar="--text-success" />
        <Swatch name="error" cssVar="--text-error" />
        <Swatch name="information" cssVar="--text-information" />
        <Swatch name="warning" cssVar="--text-warning" />
      </Grid>
    </Section>

    <Section title="Border Tokens (Layer 3)">
      <Grid>
        <Swatch name="default" cssVar="--border-default" />
        <Swatch name="subtle" cssVar="--border-subtle" />
        <Swatch name="divider" cssVar="--border-divider" />
        <Swatch name="neutral-default" cssVar="--border-neutral-default" />
        <Swatch name="branded-default" cssVar="--border-branded-default" />
        <Swatch name="disabled" cssVar="--border-disabled" />
        <Swatch name="success" cssVar="--border-success" />
        <Swatch name="error" cssVar="--border-error" />
        <Swatch name="information" cssVar="--border-information" />
        <Swatch name="warning" cssVar="--border-warning" />
      </Grid>
    </Section>

    <Section title="Typography">
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ fontSize: "var(--text-h1)", lineHeight: "var(--lh-h1)", fontWeight: 700, color: "var(--text-headings)" }}>H1 — 48px Bold</div>
        <div style={{ fontSize: "var(--text-h2)", lineHeight: "var(--lh-h2)", fontWeight: 700, color: "var(--text-headings)" }}>H2 — 40px Bold</div>
        <div style={{ fontSize: "var(--text-h3)", lineHeight: "var(--lh-h3)", fontWeight: 700, color: "var(--text-headings)" }}>H3 — 32px Bold</div>
        <div style={{ fontSize: "var(--text-h4)", lineHeight: "var(--lh-h4)", fontWeight: 700, color: "var(--text-headings)" }}>H4 — 28px Bold</div>
        <div style={{ fontSize: "var(--text-h5)", lineHeight: "var(--lh-h5)", fontWeight: 700, color: "var(--text-headings)" }}>H5 — 24px Bold</div>
        <div style={{ fontSize: "var(--text-h6)", lineHeight: "var(--lh-h6)", fontWeight: 700, color: "var(--text-headings)" }}>H6 — 20px Bold</div>
        <div style={{ fontSize: "var(--text-lg)", lineHeight: "var(--lh-lg)", color: "var(--text-body)" }}>Body Large — 20px Regular</div>
        <div style={{ fontSize: "var(--text-base)", lineHeight: "var(--lh-base)", color: "var(--text-body)" }}>Body Base — 16px Regular</div>
        <div style={{ fontSize: "var(--text-sm)", lineHeight: "var(--lh-sm)", color: "var(--text-body)" }}>Body Small — 14px Regular</div>
        <div style={{ fontSize: "var(--text-xs)", lineHeight: "var(--lh-xs)", color: "var(--text-subtle)" }}>Body XS — 12px Regular</div>
      </div>
    </Section>

    <Section title="Spacing Scale">
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          { name: "scale-100 (4px)", size: "var(--scale-100)" },
          { name: "scale-200 (8px)", size: "var(--scale-200)" },
          { name: "scale-300 (12px)", size: "var(--scale-300)" },
          { name: "scale-400 (16px)", size: "var(--scale-400)" },
          { name: "scale-600 (24px)", size: "var(--scale-600)" },
          { name: "scale-800 (32px)", size: "var(--scale-800)" },
          { name: "scale-900 (40px)", size: "var(--scale-900)" },
        ].map(({ name, size }) => (
          <div key={name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: size, height: 16, backgroundColor: "var(--purple-500)", borderRadius: 4, flexShrink: 0 }} />
            <span style={{ fontSize: 14, color: "var(--text-body)" }}>{name}</span>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Border Radius">
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {[
          { name: "100 (4px)", r: "var(--border-radius-100)" },
          { name: "200 (8px)", r: "var(--border-radius-200)" },
          { name: "300 (12px)", r: "var(--border-radius-300)" },
          { name: "400 (16px)", r: "var(--border-radius-400)" },
          { name: "600 (24px)", r: "var(--border-radius-600)" },
          { name: "700 (28px)", r: "var(--border-radius-700)" },
          { name: "full", r: "var(--border-radius-full)" },
        ].map(({ name, r }) => (
          <div key={name} style={{ textAlign: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: r, backgroundColor: "var(--surface-neutral-action)", border: "2px solid var(--border-default)" }} />
            <div style={{ fontSize: 12, marginTop: 4, color: "var(--text-subtle)" }}>{name}</div>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

const meta: Meta = {
  title: "Design System/Tokens",
  component: PaletteStory,
};

export default meta;
type Story = StoryObj;

export const AllTokens: Story = {};
