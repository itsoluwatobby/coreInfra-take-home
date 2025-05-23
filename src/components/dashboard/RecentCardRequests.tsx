import { StatusColor } from "../../data";

export default function RecentCardRequests() {
  const data: CardStatusProps[] = [
    {
      branch: 'Corporate',
      cardType: 'Instant',
      quantity: 10,
      status: 'Ready',
    },
    {
      branch: 'Corporate',
      cardType: 'Personalized',
      quantity: 10,
      status: 'In Progress',
    },
    {
      branch: 'Corporate',
      cardType: 'Personalized',
      quantity: 10,
      status: 'Acknowledged',
    },
    {
      branch: 'Corporate',
      cardType: 'Instant',
      quantity: 10,
      status: 'Pending',
    },
  ]

  const TableHeader = ['Branch', 'Card Type', 'Quantity', 'Status', 'Action'];
  const tableClass = 'p-4 pt-3 pb-2 lg:px-1 max-lg:px-1 max-sm:px-2 text-center text-[11px]';

  return (
    <div className="flex flex-col gap-4 border border-[#E2E2E2] bg-white rounded-lg p-3 shadow-sm h-fit">
      <h4 className="text-lg text-[#121212] font-medium">Recent Card Requests</h4>

      <table className="border-collapse border border-b-0 border-x-0 broder-[#E2E2E2]">
        <thead>
          <tr className="bg-[#F1F7FF] border border-[#E2E2E2]">
            {
              TableHeader.map((header) => (
                <th key={header}
                className="text-opacity-[56.08%] p-4 py-3 lg:px-1 max-lg:px-1 max-sm:px-2 font-medium text-[12px]"
                >
                  {header}
                </th>
              ))
            }
          </tr>
        </thead>

        <tbody>
            {
              data.map((body, index) => (
                <tr
                key={index}
                className="border hover:scale-[1.005] transition-all duration-300 border-x-0 last:border-b-0 border-[#E2E2E2]"
                >
                  <td className={tableClass}>{body.branch}</td>
                  <td className={tableClass}>{body.cardType}</td>
                  <td className={tableClass}>{body.quantity}</td>
                  <td className={tableClass}>
                    <span className={`p-2 py-1 px-3 rounded-3xl border ${StatusColor[body.status].border} ${StatusColor[body.status].bg} ${StatusColor[body.status].text}`}>
                      {body.status}
                    </span>
                  </td>
                  <td className='p-4 hover:scale-[1.05] active:scale-[1] cursor-pointer text-[#014DAF] text-[11px] text-center'>View</td>
                </tr>
              ))
            }
        </tbody>
      </table>

    </div>
  )
}