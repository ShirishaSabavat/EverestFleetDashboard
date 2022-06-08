import { useState, useEffect } from 'react';
import WithPageHandler from 'components/layouts/pageHandler';
import { Tabs } from 'antd';
import '@fontsource/montserrat';
import { useDayCalenderContext } from 'context/dayCalenderContext';
import { useTeamContext } from 'context/teamIDContext';
import { useCalenderContext } from 'context/calenderContext';
import {
  onFetchCarDailySidebarApi, onFetchCarDailyTableApi, onFetchCarWeeklyCardApi,
} from '../../../../../services/axios';
import SideBar from './sideBar';

const { TabPane } = Tabs;

// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve) => {
  setTimeout(() => resolve(), 3000);
});

const CarManagement = (props) => {
  const {
    pageState,
    setPageState,
    carStatus = {},
  } = props;
  const { dayCalenderDate } = useDayCalenderContext();
  const {
    teamID, carType, carNumber, setCarNumber,
  } = useTeamContext();
  const { calenderDate } = useCalenderContext();

  const [cRSearchValue, setCRSearchValue] = useState();
  // const [searchBarValue, setSearchBarValue] = useState('');
  const [carStatusType, setCarStatusType] = useState(0);
  const [carDailySidebar = [], setCarDailySidebar] = useState();
  const [carDailyTable = [], setCarDailyTable] = useState();
  const [carWeeklyCard = {}, setCarWeeklyCard] = useState();
  const [onClickValue, setOnClickValue] = useState(false);

  const onFetchData = async () => {
    try {
      await promise;
      setPageState('loaded');
    } catch (error) {
      setPageState('error');
    }
  };
  // const handleCallback = (res) => {
  //   setCarNumber({ carNumberValue: res });
  //   // setCarStatusType(childData);
  // };
  useEffect(async () => {
    onFetchData();
    if (!dayCalenderDate.day) return;
    onFetchCarDailySidebarApi(
      carType[carStatusType],
      teamID,
      dayCalenderDate,
    ).then((resp) => {
      setCarDailySidebar(resp.data);
      setCarNumber({ carNumberValue: resp.data[0]?.car_number || '', carCode: '0' });
    })
      .catch((error) => {
        console.log(error);
      });
  }, [teamID, dayCalenderDate, carStatusType]);
  useEffect(() => {
    onFetchData();
    if (!calenderDate.startOfWeek || !calenderDate.endOfWeek) return;
    onFetchCarDailyTableApi(
      carType[carStatusType],
      teamID,
      calenderDate,
    )
      .then((resp) => {
        setCarDailyTable(resp?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [teamID, calenderDate, carStatusType]);

  useEffect(() => {
    onFetchData();
    onFetchCarWeeklyCardApi(carType[carStatusType], carNumber, teamID, calenderDate)
      .then((resp) => {
        setCarWeeklyCard(resp?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [carNumber]);

  useEffect(() => {
    onFetchData();
    if (!dayCalenderDate.day) return;
    onFetchCarDailySidebarApi(
      carType[carStatusType],
      teamID,
      dayCalenderDate,
    ).then((resp) => {
      setCarNumber({ carNumberValue: resp.data[0]?.car_number, carCode: '0' });
    })
      .catch((error) => {
        console.log(error);
      });
  }, [carStatusType]);

  const handleChange = (key) => {
    setCarStatusType(Number(key));
    setCRSearchValue('');
    setOnClickValue(false);
  };

  const onSearchCar = (value) => {
    setCRSearchValue(value);
  };

  // return null during page loading or data fetching error
  if (pageState === 'loading' || pageState === 'error') return null;
  return (
    <div style={{ fontFamily: 'montserrat' }}>
      <Tabs
        style={{ color: '#86A1A4', fontWeight: 'regular' }}
        defaultActiveKey="0"
        onChange={handleChange}
      >
        <TabPane tab={`Car Driven (${carStatus?.car_driven || 0})`} key="0">
          <SideBar
            onSearchCar={onSearchCar}
            cRSearchValue={cRSearchValue}
            carStatus={carStatus?.car_driven}
            carDailySidebar={carDailySidebar}
            carWeeklyCard={carWeeklyCard}
            carDailyTable={carDailyTable}
            headerName="Car Driven"
            onClickValue={onClickValue}
            setOnClickValue={setOnClickValue}
          />
        </TabPane>
        <TabPane tab={`Car Not Driven (${carStatus?.car_not_driven || 0})`} key="1">
          <SideBar
            onSearchCar={onSearchCar}
            cRSearchValue={cRSearchValue}
            carStatus={carStatus?.car_not_driven}
            carDailySidebar={carDailySidebar}
            carWeeklyCard={carWeeklyCard}
            carDailyTable={carDailyTable}
            headerName="Car Not Driven"
            onClickValue={onClickValue}
            setOnClickValue={setOnClickValue}
          />
        </TabPane>
        <TabPane tab={`Repair (${carStatus?.repair || 0})`} key="2">
          <SideBar
            onSearchCar={onSearchCar}
            cRSearchValue={cRSearchValue}
            carStatus={carStatus?.repair}
            carDailySidebar={carDailySidebar}
            carWeeklyCard={carWeeklyCard}
            carDailyTable={carDailyTable}
            headerName="Repair"
            onClickValue={onClickValue}
            setOnClickValue={setOnClickValue}
          />
        </TabPane>
        <TabPane tab={`Insurance (${carStatus?.insurance || 0})`} key="3">
          <SideBar
            onSearchCar={onSearchCar}
            cRSearchValue={cRSearchValue}
            carStatus={carStatus?.insurance}
            carDailySidebar={carDailySidebar}
            carWeeklyCard={carWeeklyCard}
            carDailyTable={carDailyTable}
            headerName="Insurance"
            onClickValue={onClickValue}
            setOnClickValue={setOnClickValue}
          />
        </TabPane>
        <TabPane tab={`Breakdown (${carStatus?.breakdown || 0})`} key="4">
          <SideBar
            onSearchCar={onSearchCar}
            cRSearchValue={cRSearchValue}
            carStatus={carStatus?.breakdown}
            carDailySidebar={carDailySidebar}
            carWeeklyCard={carWeeklyCard}
            carDailyTable={carDailyTable}
            headerName="Breakdown"
            onClickValue={onClickValue}
            setOnClickValue={setOnClickValue}
          />
        </TabPane>
        <TabPane tab={`B2B Cars (${carStatus?.b2b_cars || 0})`} key="5">
          <SideBar
            onSearchCar={onSearchCar}
            cRSearchValue={cRSearchValue}
            carStatus={carStatus?.b2b_cars}
            carDailySidebar={carDailySidebar}
            carWeeklyCard={carWeeklyCard}
            carDailyTable={carDailyTable}
            headerName="B2B Cars"
            onClickValue={onClickValue}
            setOnClickValue={setOnClickValue}
          />
        </TabPane>
        <TabPane tab={`Rental (${carStatus?.rental || 0})`} key="6">
          <SideBar
            onSearchCar={onSearchCar}
            cRSearchValue={cRSearchValue}
            carStatus={carStatus?.rental}
            carDailySidebar={carDailySidebar}
            carWeeklyCard={carWeeklyCard}
            carDailyTable={carDailyTable}
            headerName="Rental"
            onClickValue={onClickValue}
            setOnClickValue={setOnClickValue}
          />
        </TabPane>
        <TabPane tab={`FP-Fitness Parking (${carStatus?.fitness_parking || 0})`} key="7">
          <SideBar
            onSearchCar={onSearchCar}
            cRSearchValue={cRSearchValue}
            carStatus={carStatus?.fitness_parking}
            carDailySidebar={carDailySidebar}
            carWeeklyCard={carWeeklyCard}
            carDailyTable={carDailyTable}
            headerName="FP-Fitness Parking"
            onClickValue={onClickValue}
            setOnClickValue={setOnClickValue}
          />
        </TabPane>
        <TabPane tab={`Parking (${carStatus?.parking || 0})`} key="8">
          <SideBar
            onSearchCar={onSearchCar}
            cRSearchValue={cRSearchValue}
            carStatus={carStatus?.parking}
            carDailySidebar={carDailySidebar}
            carWeeklyCard={carWeeklyCard}
            carDailyTable={carDailyTable}
            headerName="Parking"
            onClickValue={onClickValue}
            setOnClickValue={setOnClickValue}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default WithPageHandler(CarManagement);
