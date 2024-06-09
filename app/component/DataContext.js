import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);

  return (
    <DataContext.Provider value={{ hotels, setHotels }}>
      {children}
    </DataContext.Provider>
  );
};