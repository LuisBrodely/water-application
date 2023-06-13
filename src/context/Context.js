import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selected, setSelected] = useState('');
  const [selected2, setSelected2] = useState('');

  return (
    <AppContext.Provider value={{ selected, setSelected, selected2, setSelected2 }}>
      {children}
    </AppContext.Provider>
  );
};
