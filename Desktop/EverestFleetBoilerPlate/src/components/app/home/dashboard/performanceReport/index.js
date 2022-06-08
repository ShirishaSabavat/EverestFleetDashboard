/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import WithPageHandler from 'components/layouts/pageHandler';
import { Tabs } from 'antd';
import { onFetchDriverWeeklyApi, onFetchDriverDailyApi } from 'services/axios';
import { useCalenderContext } from 'context/calenderContext';
import { useTeamContext } from 'context/teamIDContext';
import SideBar from './sideBar';
import '@fontsource/montserrat';

const { TabPane } = Tabs;

// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve) => {
  setTimeout(() => resolve(), 1000);
});

const CarManagement = ({
  pageState,
  setPageState,
  pikerCount,
  laggardCount,
  mediocreCount,
  performerCount,
  outperformerCount,
  newCount,
}) => {
  const { teamID, driverID, setDriverID } = useTeamContext();
  const { calenderDate } = useCalenderContext();
  const [driverList = [], setDriverList] = useState([]);
  const [driverDailyData = [], setDriverDailyData] = useState([]);
  const [defaultDriverRating = '', setDefaultDriverRating] = useState('New');
  const [selectedDriverData = {}, setSelectedDriverData] = useState({});
  const [cRSearchValue = '', setCRSearchValue] = useState();
  localStorage.setItem('startOfWeek', calenderDate.startOfWeek);
  localStorage.setItem('endOfWeek', calenderDate.endOfWeek);

  const handleChange = (key) => {
    setDefaultDriverRating(key);
    setCRSearchValue('');
  };

  const onSearchCar = (value) => {
    setCRSearchValue(value);
  };
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
    onFetchDriverWeeklyApi(defaultDriverRating, teamID, calenderDate)
      .then((response) => {
        setDriverList(response.data);
        setDriverID({ driverIDValue: response.data[0]?.driver_id || '', carCode: '0' });
        setSelectedDriverData(response.data?.[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [teamID, calenderDate, defaultDriverRating]);

  useEffect(() => {
    onFetchData();
    onFetchDriverDailyApi(driverID.driverIDValue || 0, defaultDriverRating, teamID, calenderDate)
      .then((resp) => {
        setDriverDailyData(resp?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [driverID, defaultDriverRating, teamID, calenderDate]);

  // return null during page loading or data fetching error
  if (pageState === 'loading' || pageState === 'error') return null;
  return (
    <div style={{ fontFamily: 'montserrat' }}>
      <Tabs defaultActiveKey="1" onChange={handleChange}>
        <TabPane tab={`New (${newCount})`} key="New">
          <SideBar
            driverRating={newCount}
            driverRatingName="New"
            driverList={driverList}
            driverDailyData={driverDailyData}
            selectedDriverData={selectedDriverData}
            setSelectedDriverData={setSelectedDriverData}
            onSearchCar={onSearchCar}
            cRSearchValue={cRSearchValue}
          />
        </TabPane>
        <TabPane tab={`Piker (${pikerCount})`} key="Piker">
          <SideBar
            driverRating={pikerCount}
            driverRatingName="Piker"
            driverList={driverList}
            driverDailyData={driverDailyData}
            selectedDriverData={selectedDriverData}
            setSelectedDriverData={setSelectedDriverData}
            onSearchCar={onSearchCar}
            cRSearchValue={cRSearchValue}
          />
        </TabPane>
        <TabPane tab={`Laggard (${laggardCount})`} key="Laggard">
          <SideBar
            driverRating={laggardCount}
            driverRatingName="Laggard"
            driverList={driverList}
            driverDailyData={driverDailyData}
            selectedDriverData={selectedDriverData}
            setSelectedDriverData={setSelectedDriverData}
            onSearchCar={onSearchCar}
            cRSearchValue={cRSearchValue}
          />
        </TabPane>
        <TabPane tab={`Mediocre (${mediocreCount})`} key="Mediocre">
          <SideBar
            driverRating={mediocreCount}
            driverRatingName="Mediocre"
            driverList={driverList}
            driverDailyData={driverDailyData}
            selectedDriverData={selectedDriverData}
            setSelectedDriverData={setSelectedDriverData}
            onSearchCar={onSearchCar}
            cRSearchValue={cRSearchValue}
          />
        </TabPane>
        <TabPane tab={`Performer (${performerCount})`} key="Performer">
          <SideBar
            driverRating={performerCount}
            driverRatingName="Performer"
            driverList={driverList}
            driverDailyData={driverDailyData}
            selectedDriverData={selectedDriverData}
            setSelectedDriverData={setSelectedDriverData}
            onSearchCar={onSearchCar}
            cRSearchValue={cRSearchValue}
          />
        </TabPane>
        <TabPane tab={`Outperformer (${outperformerCount})`} key="Outperformer">
          <SideBar
            driverRating={outperformerCount}
            driverRatingName="Outperformer"
            driverList={driverList}
            driverDailyData={driverDailyData}
            selectedDriverData={selectedDriverData}
            setSelectedDriverData={setSelectedDriverData}
            onSearchCar={onSearchCar}
            cRSearchValue={cRSearchValue}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default WithPageHandler(CarManagement);
