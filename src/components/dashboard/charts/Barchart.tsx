import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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

  return (
    <div className='h-[20rem]'>
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
          <CartesianGrid strokeDasharray="3 0" vertical={false} />
          <XAxis dataKey="name" tickLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Legend color='#808080' />
          <Bar dataKey="Personalized" radius={[10, 10, 0, 0]} legendType='circle' stackId="a" fill="#014DAF" />
          <Bar dataKey="Instant" radius={[10, 10, 0, 0]} legendType='circle' stackId="a" fill="#CCE2FF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}