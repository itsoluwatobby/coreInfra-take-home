import React from 'react';
import Layout from '../components/layout/Layout';
import {
  AnalyticCard,
  CardStatusDistribution,
  MonthlyIssuance,
  QuickAccess,
  RecentCardRequests,
  UserInfo,
  WeeklyIncome,
} from '../components/dashboard';
import { helper } from '../utils/helper';

const DashboardPage: React.FC = () => {

  return (
    <Layout>
      <section className="w-full h-full flex flex-col px-5 p-1 pb-10 gap-3 overflow-y-scroll">
        
        <div className='flex items-center flex-wrap max-xs:gap-4 justify-between'>
          <UserInfo lastLogin={helper.formatTime(new Date().toISOString())} />
        </div>

        <QuickAccess />

        <AnalyticCard />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 transition-all duration-300'>
          <MonthlyIssuance />
          
          <RecentCardRequests />
          
          <WeeklyIncome />

          <CardStatusDistribution />
        </div>

      </section>
    </Layout>
  );
};

export default DashboardPage;