import { Helmet } from 'react-helmet';
import DeadKmsReportTable from 'components/app/home/dashboard/deadKMsReport/index';

const HisaabPage = () => (
  <>
    <Helmet title="Dead KM Report" />
    <div style={{ fontFamily: 'montserrat' }} className="flex flex-col pl-3 pr-10 mb-4">
      <div className="mt-5 mb-0">
        <span className="font-bold text-[#333333] text-2xl">
          Dead KMs Report
        </span>
      </div>
      <DeadKmsReportTable />
    </div>
  </>
);

export default HisaabPage;
