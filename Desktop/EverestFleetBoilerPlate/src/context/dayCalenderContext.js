/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useContext } from 'react';
import moment from 'moment';

const DayCalenderContext = createContext({
  day: moment().subtract(1, 'days').format('YYYY-MM-DD'),
});

const DayCalenderProvider = ({ children }) => {
  const [dayCalenderDate, setDayCalenderDate] = useState({
    day: moment().subtract(1, 'days').format('YYYY-MM-DD'),
  });

  return (
    <DayCalenderContext.Provider value={{ dayCalenderDate, setDayCalenderDate }}>
      {children}
    </DayCalenderContext.Provider>
  );
};

export const useDayCalenderContext = () => useContext(DayCalenderContext);
export default DayCalenderProvider;
