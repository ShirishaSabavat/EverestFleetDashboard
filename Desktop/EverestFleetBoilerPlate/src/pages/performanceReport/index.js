import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTeamContext } from 'context/teamIDContext';
import { useDayCalenderContext } from 'context/dayCalenderContext';
import Dashboard from 'components/app/home/dashboard/performanceReport/index';
import { onFetchDriverRatingApi } from 'services/axios';

const CarManagementPage = () => {
  const { teamID } = useTeamContext();
  const { dayCalenderDate } = useDayCalenderContext();
  const [totalDrivers, setTotalDrivers] = useState();
  const [pikerCount, setPikerCount] = useState();
  const [laggardCount, setLaggardCount] = useState();
  const [mediocreCount, setMediocreCount] = useState();
  const [performerCount, setPerformerCount] = useState();
  const [outperformerCount, setOutperformerCount] = useState();
  const [newCount, setNewCount] = useState();
  useEffect(() => {
    onFetchDriverRatingApi(teamID, dayCalenderDate)
      .then((response) => {
        // do something with JSON response data
        setTotalDrivers(response.data?.total_driver);
        setPikerCount(response.data?.piker);
        setLaggardCount(response.data?.laggard);
        setMediocreCount(response.data?.mediocre);
        setPerformerCount(response.data?.performer);
        setOutperformerCount(response.data?.outperformer);
        setNewCount(response.data?.new);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [teamID, dayCalenderDate]);
  return (
    <>
      <Helmet title="Performance" />
      <div style={{ fontFamily: 'montserrat', paddingLeft: '5px' }} className="container flex flex-col mt-2 mb-4">
        <div className="row mt-5 mb-0 pl-2 pr-10">
          <div className="col-6">
            <h3 className="font-bold text-[#333333] text-2xl pl-0">
              Performance Report
            </h3>
          </div>
          <div className="col-6 d-flex flex-row justify-content-end text-end">
            <div>
              <p className="text-[#86A1A4] font-medium text-xs m-0">
                Total Drivers
              </p>
              <p className="text-[#013453] font-semibold text-lg m-0">
                {totalDrivers || 0}
              </p>
            </div>
          </div>
        </div>
        <Dashboard
          pikerCount={pikerCount || 0}
          laggardCount={laggardCount || 0}
          mediocreCount={mediocreCount || 0}
          performerCount={performerCount || 0}
          outperformerCount={outperformerCount || 0}
          newCount={newCount || 0}
        />
      </div>
    </>
  );
};
export default CarManagementPage;
