import { Table, Input } from 'antd';
import { useEffect, useState } from 'react';
import { onFetchDriverRatingReportApi } from 'services/axios';
import { useTeamContext } from 'context/teamIDContext';
import WithPageHandler from 'components/layouts/pageHandler';
// import { useCalenderContext } from 'context/calenderContext';
import moment from 'moment';

// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve) => {
  setTimeout(() => resolve(), 3000);
});

// const driverNameFunction = (driverName) => (
//   <div className="d-flex flex-row">
//     <div className="mx-4">
//       <p className="text-[#333333] mt-1.5 mb-0 mx-0 font-Montserrat">{driverName}</p>
//     </div>
//   </div>
// );

// const renderContent = (value, row, index) => setupPerformance(value);

// const setupPerformance = (performance) => performance.map((p) => {
//   const { id, title, percentage } = p;
//   return (
//     <span>
//       {percentage}
//       %
//     </span>
//   );
// });

const DriverRatingReportTable = ({
  pageState,
  setPageState,
}) => {
  const { teamID } = useTeamContext();
  // const { calenderDate } = useCalenderContext();
  const [tableData, setTableData] = useState([]);
  const [onSearchValue, setOnSearchValue] = useState('');
  const columns = [
    {
      title: 'Driver Name',
      dataIndex: 'driverName',
      key: 'driverName',
      align: 'center',
      render(text) {
        return {
          props: {
            style: {
              padding: '0px', fontStyle: 'Montserrat', fontWeight: '500', color: '#333333',
            },
          },
          // children: <div>{driverNameFunction(record.key, record.img, text)}</div>,
          children: <div>{text}</div>,
        };
      },
    },
    {
      title: 'Employee Id',
      dataIndex: 'employeeId',
      key: 'employeeId',
      align: 'center',

    },
    // {
    //   title: 'Performance',
    //   dataIndex: 'performance',
    //   children:
    //   weekData.map((e) => ({
    //     title: e.title,
    //     dataIndex: `performance[${e.id - 1}].percentage`,
    //     key: `key-${e.id}`,
    //     render: (value) => (
    //       <span>
    //         {value}
    //         %
    //       </span>
    //     ),
    //   })),

    // },
    {
      title: `(${moment().startOf('isoweek').subtract(1, 'week').format('D')} - ${moment().endOf('isoweek').subtract(1, 'week').format('D MMM YYYY')})`,
      children: [
        {
          title: 'Trip',
          dataIndex: 'trip1',
          key: 'trip1',
          align: 'center',
        },
        {
          title: 'Ratings',
          dataIndex: 'ratings1',
          key: 'ratings1',
          align: 'center',
          render(text) {
            return {
              props: {
                style: {
                  fontStyle: 'Montserrat', color: '#013453', fontSize: '13px', fontWeight: '600', opacity: 1,
                },
              },
              children: <div>{text}</div>,
            };
          },
        },
      ],
    },
    {
      title: `(${moment().startOf('isoweek').subtract(2, 'week').format('D')} - ${moment().endOf('isoweek').subtract(2, 'week').format('D MMM YYYY')})`,
      children: [
        {
          title: 'Trip',
          dataIndex: 'trip2',
          key: 'trip2',
          align: 'center',
        },
        {
          title: 'Ratings',
          dataIndex: 'ratings2',
          key: 'ratings2',
          align: 'center',
          render(text) {
            return {
              props: {
                style: {
                  fontStyle: 'Montserrat', color: '#013453', fontSize: '13px', fontWeight: '600', opacity: 1,
                },
              },
              children: <div>{text}</div>,
            };
          },
        },
      ],
    },
    {
      title: `(${moment().startOf('isoweek').subtract(3, 'week').format('D')} - ${moment().endOf('isoweek').subtract(3, 'week').format('D MMM YYYY')})`,
      children: [
        {
          title: 'Trip',
          dataIndex: 'trip3',
          key: 'trip3',
          align: 'center',
        },
        {
          title: 'Ratings',
          dataIndex: 'ratings3',
          key: 'ratings3',
          align: 'center',
          render(text) {
            return {
              props: {
                style: {
                  fontStyle: 'Montserrat', color: '#013453', fontSize: '13px', fontWeight: '600', opacity: 1,
                },
              },
              children: <div>{text}</div>,
            };
          },
        },
      ],
    },
    {
      title: `(${moment().startOf('isoweek').subtract(4, 'week').format('D')} - ${moment().endOf('isoweek').subtract(4, 'week').format('D MMM YYYY')})`,
      children: [
        {
          title: 'Trip',
          dataIndex: 'trip4',
          key: 'trip4',
          align: 'center',
        },
        {
          title: 'Ratings',
          dataIndex: 'ratings4',
          key: 'ratings4',
          align: 'center',
          render(text) {
            return {
              props: {
                style: {
                  fontStyle: 'Montserrat', color: '#013453', fontSize: '13px', fontWeight: '600', opacity: 1,
                },
              },
              children: <div>{text}</div>,
            };
          },
        },
      ],
    },
  ];

  const onFetchData = async () => {
    try {
      await promise;
      setPageState('loaded');
    } catch (error) {
      setPageState('error');
    }
  };

  useEffect(() => {
    onFetchData();
    onFetchDriverRatingReportApi(teamID)
      .then((res) => {
        setTableData(res?.data);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, [teamID]);
  const globalSearch = (value) => {
    setOnSearchValue(value);
  };
  const tableDataTemp = tableData
    .filter(({
      employee_id: employeeId,
    }) => (
      `${employeeId}`.toLowerCase().includes(onSearchValue.toLowerCase())
    ));
  const data = tableDataTemp?.map((item1, index) => {
    let trip10;
    let ratings10;
    let trip20;
    let ratings20;
    let trip30;
    let ratings30;
    let trip40;
    let ratings40;
    // eslint-disable-next-line array-callback-return
    item1?.mobile?.map((item2) => {
      if (item2?.week_period === 'last week') {
        trip10 = item2?.total_trips || 0;
        ratings10 = item2?.driver_rating;
      } if (item2?.week_period === '2nd week') {
        trip20 = item2?.total_trips || 0;
        ratings20 = item2?.driver_rating;
      } if (item2?.week_period === '3rd week') {
        trip30 = item2?.total_trips || 0;
        ratings30 = item2?.driver_rating;
      } if (item2?.week_period === '4th week') {
        trip40 = item2?.total_trips || 0;
        ratings40 = item2?.driver_rating;
      }
    });
    return ({
      key: index,
      driverName: item1?.driver_name,
      employeeId: item1?.employee_id,
      trip1: trip10,
      ratings1: ratings10,
      trip2: trip20,
      ratings2: ratings20,
      trip3: trip30,
      ratings3: ratings30,
      trip4: trip40,
      ratings4: ratings40,
    });
  });

  // return null during page loading or data fetching error
  if (pageState === 'loading' || pageState === 'error') return null;
  return (
    <div>
      <div className="flex flex-row justify-end mb-3">
        <Input
          size="medium"
          // onSearch={onSearch}
          placeholder="Enter ETM Id"
          prefix={(
            <img
              className="text-[#333333]"
              src="/assets/images/general/loupe.svg"
              alt="search"
              width="12"
            />
          )}
          style={{ width: '320px' }}
          className="bg-[#F1F0F1] text-[#333333]"
          // suffix={searchLoading && <LoadingOutlined />}
          bordered
          onChange={({ target: { value } }) => globalSearch(value)}
        />
      </div>
      <Table columns={columns} dataSource={data} pagination={false} bordered />
    </div>
  );
};
export default WithPageHandler(DriverRatingReportTable);
