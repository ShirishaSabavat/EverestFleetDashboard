import { Helmet } from 'react-helmet';
import { useState } from 'react';
import DriverSummaryReportCharts from 'components/app/home/dashboard/driverSummaryReport/index';
import { Button, Input, notification } from 'antd';

const HisaabPage = () => {
  const [employeeId, setEmployeeId] = useState('ETM02055');
  const [empId, setEmpId] = useState('ETM02055');

  const onSearch = (event) => {
    event.preventDefault();
    if (employeeId === '') {
      notification.error({
        message: 'Please Enter Employee ID',
      });
    } else {
      setEmpId(employeeId);
    }
  };

  return (
    <>
      <Helmet title="Summary Report" />
      <div style={{ fontFamily: 'montserrat' }} className="flex flex-col pl-3 pr-10 mb-4">
        <div className="mt-5 mb-3">
          <span className="font-bold text-[#333333] text-2xl">
            Summary Report
          </span>
        </div>
        <div className="mt-3 mb-3">
          <Input
            placeholder="Enter Employee ID"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            style={{
              padding: '8px', margin: '8px', width: '33%',
            }}
          />
          <Button
            onClick={onSearch}
            type="primary"
            style={{
              borderRadius: '4px', fontWeight: '500', fontSize: '16px', width: '140px', height: '38px',
            }}
          >
            Search
          </Button>
        </div>
        <DriverSummaryReportCharts empId={empId} />
      </div>
    </>
  );
};
export default HisaabPage;
