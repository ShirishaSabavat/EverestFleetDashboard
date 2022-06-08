import { Helmet } from 'react-helmet';
import Dashboard from 'components/app/home/dashboard/driverHisaab/index';

const DriverHisaabPage = () => (
  <>
    <Helmet title="Dashboard" />
    <div style={{ fontFamily: 'montserrat' }} className="flex flex-col pl-3 pr-10 mb-4">
      <div className="mt-5 mb-3">
        <span className="font-bold text-[#333333] text-2xl">
          Driver Hisaab
        </span>
      </div>
      <Dashboard />
    </div>
  </>
);

export default DriverHisaabPage;
