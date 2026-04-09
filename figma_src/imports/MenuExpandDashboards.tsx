function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative">{children}</div>
      </div>
    </div>
  );
}

function MenuExpandDashboardsBodyMdLight({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <p className="font-['roboto:SemiBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{children}</p>
    </Wrapper>
  );
}
type MenuExpandDashboardsBodyMdLightTextProps = {
  text: string;
};

function MenuExpandDashboardsBodyMdLightText({ text }: MenuExpandDashboardsBodyMdLightTextProps) {
  return (
    <Wrapper>
      <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}

export default function MenuExpandDashboards() {
  return (
    <div className="bg-white relative size-full" data-name="menu_expand_dashboards">
      <div className="content-stretch flex flex-col gap-[30px] items-start pl-[20px] pt-[50px] relative size-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <MenuExpandDashboardsBodyMdLightText text="Tous les dashboards" />
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
          <MenuExpandDashboardsBodyMdLightText text="Clients . Qualification" />
          <MenuExpandDashboardsBodyMdLightText text="Clients . Engagement" />
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
          <MenuExpandDashboardsBodyMdLightText text="Biens . Qualification" />
          <MenuExpandDashboardsBodyMdLightText text="Biens . Carnets" />
          <MenuExpandDashboardsBodyMdLightText text="Biens . Annonces" />
          <MenuExpandDashboardsBodyMdLightText text="Biens . Visites" />
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
          <MenuExpandDashboardsBodyMdLightText text="Affaires . Rendez-vous" />
          <MenuExpandDashboardsBodyMdLight>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Affaires
            </span>
            <span className="leading-[20px]">{` . Mandats de vente`}</span>
          </MenuExpandDashboardsBodyMdLight>
          <MenuExpandDashboardsBodyMdLight>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Affaires
            </span>
            <span className="leading-[20px]">{` . Mandats de gestion`}</span>
          </MenuExpandDashboardsBodyMdLight>
          <MenuExpandDashboardsBodyMdLight>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Affaires
            </span>
            <span className="leading-[20px]">{` . Promesses`}</span>
          </MenuExpandDashboardsBodyMdLight>
          <MenuExpandDashboardsBodyMdLight>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Affaires
            </span>
            <span className="leading-[20px]">{` . Transactions`}</span>
          </MenuExpandDashboardsBodyMdLight>
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
          <MenuExpandDashboardsBodyMdLightText text="Gestion . Rendez-vous" />
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
            <MenuExpandDashboardsBodyMdLightText text="Gestion . Visites" />
            <div className="h-[24px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
              <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex h-full items-center px-[8px] py-[4px] relative">
                  <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#444955] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">NEW</p>
                </div>
              </div>
            </div>
          </div>
          <MenuExpandDashboardsBodyMdLightText text="Gestion . Signatures" />
          <MenuExpandDashboardsBodyMdLightText text="Gestion . Baux" />
        </div>
      </div>
    </div>
  );
}