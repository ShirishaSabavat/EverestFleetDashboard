import React from 'react';
import { Table } from 'antd';
import moment from 'moment';

const columns = [
  {
    title: 'Week',
    dataIndex: 'week',
    key: 'week',
    width: 130,
    fixed: 'left',
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#333333', fontWeight: '600', fontSize: '11px', backGroundColor: '#ffffff',
          },
        },
        children: <div className="bg-[#ffffff">{text}</div>,
      };
    },
    // filters: [
    //   {
    //     text: 'Joe',
    //     value: 'Joe',
    //   },
    //   {
    //     text: 'John',
    //     value: 'John',
    //   },
    // ],
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: 'Trips',
    dataIndex: 'trips',
    key: 'trips',
    width: 100,
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#013453', fontWeight: '600', fontSize: '12px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Online Hrs',
    dataIndex: 'onlineHrs',
    key: 'onlineHrs',
    width: 100,
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#013453', fontWeight: '600', fontSize: '12px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Earnings',
    dataIndex: 'earnings',
    key: 'earnings',
    width: 120,
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#013453', fontWeight: '600', fontSize: '12px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Toll',
    dataIndex: 'toll',
    key: 'toll',
    width: 100,
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#013453', fontWeight: '600', fontSize: '12px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Tip',
    dataIndex: 'tip',
    key: 'tip',
    width: 100,
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#013453', fontWeight: '600', fontSize: '12px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: '60% Driver Payout + Toll',
    dataIndex: 'payoutToll',
    key: 'payoutToll',
    width: 120,
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#013453', fontWeight: '600', fontSize: '12px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Cash Collected',
    dataIndex: 'cashCollected',
    key: 'cashCollected',
    width: 120,
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#FF0000', fontWeight: '600', fontSize: '12px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Incentive',
    dataIndex: 'incentive',
    key: 'incentive',
    width: 120,
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#013453', fontWeight: '600', fontSize: '12px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Positive Adjustment',
    dataIndex: 'positiveAdjustment',
    key: 'positiveAdjustment',
    width: 120,
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#013453', fontWeight: '600', fontSize: '12px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Negative Adjustment',
    dataIndex: 'negativeAdjustment',
    key: 'negativeAdjustment',
    width: 120,
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#FF0000', fontWeight: '600', fontSize: '12px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Penalty',
    dataIndex: 'penalty',
    key: 'penalty',
    width: 100,
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#FF0000', fontWeight: '600', fontSize: '12px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'RTO',
    dataIndex: 'rto',
    key: 'rto',
    width: 100,
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#FF0000', fontWeight: '600', fontSize: '12px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Bank Transfer',
    dataIndex: 'bankTransfer',
    key: 'bankTransfer',
    width: 110,
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#013453', fontWeight: '600', fontSize: '12px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Recovery',
    dataIndex: 'recovery',
    key: 'recovery',
    width: 120,
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#013453', fontWeight: '600', fontSize: '12px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Weekly Outstanding',
    dataIndex: 'weeklyOutstanding',
    key: 'weeklyOutstanding',
    width: 120,
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', fontWeight: '600', fontSize: '12px',
          },
        },
        children: <div className={Number(text) < 0 ? 'text-[#FF0000]' : 'text-[#013453]'}>{text}</div>,
      };
    },
  },
];
const WeeklyTable = ({ driverWeeklyData = [] }) => {
  const data = Array.isArray(driverWeeklyData) && driverWeeklyData.length > 0
    ? driverWeeklyData.sort((a, b) => {
      const dateA = new Date(a?.week_start_date);
      const dateB = new Date(b?.week_start_date);
      return dateB - dateA;
    }).map((item, index) => {
      const payoutVal = ((item?.driver_payout || 0) + (item?.toll || 0))?.toFixed(1);
      return ({
        key: index?.toString(),
        week: `${moment(item?.week_start_date).format('DD')} - ${moment(item?.week_end_date).format('DD')} ${moment(item?.week_end_date).format('MMM')} ${moment(item?.week_start_date).format('YYYY')}`,
        trips: item?.total_trips,
        onlineHrs: item?.online_hours?.toFixed(1),
        earnings: item?.revenue?.toFixed(1),
        toll: item?.toll?.toFixed(1),
        tip: item?.tip_amount?.toFixed(1),
        payoutToll: payoutVal,
        cashCollected: `-${item?.cash_collected?.toFixed(1)}`,
        incentive: item?.incentive?.toFixed(1),
        positiveAdjustment: item?.positive_adjustment?.toFixed(1),
        negativeAdjustment: item?.negative_adjustment?.toFixed(1),
        penalty: item?.penalty?.toFixed(1),
        rto: item?.rto_fine?.toFixed(1),
        bankTransfer: Number(item?.bank_transfer)?.toFixed(1),
        recovery: item?.recovery?.toFixed(1),
        weeklyOutstanding: item?.weekly_outstanding?.toFixed(1),
      });
    }) : 0;
  //   const data = [];
  // driverWeeklyData?.forEach((index, item) => {
  //   data.push({
  //     key: index?.toString(),
  //     week: `${moment(item?.week_start_date).format('D')} -
  // ${moment(item?.week_end_date).format('D')}
  // ${moment(item?.week_end_date).format('MMM')} ${moment(item?.week_start_date).format('YYYY')}`,
  //     trips: item?.total_trips,
  //     onlineHrs: item?.online_hours?.toFixed(1),
  //     earnings: 2,
  //     toll: 2,
  //     tip: 2,
  //     payoutToll: 2,
  //     cashCollected: 2,
  //     incentive: 2,
  //     positiveAdjustment: 2,
  //     negativeAdjustment: 2,
  //     penalty: 2,
  //     rto: 2,
  //     bankTransfer: 2,
  //     recovery: 2,
  //     weeklyOutstanding: 2,
  //   });
  // });

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      size="middle"
      scroll={{
        x: 'calc(700px + 50%)',
      }}
    />
  );
};

export default WeeklyTable;
