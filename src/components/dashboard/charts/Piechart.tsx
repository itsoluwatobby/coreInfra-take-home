import { Cell, Pie, PieChart } from 'recharts';

export default function PieChartDiagram() {

  const AccountInformation = [
    { color: 'bg-red-600', type: 'Active', fill: 'rgba(250,5,15,0.7)', value: 400 },
    { color: 'bg-green-400', type: 'Expired', fill: 'rgba(170,225,15,0.3)', value: 350 },
    { color: 'bg-green-400', type: 'Inactive', fill: 'rgba(170,225,15,0.3)', value: 350 },
    { color: 'bg-orange-300', type: 'Blocked', fill: 'rgba(250,155,5,0.5)', value: 150 },
    { color: 'bg-orange-300', type: 'Lost', fill: 'rgba(250,155,5,0.5)', value: 150 },
  ];

  return (
    <div>
      <PieChart width={150} margin={{ top: -140, left: -40 }} height={120}>
        <Pie
          data={AccountInformation}
          cx={120}
          cy={200}
          innerRadius={32}
          outerRadius={40}
          fill="#8884d8"
          paddingAngle={10}
          dataKey="value"
        >
          {AccountInformation.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </div>
  )
}