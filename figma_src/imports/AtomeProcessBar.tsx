export default function AtomeProcessBar() {
  return (
    <div className="bg-[#ecedee] relative rounded-[16px] size-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center relative size-full">
          <div className={`bg-[#0da500] h-[20px] rounded-[20px] shrink-0 ${"20%" === "100%" ? "w-full" : "20%" === "80%" ? "w-[869px]" : "20%" === "60%" ? "w-[657px]" : "20%" === "40%" ? "w-[423px]" : "w-[214px]"}`} />
        </div>
      </div>
    </div>
  );
}