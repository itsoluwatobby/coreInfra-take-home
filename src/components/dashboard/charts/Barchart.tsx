import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function BarchartDiagram() {


  const data = [
    {
      name: 'May',
      Instant: 55,
      Personalized: 10,
      amt: 2400,
    },
    {
      name: 'Jun',
      Instant: 70,
      Personalized: 20,
      amt: 2210,
    },
    {
      name: 'Jul',
      Instant: 30,
      Personalized: 5,
      amt: 2290,
    },
    {
      name: 'Aug',
      Instant: 60,
      Personalized: 10,
      amt: 2000,
    },
    {
      name: 'Sept',
      Instant: 60,
      Personalized: 8,
      amt: 2181,
    },
    {
      name: 'Oct',
      Instant: 50,
      Personalized: 10,
      amt: 2500,
    },
    {
      name: 'Nov',
      Instant: 75,
      Personalized: 20,
      amt: 2100,
    },
    {
      name: 'Dec',
      Instant: 70,
      Personalized: 10,
      amt: 2100,
    },
  ];

  const IssuanceLegend = [
    { name: 'Personalized', fill: 'bg-[#014DAF]' },
    { name: 'Instant', fill: 'bg-[#CCE2FF]' },
  ]

  return (
    <div className='h-[21rem] flex flex-col gap-1'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          // barGap={20}
          margin={{
            top: 10,
            right: 0,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 0" vertical={false} stroke='#F2F4F7' />
          <XAxis dataKey="name" tickLine={false} stroke='#FF' fontSize={13} color='red' />
          <YAxis tickLine={false} axisLine={false} fontSize={13} />
          <Tooltip />
          <Bar dataKey="Personalized" radius={[0, 0, 0, 0]} stackId="a" fill="#014DAF" />
          <Bar dataKey="Instant" radius={[10, 10, 0, 0]} stackId="a" fill="#CCE2FF" />
        </BarChart>
      </ResponsiveContainer>

      <div className='h-[1px] w-full bg-[#E2E2E2]' />

      <div className='self-center flex items-center gap-4'>
        {
          IssuanceLegend.map((issuance) => (
            <div
              key={issuance.fill}
              className='flex cursor-default items-center gap-1'
            >
              <span className={`${issuance.fill} w-2 h-2 rounded-full`}></span>
              <span className='text-[#808080] text-xs'>{issuance.name}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}