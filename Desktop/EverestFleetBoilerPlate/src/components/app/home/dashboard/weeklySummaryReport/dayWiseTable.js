/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { Table } from 'antd';
import moment from 'moment';

const DeepHuntersTable = ({ weeklyReport, weeklyReportUberKm }) => {
  const roundNumber = (num) => Math.round(num * 1000) / 1000;
  const calculateData = (val1, val2) => (Number(val1) / Number(val2));
  const targetValues = (num) => num / 7;
  const findPercentage = (num) => (num * 100);
  const colorValue = (key) => {
    let color;
    if (key >= 1 && key <= 9) {
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
    }];
  const weekDays = ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'];
  weeklyReport?.forEach((item, index) => {
    const createObject = {
      title: `${moment(item?.date).format('D')}/${moment(item?.date).format('M')}`,
      dataIndex: weekDays[index],
      key: item?.date,
      align: 'center',
    };
    columns.push(createObject || '');
  });

  const columnWiseData = weeklyReport?.map((item1) => {
    let item2 = null;
    weeklyReportUberKm?.map((data1) => {
      if (item1?.date === data1?.date) {
        item2 = data1;
      }
    });
    return ([
      !item1.total_cars ? '--' : item1?.total_cars,
      !item1?.car_driven ? '--' : item1?.car_driven,
      !item1?.repair_cars ? '--' : item1?.repair_cars,
      !item1?.bd_cars ? '--' : item1?.bd_cars,
      !item1?.insurance ? '--' : item1?.insurance,
      !item1?.rental ? '--' : item1?.rental,
      !item1?.b2b_cars ? '--' : item1?.b2b_cars,
      !item1?.fb_cars ? '--' : item1?.fb_cars,
      !item1?.not_driven ? '--' : item1?.not_driven,
      !item1?.target_car ? '--' : item1?.target_car,
      !item1?.car_driven ? '--' : item1?.car_driven,
      (!item1?.car_driven || !item1?.target_car) ? '--'
        : (calculateData(item1?.car_driven, item1?.target_car) * 100)?.toFixed(1),
      !item1?.online_hours ? '--'
        : roundNumber(item1?.online_hours)?.toFixed(0),
      (!item1?.online_hours || !item1?.car_driven) ? '--'
        : (calculateData(item1?.online_hours, item1?.car_driven))?.toFixed(1),
      !item1?.target_online_hours ? '--' : targetValues(item1?.target_online_hours)?.toFixed(1),
      (!item1?.online_hours || !item1?.car_driven || !item1?.target_online_hours) ? '--' : (calculateData(calculateData(item1?.online_hours, item1?.car_driven), calculateData(item1?.target_online_hours, 7)))?.toFixed(1),
      !item1?.total_trips ? '--'
        : roundNumber(Number(item1?.total_trips))?.toFixed(0),
      (!item1?.total_trips || !item1?.online_hours) ? '--'
        : (calculateData(item1?.total_trips, item1?.online_hours))?.toFixed(1),
      (!item1?.total_trips || !item1?.car_driven) ? '--' : (calculateData(item1?.total_trips, item1?.car_driven))?.toFixed(1),
      (!item1?.revenue) ? '--' : roundNumber(item1?.revenue)?.toFixed(0),
      (!item1?.revenue || !item1?.total_cars) ? '--' : (calculateData(item1?.revenue, item1?.total_cars))?.toFixed(0),
      !item1?.target_revenue ? '--' : targetValues(item1?.target_revenue)?.toFixed(0),
      (!item1?.target_revenue || !item1?.revenue || !item1?.total_cars) ? '--' : (calculateData(calculateData(item1?.revenue, item1?.total_cars), calculateData(item1?.target_revenue, 7)))?.toFixed(1),
      (!item1?.revenue || !item1?.total_trips) ? '--' : (calculateData(item1?.revenue, item1?.total_trips))?.toFixed(1),
      (!item1?.revenue || !item1?.online_hours) ? '--' : (calculateData(item1?.revenue, item1?.online_hours))?.toFixed(1),
      !item2?.uber_km ? '--' : item2?.uber_km?.toFixed(0),
      (!item1?.revenue || !item2?.uber_km) ? '--' : (calculateData(item1?.revenue, item2?.uber_km))?.toFixed(1),
      !item2?.acceptance_rate ? '--' : `${findPercentage(item2?.acceptance_rate)?.toFixed(1)} %`,
      !item2?.cancellation_rate ? '--' : `${findPercentage(item2?.cancellation_rate)?.toFixed(1)} %`,
    ]);
  });
  const fixedColumn = ['Total Cars', 'Active Cars', 'Repair Cars', 'BD Cars', 'Insurance Cars',
    'Rental', 'B2B Cars', 'FP Cars', 'Cars Not Driven', 'Target for Cars in Uber', 'No of cars in Uber', '% Achieved',
    'Total Online Hours', 'Daily Avg. Online Hours', 'Target (Online Hrs)', '% Achieved Online Hours',
    'Uber Trips', 'TPH', 'Trips Per Car', 'Total Revenue', 'Revenue Per Car', 'Target Revenue', '% Achieved',
    'Revenue Per Trip', 'Revenue Per Hour', 'Total Uber Kms', 'Average. OEPK', 'Acceptance %', 'Cancellation %',
  ];
  const data = fixedColumn.map((item, index) => ({
    key: index + 1,
    metrics: item,
    day1: columnWiseData?.[0]?.[index],
    day2: columnWiseData?.[1]?.[index],
    day3: columnWiseData?.[2]?.[index],
    day4: columnWiseData?.[3]?.[index],
    day5: columnWiseData?.[4]?.[index],
    day6: columnWiseData?.[5]?.[index],
    day7: columnWiseData?.[6]?.[index],
  }));
  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};
export default DeepHuntersTable;
