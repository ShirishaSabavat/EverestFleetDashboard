import { Table, Input } from 'antd';
import { useEffect, useState } from 'react';
import { onFetchDeadKMReportApi } from 'services/axios';
import { useDayCalenderContext } from 'context/dayCalenderContext';
import { useTeamContext } from 'context/teamIDContext';
import WithPageHandler from 'components/layouts/pageHandler';

// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve) => {
  setTimeout(() => resolve(), 3000);
});

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
            fontStyle: 'Montserrat', color: '#86A1A4', fontWeight: '600', opacity: 1,
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
            padding: '0px',
          },
        },
        children: <div>{text}</div>,
      };
    },
  },
  {
    title: 'Contact No.',
    dataIndex: 'contactNo',
    key: 'contactNo',
    align: 'center',

  },
  {
    title: 'Employee Id',
    dataIndex: 'employeeId',
    key: 'employeeId',
    align: 'center',

  },
  {
    title: 'GPS KMs',
    dataIndex: 'gpsKms',
    key: 'gpsKms',
    align: 'center',

  },
  {
    title: 'Duty',
    dataIndex: 'duty',
    key: 'duty',
    align: 'center',

  },
  {
    title: 'Uber KMs',
    dataIndex: 'uberKms',
    key: 'uberKms',
    align: 'center',

  },
  {
    title: 'Trips',
    dataIndex: 'trips',
    key: 'trips',
    align: 'center',

  },
  {
    title: 'Dead KMs',
    dataIndex: 'deadKms',
    key: 'deadKms',
    align: 'center',

  },
  {
    title: 'Flags',
    dataIndex: 'flags',
    key: 'flags',
    align: 'center',
    render(text, record) {
      return {
        props: {
          style: {
            color: record.flags === 'YES' ? '#73A235' : '#FC2109',
            padding: '6px',
            fontWeight: '600',
          },
        },
        children: <div className="rounded-xl px-2 py-1" style={{ backgroundColor: record.flags === 'YES' ? '#F0FBE2' : '#FEF0F5' }}>{text}</div>,
      };
    },
  },
];

const DeadKmsReportTable = ({
  pageState,
  setPageState,
}) => {
  const { teamID } = useTeamContext();
  const { dayCalenderDate } = useDayCalenderContext();
  const [tableData, setTableData] = useState([]);
  const [onSearchValue, setOnSearchValue] = useState('');
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
    onFetchDeadKMReportApi(teamID, dayCalenderDate)
      .then((res) => {
        setTableData(res?.data);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, [teamID, dayCalenderDate]);

  const globalSearch = (value) => {
    setOnSearchValue(value);
  };
  const tableDataTemp = tableData
    .filter(({
      employee_id: employeeId,
    }) => (
      `${employeeId}`.toLowerCase().includes(onSearchValue.toLowerCase())
    ));

  const data = tableDataTemp.sort((a, b) => (
    (a.dead_km < b.dead_km) ? 1 : -1))
    .map((item, index) => ({
      key: index,
      carNo: item?.car_number,
      name: item?.driver_name,
      contactNo: item?.mobile,
      employeeId: item?.employee_id,
      gpsKms: item?.gps_kms?.toFixed(1),
      duty: item?.duty.toUpperCase() !== 'NULL' ? item?.duty.toUpperCase() : '-',
      uberKms: item?.uber_km?.toFixed(1),
      trips: item?.trips,
      deadKms: item?.dead_km?.toFixed(1),
      flags: item?.flag.toUpperCase(),
    }));

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
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default WithPageHandler(DeadKmsReportTable);
