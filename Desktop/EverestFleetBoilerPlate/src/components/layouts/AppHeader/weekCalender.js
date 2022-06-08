import React from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { useCalenderContext } from 'context/calenderContext';
import { useDayCalenderContext } from 'context/dayCalenderContext';

const WeekCalender = () => {
  const {
    calenderDate,
    setCalenderDate, setOnChangeWeekDate,
  } = useCalenderContext();
  const { setDayCalenderDate } = useDayCalenderContext();

  const weekFormat = 'DD/MM/YYYY';

  const customWeekStartEndFormat = (value) => `${moment(value).startOf('isoweek').format(weekFormat)}  -  ${moment(value)
    .endOf('isoweek')
    .format(weekFormat)}`;
  const onChangeDate = (date) => {
    setOnChangeWeekDate(true);
    const startOfWeek = moment(date).startOf('isoweek').format('YYYY-MM-DD');
    const endOfWeek = moment(date).endOf('isoweek').format('YYYY-MM-DD');
    const dayDate = moment(date).format('YYYY-MM-DD');
    setCalenderDate({ startOfWeek, endOfWeek });
    setDayCalenderDate({ day: dayDate });
  };
  return (
    <div style={{ marginTop: '-8px', marginBottom: '-15px' }}>
      <Space style={{ width: '210px' }} direction="vertical" size={12}>
        <DatePicker
          disabledDate={(current) => current > moment()}
          format={customWeekStartEndFormat}
          onChange={onChangeDate}
          defaultValue={moment(`${moment(calenderDate.startOfWeek).startOf('isoweek').format(weekFormat)}`, 'DD/MM/YYYY')}
          picker="week"
        />
      </Space>
    </div>
  );
};
export default WeekCalender;
