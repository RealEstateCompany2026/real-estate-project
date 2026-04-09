import { Button, IconButton } from "../components/atoms/Button";
import { LinkButton } from "../components/atoms/LinkButton";
import { ButtonMultiLabel, ButtonMultiLabelControlled } from "../components/atoms/ButtonMultiLabel";
import { PlusIcon } from "../components/atoms/icons";
import { Info, ExternalLink } from "lucide-react";

/**
 * Simple Info Icon (extracted from Figma imports)
 */
function InfoIcon({ color = "currentColor" }: { color?: string }) {
  return (
    <svg
      className="size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 16.6667 16.6667"
    >
      <path
        d="M8.33301 1.66669C4.65134 1.66669 1.66634 4.65169 1.66634 8.33335C1.66634 12.015 4.65134 15 8.33301 15C12.0147 15 14.9997 12.015 14.9997 8.33335C14.9997 4.65169 12.0147 1.66669 8.33301 1.66669ZM8.33301 11.6667C7.87467 11.6667 7.49967 11.2917 7.49967 10.8334V8.33335C7.49967 7.87502 7.87467 7.50002 8.33301 7.50002C8.79134 7.50002 9.16634 7.87502 9.16634 8.33335V10.8334C9.16634 11.2917 8.79134 11.6667 8.33301 11.6667ZM9.16634 5.83335H7.49967V4.16669H9.16634V5.83335Z"
        fill={color}
      />
    </svg>
  );
}

/**
 * Button Demo Page
 * Showcases all button variants from the RealAgent Design System
 */
