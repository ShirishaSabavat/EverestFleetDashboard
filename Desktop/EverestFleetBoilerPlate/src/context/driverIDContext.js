/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useContext } from 'react';

// initial default value
const DriverContext = createContext({
  enterValue: 7724,
});

const DriverProvider = ({ children }) => {
  const [driverID, setDriverID] = useState({
    enterValue: 7724,
  });

  return (
    <DriverContext.Provider value={{ driverID, setDriverID }}>
      {children}
    </DriverContext.Provider>
  );
};

export const useDriverContext = () => useContext(DriverContext);
export default DriverProvider;
