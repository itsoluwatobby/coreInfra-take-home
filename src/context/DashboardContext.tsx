/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState, ReactNode } from 'react';

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

const DashboardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [appName, setAppName] = useState()
 
  const value = {

  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export {
  DashboardContext,
  DashboardProvider,
};