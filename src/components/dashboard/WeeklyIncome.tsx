import AreaChartDiagram from "./charts/AreaChart";


export default function WeeklyIncome() {

  return (
    <div className="flex flex-col gap-4 border border-[#E2E2E2] bg-white rounded-lg p-3 shadow-sm">
      <h4 className="text-lg text-[#121212] font-medium">The Week's Income</h4>

      <AreaChartDiagram />
    </div>
  )
}