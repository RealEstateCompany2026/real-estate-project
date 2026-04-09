import svgPaths from "./svg-dq8r9ia6x8";
type AvatarProfileProps = {
  className?: string;
  propDefault?: "light" | "dark";
};

function AvatarProfile({ className, propDefault = "light" }: AvatarProfileProps) {
  const isDark = propDefault === "dark";
  return (
    <div className={className || `h-[75px] relative w-[81px] ${isDark ? "bg-[#111215]" : "bg-white"}`}>
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[11px] py-[22px] relative size-full">
          <div className="h-[30.2px] relative shrink-0 w-[59.351px]" data-name="Group">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.3514 30.2">
              <g id="Group">
                <path d={svgPaths.p13ffd780} fill={isDark ? "var(--fill-0, white)" : "var(--fill-0, #E95D66)"} id="Vector" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AvatarProfile1() {
  return <AvatarProfile className="bg-white relative size-full" />;
}