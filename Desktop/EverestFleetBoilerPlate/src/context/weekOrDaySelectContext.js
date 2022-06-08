/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useContext } from 'react';

// initial default value
const WeekOrDaySelectContext = createContext({
  selected: 'WEEK',
  calenders: ['Car Management', 'Performance Report'],
});

const WeekOrDaySelectProvider = ({ children }) => {
  const [weekOrDaySelect, setWeekOrDaySelect] = useState({
    selected: 'WEEK',
  });

  return (
    <WeekOrDaySelectContext.Provider value={{ weekOrDaySelect, setWeekOrDaySelect }}>
      {children}
    </WeekOrDaySelectContext.Provider>
  );
};

export const useWeekOrDaySelectContext = () => useContext(WeekOrDaySelectContext);
export default WeekOrDaySelectProvider;
