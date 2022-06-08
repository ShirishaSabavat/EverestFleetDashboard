/* eslint-disable no-unused-vars */
import {
  Button, Col, Row, Layout, Popover,
} from 'antd';
import { connect } from 'react-redux';
import { userLogout } from 'redux/user/actions';
import { useEffect, useState } from 'react';
import { useTeamContext } from 'context/teamIDContext';
// import { onFetchTeamApi } from 'services/axios';
import { useWeekOrDaySelectContext } from 'context/weekOrDaySelectContext';
import { useMenuContext } from 'context/menuContext';
// import Cookies from 'js-cookie';
import { store } from 'redux/store';
import DayCalender from '../AppHeader/dayCalender';

const Header = ({ logout }) => {
  const {
    teamID, setTeamID, managerID, setManagerID, cityID, setCityID,
  } = useTeamContext();
  const { weekOrDaySelect } = useWeekOrDaySelectContext();
  const { menu } = useMenuContext();
  const [selected, setSelected] = useState({
    id: '',
    Logo: '',
    name: '',
  });
  // const teamObj = JSON.parse(localStorage.getItem('team'));
  // const { city_id: cityIDtem = [] } = teamObj;
  const { userReducer } = store.getState();
  const {
    team, manager, city, teamInfo,
  } = userReducer;
  useEffect(() => {
  }, [teamInfo]);
  useEffect(() => {
    setTeamID({ teamIDValue: Number(team) });
    setManagerID({ managerIDValue: Number(manager) });
    setCityID({ cityIDValue: Number(city) });
    setSelected(teamInfo);
  }, [weekOrDaySelect, userReducer]);
  const showUserProfile = () => { };
  const managerDetails = teamInfo?.managers?.filter((item) => Number(item?.id)
    === Number(managerID.managerIDValue));
  return (
    <div style={{ fontFamily: 'montserrat' }}>
      <div className="site-card-wrapper">
        <Layout style={{ backgroundColor: '#013453' }} className="p-3">
          <Row>
            <Col span={24}>
              <Row>
                <Col span={12} className="">
                  <p className="text-[#FFFFFF] font-extrabold text-2xl mt-2 ml-2 mb-0">
                    Welcome
                    {' '}
                    {managerDetails?.[0]?.full_name}
                    ,
                  </p>
                  <div className="d-flex flex-row">
                    <div className="mt-2.5 h-4 border-solid border-r-2 border-[#86A1A4]">
                      <p className="mr-4 text-xs font-regular text-[#86A1A4]">
                        Designation:
                        {' '}
                        <span className="text-[#FFFFFF]">Driver Manager</span>
                      </p>
                    </div>
                    <p className="mt-2.5 ml-4 text-xs font-regular text-[#86A1A4]">
                      Branch:
                      {' '}
                      <span className="text-[#FFFFFF]">{teamInfo?.city?.name}</span>
                    </p>
                  </div>
                </Col>
                <Col span={12} className="d-flex flex-row justify-content-end">
                  <div className="mt-2.5 h-8 border-solid border-r-2 border-[#86A1A4]">
                    <p className="mt-1.5 mr-2 text-xs font-semibold text-[#37BDC8]">
                      DAY
                    </p>
                  </div>
                  <p className="font-medium text-[#86A1A4] mt-3 ml-2 mr-8 text-xs">
                    WEEK
                  </p>
                  <DayCalender />
                  <div className="mt-2 ml-8 h-8 border-solid border-r-2 border-[#86A1A4]">
                    <div className="bg-[#F2F2F2] border-solid rounded-full mr-4 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22.476 28.132">
                        <g id="Icon_ionic-ios-notifications-outline" data-name="Icon ionic-ios-notifications-outline" transform="translate(-6.775 -3.93)">
                          <path id="Path_1" data-name="Path 1" d="M20.37,28.336a.911.911,0,0,0-.893.717,1.762,1.762,0,0,1-.352.766,1.329,1.329,0,0,1-1.132.415,1.351,1.351,0,0,1-1.132-.415,1.762,1.762,0,0,1-.352-.766.911.911,0,0,0-.893-.717h0a.917.917,0,0,0-.893,1.118,3.142,3.142,0,0,0,3.27,2.609,3.136,3.136,0,0,0,3.27-2.609.92.92,0,0,0-.893-1.118Z" fill="#333" />
                          <path id="Path_2" data-name="Path 2" d="M28.969,24.764c-1.083-1.427-3.213-2.264-3.213-8.655,0-6.56-2.9-9.2-5.6-9.83-.253-.063-.436-.148-.436-.415v-.2a1.725,1.725,0,0,0-1.687-1.73h-.042a1.725,1.725,0,0,0-1.687,1.73v.2c0,.26-.183.352-.436.415-2.707.64-5.6,3.27-5.6,9.83,0,6.391-2.13,7.221-3.213,8.655A1.4,1.4,0,0,0,8.177,27H27.872A1.4,1.4,0,0,0,28.969,24.764Zm-2.742.408H9.83a.308.308,0,0,1-.232-.513,8.518,8.518,0,0,0,1.477-2.348,15.934,15.934,0,0,0,1.005-6.2,10.783,10.783,0,0,1,1.47-6.1A4.512,4.512,0,0,1,16.27,8.065a2.464,2.464,0,0,0,1.308-.738.556.556,0,0,1,.837-.014,2.547,2.547,0,0,0,1.322.752,4.512,4.512,0,0,1,2.721,1.941,10.783,10.783,0,0,1,1.47,6.1,15.934,15.934,0,0,0,1.005,6.2,8.615,8.615,0,0,0,1.512,2.384A.291.291,0,0,1,26.227,25.172Z" fill="#333" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <Popover
                    placement="bottomRight"
                    title="Profile"
                    content={(
                      <Button
                        onClick={logout}
                        type="primary"
                      >
                        Sign Out
                      </Button>
                    )}
                    trigger="click"
                  >
                    <img
                      style={{ cursor: 'pointer', height: '50px' }}
                      onClick={showUserProfile}
                      src="/assets/images/general/man.svg"
                      alt="user"
                      width="40"
                      className="mt-0 ml-4 mr-4"
                    />
                  </Popover>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="col-12">
            <hr className="text-[#86A1A4]" />
            <Col span={24} className="d-flex flex-row">
              <div className="mr-1">
                <img style={{ height: '30px' }} className="rounded-full" width="30" src={selected?.Logo} alt={selected?.id} />
              </div>
              <p className="text-[#37BDC8] font-extrabold text-sm mt-1 ml-2 mb-0">
                {selected?.name}
              </p>
            </Col>
          </div>
        </Layout>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(userLogout()),
});
const mapStateToProps = ({ userReducer }) => ({
  team: userReducer.team,
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
