import { Suspense, lazy } from 'react';
import ComponentLoading from '../Loading';

const LazyLoadBarChartDiagram = lazy(() => import('./charts/Barchart'));

export default function MonthlyIssuance() {
  
  return (
    <div className="flex flex-col gap-4 border border-[#E2E2E2] bg-white rounded-lg p-3 shadow-sm">
      <h4 className="text-lg text-[#121212] font-medium">Monthly Issuance</h4>

      <Suspense 
      fallback={<ComponentLoading />}>
        <LazyLoadBarChartDiagram />
      </Suspense>
    </div>
  )
}