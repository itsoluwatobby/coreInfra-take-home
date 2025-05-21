import { SideBarTabs } from "../../data"
import { AppLogo, CardInfraLogo } from "../svgs/Index"
import TabButton from "../TabButton"

export default function Sidebar() {
  return (
    <aside className="hideScrollbar sticky top-0 md:w-[14.375rem] sm:w-[13rem] flex-none max-xxs:w-16 p-2 py-8 max-xxs:h-full h-screen border-r border-r-[#DEDEDF] flex flex-col gap-28 overflow-y-scroll">

      <div className="flex flex-col gap-y-6">
    
        <AppLogo className="w-[8.64rem] h-[3rem] max-sm:hidden" />

        <div className="flex flex-col gap-3 transition-all duration-300">
          
          <TabButton name="Dashboard" classes="text-[#014DAF] border border-[#E2E2E2] bg-[#F6F6F6]" textClasses="max-sm:hidden" />
          
          <span className="text-[9px] text-[#7E8B9C] ml-2">MAIN MENU</span>
          <ul className="list-none flex flex-col gap-3">
            {
              SideBarTabs.map((tab, index) => (
                <li key={index}>
                  <TabButton name={tab} className="" textClasses="max-sm:hidden text-[#000000] opacity-50" />
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <TabButton name="Logout" className="stroke-[#000000]" classes="text-[#000000]" textClasses="max-sm:hidden" />

        <div className="max-sm:hidden px-3 flex flex-col gap-2">
          <span className="text-[#808080] text-[9px]">POWERED BY</span>
          <CardInfraLogo className="h-[2.589rem] w-[5.833rem]" />
        </div>
      </div>
    </aside>
  )
}