export default function ButtonDemo() {
  return (
    <div className="min-h-screen p-8" style={{ background: "var(--surface-neutral-container)" }}>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-body)" }}>
            Button Components
          </h1>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Design System RealAgent - Basé sur les imports Figma
          </p>
        </div>

        {/* Branded Buttons */}
        <section>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Branded (Violet principal)
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="branded">Branded Button</Button>
            <Button variant="branded" iconLeft={<InfoIcon color="white" />}>
              With Left Icon
            </Button>
            <Button variant="branded" iconRight={<InfoIcon color="white" />}>
              With Right Icon
            </Button>
            <Button
              variant="branded"
              iconLeft={<InfoIcon color="white" />}
              iconRight={<InfoIcon color="white" />}
            >
              Both Icons
            </Button>
          </div>
        </section>

        {/* Neutral Buttons */}
        <section>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Neutral (Fond blanc)
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="neutral">Neutral Button</Button>
            <Button variant="neutral" iconLeft={<InfoIcon />}>
              With Left Icon
            </Button>
            <Button variant="neutral" iconRight={<InfoIcon />}>
              With Right Icon
            </Button>
          </div>
        </section>

        {/* Outlined Buttons */}
        <section>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Outlined (Avec bordure)
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="outlined">Outlined Button</Button>
            <Button variant="outlined" iconLeft={<InfoIcon />}>
              With Left Icon
            </Button>
            <Button variant="outlined" iconRight={<InfoIcon />}>
              With Right Icon
            </Button>
          </div>
        </section>

        {/* Ghost Buttons */}
        <section>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Ghost (Transparent)
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="ghost" iconLeft={<InfoIcon />}>
              With Left Icon
            </Button>
            <Button variant="ghost" iconRight={<InfoIcon />}>
              With Right Icon
            </Button>
          </div>
        </section>

        {/* Disabled Buttons */}
        <section>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Disabled State
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="branded" disabled>
              Disabled Branded
            </Button>
            <Button variant="neutral" disabled>
              Disabled Neutral
            </Button>
            <Button variant="outlined" disabled>
              Disabled Outlined
            </Button>
            <Button variant="ghost" disabled>
              Disabled Ghost
            </Button>
            <Button variant="neutral" disabled iconLeft={<InfoIcon />}>
              Disabled with Icon
            </Button>
          </div>
        </section>

        {/* Full Width */}
        <section>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Full Width
          </h2>
          <div className="space-y-3">
            <Button variant="branded" fullWidth>
              Full Width Branded
            </Button>
            <Button variant="outlined" fullWidth>
              Full Width Outlined
            </Button>
          </div>
        </section>

        {/* Icon Buttons */}
        <section>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Icon Buttons
          </h2>
          
          {/* PlusIcon Demo */}
          <div className="mb-6 p-4 rounded-lg" style={{ background: "var(--surface-neutral-default)" }}>
            <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
              Using PlusIcon from Figma
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <IconButton variant="branded" icon={<PlusIcon color="white" />} title="Add (Branded)" />
              <IconButton variant="neutral" icon={<PlusIcon />} title="Add (Neutral)" />
              <IconButton variant="outlined" icon={<PlusIcon />} title="Add (Outlined)" />
              <IconButton variant="ghost" icon={<PlusIcon />} title="Add (Ghost)" />
            </div>
          </div>
          
          {/* Default size (md - 44px) */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
              Medium (44×44px) - Default
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <IconButton variant="branded" icon={<InfoIcon color="white" />} title="Branded Icon" />
              <IconButton variant="neutral" icon={<InfoIcon />} title="Neutral Icon" />
              <IconButton variant="outlined" icon={<InfoIcon />} title="Outlined Icon" />
              <IconButton variant="ghost" icon={<InfoIcon />} title="Ghost Icon" />
              <IconButton variant="ghost" icon={<InfoIcon />} disabled title="Disabled Icon" />
            </div>
          </div>

          {/* Small size (32px) */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
              Small (32×32px)
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <IconButton size="sm" variant="branded" icon={<InfoIcon color="white" />} title="Small Branded" />
              <IconButton size="sm" variant="neutral" icon={<InfoIcon />} title="Small Neutral" />
              <IconButton size="sm" variant="outlined" icon={<InfoIcon />} title="Small Outlined" />
              <IconButton size="sm" variant="ghost" icon={<InfoIcon />} title="Small Ghost" />
            </div>
          </div>

          {/* Large size (56px) */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
              Large (56×56px)
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <IconButton size="lg" variant="branded" icon={<InfoIcon color="white" />} title="Large Branded" />
              <IconButton size="lg" variant="neutral" icon={<InfoIcon />} title="Large Neutral" />
              <IconButton size="lg" variant="outlined" icon={<InfoIcon />} title="Large Outlined" />
              <IconButton size="lg" variant="ghost" icon={<InfoIcon />} title="Large Ghost" />
            </div>
          </div>
        </section>

        {/* Link Buttons */}
        <section>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Link Buttons (Styled as Links)
          </h2>
          
          {/* Neutral LinkButton */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
              Neutral (Grey)
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <LinkButton variant="neutral">
                En savoir plus
              </LinkButton>
              <LinkButton variant="neutral" iconLeft={Info}>
                Avec icône gauche
              </LinkButton>
              <LinkButton variant="neutral" iconRight={ExternalLink}>
                Lien externe
              </LinkButton>
              <LinkButton variant="neutral" disabled>
                Disabled Link
              </LinkButton>
            </div>
          </div>

          {/* Branded LinkButton */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
              Branded (Purple)
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <LinkButton variant="branded">
                Découvrir
              </LinkButton>
              <LinkButton variant="branded" iconLeft={Info}>
                Plus d'infos
              </LinkButton>
              <LinkButton variant="branded" iconRight={ExternalLink}>
                Visiter le site
              </LinkButton>
              <LinkButton variant="branded" disabled>
                Disabled Branded
              </LinkButton>
            </div>
          </div>
        </section>

        {/* Multi-Label Buttons (Segmented Control) */}
        <section>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Multi-Label Buttons (Segmented Control)
          </h2>
          
          {/* 3 options */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
              3 Options
            </h3>
            <ButtonMultiLabelControlled
              options={["Option 1", "Option 2", "Option 3"]}
              defaultValue="Option 1"
            />
          </div>

          {/* 2 options */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
              2 Options (Toggle)
            </h3>
            <ButtonMultiLabelControlled
              options={["Oui", "Non"]}
              defaultValue="Oui"
            />
          </div>

          {/* 4 options */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
              4 Options - Période
            </h3>
            <ButtonMultiLabelControlled
              options={["Jour", "Semaine", "Mois", "Année"]}
              defaultValue="Semaine"
            />
          </div>

          {/* 5 options */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
              5 Options - Filtres
            </h3>
            <ButtonMultiLabelControlled
              options={["Tous", "Clients", "Biens", "Deals", "Tâches"]}
              defaultValue="Tous"
            />
          </div>

          {/* Full width */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
              Full Width
            </h3>
            <ButtonMultiLabelControlled
              options={["Liste", "Grille", "Tableau"]}
              defaultValue="Liste"
              fullWidth
            />
          </div>
        </section>

        {/* Interactive Demo */}
        <section>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Interactive Demo
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button
              variant="branded"
              iconLeft={<InfoIcon color="white" />}
              onClick={() => alert("Branded clicked!")}
            >
              Click Me
            </Button>
            <Button
              variant="outlined"
              onClick={() => alert("Outlined clicked!")}
            >
              Click Me
            </Button>
            <Button
              variant="ghost"
              iconRight={<InfoIcon />}
              onClick={() => alert("Ghost clicked!")}
            >
              Click Me
            </Button>
          </div>
        </section>

        {/* Focus Ring Demo */}
        <section className="border-2 border-dashed p-6 rounded-lg" style={{ borderColor: "var(--border-neutral-action)" }}>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--text-body)" }}>
            Focus Ring (Keyboard Navigation)
          </h2>
          <p className="mb-4 text-base" style={{ color: "var(--text-secondary)" }}>
            Press <kbd className="px-2 py-1 rounded bg-gray-200">Tab</kbd> to navigate through these buttons and see the focus ring appear.
            The focus ring is a 2px border positioned 4px outside the button (Figma spec).
          </p>
          
          {/* Button (normal) Focus Ring */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
              Button (with text)
            </h3>
            <div className="flex flex-wrap gap-6 items-center">
              <Button variant="branded" iconLeft={<PlusIcon color="white" />}>
                Branded Button
              </Button>
              <Button variant="outlined">
                Outlined Button
              </Button>
              <Button variant="ghost" iconRight={<PlusIcon />}>
                Ghost Button
              </Button>
            </div>
          </div>

          {/* IconButton Focus Ring */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
              IconButton (icon only)
            </h3>
            <div className="flex flex-wrap gap-6 items-center">
              <IconButton variant="branded" icon={<PlusIcon color="white" />} title="Branded with focus ring" />
              <IconButton variant="outlined" icon={<PlusIcon />} title="Outlined with focus ring" />
              <IconButton variant="ghost" icon={<PlusIcon />} title="Ghost with focus ring" />
              <IconButton size="lg" variant="branded" icon={<PlusIcon color="white" />} title="Large with focus ring" />
            </div>
          </div>

          <div className="mt-4 p-3 rounded" style={{ background: "var(--surface-neutral-default)" }}>
            <p className="text-sm font-medium mb-2" style={{ color: "var(--text-body)" }}>Focus Ring Colors:</p>
            <ul className="text-sm space-y-1" style={{ color: "var(--text-secondary)" }}>
              <li>• <strong>Branded</strong>: #635cc7 (branded hover)</li>
              <li>• <strong>Neutral/Outlined/Ghost</strong>: #333740 (dark text)</li>
              <li>• <strong>Disabled</strong>: No focus ring</li>
            </ul>
          </div>
        </section>

        {/* Color Reference */}
        <section className="border-t pt-8" style={{ borderColor: "var(--border-neutral-container)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Design Tokens Used
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-default)" }}>
              <div className="text-sm font-semibold mb-1">Branded Background</div>
              <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                #7b72f9 (purple-500)
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-default)" }}>
              <div className="text-sm font-semibold mb-1">Neutral Background</div>
              <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                #ffffff (white)
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-default)" }}>
              <div className="text-sm font-semibold mb-1">Disabled Background</div>
              <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                #ecedee (grey-100)
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-default)" }}>
              <div className="text-sm font-semibold mb-1">Text Body</div>
              <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                #444955 (grey-600)
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-default)" }}>
              <div className="text-sm font-semibold mb-1">Text on Branded</div>
              <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                #ffffff (white)
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-default)" }}>
              <div className="text-sm font-semibold mb-1">Border Radius</div>
              <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                16px (radius-scale400)
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}