import PieChart from "./charts/Piechart";

export default function CardStatusDistribution() {

  return (
    <div className="bg-[#FFFFFF] border border-[#E2E2E2] rounded-lg p-3 py-3 flex flex-col gap-y-4 h-fit">
      <h4 className="text-lg text-[#121212] font-medium">Card Status Distribution</h4>

      <PieChart />
    </div>
  );
}