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
import SVGIcon from '../components/svgs/Index';

const DashboardPage: React.FC = () => {

  return (
    <Layout>
      <section className="w-full h-full flex flex-col px-5 p-1 pb10 gap-3">

        <div className='relative flex items-center flex-wrap gap-y-2 max-md:h-20 max-md:items-start w-full justify-between'>
          <UserInfo
            name='Oluwatobi'
            lastLogin={helper.formatTime(new Date().toISOString())}
          />

          <div className='ml8 max-md:absolute right-2 bottom-0 border border-[#D0D5DD] text-xs rounded-md p-2 flex gap-2 items-center'>
            <div className='flex items-center gap-1'>
              <SVGIcon type="Calendar" />
              <span className='text-[#121212]'>Today</span>
            </div>

            <div className='h-4 w-[1px] bg-[#D0D5DD]' />

            <span>{helper.formatDate(new Date())}</span>
          </div>
        </div>

        <QuickAccess />

        <AnalyticCard />

        {/* <div className='flex itemss-center flex-wrap gap-4 transition-all duration-300'> */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 transition-all duration-300'>
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