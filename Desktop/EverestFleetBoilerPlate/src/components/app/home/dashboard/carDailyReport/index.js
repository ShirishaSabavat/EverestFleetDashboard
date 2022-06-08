/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import {
  Table, Input, Button, Dropdown, Row, Col, Menu,
} from 'antd';
import { useEffect, useState } from 'react';
import { onFetchCarDailyReportApi } from 'services/axios';
import { useTeamContext } from 'context/teamIDContext';
import { useCalenderContext } from 'context/calenderContext';
import moment from 'moment';
import WithPageHandler from 'components/layouts/pageHandler';
import { CaretDownOutlined } from '@ant-design/icons';

// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve) => {
  setTimeout(() => resolve(), 3000);
});
const selectColor = (value) => {
  if ((value)?.toUpperCase() === 'ND') return '#FC2109';
  if ((value)?.toUpperCase() === 'R') return '#BEBE1F';
  if ((value)?.toUpperCase() === 'FP') return '#8175ff';
  if ((value)?.toUpperCase() === 'B2B') return '#86A1A4';
  if ((value)?.toUpperCase() === 'SERVICING' || (value)?.toUpperCase() === 'RN') return '#37BDC8';
  if ((value)?.toUpperCase() === 'CALL FOR GPS' || (value)?.toUpperCase() === 'I') return '#73A235';
  if ((value)?.toUpperCase() === 'STICKERING' || (value)?.toUpperCase() === 'P') return '#A68CD9';
  if ((value)?.toUpperCase() === 'FAST TAG' || (value)?.toUpperCase() === 'BD') return '#FC8B09';
  return '#333333';
};
const selectBg = (value) => {
  if ((value)?.toUpperCase() === 'ND') return '#FEF0F5';
  if ((value)?.toUpperCase() === 'R') return '#F5F8CE';
  if ((value)?.toUpperCase() === 'FP') return '#e3e0ff';
  if ((value)?.toUpperCase() === 'B2B') return '#F2F2F2';
  if ((value)?.toUpperCase() === 'SERVICING' || (value)?.toUpperCase() === 'RN') return '#E5F5F4';
  if ((value)?.toUpperCase() === 'CALL FOR GPS' || (value)?.toUpperCase() === 'I') return '#F0FBE2';
  if ((value)?.toUpperCase() === 'STICKERING' || (value)?.toUpperCase() === 'P') return '#ECE2FF';
  if ((value)?.toUpperCase() === 'FAST TAG' || (value)?.toUpperCase() === 'BD') return '#FFE9D1';
};
const columns = [
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
    title: 'Trips',
    children: [
      {
        title: 'Mon',
        dataIndex: 'mon',
        key: 'mon',
        align: 'center',
        render(text) {
          return {
            props: {
              style: {
                fontStyle: 'Montserrat',
                color: selectColor(text),
                fontWeight: '600',
                background: '#F1FAFA',
                fontSize: '10px',
              },
            },
            children: <div className="rounded-xl px-2 py-1" style={{ backgroundColor: selectBg(text) }}>{text}</div>,
          };
        },
      },
      {
        title: 'Tue',
        dataIndex: 'tue',
        key: 'tue',
        align: 'center',
        render(text) {
          return {
            props: {
              style: {
                fontStyle: 'Montserrat',
                color: selectColor(text),
                fontWeight: '600',
                background: '#F1FAFA',
                fontSize: '10px',
              },
            },
            children: <div className="rounded-xl px-2 py-1" style={{ backgroundColor: selectBg(text) }}>{text}</div>,
          };
        },
      },
      {
        title: 'Wed',
        dataIndex: 'wed',
        key: 'wed',
        align: 'center',
        render(text) {
          return {
            props: {
              style: {
                fontStyle: 'Montserrat',
                color: selectColor(text),
                fontWeight: '600',
                background: '#F1FAFA',
                fontSize: '10px',
              },
            },
            children: <div className="rounded-xl px-2 py-1" style={{ backgroundColor: selectBg(text) }}>{text}</div>,
          };
        },
      },
      {
        title: 'Thu',
        dataIndex: 'thu',
        key: 'thu',
        align: 'center',
        render(text) {
          return {
            props: {
              style: {
                fontStyle: 'Montserrat',
                color: selectColor(text),
                fontWeight: '600',
                background: '#F1FAFA',
                fontSize: '10px',
              },
            },
            children: <div className="rounded-xl px-2 py-1" style={{ backgroundColor: selectBg(text) }}>{text}</div>,
          };
        },
      },
      {
        title: 'Fri',
        dataIndex: 'fri',
        key: 'fri',
        align: 'center',
        render(text) {
          return {
            props: {
              style: {
                fontStyle: 'Montserrat',
                color: selectColor(text),
                fontWeight: '600',
                background: '#F1FAFA',
                fontSize: '10px',
              },
            },
            children: <div className="rounded-xl px-2 py-1" style={{ backgroundColor: selectBg(text) }}>{text}</div>,
          };
        },
      },
      {
        title: 'Sat',
        dataIndex: 'sat',
        key: 'sat',
        align: 'center',
        render(text) {
          return {
            props: {
              style: {
                fontStyle: 'Montserrat',
                color: selectColor(text),
                fontWeight: '600',
                background: '#F1FAFA',
                fontSize: '10px',
              },
            },
            children: <div className="rounded-xl px-2 py-1" style={{ backgroundColor: selectBg(text) }}>{text}</div>,
          };
        },
      },
      {
        title: 'Sun',
        dataIndex: 'sun',
        key: 'sun',
        align: 'center',
        render(text) {
          return {
            props: {
              style: {
                fontStyle: 'Montserrat',
                color: selectColor(text),
                fontWeight: '600',
                background: '#F1FAFA',
                fontSize: '10px',
              },
            },
            children: <div className="rounded-xl px-2 py-1" style={{ backgroundColor: selectBg(text) }}>{text}</div>,
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
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render(text) {
      return {
        props: {
          style: {
            color: selectColor(text),
            padding: '6px',
            fontWeight: '600',
            fontSize: '10px',
          },
        },
        children: <div className="rounded-xl px-2 py-1" style={{ backgroundColor: selectBg(text) }}>{text}</div>,
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
  const [tableData, setTableData] = useState([]);
  const [searchValue1, setSearchValue1] = useState(null);
  const [searchValue2, setSearchValue2] = useState(null);
  const [searchValue3, setSearchValue3] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState({ status: 'Car Not Driven', shortForm: 'ND' });

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
    onFetchCarDailyReportApi(calenderDate, teamID, days)
      .then((res) => {
        setTableData(res.data);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, [teamID, calenderDate]);
  const menuObject = [
    { status: 'Car Driven', shortForm: 0 },
    { status: 'Car Not Driven', shortForm: 'ND' },
    { status: 'Repair', shortForm: 'R' },
    { status: 'Insurance', shortForm: 'I' },
    { status: 'Breakdown', shortForm: 'BD' },
    { status: 'B2B Cars', shortForm: 'B2B' },
    { status: 'Rental', shortForm: 'RN' },
    { status: 'FP-Fitness Parking', shortForm: 'FP' },
    { status: 'Parking', shortForm: 'P' },
  ];
  const menu = (
    <Menu>
      {menuObject.map((arrayItem, index) => (
        <Menu.Item
          key={index.toString()}
          onClick={() => {
            setSelected(arrayItem);
          }}
        >
          <p className="text-[#333333] text-xs mt-0.5 mb-0 font-mulish-bold">{arrayItem?.status}</p>
        </Menu.Item>
      ))}
    </Menu>
  );
  const globalSearch1 = (value) => {
    setSearchValue1(value);
  };
  const globalSearch2 = (value) => {
    setSearchValue2(value);
  };
  const globalSearch3 = (value) => {
    setSearchValue3(value);
  };

  const tableDataTemp = tableData.filter((item) => {
    let ndCount = 0;
    if (selected?.status === 'Car Driven') {
      if (Number(item?.day1_trips) > 0) ndCount += 1;
      if (Number(item?.day2_trips) > 0) ndCount += 1;
      if (Number(item?.day3_trips) > 0) ndCount += 1;
      if (Number(item?.day4_trips) > 0) ndCount += 1;
      if (Number(item?.day5_trips) > 0) ndCount += 1;
      if (Number(item?.day6_trips) > 0) ndCount += 1;
      if (Number(item?.day7_trips) > 0) ndCount += 1;
    } else {
      if ((item?.day1_trips)?.toUpperCase() === selected?.shortForm) ndCount += 1;
      if ((item?.day2_trips)?.toUpperCase() === selected?.shortForm) ndCount += 1;
      if ((item?.day3_trips)?.toUpperCase() === selected?.shortForm) ndCount += 1;
      if ((item?.day4_trips)?.toUpperCase() === selected?.shortForm) ndCount += 1;
      if ((item?.day5_trips)?.toUpperCase() === selected?.shortForm) ndCount += 1;
      if ((item?.day6_trips)?.toUpperCase() === selected?.shortForm) ndCount += 1;
      if ((item?.day7_trips)?.toUpperCase() === selected?.shortForm) ndCount += 1;
    }
    const { total_trips: totalTrips } = item;
    if (searchValue1 && searchValue2 && searchValue3
      && (Number(totalTrips) >= Number(searchValue1)
        && Number(totalTrips) <= Number(searchValue2))
      && Number(ndCount) === Number(searchValue3)
    ) {
      return item;
    } if (searchValue1 && searchValue2 && !searchValue3
      && (Number(totalTrips) >= Number(searchValue1)
        && Number(totalTrips) <= Number(searchValue2))
    ) {
      return item;
    } if (!searchValue1 && !searchValue2 && searchValue3
      && Number(ndCount) === Number(searchValue3)) {
      return item;
    }
    if (!searchValue1 && !searchValue2 && !searchValue3) {
      return item;
    }
  });

  const data = tableDataTemp.sort((a, b) => (
    (Number(a.total_trips) > Number(b.total_trips)) ? 1 : -1))
    .map((item, index) => {
      const driverName = !item?.name ? '' : item?.name?.split(',').join(' / ');
      const status = !item?.status ? '' : item?.status?.split('_').join(' ');
      return ({
        key: index,
        carNo: item?.car_number,
        name: driverName,
        mon: item?.day1_trips,
        tue: item?.day2_trips,
        wed: item?.day3_trips,
        thu: item?.day4_trips,
        fri: item?.day5_trips,
        sat: item?.day6_trips,
        sun: item?.day7_trips,
        totalTrips: item?.total_trips,
        status,
      });
    });
  // return null during page loading or data fetching error
  if (pageState === 'loading' || pageState === 'error') return null;
  return (
    <div className="row">
      <div className="col-12 mb-4">
        <div className="border-solid rounded-md bg-[#FFFFFF] py-3 px-4">
          <div className="row">
            <div className="col-3 mr-3">
              <p className="text-xs m-1 text-[rgb(51,51,51)] font-semibold">Total Trips</p>
              <Input.Group size="medium">
                <div className=" d-flex flex-row">
                  <Input
                    // defaultValue="0571"
                    placeholder="from"
                    suffix={(
                      <button
                        type="button"
                        onClick={() => setSearchValue1('')}
                        className="border-solid px-0.5 rounded-full border-1 hover:bg-[#E5F5F4] border-[#e7eaea] text-[#acc5c8] m-0"
                      >
                        x

                      </button>
                    )}
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
              <p className="text-xs m-1 text-[#333333] font-semibold">Car Status</p>
              <Dropdown onClick={() => setIsActive(!isActive)} overlay={isActive === true ? menu : ''}>
                <Button className="w-100" style={{ width: '240px', fontSize: '10px', color: '#86A1A4' }}>
                  <Row>
                    <Col span={22} className="d-flex flex-row justify-content-start">
                      <span className="text-xs">
                        {selected?.status}
                      </span>
                    </Col>
                    <Col span={2} className="text-end">
                      <CaretDownOutlined className="text-end" style={{ fontSize: '12px', color: '#86A1A4' }} />
                    </Col>
                  </Row>
                </Button>
              </Dropdown>
            </div>
            <div className="col-2 mt-4">
              <Input
                size="medium"
                suffix={(
                  <button
                    type="button"
                    onClick={() => setSearchValue3('')}
                    className="border-solid px-0.5 rounded-full border-1 hover:bg-[#E5F5F4] border-[#e7eaea] text-[#acc5c8] m-0"
                  >
                    x

                  </button>
                )}
                onChange={({ target: { value } }) => globalSearch3(value)}
                value={searchValue3}
                placeholder="Enter Days"
                style={{ width: '140px' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  );
};
export default WithPageHandler(DriverRatingReportTable);
