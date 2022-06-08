import {
  Button, Card, Col, Dropdown, Row, Menu,
} from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import WithPageHandler from 'components/layouts/pageHandler';
import { useTeamContext } from 'context/teamIDContext';
import { useCalenderContext } from 'context/calenderContext';
import { useDayCalenderContext } from 'context/dayCalenderContext';
import { onFetchAllTeamsApi, onFetchWeeklyCompareApi, onFetchWeeklyCompareUberKmApi } from 'services/axios';
import moment from 'moment';
import WeekCompareTable from './weekCompareTable';
// import WeekCompareTable from './weekCompareTable';
import TableCard from './tableCard';
import BlankImg from '../../../../../assets/images/blankImg.png';

// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve) => {
  setTimeout(() => resolve(), 1000);
});

const weeklySumReport = ({
  pageState,
  setPageState,
}) => {
  const { teamID, cityID, managerID } = useTeamContext();
  const { calenderDate, onChangeWeekDate } = useCalenderContext();
  const { dayCalenderDate } = useDayCalenderContext();

  const [allTeamsData = [], setAllTeamsData] = useState();
  const [weeklyCompare = [], setWeeklyCompare] = useState();
  const [weeklyCompareUberKm = [], setWeeklyCompareUberKm] = useState();
  const [isActive, setIsActive] = useState(false);
  const [onSelected, setOnSelected] = useState(false);
  // const [onClickValue, setOnClickValue] = useState(false);
  const [selected, setSelected] = useState({});
  const [selectedTeam, setSelectedTeam] = useState(teamID.teamIDValue);
  const [selectedTable, setSelectedTable] = useState();

  const selectedTeamFunction = (array, data1, data2) => {
    const teamDetails = array.filter((item) => item?.id === Number(teamID.teamIDValue));
    if (onSelected === false) {
      setSelected({
        key: teamDetails?.[0]?.id,
        src: teamDetails?.[0]?.Logo,
        teamName: `${teamDetails?.[0]?.name} Team`,
        table: <WeekCompareTable weeklyCompare={data1} weeklyCompareUberKm={data2} />,
      });
      setSelectedTable(<WeekCompareTable weeklyCompare={data1} weeklyCompareUberKm={data2} />);
    } else {
      setSelectedTable(
        <WeekCompareTable weeklyCompare={data1} weeklyCompareUberKm={data2} />,
      );
    }
  };
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
    let currentWeekDate = {};
    const startWeek = new Date(moment().startOf('isoweek').format('YYYY-MM-DD'));
    const endWeek = new Date(moment().endOf('isoweek').format('YYYY-MM-DD'));
    const dayDate = new Date(dayCalenderDate.day);
    if (!onChangeWeekDate
      && (dayDate.getTime() >= startWeek.getTime() && dayDate.getTime() <= endWeek.getTime())) {
      currentWeekDate = {
        startOfWeek: moment().startOf('isoweek').format('YYYY-MM-DD'),
        endOfWeek: moment().subtract(1, 'days').format('YYYY-MM-DD'),
      };
    }
    if (!onChangeWeekDate
      && (dayDate.getTime() < startWeek.getTime())) {
      currentWeekDate = {
        startOfWeek: moment().startOf('isoweek').subtract(1, 'week').format('YYYY-MM-DD'),
        endOfWeek: moment().endOf('isoweek').subtract(1, 'week').format('YYYY-MM-DD'),
      };
    }
    if (onChangeWeekDate
      && (dayDate.getTime() >= startWeek.getTime() && dayDate.getTime() <= endWeek.getTime())) {
      currentWeekDate = {
        startOfWeek: moment().startOf('isoweek').format('YYYY-MM-DD'),
        endOfWeek: moment().subtract(1, 'days').format('YYYY-MM-DD'),
      };
    }
    if (onChangeWeekDate && (dayDate.getTime() <= startWeek.getTime())) {
      currentWeekDate = calenderDate;
    }
    const hisaabPromises = [];
    hisaabPromises.push(await onFetchAllTeamsApi());
    hisaabPromises.push(await onFetchWeeklyCompareApi(selectedTeam, calenderDate));
    hisaabPromises.push(await onFetchWeeklyCompareUberKmApi(selectedTeam, currentWeekDate));
    try {
      const response = await Promise.all([
        hisaabPromises,
      ]);
      setAllTeamsData(response[0][0]?.data?.results);
      setWeeklyCompare(response[0][1]?.data);
      setWeeklyCompareUberKm(response[0][2]?.data);
      selectedTeamFunction(
        response[0][0]?.data?.results,
        response[0][1]?.data,
        response[0][2]?.data,
      );
      console.log(currentWeekDate);
      // setOnClickValue(false);
    } catch (error) {
      console.log(error);
    }
  }, [teamID, selectedTeam, managerID, calenderDate]);

  const filteredMenuObject = allTeamsData.filter((item) => (item?.city?.id === cityID.cityIDValue));

  const menuObject = filteredMenuObject.map((item) => ({
    key: item?.id,
    src: item?.Logo !== null ? item?.Logo : '',
    teamName: `${item?.name} Team`,
    table: <WeekCompareTable
      weeklyCompare={weeklyCompare}
      weeklyCompareUberKm={weeklyCompareUberKm}
    />,
  }));
  const teamDetails = allTeamsData.filter((item) => item?.id === Number(teamID.teamIDValue));
  const managerDetails = teamDetails?.[0]?.managers?.filter((item) => item?.id
    === Number(managerID.managerIDValue));

  // const onClickFunction = (teamName) => {
  //   setOnClickValue(true);
  //   if (teamName === `${teamDetails?.[0]?.name} Team`) {
  //     setSelectedTable(<WeekCompareTable weeklyCompare={weeklyCompare} />);
  //   }
  // };
  const menu = (
    <Menu>
      {menuObject.map((arrayItem, index) => (
        <Menu.Item
          key={arrayItem.key}
          onClick={() => {
            // if (arrayItem.teamName === `${teamDetails?.[0]?.name} Team`) {
            //   setOnClickValue(false);
            // }
            setSelected(arrayItem);
            setSelectedTable(arrayItem.table);
            setOnSelected(true);
            setSelectedTeam(arrayItem.key);
          }}
        >
          <div className="d-flex flex-row">
            <div className="mr-2">
              <img style={{ height: '20px' }} className="rounded-full" width="20" src={arrayItem.src !== '' ? arrayItem.src : BlankImg} alt={`${index}`} />
            </div>
            <div>
              <p className="text-[#333333] text-xs mt-0.5 mb-0 font-mulish-bold">{arrayItem.teamName}</p>
            </div>
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  // return null during page loading or data fetching error
  if (pageState === 'loading' || pageState === 'error') return null;
  return (
    <div>
      <div className="site-card-wrapper">
        <Card className="mb-4">
          <Row>
            <Col span={16}>
              <div className="d-flex flex-row">
                <div className="mr-3">
                  <img style={{ height: '60px' }} className="rounded-full" width="60" src={teamDetails?.[0]?.Logo} alt="TeamImage" />
                </div>
                <div>
                  <h5 className="text-[#333333] text-lg mt-1 mb-0">
                    Hello,
                    {' '}
                    {managerDetails?.[0]?.full_name}
                  </h5>
                  <p className="text-[#013453] m-0 font-mulish-bold">
                    {teamDetails?.[0]?.name}
                    {' '}
                    Team
                  </p>
                </div>
              </div>
            </Col>
            <Col className="pr-1" span={8}>
              <Dropdown onClick={() => setIsActive(!isActive)} overlay={isActive === true ? menu : ''}>
                <Button className="w-100 mt-2" style={{ width: '240px', fontSize: '10px', color: '#86A1A4' }}>
                  <Row>
                    <Col span={22} className="d-flex flex-row justify-content-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-3" width="26" height="20" viewBox="0 0 35.066 28.316">
                        <path id="Icon_awesome-hands-helping" data-name="Icon awesome-hands-helping" d="M25.734,10.126H17.719v2.953a3.8,3.8,0,0,1-7.594,0V6.666L6.7,8.723a3.368,3.368,0,0,0-1.64,2.89v2.494L.843,16.543a1.683,1.683,0,0,0-.617,2.3l4.219,7.309a1.688,1.688,0,0,0,2.3.617L12.2,23.626h7.2a3.378,3.378,0,0,0,3.375-3.375h.844a1.686,1.686,0,0,0,1.688-1.688V15.188h.422A1.263,1.263,0,0,0,27,13.922V11.391A1.263,1.263,0,0,0,25.734,10.126Zm7.789-1.972L29.3.844A1.688,1.688,0,0,0,27,.227L21.547,3.375h-5.39a3.4,3.4,0,0,0-1.788.512L12.6,4.989a1.676,1.676,0,0,0-.791,1.429v6.66a2.109,2.109,0,0,0,4.219,0V8.438h9.7a2.955,2.955,0,0,1,2.953,2.953v1.5l4.219-2.436a1.689,1.689,0,0,0,.617-2.3Z" transform="translate(0.607 0.604)" fill="none" stroke="#86a1a4" strokeWidth="1.2" />
                      </svg>
                      <span className="text-xs">
                        {onSelected === true ? selected.teamName : 'Select Team'}
                      </span>
                    </Col>
                    <Col span={2} className="text-end">
                      <CaretDownOutlined className="text-end" style={{ fontSize: '12px', color: '#86A1A4' }} />
                    </Col>
                  </Row>
                </Button>
              </Dropdown>
            </Col>
            {/* <Col className="pl-2" span={3}>
              <Row align="end">
                <button
                  type="button"
                  onClick={() => onClickFunction(selected.teamName)}
                  className={onClickValue === false
                    && (selected.teamName === `${teamDetails?.[0]?.name} Team`
                    || selectedTable === <DayWiseTable />)
                    ? 'bg-[#37BDC8] w-100 mt-2 text-[#ffffff] rounded-full px-4 py-2'
                    : 'bg-[#CED4D4] w-100 mt-2 text-[#86A1A4] rounded-full px-4 py-2'}
                >
                  Compare
                </button>
              </Row>
            </Col> */}
          </Row>
        </Card>
        <div className="site-card-wrapper">
          <TableCard selected={selected} selectedTable={selectedTable} />
        </div>
      </div>
    </div>
  );
};

export default WithPageHandler(weeklySumReport);
