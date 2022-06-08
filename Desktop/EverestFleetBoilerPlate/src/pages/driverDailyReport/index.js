import { Helmet } from 'react-helmet';
import DriverDailyReport from 'components/app/home/dashboard/driverDailyReport/index';
import WithPageHandler from 'components/layouts/pageHandler';
import { useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve) => {
  setTimeout(() => resolve(), 3000);
});

const DriverDailyReportPage = ({
  pageState,
  setPageState,
}) => {
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
  }, []);
  // return null during page loading or data fetching error
  if (pageState === 'loading' || pageState === 'error') return null;

  return (
    <>
      <Helmet title="Dead KM Report" />
      <div style={{ fontFamily: 'montserrat' }} className="flex flex-col pl-3 pr-10 mb-4">
        <div className="mt-5 mb-3">
          <span className="font-bold text-[#333333] text-2xl">
            Driver Daily Report
          </span>
        </div>
        <DriverDailyReport />
      </div>
    </>
  );
};
export default WithPageHandler(DriverDailyReportPage);
