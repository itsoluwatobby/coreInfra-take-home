import React from 'react';
import SVGIcon from '../svgs/Index';

const Header: React.FC = () => {

  return (
    <header className="bg-white border-b border-b-[#DEDEDF] w-full sticky top-0 z-50">
      <nav className="w-full flex items-center justify-between max-xxs:gap-5 px-3 py-2">

        <div className='flex items-center mr-1 cursor-default gap-3 text-xs text-[#001735]'>
          <SVGIcon type="Dashboard" className='stroke-[#001735]' />
          <span>Dashboard</span>
        </div>

        <div className='flex items-center max-xxs:gap-3 max-xxs:w-full w-[19.85rem] justify-between'>

          <div className='rounded-2xl w-[13.3rem] border border-gray-300 bg-white flex items-center gap-2 p-2 h-8'>
            <SVGIcon type="Search" className='size-3 flex-none' />
            <input
              type='search'
              placeholder='search'
              className='border-none focus:outline-none focus:ring-0 text-sm h-7 flex-auto bg-white rounded-r-2xl pb-1 text-black placeholder:text-xs'
            />
          </div>

          <div className='flex items-center gap-6'>
            <SVGIcon type="Bell" className='h-5 w-5 flex-none cursor-pointer' />

            <SVGIcon type="Person" className='h-[26px] w-[26px] flex-none cursor-pointer bg-gray-100 rounded-full p-1.5' />
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;