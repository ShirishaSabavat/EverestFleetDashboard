import { useState, useEffect } from 'react';
import WithPageHandler from 'components/layouts/pageHandler';
import '@fontsource/montserrat';
import { useCalenderContext } from 'context/calenderContext';
import { useTeamContext } from 'context/teamIDContext';
import { Col, Row } from 'antd';
import {
  onFetchCarSummaryApi, onFetchIncentiveApi, onFetchIncentivesDataApi,
  onFetchMetricForCarsApi,
} from '../../../../../services/axios';
import CarDetails from './carDetails';
import OnlineHourDetails from './onlineHourDetails';
import TripDetails from './tripDetails';
import RevenueDetails from './revenueDetails';
import IncentivesDetails from './IncentivesDetails';
import MetricForCars from './metricForCars';

// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve) => {
  setTimeout(() => resolve(), 1000);
});

const CarManagement = ({
  pageState,
  setPageState,
}) => {
  const { calenderDate } = useCalenderContext();
  const { teamID, cityID } = useTeamContext();

  const [carSummary = {}, setCarSummary] = useState();
  const [incentives = [], setIncentives] = useState();
  const [incentivesData = [], setIncentivesData] = useState();
  const [metricForCars = [], setMetricForCars] = useState();

  // const [onClickValue, setOnClickValue] = useState(false);
  // const [moreDetailsTable, setMoreDetailsTable] = useState(false);
  const onFetchData = async () => {
    try {
      await promise;
      setPageState('loaded');
    } catch (error) {
      setPageState('error');
    }
  };

  useEffect(async () => {
    onFetchData();
    if (!calenderDate.startOfWeek || !calenderDate.endOfWeek) return;
    const hisaabPromises = [];
    hisaabPromises.push(await onFetchCarSummaryApi(teamID, calenderDate));
    hisaabPromises.push(await onFetchIncentiveApi(calenderDate, cityID));
    hisaabPromises.push(await onFetchIncentivesDataApi(teamID, calenderDate));
    hisaabPromises.push(await onFetchMetricForCarsApi(teamID, calenderDate));

    try {
      const response = await Promise.all([
        hisaabPromises,
      ]);
      setCarSummary(response[0][0].data[0]);
      setIncentives(response[0][1].data);
      setIncentivesData(response[0][2].data);
      setMetricForCars(response[0][3].data);
    } catch (error) {
      console.error(error);
    }
  }, [teamID, calenderDate, cityID]);

  // return null during page loading or data fetching error
  if (pageState === 'loading' || pageState === 'error') return null;
  return (
    <div style={{ fontFamily: 'montserrat' }}>
      <Row gutter={16}>
        <Col span={7}>
          <div
            style={{
              height: '260px', marginBottom: '10px', marginRight: '-5px', backgroundColor: '#ffffff', boxShadow: '0px 3px 12px #0000000F', borderRadius: '9px', opacity: 1,
            }}
          >
            <div className="p-3">
              <p className="text-[#333333] text-base font-semibold m-0">Car Details</p>
            </div>
            <hr style={{
              height: '1.25px', color: '#CED4D4', margin: '0px',
            }}
            />
            <CarDetails carSummary={carSummary} />
          </div>
        </Col>
        <Col span={10}>
          <div
            style={{
              height: '260px', marginBottom: '10px', marginRight: '-5px', backgroundColor: '#ffffff', boxShadow: '0px 3px 12px #0000000F', borderRadius: '9px', opacity: 1,
            }}
          >
            <div className="p-3">
              <p className="text-[#333333] text-base font-semibold m-0">Online Hour Details</p>
            </div>
            <hr style={{
              height: '1.25px', color: '#CED4D4', margin: '0px',
            }}
            />
            <OnlineHourDetails carSummary={carSummary} />
          </div>
        </Col>
        <Col span={7}>
          <div
            style={{
              height: '260px', marginBottom: '10px', backgroundColor: '#ffffff', boxShadow: '0px 3px 12px #0000000F', borderRadius: '9px', opacity: 1,
            }}
          >
            <div className="p-3">
              <p className="text-[#333333] text-base font-semibold m-0">Trip Details</p>
            </div>
            <hr style={{
              height: '1.25px', color: '#CED4D4', margin: '0px',
            }}
            />
            <TripDetails carSummary={carSummary} />
          </div>
        </Col>
        <Col span={7}>
          <div
            style={{
              minHeight: '600px', marginBottom: '10px', marginRight: '-5px', backgroundColor: '#ffffff', boxShadow: '0px 3px 12px #0000000F', borderRadius: '9px', opacity: 1,
            }}
          >
            <div className="p-3">
              <p className="text-[#333333] text-base font-semibold m-0">Revenue Details</p>
            </div>
            <hr style={{
              height: '1.25px', color: '#CED4D4', margin: '0px',
            }}
            />
            <RevenueDetails carSummary={carSummary} />
          </div>
        </Col>
        <Col span={17}>
          <Row gutter={16}>
            <Col span={24}>
              <div style={{ marginBottom: '0px' }}>
                <IncentivesDetails incentives={incentives} incentivesData={incentivesData} />
              </div>
            </Col>
            <Col span={24}>
              <div
                style={{
                  minHeight: '290px', marginTop: '0px', marginBottom: '10px', backgroundColor: '#ffffff', boxShadow: '0px 3px 12px #0000000F', borderRadius: '9px', opacity: 1,
                }}
              >
                <div className="p-3">
                  <p className="text-[#333333] text-base font-semibold m-0">Metric for Details</p>
                </div>
                <hr style={{
                  height: '1.25px', color: '#CED4D4', margin: '0px',
                }}
                />
                <MetricForCars metricForCars={metricForCars} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default WithPageHandler(CarManagement);
