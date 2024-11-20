import React, { createContext, useState, ReactNode, useContext } from 'react';

interface PriceContextType {
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

const PriceContext = createContext<PriceContextType | undefined>(undefined);

interface PriceProviderProps {
  children: ReactNode;
}

export const PriceProvider: React.FC<PriceProviderProps> = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  return (
    <PriceContext.Provider value={{ totalPrice, setTotalPrice }}>
      {children}
    </PriceContext.Provider>
  );
};

export const usePrice = (): PriceContextType => {
  const context = useContext(PriceContext);
  if (!context) {
    throw new Error('usePrice must be used within a PriceProvider');
  }
  return context;
};