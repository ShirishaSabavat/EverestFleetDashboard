import { Helmet } from 'react-helmet';
import Dashboard from 'components/app/home/dashboard/carManagement/index';
import { useDayCalenderContext } from 'context/dayCalenderContext';
import { useEffect, useState } from 'react';
import { onFetchCarStatusApi } from 'services/axios';
import { useTeamContext } from 'context/teamIDContext';

const CarManagementPage = () => {
  const { teamID } = useTeamContext();
  const { dayCalenderDate } = useDayCalenderContext();
  const [carStatus, setCarStatus] = useState();

  useEffect(() => {
    onFetchCarStatusApi(teamID, dayCalenderDate)
      .then((response) => {
        // do something with JSON response data
        setCarStatus(response?.data?.[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [teamID, dayCalenderDate]);
  return (
    <>
      <Helmet title="Dashboard" />
      <div style={{ fontFamily: 'montserrat', paddingLeft: '5px' }} className="container flex flex-col mt-2 mb-4">
        <div className="row mt-5 mb-0 pl-2 pr-10">
          <div className="col-6">
            <h3 className="font-bold text-[#333333] text-2xl pl-0">
              Car Management
            </h3>
          </div>
          <div className="col-6 d-flex flex-row justify-content-end text-end">
            <div>
              <p className="text-[#86A1A4] font-medium text-xs m-0">
                Total Cars
              </p>
              <p className="text-[#013453] font-semibold text-lg m-0">
                {carStatus?.total_cars || 0}
              </p>
            </div>
          </div>
        </div>
        <Dashboard carStatus={carStatus} />
      </div>
    </>
  );
};
export default CarManagementPage;
