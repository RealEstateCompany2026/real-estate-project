import imgPropriete1DefaultLight from "figma:asset/ae63bbca1a8511d4e4bf069f0d6e0eabea84b9c1.png";
import imgPropriete1DefaultDark from "figma:asset/745eb8075f4b0dbca29e929762ec0e878857f203.png";

export default function ButtonNavAccount() {
  return (
    <div className="relative rounded-[28px] size-full">
      {["default light", "default dark"].includes("default light") && <img alt="" className="absolute block max-w-none size-full" height="54" src={"default light" === "default dark" ? imgPropriete1DefaultDark : imgPropriete1DefaultLight} width="54" />}
      {["selected light", "selected dark"].includes("default light") && (
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
          <circle cx="27" cy="27" fill="var(--fill-0, #635CC7)" id="Ellipse 3" r="25" stroke="var(--stroke-0, #4A4595)" strokeWidth="4" />
        </svg>
      )}
    </div>
  );
}