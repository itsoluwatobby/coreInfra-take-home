import { CURRENCY } from "../../utils/constants";
import { helper } from "../../utils/helper";
import CardSVGs, { IconType } from "../svgs/cardSvgs";

type AnalyticDataType = {
  IconName: IconType,
  name: string,
  type: 'number' | 'currency',
  text: string,
  status: 'warning' | 'info'
  count?: number,
  percent?: string;
}

export default function AnalyticCard() {

  const AnalyticsData: AnalyticDataType[] = [
    {
      IconName: 'Active',
      name: 'Total Active Cards',
      count: 26478,
      status: 'info',
      text: 'this month',
      type: 'number',
      percent: '+9%',
    },
    {
      IconName: 'Total Personalized',
      name: 'Total Personalized Cards',
      count: 15703,
      status: 'info',
      text: 'this month',
      type: 'number',
      percent: '8.5%',
    },
    {
      IconName: 'Revenue',
      name: 'Today\'s Revenue',
      count: 9300000,
      status: 'info',
      type: 'currency',
      text: 'vs yesterday',
      percent: '+6%',
    },
    {
      IconName: 'Pending',
      name: 'Pending Requests',
      count: 38,
      type: 'number',
      text: 'Requires attention',
      status: 'warning',
    }
  ];

  return (
    <div className="flex flex-col gap-2.5 w-full">

      <div className="flex items-center w-full gap-2">
        <span className="font-bold text-lg">Analytics</span>
        <div className="h-[1px] w-full bg-[#D0D5DD]" />
      </div>
 
      <div className="grid grid-cols-1 md:grid-cols-2 transition-all duration-300 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
        {
          AnalyticsData.map((item, index) => (
            <div key={index} className="flex flex-col gap-2.5 cursor-pointer rounded-lg shadow-sm transition-all duration-300 p-3 px-2 w-full hover:bg-[#F6F6F6] bg-[#FFFFFF] border border-[#E2E2E2]">

              <div className='flex flex-col gap-1'>
                <CardSVGs type={item.IconName} className='h-6 w-6 flex-none' />
                <span className='text-sm whitespace-nowrap opacity-60'>{item.name}</span>
              </div>
              
              <div className="flex items-center w-full justify-between">
                <span className="font-bold text-2xl">{item.type === 'number' ? helper.formatNumber(item.count, 0) : `${CURRENCY.NAIRA}${helper.checkCount(item.count)}`}</span>

                <div className="flex gap-2 items-center">
                  {
                    item.status === 'warning' ?
                    <CardSVGs type="Caution" className="" /> 
                    :
                    <div className="rounded-lg flex items-center gap-1 text-xs px-1.5 py-1 text-[#29A174] bg-[#EFFAF6]">
                      <CardSVGs type="ArrowUp" /> 
                      <span>{item.percent}</span>
                    </div>
                  }
                  <span className={`text-xs opacity-75 ${item.status === 'warning' ? 'text-[#E78020]' : ''}`}>{item.text}</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}