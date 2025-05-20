import { Cell, Pie, PieChart } from 'recharts';

export default function PieChartDiagram() {

  const CardDistributionData = [
    { type: 'Expired', fill: '#FFBA24', value: 5250 },
    { type: 'Active', fill: '#01A4AF', value: 16900 },
    { type: 'Lost', fill: '#014DAF', value: 1050 },
    { type: 'Blocked', fill: '#8020E7', value: 750 },
    { type: 'Inactive', fill: '#FF4457', value: 650 },
  ];

  const CardStatusData = [
    { type: 'Active', fill: 'bg-[#01A4AF]' },
    { type: 'Expired', fill: 'bg-[#FFBA24]' },
    { type: 'Inactive', fill: 'bg-[#FF4457]' },
    { type: 'Blocked', fill: 'bg-[#8020E7]' },
    { type: 'Lost', fill: 'bg-[#014DAF]' },
  ];

  return (
    <div className='flex flex-col relative justify-center items-center'>
      <PieChart width={280} margin={{ top: -120, left: 40 }} height={180}>
        <Pie
          data={CardDistributionData}
          cx={120}
          cy={200}
          innerRadius={72}
          outerRadius={81}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {CardDistributionData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>

      <div className='absolute flex flex-col items-center left-[47%] top-14'>
        <span className='text-[#808080] text-xs'>Total Cards</span>
        <span className='text-[#121212] text-2xl font-medium'>2,450</span>
      </div>

      <div className='flex items-center gap-4'>
        {
          CardStatusData.map((status) => (
            <div
            key={status.fill}
            className='flex cursor-default items-center gap-1'
            >
              <span className={`${status.fill} w-2 h-2 rounded-full`}></span>
              <span className='text-[#808080] text-xs'>{status.type}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}