import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-grow bg-gradient-to-b from-[#f7f9fd] to-white">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;