export default function Page() {
  return (
    <div className="flex w-full flex-col gap-[24px]">
      <div className="flex flex-col">
        <h3 className="bg-gray-medium text-gray-dark rounded-t-[12px] px-[16px] text-[18px] leading-[59px] font-medium">
          Default Materials
        </h3>
        <div className="border-gray-medium flex flex-col gap-[16px] rounded-b-[12px] border-[1px] p-[16px]">
          <p className="text-gray-dark leading-[24px] font-medium">
            Set default materials
          </p>
          {/* Select dropdown goes here */}
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="bg-gray-medium text-gray-dark rounded-t-[12px] px-[16px] text-[18px] leading-[59px] font-medium">
          Saved Materials
        </h3>
        <div className="border-gray-medium flex flex-col gap-[16px] rounded-b-[12px] border-[1px] p-[16px]">
          {/* Table goes here */}
        </div>
      </div>
    </div>
  )
}
