import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TotalContextProps {
  total: number;
  setTotal: (total: number) => void;
}

const TotalContext = createContext<TotalContextProps | undefined>(undefined);

export const TotalProvider = ({ children }: { children: ReactNode }) => {
  const [total, setTotal] = useState(0);

  return (
    <TotalContext.Provider value={{ total, setTotal }}>
      {children}
    </TotalContext.Provider>
  );
};

export const useTotal = () => {
  const context = useContext(TotalContext);
  if (!context) {
    throw new Error('useTotal must be used within a TotalProvider');
  }
  return context;
};
