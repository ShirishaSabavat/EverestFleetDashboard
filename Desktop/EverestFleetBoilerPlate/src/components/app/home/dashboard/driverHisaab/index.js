import React, { useState, useEffect } from 'react';
import WithPageHandler from 'components/layouts/pageHandler';
import {
  Input, Col, Row, Button, notification,
} from 'antd';
import { useCalenderContext } from 'context/calenderContext';
// import moment from 'moment';
import { onFetchHisaabDataApi, onFetchDriverWeeklyDataApi } from '../../../../../services/axios';
import '@fontsource/montserrat';
import WeeklyStatusNavbarTable from './weeklyStatusNavbarTable';
import BlankImg from '../../../../../assets/images/blankImg.png';
import WeeklyTable from './weeklyTable';

// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve) => {
  setTimeout(() => resolve(), 1000);
});

const Hisaab = ({
  pageState,
  setPageState,
}) => {
  const { calenderDate } = useCalenderContext();

  const [hisaabData = [], setHisaabData] = useState();
  const [driverWeeklyData = [], setDriverWeeklyData] = useState([]);
  const driverETM = localStorage.getItem('driverETM');
  const [driverId = '', setDriverId] = useState(driverETM);
  const [drId = '', setDrId] = useState(driverETM);

  const onFetchData = async () => {
    try {
      await promise;
      setPageState('loaded');
    } catch (error) {
      setPageState('error');
    }
  };
  // const startOfWeek = localStorage.getItem('startOfWeek');
  // const endOfWeek = localStorage.getItem('endOfWeek');
  // useEffect(async () => {
  //   setCalenderDate({
  //     startOfWeek: moment(startOfWeek).startOf('isoweek').format('YYYY-MM-DD'),
  //     endOfWeek: moment(endOfWeek).endOf('isoweek').format('YYYY-MM-DD'),
  //   });
  // }, []);
  // useEffect(() => { }, [calenderDate]);

  useEffect(async () => {
    onFetchData();
    if (!calenderDate.startOfWeek || !calenderDate.endOfWeek) return;
    const hisaabPromises = [];
    hisaabPromises.push(await onFetchHisaabDataApi(driverId, calenderDate));
    hisaabPromises.push(await onFetchDriverWeeklyDataApi(driverId));

    try {
      const response = await Promise.all([
        hisaabPromises,
      ]);
      setHisaabData(response[0][0].data[0]);
      setDriverWeeklyData(response[0][1].data);
    } catch (error) {
      console.log(error);
    }
  }, [driverId, calenderDate]);

  const onSearch = (event) => {
    event.preventDefault();
    if (drId === '') {
      notification.error({
        message: 'Please Enter Valid Employee ID / Mobile No.',
      });
    } else {
      setDriverId(drId);
    }
  };

  const roundNumber = (num) => Math.round(num * 1000) / 1000;

  // return null during page loading or data fetching error
  if (pageState === 'loading' || pageState === 'error') return null;

  return (
    <div style={{ fontFamily: 'montserrat', fontWeight: 'semibold' }}>
      <div className="site-card-wrapper">
        <div div className="row p-3">
          <div className="col-12 p-0 mt-0 mb-3">
            <Input
              placeholder="Enter Employee ID / Mobile No."
              value={drId}
              onChange={(e) => setDrId(e.target.value)}
              style={{
                padding: '8px', margin: '8px', width: '33%',
              }}
            />
            <Button
              onClick={onSearch}
              type="primary"
              style={{
                borderRadius: '4px', fontWeight: '500', fontSize: '16px', width: '140px', height: '38px',
              }}
            >
              Search
            </Button>
          </div>
          <div className="col-12 border-solid rounded-md bg-[#FFFFFF] shadow-sm shadow-#0000000F">
            <div className="row p-3">
              <div className="col-1 p-0">
                <img
                  className="border-solid rounded-full ml-5"
                  style={{ height: '80px' }}
                  width="80"
                  src={!hisaabData?.photo ? BlankImg : `https://jarvis.everestfleet.com/media/${hisaabData?.photo}`}
                  alt="Driver"
                />
              </div>
              <div className="col-11 pl-5 pr-0 pt-2 pb-0">
                <div className="row pl-5">
                  <div className="col-12">
                    <div>
                      <h6 className="text-[#333333] font-medium text-md mt-2 mb-1 ml-4">
                        {hisaabData?.driver_name === null ? ''
                          : hisaabData?.driver_name}
                      </h6>
                    </div>
                  </div>
                  <div className="col-12 d-flex flex-row">
                    <div className="h-5 ml-4 pr-3 text-center border-solid border-r-2 border-[#86A1A4]">
                      <p style={{ fontSize: '10px' }} className="text-[#86A1A4] font-semibold m-0">
                        Mobile No:
                        {' '}
                        <span style={{ fontSize: '12px' }} className="text-[#333333] font-semibold ml-1 mb-0">
                          {hisaabData?.mobile === null ? '' : hisaabData?.mobile}
                        </span>
                      </p>
                    </div>
                    <div className="h-5 px-3 text-center border-solid border-r-2 border-[#86A1A4]">
                      <p style={{ fontSize: '10px' }} className="text-[#86A1A4] font-semibold text-xs m-0">
                        Employee Id:
                        {' '}
                        <span style={{ fontSize: '12px' }} className="text-[#333333] font-semibold text-sm ml-1 mb-0">
                          {hisaabData?.employee_id === null ? '' : hisaabData?.employee_id}
                        </span>
                      </p>
                    </div>
                    <div className="px-3 text-center">
                      <p style={{ fontSize: '10px' }} className="text-[#86A1A4] font-semibold text-xs m-0">
                        Location:
                        {' '}
                        <span style={{ fontSize: '12px' }} className="text-[#333333] font-semibold text-sm ml-1 mb-0">
                          {hisaabData?.location_name === null ? '' : hisaabData?.location_name}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 my-4 p-0">
            <h6 className="text-[#333333] font-semibold text-md">Weekly Status</h6>
          </div>
          <div className="col-12 p-0">
            <div className="row">
              <div className="col-9">
                <div className="d-flex flex-row mb-4">
                  <div className="h-9 px-4 text-center border-solid border-r-2 border-[#86A1A4]">
                    <h6 className={hisaabData?.ledger_balance < 0
                      ? 'text-[#FF0000] text-sm font-semibold m-0'
                      : 'text-[#013453] text-sm font-semibold m-0'}
                    >
                      {typeof hisaabData?.ledger_balance !== 'number' ? 0
                        : roundNumber(hisaabData?.ledger_balance).toFixed(1)}
                    </h6>
                    <p className="text-[#86A1A4] text-xs font-semibold m-0">Total Outstanding</p>
                  </div>
                  <div className="h-9 px-4 text-center border-solid border-r-2 border-[#86A1A4]">
                    <h6 className="text-[#333333] text-sm font-semibold m-0">
                      <span className="font-sans font-semibold">₹</span>
                      {' '}
                      {typeof hisaabData?.recovery !== 'number' ? 0
                        : roundNumber(Number(hisaabData?.recovery)).toFixed(1)}
                    </h6>
                    <p className="text-[#86A1A4] text-xs font-semibold m-0">Payment Received</p>
                  </div>
                  <div className="h-9 px-4 text-center">
                    <h6 className={hisaabData?.weekly_outstanding < 0
                      ? 'text-[#FF0000] text-sm font-semibold m-0'
                      : 'text-[#013453] text-sm font-semibold m-0'}
                    >
                      {typeof hisaabData?.weekly_outstanding !== 'number' ? 0
                        : roundNumber(hisaabData?.weekly_outstanding).toFixed(1)}
                    </h6>
                    <p className="text-[#86A1A4] text-xs font-semibold m-0">This Week OS</p>
                  </div>
                </div>
                <div>
                  <WeeklyStatusNavbarTable
                    hisaabData={hisaabData}
                  />
                </div>
              </div>
              <div className="col-3">
                <Row gutter={16}>
                  <Col className="mb-3" span={24}>
                    <div className="border-solid rounded-md bg-[#FFFFFF] shadow-sm shadow-#0000000F px-4 py-3">
                      <div className="row">
                        <div className="col-9">
                          <h5 className="text-[#013453] text-md font-bold m-0">
                            <span className="font-sans font-semibold">₹</span>
                            {' '}
                            {typeof hisaabData?.revenue !== 'number' ? 0
                              : roundNumber(hisaabData?.revenue).toFixed(1)}
                          </h5>
                          <p className="text-[#013453] text-xs font-medium m-0">Earnings</p>
                        </div>
                        <div className="col-3 border-solid rounded-full bg-[#37BDC8] p-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 40.222 53.223">
                            <g id="earning" transform="translate(-153.232 -229.105)">
                              <path id="Path_579" data-name="Path 579" d="M165.076,281.828c-.729-.14-1.471-.236-2.185-.431a11.483,11.483,0,0,1-7.795-7.175,18.8,18.8,0,0,1-1.2-9.653,38.374,38.374,0,0,1,9.275-20.743c.166-.193.347-.373.522-.559s.323-.341.572-.6c-.854,0-1.606.016-2.358,0a1.62,1.62,0,0,1-1.446-2.357,1.576,1.576,0,0,1,1.485-.9c.833-.005,1.664,0,2.5,0l.127-.144a1.689,1.689,0,0,1-.341-.169c-1.1-.877-2.209-1.754-3.3-2.645a3.808,3.808,0,0,1,2.433-6.834q9.967,0,19.933,0a3.808,3.808,0,0,1,2.427,6.855c-1.174.95-2.356,1.89-3.66,2.935h1.474c.373,0,.748,0,1.121,0a1.633,1.633,0,1,1,.025,3.26c-.713.008-1.427,0-2.213,0a3.59,3.59,0,0,0,.215.3,38.09,38.09,0,0,1,9.994,20.834,20.49,20.49,0,0,1-.992,10.589,10.787,10.787,0,0,1-8.734,7.3c-.282.046-.564.1-.846.147Q173.593,281.83,165.076,281.828Zm8.522-3.263v0c2.5,0,5,.023,7.494-.005a7.529,7.529,0,0,0,7.441-5.078,18.187,18.187,0,0,0,.858-9.678,35.506,35.506,0,0,0-5.53-14.165,23.2,23.2,0,0,0-6.246-6.706,1.494,1.494,0,0,0-.789-.255q-3.493-.029-6.984,0a1.451,1.451,0,0,0-.748.232,17.658,17.658,0,0,0-3.637,3.252,35.574,35.574,0,0,0-8.1,17.147,17.926,17.926,0,0,0,.282,8.33c1.147,3.906,3.846,7.091,9.181,6.939C169.077,278.511,171.338,278.564,173.6,278.564Zm-.21-45.691H163.5c-.309,0-.631-.029-.766.345-.142.39.117.593.377.8,2.15,1.717,4.295,3.44,6.451,5.148a1.12,1.12,0,0,0,.636.225q3.135.025,6.269,0a1.105,1.105,0,0,0,.638-.219c2.157-1.707,4.3-3.432,6.45-5.15.26-.208.519-.413.379-.8s-.495-.347-.815-.347Z" transform="translate(0 0)" fill="#fff" stroke="#37bdc8" strokeWidth="1" />
                              <path id="Icon_awesome-rupee-sign" data-name="Icon awesome-rupee-sign" d="M15.62,5.5a.609.609,0,0,0,.609-.609V2.859a.609.609,0,0,0-.609-.609H.609A.609.609,0,0,0,0,2.859V5.128a.609.609,0,0,0,.609.609H4.933A3.659,3.659,0,0,1,8.025,7.119H.609A.609.609,0,0,0,0,7.727V9.756a.609.609,0,0,0,.609.609H8.66a3.5,3.5,0,0,1-3.791,2.973H.609A.609.609,0,0,0,0,13.946v2.688a.609.609,0,0,0,.2.447l8.37,7.727a.609.609,0,0,0,.413.161h4.187a.609.609,0,0,0,.413-1.056L5.927,16.851a6.948,6.948,0,0,0,7.015-6.487H15.62a.609.609,0,0,0,.609-.609V7.727a.609.609,0,0,0-.609-.609H12.643A6.947,6.947,0,0,0,11.921,5.5Z" transform="translate(165.727 249.716)" fill="#fff" stroke="#37bdc8" strokeWidth="2" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="mb-3" span={24}>
                    <div className="border-solid rounded-md bg-[#FFFFFF] shadow-sm shadow-#0000000F px-4 py-3">
                      <div className="row">
                        <div className="col-9">
                          <h5 className="text-[#013453] text-md font-bold m-0">
                            <span className="font-sans font-semibold">₹</span>
                            {' '}
                            {typeof hisaabData?.toll !== 'number' ? 0
                              : roundNumber(hisaabData?.toll).toFixed(1)}
                          </h5>
                          <p className="text-[#013453] text-xs font-medium m-0">Toll</p>
                        </div>
                        <div className="col-3 border-solid rounded-full bg-[#37BDC8] p-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 50.977 43.531">
                            <g id="toll-road" transform="translate(0 -52.265)">
                              <g id="Group_705" data-name="Group 705" transform="translate(0 52.265)">
                                <g id="Group_704" data-name="Group 704" transform="translate(0 0)">
                                  <path id="Path_580" data-name="Path 580" d="M480.665,442.668H478.8a.933.933,0,0,0,0,1.865h1.865a.933.933,0,0,0,0-1.865Z" transform="translate(-430.62 -401.003)" fill="#fff" />
                                  <path id="Path_581" data-name="Path 581" d="M53.065,153.186H66.121a1.867,1.867,0,0,0,1.865-1.865V137.332a1.867,1.867,0,0,0-1.865-1.865H53.065a1.867,1.867,0,0,0-1.865,1.865v13.989A1.867,1.867,0,0,0,53.065,153.186Zm8.393-1.865h-3.73v-1.865a.934.934,0,0,1,.933-.933h1.865a.934.934,0,0,1,.933.933Zm-8.393-13.989H66.121v13.989h-2.8v-1.865a2.8,2.8,0,0,0-2.8-2.8H58.661a2.8,2.8,0,0,0-2.8,2.8v1.865h-2.8Z" transform="translate(-45.605 -126.713)" fill="#fff" />
                                  <path id="Path_582" data-name="Path 582" d="M72.789,314.668H61.6a1.867,1.867,0,0,0-1.865,1.865v8.393a1.867,1.867,0,0,0,1.865,1.865H72.789a1.867,1.867,0,0,0,1.865-1.865v-8.393A1.867,1.867,0,0,0,72.789,314.668ZM61.6,324.926v-8.393H72.789v8.393Z" transform="translate(-53.205 -286.991)" fill="#fff" />
                                  <path id="Path_583" data-name="Path 583" d="M100.395,348.8H94.8a.933.933,0,0,0,0,1.865h5.6a.933.933,0,1,0,0-1.865Z" transform="translate(-84.662 -317.153)" fill="#fff" />
                                  <path id="Path_584" data-name="Path 584" d="M100.395,374.4H94.8a.933.933,0,1,0,0,1.865h5.6a.933.933,0,1,0,0-1.865Z" transform="translate(-84.662 -340.021)" fill="#fff" />
                                  <path id="Path_585" data-name="Path 585" d="M50.977,55.9a3.721,3.721,0,0,0-1.446-2.981,3.2,3.2,0,0,0-3.106-.435h0c-.011,0-.023.006-.033.011a3.343,3.343,0,0,0-1.215.829l-4.146,4.448h0l-5.1,5.469h0l-5.1,5.469h0l-6.991,7.5-.055.032V59.162a2.725,2.725,0,0,0,1.7-2.567V53.86a.882.882,0,0,0-.85-.912H.85A.882.882,0,0,0,0,53.86V56.6a2.725,2.725,0,0,0,1.7,2.567v34.81H.85a.914.914,0,0,0,0,1.823H45.03a.914.914,0,0,0,0-1.823H28.887V81.113l3.149-3.379h0l5.1-5.469h0l5.1-5.469h0l5.1-5.469h0l2.651-2.844A3.809,3.809,0,0,0,50.977,55.9ZM22.09,93.972H3.4V59.33H22.09V93.972Zm.85-36.465H2.549A.883.883,0,0,1,1.7,56.6V54.772h22.09V56.6A.884.884,0,0,1,22.94,57.507Zm4.248,36.465h-3.4V79.386a1.7,1.7,0,1,1,3.4,0V93.972Zm3.4-17.261-1.778,1.908a3.56,3.56,0,0,0-2.294-2.691l4.072-4.369v5.152Zm5.1-5.47-3.4,3.646V69.736l3.4-3.646Zm5.1-5.47-3.4,3.646V64.266l3.4-3.646Zm5.1-5.47-3.4,3.646V58.8l3.4-3.646Zm2.9-3.111-1.2,1.288v-4.4a1.636,1.636,0,0,1,1.2.533,1.913,1.913,0,0,1,0,2.576Z" transform="translate(0 -52.265)" fill="#fff" />
                                  <path id="Path_586" data-name="Path 586" d="M249.257,306.723a.713.713,0,0,0-.084-.168l-.112-.14a.932.932,0,0,0-1.017-.2.959.959,0,0,0-.307.2l-.112.14a.719.719,0,0,0-.084.168.588.588,0,0,0-.056.168,1.229,1.229,0,0,0-.019.187.932.932,0,0,0,.074.354.965.965,0,0,0,.2.308,1.083,1.083,0,0,0,.307.2.932.932,0,0,0,.355.075,1.3,1.3,0,0,0,.186-.019.607.607,0,0,0,.168-.056.713.713,0,0,0,.168-.084l.14-.112a.97.97,0,0,0,.2-.308.934.934,0,0,0,.075-.354,1.272,1.272,0,0,0-.019-.187A.606.606,0,0,0,249.257,306.723Z" transform="translate(-222.911 -279.051)" fill="#fff" />
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="mb-3" span={24}>
                    <div className="border-solid rounded-md bg-[#FFFFFF] shadow-sm shadow-#0000000F px-4 py-3">
                      <div className="row">
                        <div className="col-9">
                          <h5 className="text-[#013453] text-md font-bold m-0">
                            <span className="font-sans font-semibold">₹</span>
                            {' '}
                            {typeof hisaabData?.driver_payout !== 'number' ? 0
                              : roundNumber(hisaabData?.driver_payout).toFixed(1)}
                          </h5>
                          <p className="text-[#013453] text-xs font-medium m-0">Drivers Payout</p>
                        </div>
                        <div className="col-3 d-flex flex-row justify-content-center">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="48" height="48" viewBox="0 0 79.152 78">
                              <g id="Car_icon" data-name="Car icon" transform="translate(0.185 -0.279)">
                                <g id="Path_588" data-name="Path 588" transform="translate(-0.033 0.279)" fill="none">
                                  <path d="M39.5,0C61.315,0,79,17.461,79,39S61.315,78,39.5,78,0,60.539,0,39,17.685,0,39.5,0Z" stroke="none" />
                                  <path d="M 39.5 7 C 21.57943725585938 7 7 21.35514450073242 7 39 C 7 56.64485168457031 21.57943725585938 71 39.5 71 C 57.42056274414062 71 72 56.64485168457031 72 39 C 72 21.35514450073242 57.42056274414062 7 39.5 7 M 39.5 0 C 61.31523895263672 0 79 17.46089172363281 79 39 C 79 60.53909301757812 61.31523895263672 78 39.5 78 C 17.68474578857422 78 0 60.53909301757812 0 39 C 0 17.46089172363281 17.68474578857422 0 39.5 0 Z" stroke="none" fill="#f2f2f2" />
                                </g>
                                <path id="Path_589" data-name="Path 589" d="M-1452.667,2015.333s4-43.333,44.667-34c37.129,8.521,26.333,45.333,23.894,49.418-.1.274-.228.582-.228.582" transform="translate(1455.967 -1975.721)" fill="none" stroke="#37bdc8" strokeWidth="7" />
                                <text id="_60_" data-name="60%" transform="translate(18.967 46.279)" fill="#013453" fontSize="22" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600"><tspan x="0" y="0">60%</tspan></text>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="mb-3" span={24}>
                    <div className="border-solid rounded-md bg-[#FFFFFF] shadow-sm shadow-#0000000F px-4 py-3">
                      <div className="row">
                        <div className="col-9">
                          <h5 className="text-[#FF0000] text-md font-bold m-0">
                            <span className="font-sans font-semibold">-₹</span>
                            {' '}
                            {typeof hisaabData?.cash_collected !== 'number' ? 0
                              : roundNumber(hisaabData?.cash_collected).toFixed(1)}
                          </h5>
                          <p className="text-[#013453] text-xs font-medium m-0">Cash Collected</p>
                        </div>
                        <div className="col-3 border-solid rounded-full bg-[#37BDC8] p-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48.43 48.429">
                            <g id="payment-method" transform="translate(522.571 -207.657)">
                              <path id="Path_537" data-name="Path 537" d="M-522.57,459.483a1.225,1.225,0,0,1,1.292-.733c2.646.012,5.294,0,7.941.014a.87.87,0,0,0,.777-.393,7.136,7.136,0,0,1,5.046-3.089,7.46,7.46,0,0,1,6.311,2.379,1.918,1.918,0,0,0,.72.482c2.094.729,4.2,1.431,6.3,2.144a4.65,4.65,0,0,1,3.23,2.8c1.2-.331,2.407-.666,3.615-1,1.243-.342,2.478-.729,3.734-1.008a3.679,3.679,0,0,1,3.807,1.047,3.682,3.682,0,0,1,1.006,2.978,3.682,3.682,0,0,1-1.66,2.669,6.212,6.212,0,0,1-1.53.817q-7.405,2.692-14.828,5.335a16.538,16.538,0,0,1-1.639.411h-1.607a18.564,18.564,0,0,1-2.732-.836c-2-.953-3.95-2.012-5.909-3.05a6.253,6.253,0,0,0-2.72-.822c-.262,1.076-.416,1.2-1.554,1.2h-2.056c-.01.175-.025.314-.028.453-.02,1.007-.306,1.3-1.3,1.3-1.653,0-3.307-.009-4.962,0a1.21,1.21,0,0,1-1.258-.709Zm11.092,8.259a10.5,10.5,0,0,1,5.019,1.784c1.534.831,3.091,1.626,4.671,2.368a5.562,5.562,0,0,0,4.319.249q7.495-2.658,14.963-5.385a4.111,4.111,0,0,0,1.285-.842,1.571,1.571,0,0,0,.5-1.5,1.847,1.847,0,0,0-.9-1.361,1.847,1.847,0,0,0-1.627-.119c-2.356.628-4.7,1.3-7.056,1.927a.985.985,0,0,0-.777.682,3.656,3.656,0,0,1-4.506,2.277c-.62-.172-1.232-.381-1.847-.576l-6.344-2.005c-.415-.131-.809-.292-.923-.779a.959.959,0,0,1,.343-.976.959.959,0,0,1,1.03-.1c1.51.492,3.026.969,4.54,1.44,1.29.407,2.576.831,3.877,1.194a1.644,1.644,0,0,0,1.832-.691,1.714,1.714,0,0,0,.117-1.995,2.735,2.735,0,0,0-1.639-1.2c-2.25-.76-4.5-1.531-6.75-2.28a2.407,2.407,0,0,1-1.178-.8,5.508,5.508,0,0,0-5.64-1.728,5.922,5.922,0,0,0-3.057,2.417,1.471,1.471,0,0,0-.243.776c-.02,2.225-.011,4.45-.011,6.665-.007.16-.007.309-.007.559Zm-9.182,2.912h3.712v-7.767c0-.631.01-1.26-.01-1.89,0-.117-.131-.33-.2-.331-1.16-.021-2.321-.016-3.5-.016Zm7.252-1.736v-8.234h-1.6v8.231Z" transform="translate(0 -218.255)" fill="#fff" />
                              <path id="Path_538" data-name="Path 538" d="M-464.42,213.8c.206-1.013.408-1.178,1.406-1.178h2.2c.018-.33.018-.61.051-.886a.873.873,0,0,1,.268-.618.873.873,0,0,1,.628-.243q2.836-.026,5.674,0c.577,0,.907.416.916,1.047.012.785,0,1.571,0,2.365v9.079c0,1-.306,1.309-1.294,1.309-2.618,0-5.235.008-7.853-.008a.984.984,0,0,0-.9.436,7.439,7.439,0,0,1-4.5,2.985,6.727,6.727,0,0,1-1.407.1.924.924,0,0,0-.743.293q-4.5,4.526-9.022,9.031c-.73.73-1.186.728-1.92-.007l-17.418-17.422c-.759-.759-.759-1.145,0-1.9l9.962-9.966c.74-.741,1.178-.741,1.908,0,.881.88,1.767,1.755,2.636,2.648a.524.524,0,0,0,.654.161c1.326-.5,2.66-.971,3.993-1.446a7.5,7.5,0,0,1,5.89.249c2.094.987,4.12,2.1,6.167,3.178A6.1,6.1,0,0,0-464.42,213.8Zm-17.663-1.2c.719.713,1.417,1.309,2,2.006a6.755,6.755,0,0,0,3.7,2.25c1.523.381,3.01.916,4.5,1.408a.957.957,0,0,1,.636.461.957.957,0,0,1,.076.782.963.963,0,0,1-.522.551.963.963,0,0,1-.759,0c-.288-.081-.571-.178-.855-.262q-3.691-1.166-7.382-2.328a1.823,1.823,0,0,0-2.183.771,1.755,1.755,0,0,0,.262,2.215,3.8,3.8,0,0,0,1.309.8c2.281.813,4.581,1.581,6.877,2.349a2.356,2.356,0,0,1,1.067.724,5.326,5.326,0,0,0,5.529,1.806,5.7,5.7,0,0,0,3.366-2.665.849.849,0,0,0,.1-.448q0-3.451.009-6.9c0-.289-.068-.419-.385-.442a8.757,8.757,0,0,1-3.556-1.167q-2.822-1.529-5.7-2.946a5.235,5.235,0,0,0-3.773-.412C-479.2,211.549-480.575,212.087-482.083,212.6Zm-10.994,2.995a6.073,6.073,0,0,1,.071,6.959l9.655,9.655a5.835,5.835,0,0,1,3.441-1.068,5.941,5.941,0,0,1,3.393,1.065l2.2-2.179a6.167,6.167,0,0,1-.966-4.718l-3.153-1.065c-.069.17-.131.3-.17.427a5.39,5.39,0,0,1-6.145,3.474,5.374,5.374,0,0,1-4.3-5.178,5.366,5.366,0,0,1,4.009-5.31,1.014,1.014,0,0,0,.54-.382,3.74,3.74,0,0,1,1.767-1.505c.262-.106.538-.194.8-.289l-2-1.988a2.96,2.96,0,0,1-.523.306,13.086,13.086,0,0,1-2.275.721,5.582,5.582,0,0,1-3.882-.868.509.509,0,0,0-.47-.009c-.684.635-1.334,1.3-1.991,1.953Zm37.882,7.169v-9.984h-3.665v9.984Zm-29.817-3.1a3.463,3.463,0,0,0-2.065,3.974,3.505,3.505,0,0,0,3.564,2.717,3.372,3.372,0,0,0,3.186-2.77c-2.112-.609-4.2-1.292-4.687-3.921Zm22.576-5.121v8.209h1.622V214.54Zm-32.012,2.517-2.037,2.037,2.072,2.078a3.891,3.891,0,0,0-.037-4.115Zm16.575,16.558a3.81,3.81,0,0,0-4.078,0l2.037,2.046Zm-7.5-21.511-2.022-2-2.037,2.033a3.853,3.853,0,0,0,4.057-.029Zm13.471,15.583-1.555-.826-.109.067c.191.6.382,1.2.6,1.87Z" transform="translate(-20.867)" fill="#fff" />
                              <path id="Path_539" data-name="Path 539" d="M-399.55,514.209a.94.94,0,0,1,.927.938.974.974,0,0,1-.942.937.939.939,0,0,1-.676-.289.94.94,0,0,1-.261-.687.916.916,0,0,1,.287-.65.916.916,0,0,1,.665-.249Z" transform="translate(-107.605 -270.234)" fill="#fff" />
                              <path id="Path_540" data-name="Path 540" d="M-249.839,307.344a.916.916,0,0,1-.276.655.916.916,0,0,1-.661.261.948.948,0,0,1-.944-.924.924.924,0,0,1,.286-.675.924.924,0,0,1,.687-.255.9.9,0,0,1,.656.273.9.9,0,0,1,.252.664Z" transform="translate(-238.762 -87.053)" fill="#fff" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div className="col-12 p-0 mt-2">
            <h6 className="text-[#333333] font-semibold text-md mt-1">
              Summary of all the previous Week’s data
            </h6>
            <WeeklyTable driverWeeklyData={driverWeeklyData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithPageHandler(Hisaab);
