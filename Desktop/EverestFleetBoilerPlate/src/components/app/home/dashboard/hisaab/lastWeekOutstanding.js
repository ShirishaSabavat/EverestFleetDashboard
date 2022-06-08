import { useState } from 'react';
import { useTeamContext } from 'context/teamIDContext';
import { Input, Table } from 'antd';
import { Link } from 'react-router-dom';
// import SeeMorePage from './seeMorePage';

const lastWeekOutstanding = (props) => {
  const {
    // hisaabDriverData = {},
    hisaabHighOS = [],
    // hisaabData = {},
    onSearchDriver,
    hisaabARValue = '',
  } = props;
  const { driverETM, setDriverETM } = useTeamContext();
  localStorage.setItem('driverETM', driverETM);

  const [onClickValue, setOnClickValue] = useState(false);

  const globalSearch = (value) => {
    onSearchDriver(value);
  };
  const driverDetailsFun = (driverETMValue) => {
    localStorage.setItem('driverETM', driverETMValue);
    setDriverETM(driverETMValue);
  };
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
      title: 'Contact No.',
      dataIndex: 'contactNo',
      key: 'contactNo',
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
      title: 'Employee Id',
      dataIndex: 'employeeId',
      key: 'employeeId',
      align: 'center',
      render(text) {
        return {
          props: {
            style: {
              fontStyle: 'Montserrat', color: '#333333', fontWeight: '600', fontSize: '11px',
            },
          },
          children: <div><Link onClick={() => { driverDetailsFun(text); setOnClickValue(true); }} className="no-underline font-semibold bg-[#ffffff] text-xs hover:bg-[#fff345]" to="/home/driverHisaabData" target="_blank">{text}</Link></div>,
        };
      },
    },
    {
      title: 'Last Payment Date',
      dataIndex: 'lastPaymentDate',
      key: 'lastPaymentDate',
      align: 'center',
      sorter: (a, b) => {
        const dateA = new Date(a?.lastPaymentDate);
        const dateB = new Date(b?.lastPaymentDate);
        return dateA - dateB;
      },
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
      title: 'Last Driven Date',
      dataIndex: 'lastDrivenDate',
      key: 'lastDrivenDate',
      align: 'center',
      width: 110,
      sorter: (a, b) => {
        const dateA = new Date(a?.lastDrivenDate);
        const dateB = new Date(b?.lastDrivenDate);
        return dateA - dateB;
      },
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
      title: 'Weekly Outstanding',
      dataIndex: 'weeklyOutstanding',
      key: 'weeklyOutstanding',
      align: 'center',
      sorter: (a, b) => Number(a.weeklyOutstanding) - Number(b.weeklyOutstanding),
      render(text) {
        return {
          props: {
            style: {
              fontStyle: 'Montserrat', color: '#013453', fontWeight: '600', fontSize: '12px',
            },
          },
          children: <div className={Number(text) < 0 ? 'text-[#FF0000]' : 'text-[#013453]'}>{text}</div>,
        };
      },
    },
    {
      title: 'Total Outstanding',
      dataIndex: 'totalOutstanding',
      key: 'totalOutstanding',
      align: 'center',
      sorter: (a, b) => Number(a.totalOutstanding) - Number(b.totalOutstanding),
      render(text) {
        return {
          props: {
            style: {
              fontStyle: 'Montserrat', color: '#013453', fontWeight: '600', fontSize: '12px',
            },
          },
          children: <div className={Number(text) < 0 ? 'text-[#FF0000]' : 'text-[#013453]'}>{text}</div>,
        };
      },
    },
    {
      title: 'Payment Recovery',
      dataIndex: 'paymentRecovery',
      key: 'paymentRecovery',
      align: 'center',
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

  // const roundNumber = (num) => Math.round(num * 1000) / 1000;
  const hisaabHighOSTemp = hisaabHighOS
    .filter(({
      driver_name: name,
      mobile,
      employee_id: employeeId,
    }) => (
      `${name}${mobile}${employeeId}`.toLowerCase().includes(hisaabARValue.toLowerCase())
    ));
  const data = hisaabHighOSTemp?.map((item, index) => ({
    key: index,
    name: item?.driver_name,
    contactNo: item?.mobile,
    employeeId: item?.employee_id,
    lastPaymentDate: item?.last_payment_date,
    lastDrivenDate: item?.last_driven_date,
    weeklyOutstanding: item?.weekly_outstanding?.toFixed(1),
    totalOutstanding: item?.outstanding?.toFixed(1),
    paymentRecovery: item?.recovery?.toFixed(1),
  }));
  return (
    <div className="row mt-2">
      <div className="col-12 d-flex flex-row justify-content-between px-4 mb-3">
        <h6 className="text-[#333333] text-md font-bold">Drivers with high Outstanding Pending</h6>
        <Input
          size="medium"
          // onSearch={onSearch}
          placeholder="Enter Name / ETM Id / Mobile No."
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
      <div className="col-12">
        <Table columns={columns} dataSource={data} pagination={false} />
        {/* <table className="text-[#333333] text-center text-xs w-100">
          <thead>
            <tr>
              <th className="font-normal p-3">Name</th>
              <th className="font-normal p-3">Contact No.</th>
              <th className="font-normal p-3">Employee Id</th>
              <th className="font-normal p-3">Last Payment Date</th>
              <th className="font-normal p-3">Last Driven Date</th>
              <th className="font-normal p-3">Weekly Outstanding</th>
              <th className="font-normal p-3">Total Outstanding</th>
              <th className="font-normal p-3">Payment Recovery</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(hisaabHighOSTemp) && hisaabHighOSTemp.length > 0
              ? hisaabHighOSTemp.sort((a, b) => (
                (a?.outstanding > b?.outstanding) ? 1 : -1))
                .map((object, index) => (
                  <tr key={index.toString()} className="font-semibold bg-[#ffffff]
                  text-[#333333] text-xs border-b-8 border-[#F1F0F1]">
                    <td className="py-4 mb-4">{object?.driver_name}</td>
                    <td className="py-4 mb-4">{object?.mobile}</td>
                    <td className="py-4 mb-4">
                      <Link
                        onClick={() => {
                          driverDetailsFun(object?.employee_id);
                          setOnClickValue(true);
                        }}
                        className="font-semibold bg-[#ffffff] text-xs hover:bg-[#fff345]"
                        to="/home/driverHisaabData"
                        target="_blank"
                      >
                        {object?.employee_id}
                      </Link>
                    </td>
                    <td className="text-[#86A1A4]">{object?.last_payment_date}</td>
                    <td className="text-[#86A1A4]">{object?.last_driven_date}</td>
                    <td className={object?.weekly_outstanding < 0
                      ? 'text-[#FF0000] text-sm' : 'text-[#013453] text-sm'}
                    >
                      <span className="font-sans font-semibold">₹</span>
                      {' '}
                      {typeof object?.weekly_outstanding !== 'number' ? 0
                        : roundNumber(object?.weekly_outstanding).toFixed(1)}
                    </td>
                    <td className={object?.outstanding < 0
                      ? 'text-[#FF0000] text-sm' : 'text-[#013453] text-sm'}
                    >
                      <span className="font-sans font-semibold">₹</span>
                      {' '}
                      {typeof object?.outstanding !== 'number' ? 0
                        : roundNumber(object?.outstanding).toFixed(1)}
                    </td>
                    <td className="text-[#013453] text-sm">
                      <span className="font-sans font-semibold">₹</span>
                      {' '}
                      {typeof object?.recovery !== 'number' ? 0
                        : roundNumber(object?.recovery).toFixed(1)}
                    </td>
                  </tr>
                ))
              : (
                <tr key="1" className="font-semibold bg-[#ffffff] text-[#333333] text-xs">
                  <td className="py-4 text-center"> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td className="text-center">-- No Records --</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
              )}
          </tbody>
        </table> */}
      </div>
      <div className={onClickValue === true ? 'col-12 container' : 'col-12 container d-none'}>
        {/* <SeeMorePage
          hisaabDriverData={hisaabDriverData}
          hisaabData={hisaabData}
          onSearchDriver={onSearchDriver}
        /> */}
      </div>
    </div>
  );
};
export default lastWeekOutstanding;
