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
  const tableClass = 'p-4 max-md:px-2 text-center text-xs';

  return (
    <div className="flex flex-col gap-4 border border-[#E2E2E2] bg-white rounded-lg p-3 shadow-sm">
      <h4 className="text-lg text-[#121212] font-medium">Recent Card Requests</h4>

      <table className="border-collapse border border-x-0 broder-[#E2E2E2]">
        <thead>
          <tr className="bg-[#F1F7FF] border border-[#E2E2E2]">
            {
              TableHeader.map((header) => (
                <th key={header}
                className="text-opacity-[56.08%] p-4 max-md:px-2 font-medium text-[13px]"
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
                className="border border-x-0 broder-[#E2E2E2]"
                >
                  <td className={tableClass}>{body.branch}</td>
                  <td className={tableClass}>{body.cardType}</td>
                  <td className={tableClass}>{body.quantity}</td>
                  <td className={tableClass}>
                    <span className={`p-2 px-3 rounded-3xl border ${StatusColor[body.status].border} ${StatusColor[body.status].bg} ${StatusColor[body.status].text}`}>
                      {body.status}
                    </span>
                  </td>
                  <td className='p-4 cursor-pointer text-[#014DAF] text-xs'>View</td>
                </tr>
              ))
            }
        </tbody>
      </table>

    </div>
  )
}