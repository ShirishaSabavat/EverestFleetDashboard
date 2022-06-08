/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useContext } from 'react';
import moment from 'moment';

// initial default value
const CalenderContext = createContext({
  startOfWeek: moment().startOf('isoweek').format('YYYY-MM-DD'),
  endOfWeek: moment().endOf('isoweek').format('YYYY-MM-DD'),
  onChangeWeekDate: false,
});

const CalenderProvider = ({ children }) => {
  const [onChangeWeekDate, setOnChangeWeekDate] = useState(false);
  const [calenderDate, setCalenderDate] = useState({
    startOfWeek: moment().startOf('isoweek').format('YYYY-MM-DD'),
    endOfWeek: moment().endOf('isoweek').format('YYYY-MM-DD'),
  });
  return (
    <CalenderContext.Provider value={{
      calenderDate, setCalenderDate, onChangeWeekDate, setOnChangeWeekDate,
    }}
    >
      {children}
    </CalenderContext.Provider>
  );
};

export const useCalenderContext = () => useContext(CalenderContext);
export default CalenderProvider;
