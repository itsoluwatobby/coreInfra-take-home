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
  return (
    <div className='h-[20rem]'>
      <ResponsiveContainer width={'100%'}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <XAxis dataKey="name" tickLine={false} tickMargin={5} width={20} />
          <YAxis dataKey="income" tickLine={false} axisLine={false} />
          <CartesianGrid strokeDasharray="3 0" vertical={false} />
          <Tooltip />
          <Area type="bumpX" dataKey="income" stroke="#4DAF01" fillOpacity={10} fill="url(#colorIncome)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}