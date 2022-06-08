import moment from 'moment';
import { Column } from '@ant-design/plots';

const NoOfTripsBar = ({ incentiveData = [] }) => {
  const totalTripsData = incentiveData?.map((item) => ({
    tripType: 'Total Trips',
    date: `${moment(item?.week_start_date).format('DD')} ${moment(item?.week_start_date).format('MMM')} - ${moment(item?.week_end_date).format('DD')} ${moment(item?.week_end_date).format('MMM')} ${moment(item?.week_start_date).format('YYYY')}`,
    tripCount: Number(`${item?.total_trips}`),
  }));
  const targetTripsData = incentiveData?.map((item) => ({
    tripType: 'Target Trips',
    date: `${moment(item?.week_start_date).format('DD')} ${moment(item?.week_start_date).format('MMM')} - ${moment(item?.week_end_date).format('DD')} ${moment(item?.week_end_date).format('MMM')} ${moment(item?.week_start_date).format('YYYY')}`,
    tripCount: Number(`${item?.trip_target}`),
  }));
  const data = ([
    ...targetTripsData,
    ...totalTripsData,
  ]);
  const config = {
    data,
    xField: 'date',
    yField: 'tripCount',
    seriesField: 'tripType',
    isStack: true,
    colorField: 'tripCount', // or seriesField in some cases
    color: ['#C2C2C2', '#37BDC8', '#000000'],
    label: {
      position: 'middle',
      content: (item) => item?.tripCount,
      style: {
        fill: '#fff',
      },
    },
    legend: {
      layout: 'horizontal',
      position: 'top-right',
    },
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <span>No. of Trips (Last 4 Weeks)</span>
            <Column style={{ margin: '0px', padding: '0px' }} height={160} {...config} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoOfTripsBar;
