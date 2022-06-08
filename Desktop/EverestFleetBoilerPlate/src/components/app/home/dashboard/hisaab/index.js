import { useState, useEffect } from 'react';
import WithPageHandler from 'components/layouts/pageHandler';
import { Col, Row } from 'antd';
import { useCalenderContext } from 'context/calenderContext';
import { useDriverContext } from 'context/driverIDContext';
import { useTeamContext } from 'context/teamIDContext';
import { RingProgress } from '@ant-design/plots';
import LastWeekOutstanding from './lastWeekOutstanding';
import AmountRecovered from './amountRecovered';
import {
  onFetchHisaabDriverOSApi, onFetchHisaabSummary,
  onFetchHisaabHighOSApi, onFetchHisaabAmountRecoveredApi,
} from '../../../../../services/axios';
import '@fontsource/montserrat';

// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve) => {
  setTimeout(() => resolve(), 1000);
});

const Hisaab = ({
  pageState,
  setPageState,
}) => {
  const { calenderDate } = useCalenderContext();
  const { setDriverID, driverID } = useDriverContext();
  const { teamID } = useTeamContext();

  const [hisaabSummary = [], setHisaabSummary] = useState();
  const [hisaabDriverOS = [], setHisaabDriverOS] = useState();
  // const [hisaabWeekStatus = [], setHisaabWeekStatus] = useState();
  // const [hisaabData = [], setHisaabData] = useState();
  const [hisaabHighOS = [], setHisaabHighOS] = useState();
  const [hisaabAmountRecovered = [], setHisaabAmountRecovered] = useState();
  // const [hisaabDriverData = {}, setHisaabDriverData] = useState();
  const [hisaabARValue, setHisaabARValue] = useState();

  const [onClickValue, setOnClickValue] = useState(false);
  const [moreDetailsTable, setMoreDetailsTable] = useState(false);
  localStorage.setItem('startOfWeek', calenderDate.startOfWeek);
  localStorage.setItem('endOfWeek', calenderDate.endOfWeek);

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
    hisaabPromises.push(await onFetchHisaabSummary(teamID, calenderDate));
    hisaabPromises.push(await onFetchHisaabDriverOSApi(teamID, calenderDate));
    // hisaabPromises.push(await onFetchHisaabDataApi(driverID, calenderDate));
    hisaabPromises.push(await onFetchHisaabHighOSApi(teamID, calenderDate));
    hisaabPromises.push(await onFetchHisaabAmountRecoveredApi(teamID, calenderDate));
    // hisaabPromises.push(await onFetchHisaabDriverDataApi(driverID));

    try {
      const response = await Promise.all([
        hisaabPromises,
      ]);
      setHisaabSummary(response[0][0].data[0]);
      setHisaabDriverOS(response[0][1].data[0]);
      // setHisaabData(response[0][2].data[0]);
      setHisaabHighOS(response[0][2].data);
      setHisaabAmountRecovered(response[0][3].data);
      // setHisaabDriverData(response[0][5].data);
    } catch (error) {
      console.error(error);
    }
  }, [teamID, driverID, calenderDate]);
  const lastWeekOutstanding = () => {
    setOnClickValue(true);
    setMoreDetailsTable(true);
    setHisaabARValue('');
    setDriverID({ enterValue: 1 });
  };
  const amountRecovered = () => {
    setOnClickValue(true);
    setMoreDetailsTable(false);
    setHisaabARValue('');
    setDriverID({ enterValue: 1 });
  };
  const onSearchDriver = (value) => {
    setHisaabARValue(value);
  };
  const roundNumber = (num) => Math.round(num * 1000) / 1000;
  const positiveAmount = (val) => (val < 0 ? Math.abs(val) : val);
  const config = {
    height: 80,
    width: 80,
    autoFit: false,
    percent: !hisaabSummary?.total_outstanding || !hisaabSummary?.amount_recovered ? 0
      : (Number(hisaabSummary?.amount_recovered)
        / positiveAmount(Number(hisaabSummary?.total_outstanding))),
    color: ['#37BDC8', '#E8EDF3'],
    radius: 0.9,
    innerRadius: 0.9,
    statistic: {
      title: {
        style: {
          color: '#86A1A4',
          fontSize: '12px',
          fontWeight: 'bold',
          lineHeight: '14px',
        },
        formatter: () => 'Achieved',
      },
    },
  };
  // return null during page loading or data fetching error
  if (pageState === 'loading' || pageState === 'error') return null;

  return (
    <div style={{ fontFamily: 'montserrat', fontWeight: 'semibold' }}>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col className="mb-3" xs={16} md={8}>
            <div className="border-dotted border-1 border-[#86A1A4] rounded-md bg-[#FFFFFF] px-3 py-0.5">
              <div className="d-flex flex-row justify-between">
                <div className="mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 54 83">
                    <g id="Coin_" data-name="Coin " transform="translate(-17 -12)">
                      <g id="Icon" transform="translate(17 40.559)">
                        <g id="Ellipse_64" data-name="Ellipse 64" transform="translate(0 0.441)" fill="none" stroke="#000" strokeWidth="3">
                          <circle cx="27" cy="27" r="27" stroke="none" />
                          <circle cx="27" cy="27" r="25.5" fill="none" />
                        </g>
                        <path id="Icon_awesome-rupee-sign" data-name="Icon awesome-rupee-sign" d="M21.847,6.79a.851.851,0,0,0,.851-.851V3.1a.851.851,0,0,0-.851-.851h-21A.851.851,0,0,0,0,3.1V6.275a.851.851,0,0,0,.851.851H6.9a5.117,5.117,0,0,1,4.325,1.933H.851A.851.851,0,0,0,0,9.911v2.837a.851.851,0,0,0,.851.851H12.112c-.441,2.56-2.338,4.159-5.3,4.159H.851A.851.851,0,0,0,0,18.609v3.76a.851.851,0,0,0,.274.625L11.981,33.8a.851.851,0,0,0,.577.226h5.856a.851.851,0,0,0,.577-1.477L8.29,22.672A9.717,9.717,0,0,0,18.1,13.6h3.746a.851.851,0,0,0,.851-.851V9.911a.851.851,0,0,0-.851-.851H17.684a9.716,9.716,0,0,0-1.011-2.27Z" transform="translate(16.502 11.196)" stroke="#fff" strokeWidth="2" />
                      </g>
                      <text id="_" data-name="?" transform="translate(37 33)" fontSize="22" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600"><tspan x="0" y="0">?</tspan></text>
                      <text id="_2" data-name="?" transform="translate(53 34)" fontSize="17" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600"><tspan x="0" y="0">?</tspan></text>
                      <text id="_3" data-name="?" transform="translate(28 34)" fontSize="17" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600"><tspan x="0" y="0">?</tspan></text>
                    </g>
                  </svg>
                </div>
                <div className="mt-3">
                  <h5 className={hisaabSummary?.total_outstanding < 0
                    ? 'text-[#FF0000] font-bold text-md m-0' : 'text-[#013453] font-bold text-md m-0'}
                  >
                    <span className="font-sans font-semibold">₹</span>
                    {' '}
                    {hisaabSummary?.total_outstanding === null || typeof hisaabSummary?.total_outstanding !== 'number' ? 0
                      : roundNumber(hisaabSummary?.total_outstanding).toFixed(1)}
                  </h5>
                  <p className="text-[#013453] font-medium text-xs m-0">Total Outstanding</p>
                </div>
                <RingProgress {...config} />
              </div>
            </div>
          </Col>
          <Col className="mb-3" xs={16} md={8}>
            <div className="border-dotted border-1 border-[#86A1A4] rounded-md bg-[#FFFFFF] p-3">
              <div className="d-flex flex-row">
                <div className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 65.772 85.906">
                    <g id="Icon" transform="translate(-571.095 -441)">
                      <g id="Icon_ionic-ios-people" data-name="Icon ionic-ios-people" transform="translate(572.295 484.521)">
                        <path id="Path_576" data-name="Path 576" d="M41.02,39.434c-1.581-.565-4.164-.593-5.307-1.03a7.5,7.5,0,0,1-2.456-1.143c-.409-.494-.409-4.022-.409-4.022a6.5,6.5,0,0,0,1.4-1.976,21.96,21.96,0,0,0,.677-3.881s.932.4,1.3-1.468c.311-1.609.9-2.456.748-3.641s-.819-.9-.819-.9.819-1.2.819-5.279c0-4.206-3.176-8.341-9.118-8.341S18.72,11.9,18.72,16.09c0,4.079.8,5.279.8,5.279s-.663-.282-.819.9.423,2.032.748,3.641c.367,1.877,1.3,1.468,1.3,1.468a22.172,22.172,0,0,0,.677,3.881,6.5,6.5,0,0,0,1.4,1.976s0,3.528-.409,4.022a7.215,7.215,0,0,1-2.456,1.129c-1.129.438-3.712.494-5.307,1.059a9.961,9.961,0,0,0-6.464,9.485H47.471A9.941,9.941,0,0,0,41.02,39.434Z" transform="translate(3.805 -7.748)" fill="none" stroke="#000" strokeWidth="2.4" />
                        <path id="Path_577" data-name="Path 577" d="M17.528,29.076s3.373-.113,4.714-1.313c-2.188-3.317-1-7.184-1.454-10.8s-2.5-5.758-6.591-5.758h-.056c-3.952,0-6.083,2.145-6.535,5.758s.8,7.9-1.44,10.8c1.341,1.214,4.728,1.171,4.728,1.171h0a7.148,7.148,0,0,1-.141,2.371,3.564,3.564,0,0,1-1.694.776A32.748,32.748,0,0,0,5.4,33.1a5.942,5.942,0,0,0-3.19,5.25H13.548c.311-1.129,2.442-3.147,4.516-4.206a9.478,9.478,0,0,1,3.486-.734s.536-.847-1.228-1.171a12.031,12.031,0,0,1-2.71-.946C17.345,30.981,17.528,29.076,17.528,29.076Z" transform="translate(-2.215 -4.264)" fill="none" stroke="#000" strokeWidth="2.4" />
                        <path id="Path_578" data-name="Path 578" d="M28.522,29.076s-3.373-.113-4.714-1.313c2.188-3.317,1-7.184,1.454-10.8s2.5-5.758,6.591-5.758h.056c3.952,0,6.083,2.145,6.535,5.758s-.8,7.9,1.44,10.8c-1.341,1.214-4.728,1.171-4.728,1.171h0a7.148,7.148,0,0,0,.141,2.371,3.564,3.564,0,0,0,1.694.776A32.748,32.748,0,0,1,40.646,33.1a5.942,5.942,0,0,1,3.19,5.25H32.5c-.311-1.129-2.442-3.147-4.516-4.206a9.478,9.478,0,0,0-3.486-.734s-.536-.847,1.228-1.171a12.031,12.031,0,0,0,2.71-.946C28.705,30.981,28.522,29.076,28.522,29.076Z" transform="translate(19.536 -4.264)" fill="none" stroke="#000" strokeWidth="2.4" />
                      </g>
                      <g id="Group_703" data-name="Group 703" transform="translate(587.076 441)">
                        <g id="Ellipse_74" data-name="Ellipse 74" transform="translate(-0.076)" fill="#fff" stroke="#000" strokeWidth="2.4">
                          <circle cx="17" cy="17" r="17" stroke="none" />
                          <circle cx="17" cy="17" r="15.8" fill="none" />
                        </g>
                        <text id="_" data-name="!" transform="translate(13.924 25)" fontSize="23" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600"><tspan x="0" y="0">!</tspan></text>
                      </g>
                    </g>
                  </svg>
                  {' '}
                </div>
                <div>
                  <h5 className="text-[#013453] font-bold text-md m-0">
                    {hisaabDriverOS?.os_greater_5 === null || typeof hisaabDriverOS?.os_greater_5 !== 'number' ? 0
                      : roundNumber(hisaabDriverOS?.os_greater_5)}
                  </h5>
                  <p className="text-[#013453] text-xs m-0">Outstanding more than 5K</p>
                </div>
              </div>
            </div>
          </Col>
          <Col className="mb-3" xs={16} md={8}>
            <div className="border-dotted border-1 border-[#86A1A4] rounded-md bg-[#FFFFFF] p-3">
              <div className="d-flex flex-row">
                <div className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 65.772 85.906">
                    <g id="Icon" transform="translate(-571.095 -441)">
                      <g id="Icon_ionic-ios-people" data-name="Icon ionic-ios-people" transform="translate(572.295 484.521)">
                        <path id="Path_576" data-name="Path 576" d="M41.02,39.434c-1.581-.565-4.164-.593-5.307-1.03a7.5,7.5,0,0,1-2.456-1.143c-.409-.494-.409-4.022-.409-4.022a6.5,6.5,0,0,0,1.4-1.976,21.96,21.96,0,0,0,.677-3.881s.932.4,1.3-1.468c.311-1.609.9-2.456.748-3.641s-.819-.9-.819-.9.819-1.2.819-5.279c0-4.206-3.176-8.341-9.118-8.341S18.72,11.9,18.72,16.09c0,4.079.8,5.279.8,5.279s-.663-.282-.819.9.423,2.032.748,3.641c.367,1.877,1.3,1.468,1.3,1.468a22.172,22.172,0,0,0,.677,3.881,6.5,6.5,0,0,0,1.4,1.976s0,3.528-.409,4.022a7.215,7.215,0,0,1-2.456,1.129c-1.129.438-3.712.494-5.307,1.059a9.961,9.961,0,0,0-6.464,9.485H47.471A9.941,9.941,0,0,0,41.02,39.434Z" transform="translate(3.805 -7.748)" fill="none" stroke="#000" strokeWidth="2.4" />
                        <path id="Path_577" data-name="Path 577" d="M17.528,29.076s3.373-.113,4.714-1.313c-2.188-3.317-1-7.184-1.454-10.8s-2.5-5.758-6.591-5.758h-.056c-3.952,0-6.083,2.145-6.535,5.758s.8,7.9-1.44,10.8c1.341,1.214,4.728,1.171,4.728,1.171h0a7.148,7.148,0,0,1-.141,2.371,3.564,3.564,0,0,1-1.694.776A32.748,32.748,0,0,0,5.4,33.1a5.942,5.942,0,0,0-3.19,5.25H13.548c.311-1.129,2.442-3.147,4.516-4.206a9.478,9.478,0,0,1,3.486-.734s.536-.847-1.228-1.171a12.031,12.031,0,0,1-2.71-.946C17.345,30.981,17.528,29.076,17.528,29.076Z" transform="translate(-2.215 -4.264)" fill="none" stroke="#000" strokeWidth="2.4" />
                        <path id="Path_578" data-name="Path 578" d="M28.522,29.076s-3.373-.113-4.714-1.313c2.188-3.317,1-7.184,1.454-10.8s2.5-5.758,6.591-5.758h.056c3.952,0,6.083,2.145,6.535,5.758s-.8,7.9,1.44,10.8c-1.341,1.214-4.728,1.171-4.728,1.171h0a7.148,7.148,0,0,0,.141,2.371,3.564,3.564,0,0,0,1.694.776A32.748,32.748,0,0,1,40.646,33.1a5.942,5.942,0,0,1,3.19,5.25H32.5c-.311-1.129-2.442-3.147-4.516-4.206a9.478,9.478,0,0,0-3.486-.734s-.536-.847,1.228-1.171a12.031,12.031,0,0,0,2.71-.946C28.705,30.981,28.522,29.076,28.522,29.076Z" transform="translate(19.536 -4.264)" fill="none" stroke="#000" strokeWidth="2.4" />
                      </g>
                      <g id="Group_703" data-name="Group 703" transform="translate(587.076 441)">
                        <g id="Ellipse_74" data-name="Ellipse 74" transform="translate(-0.076)" fill="#fff" stroke="#000" strokeWidth="2.4">
                          <circle cx="17" cy="17" r="17" stroke="none" />
                          <circle cx="17" cy="17" r="15.8" fill="none" />
                        </g>
                        <text id="_" data-name="!" transform="translate(13.924 25)" fontSize="23" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600"><tspan x="0" y="0">!</tspan></text>
                      </g>
                    </g>
                  </svg>
                </div>
                <div style={{ opacity: 1 }}>
                  <h5 style={{ opacity: 1 }} className="text-[#013453] font-bold text-md m-0 opacity-100">
                    {hisaabDriverOS?.os_between_2_5 === null || typeof hisaabDriverOS?.os_between_2_5 !== 'number' ? 0
                      : roundNumber(hisaabDriverOS?.os_between_2_5)}
                  </h5>
                  <p className="text-[#013453] text-xs m-0">Outstanding between 2K & 5K</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <h6 className="text-[#333333] text-md font-bold mt-1 mb-4">Last Week Hisaab</h6>
        <Row gutter={16}>
          <Col className="mb-3" xs={16} md={12}>
            <div className="border-solid rounded-md bg-[#FFFFFF] shadow-sm shadow-#0000000F p-4">
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-row">
                  <div className="border-solid rounded-full bg-[#37BDC8] mr-3 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 87 87">
                      <g id="Icon" transform="translate(-20.532 -41.532)">
                        <g id="Ellipse_64" data-name="Ellipse 64" transform="translate(20.532 41.532)" fill="none" stroke="#fff" strokeWidth="3">
                          <circle cx="43.5" cy="43.5" r="43.5" stroke="none" />
                          <circle cx="43.5" cy="43.5" r="42" fill="none" />
                        </g>
                        <path id="Icon_awesome-rupee-sign" data-name="Icon awesome-rupee-sign" d="M33.933,9.3a1.322,1.322,0,0,0,1.322-1.322V3.572A1.322,1.322,0,0,0,33.933,2.25H1.322A1.322,1.322,0,0,0,0,3.572V8.5A1.322,1.322,0,0,0,1.322,9.824h9.4a7.948,7.948,0,0,1,6.717,3H1.322A1.322,1.322,0,0,0,0,14.149v4.407a1.322,1.322,0,0,0,1.322,1.322H18.813c-.685,3.976-3.631,6.46-8.236,6.46H1.322A1.322,1.322,0,0,0,0,27.659V33.5a1.322,1.322,0,0,0,.425.971L18.609,51.256a1.322,1.322,0,0,0,.9.351h9.1a1.322,1.322,0,0,0,.9-2.294L12.876,33.969c8.428-.258,14.448-5.883,15.239-14.092h5.818a1.322,1.322,0,0,0,1.322-1.322V14.149a1.322,1.322,0,0,0-1.322-1.322H27.467A15.091,15.091,0,0,0,25.9,9.3Z" transform="translate(46.632 61.149)" fill="#fff" stroke="#37bdc8" strokeWidth="3" />
                      </g>
                    </svg>
                  </div>
                  {' '}
                  <div>
                    <h5 className={hisaabSummary?.last_week_outstanding < 0
                      ? 'text-[#FF0000] font-bold text-md m-0' : 'text-[#013453] font-bold text-md m-0'}
                    >
                      <span className="font-sans font-semibold">₹</span>
                      {' '}
                      {hisaabSummary?.last_week_outstanding === null || typeof hisaabSummary?.last_week_outstanding !== 'number' ? 0
                        : roundNumber(hisaabSummary?.last_week_outstanding).toFixed(1)}
                    </h5>
                    <p className="text-[#013453] font-bold text-xs mb-2.5">Last Week Outstanding</p>
                    <div onClick={lastWeekOutstanding} className="d-flex flex-row justify-start">
                      <button type="button" className="mr-2 text-[#013453] text-xs hover:text-[#37BDC8]">
                        More Details
                      </button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                        <g id="arrow" transform="translate(-197.656 -95.525)">
                          <circle id="Ellipse_73" data-name="Ellipse 73" cx="24" cy="24" r="24" transform="translate(197.656 95.525)" fill="#f1f0f1" />
                          <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(204.156 102.025)">
                            <path id="Path_567" data-name="Path 567" d="M7.5,18h21" fill="none" stroke="#37bdc8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path id="Path_568" data-name="Path 568" d="M18,7.5,28.5,18,18,28.5" fill="none" stroke="#37bdc8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <h6 className="text-[#37BDC8] text-sm font-semibold">
                    <span className="text-[#013453] text-sm font-semibold">count:</span>
                    {' '}
                    {hisaabSummary?.count_last_week_outstanding || 0}
                  </h6>
                </div>
              </div>
            </div>
          </Col>
          <Col className="mb-3" xs={16} md={12}>
            <div className="border-solid rounded-md bg-[#FFFFFF] shadow-sm shadow-#0000000F p-4">
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-row">
                  <div className="border-solid rounded-full bg-[#37BDC8] mr-3 px-3 pb-2 pt-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="34" viewBox="0 0 47.777 65.288">
                      <path id="Icon_awesome-rupee-sign" data-name="Icon awesome-rupee-sign" d="M42.135,11.005a1.642,1.642,0,0,0,1.642-1.642V3.892A1.642,1.642,0,0,0,42.135,2.25H1.642A1.642,1.642,0,0,0,0,3.892v6.122a1.642,1.642,0,0,0,1.642,1.642H13.308c3.736,0,6.6,1.362,8.341,3.728H1.642A1.642,1.642,0,0,0,0,17.025V22.5a1.642,1.642,0,0,0,1.642,1.642H23.36c-.851,4.937-4.509,8.021-10.227,8.021H1.642A1.642,1.642,0,0,0,0,33.8v7.252A1.642,1.642,0,0,0,.528,42.26L23.108,63.1a1.642,1.642,0,0,0,1.113.435H35.516a1.642,1.642,0,0,0,1.113-2.848L15.988,41.636c10.465-.32,17.941-7.3,18.922-17.5h7.225A1.642,1.642,0,0,0,43.777,22.5V17.025a1.642,1.642,0,0,0-1.642-1.642H34.106a18.739,18.739,0,0,0-1.95-4.378Z" transform="translate(2 -0.25)" fill="#fff" stroke="#37bdc8" strokeWidth="4" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-[#013453] font-bold text-md m-0">
                      <span className="font-sans font-semibold">₹</span>
                      {' '}
                      {hisaabSummary?.amount_recovered === null || typeof hisaabSummary?.amount_recovered !== 'number' ? 0
                        : roundNumber(hisaabSummary?.amount_recovered).toFixed(1)}
                    </h5>
                    <p className="text-[#013453] font-bold text-xs mb-2.5">Amount Recovered</p>
                    <div onClick={amountRecovered} className="d-flex flex-row justify-start">
                      <button type="button" className="mr-2 text-[#013453] text-xs hover:text-[#37BDC8]">
                        More Details
                      </button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                        <g id="arrow" transform="translate(-197.656 -95.525)">
                          <circle id="Ellipse_73" data-name="Ellipse 73" cx="24" cy="24" r="24" transform="translate(197.656 95.525)" fill="#f1f0f1" />
                          <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(204.156 102.025)">
                            <path id="Path_567" data-name="Path 567" d="M7.5,18h21" fill="none" stroke="#37bdc8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path id="Path_568" data-name="Path 568" d="M18,7.5,28.5,18,18,28.5" fill="none" stroke="#37bdc8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row text-[#37BDC8]">
                  <h6 className="text-[#37BDC8] text-sm font-semibold">
                    <span className="text-[#013453] text-sm font-semibold">count:</span>
                    {' '}
                    {hisaabSummary?.count_amount_recovered || 0}
                  </h6>
                </div>
              </div>
            </div>
          </Col>
          <Col md={24} className={onClickValue === true ? 'container' : 'container d-none'}>
            {moreDetailsTable === true
              ? (
                <LastWeekOutstanding
                  hisaabHighOS={hisaabHighOS}
                  onSearchDriver={onSearchDriver}
                  hisaabARValue={hisaabARValue}
                />
              )
              : (
                <AmountRecovered
                  hisaabAmountRecovered={hisaabAmountRecovered}
                  onSearchDriver={onSearchDriver}
                  hisaabARValue={hisaabARValue}
                />
              )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WithPageHandler(Hisaab);
