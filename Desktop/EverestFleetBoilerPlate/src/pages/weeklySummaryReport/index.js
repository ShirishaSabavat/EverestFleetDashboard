import { Helmet } from 'react-helmet';
import Dashboard from 'components/app/home/dashboard/weeklySummaryReport/index';

const HisaabPage = () => (
  <>
    <Helmet title="Dashboard" />
    <div style={{ fontFamily: 'montserrat' }} className="flex flex-col pl-3 pr-10 mb-4">
      <div className="mt-5 mb-3">
        <span className="font-bold text-[#333333] text-2xl">
          Weekly Summary Report
        </span>
      </div>
      <Dashboard />
    </div>
  </>
);

export default HisaabPage;
