/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { Table, Input } from 'antd';
import { useEffect, useState } from 'react';
import { onFetchDriverDailyReportApi } from 'services/axios';
import { useTeamContext } from 'context/teamIDContext';
import { useCalenderContext } from 'context/calenderContext';
// import { useDayCalenderContext } from 'context/dayCalenderContext';
import moment from 'moment';
import WithPageHandler from 'components/layouts/pageHandler';
// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve) => {
  setTimeout(() => resolve(), 3000);
});

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#333333', fontWeight: '600', fontSize: '11px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Car No.',
    dataIndex: 'carNo',
    key: 'carNo',
    align: 'center',
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#86A1A4', fontWeight: '600', fontSize: '11px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Trips',
    children: [
      {
        title: 'M',
        dataIndex: 'mon',
        key: 'mon',
        align: 'center',
        render(text) {
          return {
            props: {
              style: {
                fontStyle: 'Montserrat', color: '#333333', fontWeight: '600', fontSize: '11px', backgroundColor: '#F1FAFA',
              },
            },
            children: <div>{text === '0' ? '-' : text}</div>,
          };
        },
      },
      {
        title: 'T',
        dataIndex: 'tue',
        key: 'tue',
        align: 'center',
        render(text) {
          return {
            props: {
              style: {
                fontStyle: 'Montserrat', color: '#333333', fontWeight: '600', fontSize: '11px', backgroundColor: '#F1FAFA',
              },
            },
            children: <div>{text === '0' ? '-' : text}</div>,
          };
        },

      },
      {
        title: 'W',
        dataIndex: 'wed',
        key: 'wed',
        align: 'center',
        render(text) {
          return {
            props: {
              style: {
                fontStyle: 'Montserrat', color: '#333333', fontWeight: '600', fontSize: '11px', backgroundColor: '#F1FAFA',
              },
            },
            children: <div>{text === '0' ? '-' : text}</div>,
          };
        },
      },
      {
        title: 'Th',
        dataIndex: 'thu',
        key: 'thu',
        align: 'center',
        render(text) {
          return {
            props: {
              style: {
                fontStyle: 'Montserrat', color: '#333333', fontWeight: '600', fontSize: '11px', backgroundColor: '#F1FAFA',
              },
            },
            children: <div>{text === '0' ? '-' : text}</div>,
          };
        },
      },
      {
        title: 'F',
        dataIndex: 'fri',
        key: 'fri',
        align: 'center',
        render(text) {
          return {
            props: {
              style: {
                fontStyle: 'Montserrat', color: '#333333', fontWeight: '600', fontSize: '11px', backgroundColor: '#F1FAFA',
              },
            },
            children: <div>{text === '0' ? '-' : text}</div>,
          };
        },
      },
      {
        title: 'Sa',
        dataIndex: 'sat',
        key: 'sat',
        align: 'center',
        render(text) {
          return {
            props: {
              style: {
                fontStyle: 'Montserrat', color: '#333333', fontWeight: '600', fontSize: '11px', backgroundColor: '#F1FAFA',
              },
            },
            children: <div>{text === '0' ? '-' : text}</div>,
          };
        },
      },
      {
        title: 'S',
        dataIndex: 'sun',
        key: 'sun',
        align: 'center',
        render(text) {
          return {
            props: {
              style: {
                fontStyle: 'Montserrat', color: '#333333', fontWeight: '600', fontSize: '11px', backgroundColor: '#F1FAFA',
              },
            },
            children: <div>{text === '0' ? '-' : text}</div>,
          };
        },
      },
    ],
  },
  {
    title: 'Total Trips',
    dataIndex: 'totalTrips',
    key: 'totalTrips',
    align: 'center',
    sorter: (a, b) => Number(a.totalTrips) - Number(b.totalTrips),
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#333333', fontWeight: '600', fontSize: '10px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Yester- day\'s Online Hrs',
    dataIndex: 'yOnlineHours',
    key: 'yOnlineHours',
    align: 'center',
    sorter: (a, b) => Number(a.yOnlineHours) - Number(b.yOnlineHours),
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#333333', fontWeight: '600', fontSize: '10px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Total Online Hrs',
    dataIndex: 'totalOnlineHrs',
    key: 'totalOnlineHrs',
    align: 'center',
    sorter: (a, b) => Number(a.totalOnlineHrs) - Number(b.totalOnlineHrs),
    render(text) {
      return {
        props: {
          style: {
            fontStyle: 'Montserrat', color: '#333333', fontWeight: '600', fontSize: '12px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Yester- day\'s Rev- enue',
    dataIndex: 'yRevenue',
    key: 'yRevenue',
    align: 'center',
    sorter: (a, b) => Number(a.yRevenue) - Number(b.yRevenue),
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
    title: 'Total Rev- enue',
    dataIndex: 'totalRevenue',
    key: 'totalRevenue',
    align: 'center',
    sorter: (a, b) => Number(a.totalRevenue) - Number(b.totalRevenue),
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
];

const DriverRatingReportTable = ({
  pageState,
  setPageState,
}) => {
  const { teamID } = useTeamContext();
  const { calenderDate } = useCalenderContext();
  // const { dayCalenderDate } = useDayCalenderContext();
  const [tableData, setTableData] = useState([]);
  const [searchValue1, setSearchValue1] = useState(null);
  const [searchValue2, setSearchValue2] = useState(null);
  const [searchValue3, setSearchValue3] = useState(null);
  const [searchValue4, setSearchValue4] = useState(null);
  const [searchValue5, setSearchValue5] = useState(null);
  const [searchValue6, setSearchValue6] = useState(null);
  const [searchValue7, setSearchValue7] = useState(null);
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
    const days = {
      day1: moment(calenderDate.startOfWeek).format('YYYY-MM-DD'),
      day2: moment(calenderDate.startOfWeek).add(1, 'days').format('YYYY-MM-DD'),
      day3: moment(calenderDate.startOfWeek).add(2, 'days').format('YYYY-MM-DD'),
      day4: moment(calenderDate.startOfWeek).add(3, 'days').format('YYYY-MM-DD'),
      day5: moment(calenderDate.startOfWeek).add(4, 'days').format('YYYY-MM-DD'),
      day6: moment(calenderDate.startOfWeek).add(5, 'days').format('YYYY-MM-DD'),
      day7: moment(calenderDate.endOfWeek).format('YYYY-MM-DD'),
    };
    onFetchDriverDailyReportApi(calenderDate, teamID, days)
      .then((res) => {
        setTableData(res.data);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, [teamID, calenderDate]);

  const globalSearch1 = (value) => {
    setSearchValue1(value);
  };
  const globalSearch2 = (value) => {
    setSearchValue2(value);
  };
  const globalSearch3 = (value) => {
    setSearchValue3(value);
  };
  const globalSearch4 = (value) => {
    setSearchValue4(value);
  };
  const globalSearch5 = (value) => {
    setSearchValue5(value);
  };
  const globalSearch6 = (value) => {
    setSearchValue6(value);
  };
  const globalSearch7 = (value) => {
    setSearchValue7(value);
  };

  // return null during page loading or data fetching error
  if (pageState === 'loading' || pageState === 'error') return null;

  const tableDataTemp = tableData.filter((item) => {
    // const days = [
    //   moment(calenderDate.startOfWeek).format('YYYY-MM-DD'),
    //   moment(calenderDate.startOfWeek).add(1, 'days').format('YYYY-MM-DD'),
    //   moment(calenderDate.startOfWeek).add(2, 'days').format('YYYY-MM-DD'),
    //   moment(calenderDate.startOfWeek).add(3, 'days').format('YYYY-MM-DD'),
    //   moment(calenderDate.startOfWeek).add(4, 'days').format('YYYY-MM-DD'),
    //   moment(calenderDate.startOfWeek).add(5, 'days').format('YYYY-MM-DD'),
    //   moment(calenderDate.endOfWeek).format('YYYY-MM-DD'),
    // ];
    // const startWeek = new Date(moment().startOf('isoweek').format('YYYY-MM-DD'));
    // const endWeek = new Date(moment().endOf('isoweek').format('YYYY-MM-DD'));
    // const dayDate = new Date(dayCalenderDate.day);
    // const DefaultDays = days.filter((data) => {
    //   const presentDay = new Date(moment().subtract(1, 'days').format('YYYY-MM-DD'));
    //   const day = new Date(data);
    //   if (day.getTime() >= startWeek.getTime()
    //     && day.getTime() <= presentDay.getTime()) return data;
    // });
    // let presentCount = 0;
    // if (!onChangeWeekDate
    //   && (dayDate.getTime() >= startWeek.getTime() && dayDate.getTime() <= endWeek.getTime())) {
    //   presentCount = DefaultDays.length;
    // }
    // if (onChangeWeekDate
    //   && (dayDate.getTime() >= startWeek.getTime() && dayDate.getTime() <= endWeek.getTime())) {
    //   presentCount = DefaultDays.length;
    // }
    // if (onChangeWeekDate && (dayDate.getTime() < startWeek.getTime())) {
    //   presentCount = 7;
    // }
    // let presentDaysCount = presentCount;
    // let ndCount = 0;
    // if ((Number(item?.day1_trips) === 0) && (Number(presentDaysCount) > 0)) {
    //   ndCount += 1;
    //   presentDaysCount -= 1;
    // } else {
    //   presentDaysCount -= 1;
    // }
    // if ((Number(item?.day2_trips) === 0) && (Number(presentDaysCount) > 0)) {
    //   ndCount += 1;
    //   presentDaysCount -= 1;
    // } else {
    //   presentDaysCount -= 1;
    // }
    // if (Number(item?.day3_trips) === 0 && Number(presentDaysCount) > 0) {
    //   ndCount += 1;
    //   presentDaysCount -= 1;
    // } else {
    //   presentDaysCount -= 1;
    // }
    // if (Number(item?.day4_trips) === 0 && Number(presentDaysCount) > 0) {
    //   ndCount += 1;
    //   presentDaysCount -= 1;
    // } else {
    //   presentDaysCount -= 1;
    // }
    // if (Number(item?.day5_trips) === 0 && Number(presentDaysCount) > 0) {
    //   ndCount += 1;
    //   presentDaysCount -= 1;
    // } else {
    //   presentDaysCount -= 1;
    // }
    // if (Number(item?.day6_trips) === 0 && Number(presentDaysCount) > 0) {
    //   ndCount += 1;
    //   presentDaysCount -= 1;
    // } else {
    //   presentDaysCount -= 1;
    // }
    // if (Number(item?.day7_trips) === 0 && Number(presentDaysCount) > 0) {
    //   ndCount += 1;
    //   presentDaysCount -= 1;
    // } else {
    //   presentDaysCount -= 1;
    // }

    let ndCount = 0;
    if (item?.day1_trips === 0) ndCount += 1;
    if (item?.day2_trips === 0) ndCount += 1;
    if (item?.day3_trips === 0) ndCount += 1;
    if (item?.day4_trips === 0) ndCount += 1;
    if (item?.day5_trips === 0) ndCount += 1;
    if (item?.day6_trips === 0) ndCount += 1;
    if (item?.day7_trips === 0) ndCount += 1;
    const {
      total_trips: totalTrips, total_online_hours: totalOnlineHours,
      total_revenue: totalRevenue,
    } = item;
    if (searchValue1 && searchValue2 && !searchValue3 && !searchValue4
      && !searchValue5 && !searchValue6 && !searchValue7
      && (Number(totalTrips) >= Number(searchValue1)
        && Number(totalTrips) <= Number(searchValue2))) {
      return item;
    } if (!searchValue1 && !searchValue2 && searchValue3 && searchValue4
      && !searchValue5 && !searchValue6 && !searchValue7
      && (Number(totalOnlineHours) >= Number(searchValue3)
        && Number(totalOnlineHours) <= Number(searchValue4))) {
      return item;
    } if (!searchValue1 && !searchValue2 && !searchValue3 && !searchValue4
      && searchValue5 && searchValue6 && !searchValue7
      && (Number(totalRevenue) >= Number(searchValue5)
        && Number(totalRevenue) <= Number(searchValue6))) {
      return item;
    } if (!searchValue1 && !searchValue2 && !searchValue3 && !searchValue4
      && !searchValue5 && !searchValue6 && searchValue7
      && Number(ndCount) === Number(searchValue7)) {
      return item;
    } if (searchValue1 && searchValue2 && searchValue3 && searchValue4
      && !searchValue5 && !searchValue6 && !searchValue7
      && (Number(totalTrips) >= Number(searchValue1)
        && Number(totalTrips) <= Number(searchValue2))
      && (Number(totalOnlineHours) >= Number(searchValue3)
        && Number(totalOnlineHours) <= Number(searchValue4))
    ) {
      return item;
    } if (searchValue1 && searchValue2 && !searchValue3 && !searchValue4
      && searchValue5 && searchValue6 && !searchValue7
      && (Number(totalTrips) >= Number(searchValue1)
        && Number(totalTrips) <= Number(searchValue2))
      && (Number(totalRevenue) >= Number(searchValue5)
        && Number(totalRevenue) <= Number(searchValue6))
    ) {
      return item;
    } if (searchValue1 && searchValue2 && !searchValue3 && !searchValue4
      && !searchValue5 && !searchValue6 && searchValue7
      && (Number(totalTrips) >= Number(searchValue1)
        && Number(totalTrips) <= Number(searchValue2))
      && Number(ndCount) === Number(searchValue7)
    ) {
      return item;
    } if (!searchValue1 && !searchValue2 && searchValue3 && searchValue4
      && searchValue5 && searchValue6 && !searchValue7
      && (Number(totalOnlineHours) >= Number(searchValue3)
        && Number(totalOnlineHours) <= Number(searchValue4))
      && (Number(totalRevenue) >= Number(searchValue5)
        && Number(totalRevenue) <= Number(searchValue6))
    ) {
      return item;
    } if (!searchValue1 && !searchValue2 && searchValue3 && searchValue4
      && !searchValue5 && !searchValue6 && searchValue7
      && (Number(totalOnlineHours) >= Number(searchValue3)
        && Number(totalOnlineHours) <= Number(searchValue4))
      && Number(ndCount) === Number(searchValue7)
    ) {
      return item;
    } if (!searchValue1 && !searchValue2 && !searchValue3 && !searchValue4
      && searchValue5 && searchValue6 && searchValue7
      && (Number(totalRevenue) >= Number(searchValue5)
        && Number(totalRevenue) <= Number(searchValue6))
      && Number(ndCount) === Number(searchValue7)
    ) {
      return item;
    } if (searchValue1 && searchValue2 && searchValue3 && searchValue4
      && searchValue5 && searchValue6 && !searchValue7
      && (Number(totalTrips) >= Number(searchValue1)
        && Number(totalTrips) <= Number(searchValue2))
      && (Number(totalOnlineHours) >= Number(searchValue3)
        && Number(totalOnlineHours) <= Number(searchValue4))
      && (Number(totalRevenue) >= Number(searchValue5)
        && Number(totalRevenue) <= Number(searchValue6))
    ) {
      return item;
    } if (searchValue1 && searchValue2 && searchValue3 && searchValue4
      && !searchValue5 && !searchValue6 && searchValue7
      && (Number(totalTrips) >= Number(searchValue1)
        && Number(totalTrips) <= Number(searchValue2))
      && (Number(totalOnlineHours) >= Number(searchValue3)
        && Number(totalOnlineHours) <= Number(searchValue4))
      && Number(ndCount) === Number(searchValue7)
    ) {
      return item;
    } if (searchValue1 && searchValue2 && !searchValue3 && !searchValue4
      && searchValue5 && searchValue6 && searchValue7
      && (Number(totalTrips) >= Number(searchValue1)
        && Number(totalTrips) <= Number(searchValue2))
      && (Number(totalRevenue) >= Number(searchValue5)
        && Number(totalRevenue) <= Number(searchValue6))
      && Number(ndCount) === Number(searchValue7)
    ) {
      return item;
    } if (!searchValue1 && !searchValue2 && searchValue3 && searchValue4
      && searchValue5 && searchValue6 && searchValue7
      && (Number(totalOnlineHours) >= Number(searchValue3)
        && Number(totalOnlineHours) <= Number(searchValue4))
      && (Number(totalRevenue) >= Number(searchValue5)
        && Number(totalRevenue) <= Number(searchValue6))
      && Number(ndCount) === Number(searchValue7)
    ) {
      return item;
    } if (searchValue1 && searchValue2 && searchValue3 && searchValue4
      && searchValue5 && searchValue6 && searchValue7
      && (Number(totalTrips) >= Number(searchValue1)
        && Number(totalTrips) <= Number(searchValue2))
      && (Number(totalOnlineHours) >= Number(searchValue3)
        && Number(totalOnlineHours) <= Number(searchValue4))
      && (Number(totalRevenue) >= Number(searchValue5)
        && Number(totalRevenue) <= Number(searchValue6))
      && Number(ndCount) === Number(searchValue7)
    ) {
      return item;
    } if (!searchValue1 && !searchValue2 && !searchValue3 && !searchValue4
      && !searchValue5 && !searchValue6 && !searchValue7) {
      return item;
    }
  });

  const data = tableDataTemp?.map((item, index) => {
    const carNumber = !item?.car_number ? '' : item?.car_number?.split(',').join(' / ');
    return ({
      key: index,
      name: item?.driver_name,
      carNo: carNumber,
      mon: item?.day1_trips,
      tue: item?.day2_trips,
      wed: item?.day3_trips,
      thu: item?.day4_trips,
      fri: item?.day5_trips,
      sat: item?.day6_trips,
      sun: item?.day7_trips,
      totalTrips: item?.total_trips,
      yOnlineHours: item?.yesterday_online?.toFixed(1),
      totalOnlineHrs: item?.total_online_hours?.toFixed(1),
      yRevenue: item?.yesterday_revenue?.toFixed(1),
      totalRevenue: item?.total_revenue?.toFixed(1),
    });
  });

  return (
    <div className="row">
      <div className="col-12 mb-4">
        <div className=" border-solid rounded-md bg-[#FFFFFF] py-3 px-4">
          <div className="row">
            <div className="col-3">
              <p className="text-xs m-1 text-[#333333] font-semibold">Total Trips</p>
              <Input.Group size="medium">
                <div className=" d-flex flex-row">
                  <Input
                    // defaultValue="0571"
                    suffix={(
                      <button
                        type="button"
                        onClick={() => setSearchValue1('')}
                        className="border-solid px-0.5 rounded-full border-1 hover:bg-[#E5F5F4] border-[#e7eaea] text-[#acc5c8] m-0"
                      >
                        x
                      </button>
                    )}
                    placeholder="from"
                    onChange={({ target: { value } }) => globalSearch1(value)}
                    value={searchValue1}
                    style={{ marginRight: '10px' }}
                  />
                  _
                  <Input
                    suffix={(
                      <button
                        type="button"
                        onClick={() => setSearchValue2('')}
                        className="border-solid px-0.5 rounded-full border-1 hover:bg-[#E5F5F4] border-[#e7eaea] text-[#acc5c8] m-0"
                      >
                        x
                      </button>
                    )}
                    onChange={({ target: { value } }) => globalSearch2(value)}
                    value={searchValue2}
                    placeholder="to"
                    style={{ marginLeft: '10px' }}
                  />
                </div>
              </Input.Group>
            </div>
            <div className="col-3">
              <p className="text-xs m-1 text-[#333333] font-semibold">Total Online Hours</p>
              <Input.Group size="medium">
                <div className=" d-flex flex-row">
                  <Input
                    // defaultValue="0571"
                    suffix={(
                      <button
                        type="button"
                        onClick={() => setSearchValue3('')}
                        className="border-solid px-0.5 rounded-full border-1 hover:bg-[#E5F5F4] border-[#e7eaea] text-[#acc5c8] m-0"
                      >
                        x
                      </button>
                    )}
                    placeholder="from"
                    onChange={({ target: { value } }) => globalSearch3(value)}
                    value={searchValue3}
                    style={{ marginRight: '10px' }}
                  />
                  _
                  <Input
                    suffix={(
                      <button
                        type="button"
                        onClick={() => setSearchValue4('')}
                        className="border-solid px-0.5 rounded-full border-1 hover:bg-[#E5F5F4] border-[#e7eaea] text-[#acc5c8] m-0"
                      >
                        x

                      </button>
                    )}
                    onChange={({ target: { value } }) => globalSearch4(value)}
                    value={searchValue4}
                    placeholder="to"
                    style={{ marginLeft: '10px' }}
                  />
                </div>
              </Input.Group>
            </div>
            <div className="col-3">
              <p className="text-xs m-1 text-[#333333] font-semibold">Total Revenue</p>
              <Input.Group size="medium">
                <div className=" d-flex flex-row">
                  <Input
                    // defaultValue="0571"
                    suffix={(
                      <button
                        type="button"
                        onClick={() => setSearchValue5('')}
                        className="border-solid px-0.5 rounded-full border-1 hover:bg-[#E5F5F4] border-[#e7eaea] text-[#acc5c8] m-0"
                      >
                        x

                      </button>
                    )}
                    placeholder="from"
                    onChange={({ target: { value } }) => globalSearch5(value)}
                    value={searchValue5}
                    style={{ marginRight: '10px' }}
                  />
                  _
                  <Input
                    suffix={(
                      <button
                        type="button"
                        onClick={() => setSearchValue6('')}
                        className="border-solid px-0.5 rounded-full border-1 hover:bg-[#E5F5F4] border-[#e7eaea] text-[#acc5c8] m-0"
                      >
                        x

                      </button>
                    )}
                    onChange={({ target: { value } }) => globalSearch6(value)}
                    value={searchValue6}
                    placeholder="to"
                    style={{ marginLeft: '10px' }}
                  />
                </div>
              </Input.Group>
            </div>
            <div className="col-3">
              <p className="text-xs m-1 text-[#333333] font-semibold">No. of Days Drivers Not Driven</p>
              <Input
                size="medium"
                suffix={(
                  <button
                    type="button"
                    onClick={() => setSearchValue7('')}
                    className="border-solid px-0.5 rounded-full border-1 hover:bg-[#E5F5F4] border-[#e7eaea] text-[#acc5c8] m-0"
                  >
                    x

                  </button>
                )}
                onChange={({ target: { value } }) => globalSearch7(value)}
                value={searchValue7}
                placeholder="Days"
                style={{ width: '140px' }}
              />
            </div>

          </div>
        </div>
      </div>
      <div className="col-12 px-1">
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  );
};
export default WithPageHandler(DriverRatingReportTable);
