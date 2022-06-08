import React from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { useDayCalenderContext } from 'context/dayCalenderContext';
import { useCalenderContext } from 'context/calenderContext';

const DayCalender = () => {
  const { dayCalenderDate, setDayCalenderDate } = useDayCalenderContext();
  const { setCalenderDate, setOnChangeWeekDate } = useCalenderContext();

  const dateFormat = 'DD/MM/YYYY';

  const onChangeDate = (date) => {
    setOnChangeWeekDate(true);
    const dayDate = moment(date).format('YYYY-MM-DD');
    const startOfWeek = moment(date).startOf('isoweek').format('YYYY-MM-DD');
    const endOfWeek = moment(date).endOf('isoweek').format('YYYY-MM-DD');
    setDayCalenderDate({ day: dayDate });
    setCalenderDate({ startOfWeek, endOfWeek });
  };
  // useEffect(() => {
  //   const startOfWeek = moment().startOf('isoweek').format('YYYY-MM-DD');
  //   const endOfWeek = moment().endOf('isoweek').format('YYYY-MM-DD');
  //   setCalenderDate({ startOfWeek, endOfWeek });
  // }, []);

  return (
    <div style={{ marginTop: '-8px', marginBottom: '-15px' }}>
      <Space style={{ width: '210px' }} direction="vertical" size={12}>
        <DatePicker
          onChange={onChangeDate}
          disabledDate={(current) => current > moment()}
          style={{ backgroundColor: '#9ebccf' }}
          className="w-100"
          defaultValue={moment(`${moment(dayCalenderDate.day).format(dateFormat)}`, 'DD/MM/YYYY')}
          format={dateFormat}
        />
      </Space>
    </div>
  );
};
export default DayCalender;
