import CardSVGs, { IconType } from "../svgs/cardSvgs";

export default function QuickAccess() {

  const QuickAccessData: { IconName: IconType, name: string }[] = [
    {
      IconName: 'Manage',
      name: 'Manage a Card',
    },
    {
      IconName: 'Instant',
      name: 'Issue Instant Card',
    },
    {
      IconName: 'Personalized',
      name: 'Issue Personalized Card',
    },
    {
      IconName: 'Review',
      name: 'Review Card Requests',
    }
  ];

  return (
    <div className="flex flex-col gap-2 border border-[#E2E2E2] bg-white rounded-lg p-2 px-4 shadow-sm w-full">
      <span>Your Quick Access</span>

      <div className="grid grid-cols-1 md:grid-cols-2 transition-all duration-300 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {
          QuickAccessData.map((item, index) => (
            <div key={index} className="flex items-center gap-2.5 cursor-pointer rounded-lg transition-all duration-300 p-3 w-full hover:bg-[#F6F6F6] bg-[#F1F7FF]">
              <CardSVGs type={item.IconName} className='h-7 w-7 flex-none' />
              <span className='text-sm whitespace-nowrap'>{item.name}</span>
              <CardSVGs type="Arrow" />
            </div>
          ))
        }
      </div>
    </div>
  )
}