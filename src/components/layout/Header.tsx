import React from 'react';
import SVGIcon from '../svgs/Index';

const Header: React.FC = () => {

  return (
    <header className="bg-white border-b border-b-[#DEDEDF] w-full sticky top-0 z-50">
      <nav className="w-full flex items-center justify-between px-3 py-2">

        <div className='flex items-center cursor-default gap-3 text-xs text-[#001735]'>
          <SVGIcon type="Dashboard" />
          <span>Dashboard</span>
        </div>

        <div className='flex items-center w-[19.875rem] gap-4'>

          <div className='rounded-2xl border border-gray-300 bg-white flex items-center gap-2 p-2 h-8'>
            <SVGIcon type="Search" className='size-3 flex-none' />
            <input
              type='search'
              placeholder='search'
              className='border-none h-7 flex-auto bg-white rounded-r-2xl pb-1 text-black placeholder:text-xs'
            />
          </div>

          <SVGIcon type="Bell" className='h-5 w-5 flex-none cursor-pointer' />

          <SVGIcon type="Person" className='h-[26px] w-[22.8px] flex-none cursor-pointer bg-gray-100 rounded-full p-1' />

        </div>
      </nav>
    </header>
  );
};

export default Header;