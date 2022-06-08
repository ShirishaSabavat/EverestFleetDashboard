/* eslint-disable max-len */
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { useCalenderContext } from 'context/calenderContext';
import moment from 'moment';

// eslint-disable-next-line no-unused-vars
const DeepHuntersCompareTable = ({ weeklyCompare, weeklyCompareUberKm }) => {
  const { calenderDate } = useCalenderContext();
  const roundNumber = (num) => Math.round(num * 10) / 10;
  const calculateData = (val1, val2) => roundNumber(Number(val1) / Number(val2));
  const findPercentage = (num) => roundNumber(num * 100);

  const colorValue = (key) => {
    let color;
    if (key >= 2 && key <= 9) {
      color = '#F1FFE1';
    } if (key >= 10 && key <= 12) {
      color = '#FFFEE1';
    } if (key >= 13 && key <= 16) {
      color = '#E1F5FF';
    } if (key >= 17 && key <= 19) {
      color = '#FFEFEF';
    } if (key >= 20 && key <= 27) {
      color = '#F6ECFF';
    } if (key >= 28 && key <= 29) {
      color = '#EFFFFD';
    }
    return color;
  };

  const preWeekArrowFunction = (record) => {
    if (record.preWeek === record.currentWeek) {
      return '';
    } if (Number(record.preWeek) > Number(record.currentWeek)) {
      return <ArrowUpOutlined style={{ color: '#73A235' }} />;
    }
    return <ArrowDownOutlined style={{ color: '#FC2109' }} />;
  };

  const currentWeekArrowFunction = (record) => {
    if (record.preWeek === record.currentWeek) {
      return '';
    } if (Number(record.preWeek) < Number(record.currentWeek)) {
      return <ArrowUpOutlined style={{ color: '#73A235' }} />;
    }
    return <ArrowDownOutlined style={{ color: '#FC2109' }} />;
  };

  const columns = [
    {
      title: 'Metrics',
      dataIndex: 'metrics',
      key: 'metrics',
      align: 'start',
      render(text, record) {
        return {
          props: {
            style: { background: colorValue(record.key) },
          },
          children: <div>{text}</div>,
        };
      },
    },
    {
      title: `Pre. Week (${moment(calenderDate.startOfWeek).startOf('isoweek').subtract(1, 'week').format('D')} - ${moment(calenderDate.endOfWeek).endOf('isoweek').subtract(1, 'week').format('D MMM YYYY')})`,
      dataIndex: 'preWeek',
      key: 'preWeek',
      render: (text, record) => (
        <span>
          {record.preWeek}
          {' '}
          {preWeekArrowFunction(record)}
        </span>
      ),
      align: 'start',
    },
    {
      title: `Current Week (${moment(calenderDate.startOfWeek).startOf('isoweek').format('D')} - ${moment(calenderDate.endOfWeek).endOf('isoweek').format('D MMM YYYY')})`,
      dataIndex: 'currentWeek',
      key: 'currentWeek',
      render: (text, record) => (
        <span>
          {record.currentWeek}
          {' '}
          {currentWeekArrowFunction(record)}
        </span>
      ),
      align: 'start',
    },
    {
      title: 'Difference (current - pre. Week)',
      dataIndex: 'difference',
      key: 'difference',
      render: (text, record) => (
        <span>{(record.currentWeek - record.preWeek)?.toFixed(1)}</span>
      ),
      align: 'start',
    },
  ];

  const data = [
    {
      key: 2,
      metrics: 'Total Cars',
      currentWeek: !weeklyCompare[0]?.total_cars ? 0 : weeklyCompare[0]?.total_cars,
      preWeek: !weeklyCompare[1]?.total_cars ? 0 : weeklyCompare[1]?.total_cars,
    },
    {
      key: 3,
      metrics: 'Active Cars',
      currentWeek: !weeklyCompare[0]?.car_driven ? 0 : weeklyCompare[0]?.car_driven,
      preWeek: !weeklyCompare[1]?.car_driven ? 0 : weeklyCompare[1]?.car_driven,
    },
    {
      key: 4,
      metrics: 'Repair Cars',
      currentWeek: !weeklyCompare[0]?.repair_cars ? 0 : weeklyCompare[0]?.repair_cars,
      preWeek: !weeklyCompare[1]?.repair_cars ? 0 : weeklyCompare[1]?.repair_cars,
    },
    {
      key: 5,
      metrics: 'BD Cars',
      currentWeek: !weeklyCompare[0]?.bd_cars ? 0 : weeklyCompare[0]?.bd_cars,
      preWeek: !weeklyCompare[1]?.bd_cars ? 0 : weeklyCompare[1]?.bd_cars,
    },
    {
      key: 6,
      metrics: 'Insurance Cars',
      currentWeek: !weeklyCompare[0]?.insurance ? 0 : weeklyCompare[0]?.insurance,
      preWeek: !weeklyCompare[1]?.insurance ? 0 : weeklyCompare[1]?.insurance,
    },
    {
      key: 7,
      metrics: 'Rental',
      currentWeek: !weeklyCompare[0]?.rental ? 0 : weeklyCompare[0]?.rental,
      preWeek: !weeklyCompare[1]?.rental ? 0 : weeklyCompare[1]?.rental,
    },
    {
      key: 8,
      metrics: 'B2B Cars',
      currentWeek: !weeklyCompare[0]?.b2b_cars ? 0 : weeklyCompare[0]?.b2b_cars,
      preWeek: !weeklyCompare[1]?.b2b_cars ? 0 : weeklyCompare[1]?.b2b_cars,
    },
    {
      key: 9,
      metrics: 'FP Cars',
      currentWeek: !weeklyCompare[0]?.fb_cars ? 0 : weeklyCompare[0]?.fb_cars,
      preWeek: !weeklyCompare[1]?.fb_cars ? 0 : weeklyCompare[1]?.fb_cars,
    },
    {
      key: 10,
      metrics: 'Target for Cars in Uber',
      currentWeek: !weeklyCompare[0]?.target_car ? 0 : weeklyCompare[0]?.target_car,
      preWeek: !weeklyCompare[1]?.target_car ? 0 : weeklyCompare[1]?.target_car,
    },
    {
      key: 11,
      metrics: 'No of cars in Uber',
      currentWeek: !weeklyCompare[0]?.car_driven ? 0 : weeklyCompare[0]?.car_driven,
      preWeek: !weeklyCompare[1]?.car_driven ? 0 : weeklyCompare[1]?.car_driven,
    },
    {
      key: 12,
      metrics: '% Achieved',
      currentWeek: (!weeklyCompare[0]?.car_driven || !weeklyCompare[0]?.target_car) ? 0 : (calculateData(weeklyCompare[0]?.car_driven, weeklyCompare[0]?.target_car) * 100)?.toFixed(1),
      preWeek: (!weeklyCompare[1]?.car_driven || !weeklyCompare[1]?.target_car) ? 0 : (calculateData(weeklyCompare[1]?.car_driven, weeklyCompare[1]?.target_car) * 100)?.toFixed(1),
    },
    {
      key: 13,
      metrics: 'Total Online Hours',
      currentWeek: !weeklyCompare[0]?.online_hours ? 0 : roundNumber(weeklyCompare[0]?.online_hours)?.toFixed(0),
      preWeek: !weeklyCompare[1]?.online_hours ? 0 : roundNumber(weeklyCompare[1]?.online_hours)?.toFixed(0),
    },
    {
      key: 14,
      metrics: 'Daily Avg. Online Hours',
      currentWeek: (!weeklyCompare[0]?.online_hours || !weeklyCompare[0]?.car_driven) ? 0 : (calculateData(weeklyCompare[0]?.online_hours, weeklyCompare[0]?.car_driven))?.toFixed(1),
      preWeek: (!weeklyCompare[1]?.online_hours || !weeklyCompare[1]?.car_driven) ? 0 : (calculateData(weeklyCompare[1]?.online_hours, weeklyCompare[1]?.car_driven))?.toFixed(1),
    },
    {
      key: 15,
      metrics: 'Target (Online Hrs)',
      currentWeek: !weeklyCompare[0]?.target_online_hours ? 0 : (weeklyCompare[0]?.target_online_hours),
      preWeek: !weeklyCompare[1]?.target_online_hours ? 0 : (weeklyCompare[1]?.target_online_hours),
    },
    {
      key: 16,
      metrics: '% Achieved Online Hours',
      currentWeek: (!weeklyCompare[0]?.online_hours || !weeklyCompare[0]?.car_driven || !weeklyCompare[0]?.target_online_hours) ? 0 : (calculateData(calculateData(weeklyCompare[0]?.online_hours, weeklyCompare[0]?.car_driven), calculateData(weeklyCompare[0]?.target_online_hours, 7)))?.toFixed(1),
      preWeek: (!weeklyCompare[1]?.online_hours || !weeklyCompare[1]?.car_driven || !weeklyCompare[1]?.target_online_hours) ? 0 : (calculateData(calculateData(weeklyCompare[1]?.online_hours, weeklyCompare[1]?.car_driven), calculateData(weeklyCompare[1]?.target_online_hours, 7)))?.toFixed(1),
    },
    {
      key: 17,
      metrics: 'Uber Trips',
      currentWeek: !weeklyCompare[0]?.total_trips ? 0 : roundNumber(Number(weeklyCompare[0]?.total_trips))?.toFixed(0),
      preWeek: !weeklyCompare[1]?.total_trips ? 0 : roundNumber(Number(weeklyCompare[1]?.total_trips))?.toFixed(0),
    },
    {
      key: 18,
      metrics: 'TPH',
      currentWeek: (!weeklyCompare[0]?.total_trips || !weeklyCompare[0]?.online_hours) ? 0 : (calculateData(weeklyCompare[0]?.total_trips, weeklyCompare[0]?.online_hours))?.toFixed(1),
      preWeek: (!weeklyCompare[1]?.total_trips || !weeklyCompare[1]?.online_hours) ? 0 : (calculateData(weeklyCompare[1]?.total_trips, weeklyCompare[1]?.online_hours))?.toFixed(1),
    },
    {
      key: 19,
      metrics: 'Trips Per Car',
      currentWeek: (!weeklyCompare[0]?.total_trips || !weeklyCompare[0]?.car_driven) ? 0 : (calculateData(weeklyCompare[0]?.total_trips, weeklyCompare[0]?.car_driven))?.toFixed(1),
      preWeek: (!weeklyCompare[1]?.total_trips || !weeklyCompare[1]?.car_driven) ? 0 : (calculateData(weeklyCompare[1]?.total_trips, weeklyCompare[1]?.car_driven))?.toFixed(1),
    },
    {
      key: 20,
      metrics: 'Total Revenue',
      currentWeek: (!weeklyCompare[0]?.revenue) ? 0 : roundNumber(weeklyCompare[0]?.revenue)?.toFixed(0),
      preWeek: (!weeklyCompare[1]?.revenue) ? 0 : roundNumber(weeklyCompare[1]?.revenue)?.toFixed(0),
    },
    {
      key: 21,
      metrics: 'Revenue Per Car',
      currentWeek: (!weeklyCompare[0]?.revenue || !weeklyCompare[0]?.total_cars) ? 0 : (calculateData(weeklyCompare[0]?.revenue, weeklyCompare[0]?.total_cars))?.toFixed(0),
      preWeek: (!weeklyCompare[1]?.revenue || !weeklyCompare[1]?.total_cars) ? 0 : (calculateData(weeklyCompare[1]?.revenue, weeklyCompare[1]?.total_cars))?.toFixed(0),
    },
    {
      key: 22,
      metrics: 'Target Revenue',
      currentWeek: !weeklyCompare[0]?.target_revenue ? 0 : (weeklyCompare[0]?.target_revenue),
      preWeek: !weeklyCompare[1]?.target_revenue ? 0 : (weeklyCompare[1]?.target_revenue),
    },
    {
      key: 23,
      metrics: '% Achieved',
      currentWeek: (!weeklyCompare[0]?.target_revenue || !weeklyCompare[0]?.revenue || !weeklyCompare[0]?.total_cars) ? 0 : (calculateData(calculateData(weeklyCompare[0]?.revenue, weeklyCompare[0]?.total_cars), calculateData(weeklyCompare[0]?.target_revenue, 7)))?.toFixed(1),
      preWeek: (!weeklyCompare[1]?.target_revenue || !weeklyCompare[1]?.revenue || !weeklyCompare[1]?.total_cars) ? 0 : (calculateData(calculateData(weeklyCompare[1]?.revenue, weeklyCompare[1]?.total_cars), calculateData(weeklyCompare[1]?.target_revenue, 7)))?.toFixed(1),
    },
    {
      key: 24,
      metrics: 'Revenue Per Trip',
      currentWeek: (!weeklyCompare[0]?.revenue || !weeklyCompare[0]?.total_trips) ? 0 : (calculateData(weeklyCompare[0]?.revenue, weeklyCompare[0]?.total_trips))?.toFixed(1),
      preWeek: (!weeklyCompare[1]?.revenue || !weeklyCompare[1]?.total_trips) ? 0 : (calculateData(weeklyCompare[1]?.revenue, weeklyCompare[1]?.total_trips))?.toFixed(1),
    },
    {
      key: 25,
      metrics: 'Revenue Per Hour',
      currentWeek: (!weeklyCompare[0]?.revenue || !weeklyCompare[0]?.online_hours) ? 0 : (calculateData(weeklyCompare[0]?.revenue, weeklyCompare[0]?.online_hours))?.toFixed(1),
      preWeek: (!weeklyCompare[1]?.revenue || !weeklyCompare[1]?.online_hours) ? 0 : (calculateData(weeklyCompare[1]?.revenue, weeklyCompare[1]?.online_hours))?.toFixed(1),
    },
    {
      key: 26,
      metrics: 'Total Uber Kms',
      currentWeek: !weeklyCompareUberKm[0]?.uber_km ? 0 : weeklyCompareUberKm[0]?.uber_km?.toFixed(0),
      preWeek: !weeklyCompareUberKm[1]?.uber_km ? 0 : weeklyCompareUberKm[1]?.uber_km?.toFixed(0),
    },
    {
      key: 27,
      metrics: 'Average. OEPK',
      currentWeek: (!weeklyCompare[0]?.revenue || !weeklyCompareUberKm[0]?.uber_km) ? 0 : (calculateData(weeklyCompare[0]?.revenue, weeklyCompareUberKm[0]?.uber_km))?.toFixed(1),
      preWeek: (!weeklyCompare[1]?.revenue || !weeklyCompareUberKm[1]?.uber_km) ? 0 : (calculateData(weeklyCompare[1]?.revenue, weeklyCompareUberKm[1]?.uber_km))?.toFixed(1),
    },
    {
      key: 28,
      metrics: 'Acceptance %',
      currentWeek: !weeklyCompareUberKm[0]?.acceptance_rate ? 0 : findPercentage(weeklyCompareUberKm[0]?.acceptance_rate)?.toFixed(1),
      preWeek: !weeklyCompareUberKm[1]?.acceptance_rate ? 0 : findPercentage(weeklyCompareUberKm[1]?.acceptance_rate)?.toFixed(1),
    },
    {
      key: 29,
      metrics: 'Cancellation %',
      currentWeek: !weeklyCompareUberKm[0]?.cancellation_rate ? 0 : findPercentage(weeklyCompareUberKm[0]?.cancellation_rate)?.toFixed(1),
      preWeek: !weeklyCompareUberKm[1]?.cancellation_rate ? 0 : findPercentage(weeklyCompareUberKm[1]?.cancellation_rate)?.toFixed(1),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} bordered />
    </div>
  );
};
export default DeepHuntersCompareTable;
