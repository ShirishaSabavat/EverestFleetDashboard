import { Helmet } from 'react-helmet';
import CarDailyReport from 'components/app/home/dashboard/carDailyReport/index';

const CarDailyReportPage = () => (
  <>
    <Helmet title="Dead KM Report" />
    <div style={{ fontFamily: 'montserrat' }} className="flex flex-col pl-3 pr-10 mb-4">
      <div className="mt-5 mb-3">
        <span className="font-bold text-[#333333] text-2xl">
          Car Daily Report
        </span>
      </div>
      <CarDailyReport />
    </div>
  </>
);

export default CarDailyReportPage;
