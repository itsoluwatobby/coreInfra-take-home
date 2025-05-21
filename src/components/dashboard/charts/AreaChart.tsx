import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
} from 'recharts';

export default function AreaChartDiagram() {

  const data = [
    {
      name: 'Mon',
      income: 56,
      amt: 2400,
    },
    {
      name: 'Tue',
      income: 42,
      amt: 2210,
    },
    {
      name: 'Wed',
      income: 18,
      amt: 2290,
    },
    {
      name: 'Thu',
      income: 59,
      amt: 2000,
    },
    {
      name: 'Fri',
      income: 42,
      amt: 2181,
    },
    {
      name: 'Sat',
      income: 59,
      amt: 2500,
    },
    {
      name: 'Sun',
      income: 81,
      amt: 2100,
    },
  ];

  const maxValue = Math.max(...data.map(d => d.income));
  const tickMax = Math.ceil(maxValue / 20) * 20 + 20;
  const ticks = Array.from({ length: tickMax / 20 + 1 }, (_, i) => i * 20).filter((v) => v <= 100);

  return (
    <div className='h-fit'>
      <ResponsiveContainer width={'100%'} height={203}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <XAxis 
            dataKey="name"
            tickLine={false} 
            tickMargin={5} 
            width={20} 
            stroke='#FF'
            fontSize={11.76}
            fontWeight={400} 
            tick={{ fill: '#667085', fontSize: '11.76px' }} 
            padding={{ left: 20 }}
            />
          <YAxis 
            dataKey="income" 
            ticks={ticks}
            tickLine={false} 
            axisLine={false} 
            fontSize={11.76}
            fontWeight={400}
            tick={{ fill: '#667085', fontSize: '11.76px' }} 
          />
          <CartesianGrid strokeDasharray="3 0" vertical={false} stroke='#F2F4F7' />
          <Tooltip />
          <Area type="bumpX" dataKey="income" stroke="#4DAF01" fillOpacity={10} fill="url(#colorIncome)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}