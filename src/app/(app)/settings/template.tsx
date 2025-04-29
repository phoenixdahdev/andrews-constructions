import Header from '~/components/settings/Header'
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col gap-[24px]">
      <h2 className="font-roboto border-b-gray-medium text-gray-dark -mt-6 border-b-[1px] text-[22px] leading-[95px] font-medium">
        Settings
      </h2>
      <Header />
      <section className="flex h-[100vh] w-full">{children}</section>
    </div>
  )
}
