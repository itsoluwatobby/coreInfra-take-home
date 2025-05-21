import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { } from 'react';

export default function BarchartDiagram() {


  const data = [
    {
      name: 'May',
      instant: 50,
      personalized: 10,
      amt: 2400,
    },
    {
      name: 'Jun',
      instant: 70,
      personalized: 20,
      amt: 2210,
    },
    {
      name: 'Jul',
      instant: 30,
      personalized: 5,
      amt: 2290,
    },
    {
      name: 'Aug',
      instant: 60,
      personalized: 10,
      amt: 2000,
    },
    {
      name: 'Sep',
      instant: 60,
      personalized: 8,
      amt: 2181,
    },
    {
      name: 'Oct',
      instant: 40,
      personalized: 10,
      amt: 2500,
    },
    {
      name: 'Nov',
      instant: 80,
      personalized: 20,
      amt: 2100,
    },
    {
      name: 'Dec',
      instant: 80,
      personalized: 10,
      amt: 2100,
    },
  ];

  const IssuanceLegend = [
    { name: 'Personalized', fill: 'bg-[#014DAF]' },
    { name: 'Instant', fill: 'bg-[#CCE2FF]' },
  ]

  const instantMaxValue = Math.max(...data.map(d => d.instant));
  const personalizedMaxValue = Math.max(...data.map(d => d.personalized));
  
  const maxValue = Math.max(instantMaxValue, personalizedMaxValue);
  const tickMax = Math.ceil(maxValue / 20) * 20 + 20;
  const ticks = Array.from({ length: tickMax / 20 + 1 }, (_, i) => i * 20).filter((v) => v <= 100);

  return (
    <div className='h-fit flex flex-col gap-2'>
      <ResponsiveContainer width="100%" height={203.37}>
        <BarChart
          width={500}
          height={300}
          data={data}
          barCategoryGap={'20%'}
          margin={{
            top: 10,
            right: 0,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 0" vertical={false} stroke='#F2F4F7' />
          <XAxis 
          dataKey="name" 
          tickLine={false} 
          stroke='#FF' 
          fontSize={11.76}
          fontWeight={400} 
          tick={{ fill: '#667085' }}
          className='text-[#667085]'
          />
          <YAxis 
          tickLine={false} 
          axisLine={false} 
          ticks={ticks}
          tick={{ fill: '#667085' }}
          fontSize={11.76} 
          />
          <Tooltip cursor={false} />
          <Bar 
          dataKey="personalized" 
          radius={[0, 0, 0, 0]} 
          stackId="a" 
          fill="#014DAF" 
          />
          <Bar 
          dataKey="instant" 
          radius={[10, 10, 0, 0]} 
          stackId="a" 
          fill="#CCE2FF" 
          />
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