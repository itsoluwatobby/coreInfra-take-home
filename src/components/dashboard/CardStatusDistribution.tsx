import PieChart from "./charts/Piechart";

export default function CardStatusDistribution() {

  return (
    <div className="bg-[#FFFFFF] border border-[#E2E2E2] rounded-lg p-3 py-4 flex flex-col gap-y-4">
      <h4>Card Status Distribution</h4>

      <PieChart />
    </div>
  );
}