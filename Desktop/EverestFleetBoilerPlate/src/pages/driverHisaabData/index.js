import { Helmet } from 'react-helmet';
import Dashboard from 'components/app/home/dashboard/driverHisaabData/index';
import { useCalenderContext } from 'context/calenderContext';
import moment from 'moment';

const DriverHisaabDataPage = () => {
  const { calenderDate } = useCalenderContext();
  return (
    <>
      <Helmet title="Dashboard" />
      <div style={{ fontFamily: 'montserrat', paddingLeft: '50px', paddingRight: '50px' }} className="container flex flex-col mb-4">
        <div className="row mt-5 mb-0 pl-2 pr-10">
          <div className="col-6">
            <h3 className="font-bold text-[#333333] text-2xl pl-0">
              Driver Hisaab
            </h3>
          </div>
          <div className="col-6 d-flex flex-row justify-content-end text-end">
            <div>
              <p className="text-[#37BDC8] font-semibold text-sm mt-2 mb-0">
                Date:
                {' '}
                <span className="text-[#013453] m-0">
                  {moment(calenderDate.startOfWeek).format('D')}
                  {' '}
                  -
                  {' '}
                  {moment(calenderDate.endOfWeek).format('D MMM YYYY')}
                </span>
              </p>
            </div>
          </div>
        </div>
        <Dashboard />
      </div>
    </>
  );
};

export default DriverHisaabDataPage;
