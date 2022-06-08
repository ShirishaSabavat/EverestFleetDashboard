import { useEffect, useState } from 'react';
import WithPageHandler from 'components/layouts/pageHandler';
import { Col, Row } from 'antd';
import { useCalenderContext } from 'context/calenderContext';
import { useDayCalenderContext } from 'context/dayCalenderContext';
import { useTeamContext } from 'context/teamIDContext';
import moment from 'moment';
import CircleImg from './circleImg';
import {
  onFetchHisaabSummary, onFetchCarStatusApi, onFetchWeeklyCompareApi,
} from '../../../../services/axios';

// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve) => {
  setTimeout(() => resolve(), 3000);
});
const Dashboard = ({
  pageState,
  setPageState,
}) => {
  const { calenderDate, onChangeWeekDate } = useCalenderContext();
  const { dayCalenderDate } = useDayCalenderContext();
  const { teamID } = useTeamContext();

  const [hisaabSummary = [], setHisaabSummary] = useState();
  const [carStatus, setCarStatus] = useState();
  const [weeklyCompare = [], setWeeklyCompare] = useState();

  const onFetchData = async () => {
    try {
      await promise;
      setPageState('loaded');
    } catch (error) {
      setPageState('error');
    }
  };
  let hisaabLastWeekDate;

  if (onChangeWeekDate === true) {
    hisaabLastWeekDate = {
      startOfWeek: calenderDate.startOfWeek,
      endOfWeek: calenderDate.endOfWeek,
    };
  } else {
    hisaabLastWeekDate = {
      startOfWeek: moment(calenderDate.startOfWeek).startOf('isoweek').subtract(1, 'week').format('YYYY-MM-DD'),
      endOfWeek: moment(calenderDate.endOfWeek).endOf('isoweek').subtract(1, 'week').format('YYYY-MM-DD'),
    };
  }

  useEffect(async () => {
    onFetchData();
    if (!calenderDate.startOfWeek || !calenderDate.endOfWeek) return;
    const hisaabPromises = [];
    hisaabPromises.push(await onFetchHisaabSummary(teamID, hisaabLastWeekDate));
    hisaabPromises.push(await onFetchCarStatusApi(teamID, dayCalenderDate));
    hisaabPromises.push(await onFetchWeeklyCompareApi(teamID.teamIDValue, calenderDate));

    try {
      const response = await Promise.all([
        hisaabPromises,
      ]);
      setHisaabSummary(response[0][0].data[0]);
      setCarStatus(response[0][1].data[0]);
      setWeeklyCompare(response[0][2]?.data);
    } catch (error) {
      console.error(error);
    }
  }, [teamID, calenderDate]);
  const calculateData = (val1, val2) => (Number(val1) / Number(val2));

  // return null during page loading or data fetching error
  if (pageState === 'loading' || pageState === 'error') return null;

  return (
    // component
    <div style={{ fontFamily: 'montserrat', fontWeight: 'semibold' }}>
      <Row gutter={16}>
        <Col className="mb-3" xs={16} md={12}>
          <div className="border-solid rounded-md bg-[#FFFFFF] shadow-sm shadow-#0000000F pt-3 px-4">
            <div className="d-flex flex-row justify-content-between">
              <div>
                <div className="d-flex flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="60" viewBox="0 0 83.474 86.341">
                    <g id="ledger" transform="translate(-8.5)">
                      <path id="Path_571" data-name="Path 571" d="M131.013,71.591h30.095a1.686,1.686,0,0,0,1.686-1.686V52.992a1.686,1.686,0,0,0-1.686-1.686H131.013a1.686,1.686,0,0,0-1.686,1.686V69.9A1.686,1.686,0,0,0,131.013,71.591ZM132.7,54.679h26.722V68.218H132.7Z" transform="translate(-100.451 -42.654)" fill="#86a1a4" />
                      <path id="Path_572" data-name="Path 572" d="M187.763,101.45h-16.53a1.686,1.686,0,1,0,0,3.373h16.53a1.686,1.686,0,0,0,0-3.373Z" transform="translate(-133.889 -84.342)" fill="#86a1a4" />
                      <path id="Path_573" data-name="Path 573" d="M71,34.985V1.686A1.686,1.686,0,0,0,69.314,0H17.332A8.84,8.84,0,0,0,8.5,8.828v64.02a1.676,1.676,0,0,0,.246.873,7.778,7.778,0,0,0,7.52,5.818H48.55A25.918,25.918,0,1,0,71,34.985ZM17.332,3.373h2.886V24.626a1.686,1.686,0,1,0,3.373,0V3.373H67.628V34.557c-.525-.032-1.053-.05-1.585-.05A25.916,25.916,0,0,0,40.362,64.02H23.591V39.769a1.686,1.686,0,0,0-3.373,0V64.02H16.266a7.722,7.722,0,0,0-4.393,1.366V8.828a5.464,5.464,0,0,1,5.46-5.455Zm-5.46,68.409a4.4,4.4,0,0,1,4.393-4.389h24.8a25.846,25.846,0,0,0,4.393,8.774H16.266a4.394,4.394,0,0,1-4.393-4.384Zm54.17,11.186A22.594,22.594,0,0,1,44.037,65.393c0-.024-.01-.048-.016-.071A22.561,22.561,0,1,1,66.043,82.968Z" fill="#86a1a4" />
                      <path id="Path_575" data-name="Path 575" d="M79.676,184.309a1.689,1.689,0,1,0-1.686-1.691v.01A1.682,1.682,0,0,0,79.676,184.309Z" transform="translate(-57.772 -150.421)" fill="#86a1a4" />
                      <path id="Icon_awesome-rupee-sign" data-name="Icon awesome-rupee-sign" d="M20.331,6.475a.792.792,0,0,0,.792-.792V3.042a.792.792,0,0,0-.792-.792H.792A.792.792,0,0,0,0,3.042V6a.792.792,0,0,0,.792.792H6.421a4.762,4.762,0,0,1,4.025,1.8H.792A.792.792,0,0,0,0,9.379v2.64a.792.792,0,0,0,.792.792H11.272c-.41,2.382-2.176,3.87-4.935,3.87H.792A.792.792,0,0,0,0,17.474v3.5a.792.792,0,0,0,.255.582l10.9,10.057a.792.792,0,0,0,.537.21h5.45a.792.792,0,0,0,.537-1.374l-9.96-9.194a9.043,9.043,0,0,0,9.13-8.443h3.486a.792.792,0,0,0,.792-.792V9.379a.792.792,0,0,0-.792-.792H16.457a9.042,9.042,0,0,0-.941-2.112Z" transform="translate(56.99 44.157)" fill="#86a1a4" stroke="#fff" strokeWidth="2" />
                    </g>
                  </svg>
                  <p className="text-[#333333] font-bold text-lg ml-3 mt-3">Hisaab</p>
                </div>
                <p className="text-[#86A1A4] font-semibold text-sm mt-3 m-0">Current Total Outstanding</p>
                <p className={hisaabSummary?.total_outstanding < 0
                  ? 'text-[#FF0000] font-semibold text-xl' : 'text-[#013453] font-semibold text-xl'}
                >
                  <span className="font-sans font-semibold">₹</span>
                  {' '}
                  {hisaabSummary?.total_outstanding?.toFixed(1) || 0}
                </p>
              </div>
              <div>
                <CircleImg
                  value={hisaabSummary?.amount_recovered?.toFixed(1)}
                  type="Amount Recovered"
                />
              </div>
            </div>
          </div>
        </Col>
        <Col className="mb-3" xs={16} md={12}>
          <div className="border-solid rounded-md bg-[#FFFFFF] shadow-sm shadow-#0000000F pt-3 px-4">
            <div className="d-flex flex-row justify-content-between">
              <div>
                <div className="d-flex flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" id="car" width="70" height="60" viewBox="0 0 87.912 69.699">
                    <path id="Path_521" data-name="Path 521" d="M92.992,299.25c.271-1.6.458-3.217.828-4.794a13.473,13.473,0,0,1,6.4-8.843,2.432,2.432,0,0,0,.809-1.043c2.708-5.669,5.383-11.355,8.1-17.019.48-1,1.127-1.92,1.677-2.89,1.112-1.957,3.045-2.695,5.013-3.331a46.811,46.811,0,0,1,11.387-1.912,143.106,143.106,0,0,1,19.469,0c4.51.316,8.994.83,13.228,2.6a6.25,6.25,0,0,1,3.344,2.929c2.406,4.733,4.813,9.469,7.172,14.226.9,1.815,1.654,3.7,2.514,5.54a2.246,2.246,0,0,0,.8.938c4.159,2.49,6.161,6.333,6.8,10.968.907,6.559-.022,13-1.445,19.393a2.05,2.05,0,0,1-1.419,1.669c-.2.067-.4.5-.4.766-.047,1.658.067,3.327-.073,4.974-.267,3.153-2.138,5.129-5.277,5.247-3.968.148-7.951.086-11.92-.067a5.193,5.193,0,0,1-4.673-4.817c-.062-.966-.011-1.936-.011-3.045-2.138,1.118-4.308.621-6.413.634-8.611.054-17.224.032-25.834.013-1.462,0-2.978.305-4.452-.716,0,.884.011,1.587,0,2.288-.054,3.252-1.957,5.531-5.185,5.688-3.852.187-7.727.187-11.578,0-3.241-.157-5.161-2.471-5.211-5.77-.021-1.458-.013-2.918,0-4.376,0-.462-.024-.779-.609-.92a1.749,1.749,0,0,1-1.241-1.6c-.557-3.553-1.092-7.11-1.637-10.664l-.168-1.09Q92.993,301.742,92.992,299.25Zm83.675-3.479a10.672,10.672,0,0,0-3.228-5.783,14.825,14.825,0,0,0-7.333-3.292,97.761,97.761,0,0,0-16.2-1.671,297.756,297.756,0,0,0-31.656.331,60.534,60.534,0,0,0-13.026,2,11.523,11.523,0,0,0-5.985,3.946,10.048,10.048,0,0,0-1.991,4.48c1.994,0,3.88-.017,5.763,0a8.6,8.6,0,0,1,6.1,2.54c2.963,2.9,5.888,5.847,8.8,8.8a2.424,2.424,0,0,1,.647,1.254c.185,1.222-.7,2.026-2.15,2.026q-9.013.007-18.026,0h-.959c.146.852.262,1.585.4,2.314.252,1.329.256,1.335,1.6,1.335,4.32,0,8.641-.024,12.961.026a5.592,5.592,0,0,1,2.206.525c1.918.884,3.783,1.886,5.686,2.807a3.131,3.131,0,0,0,1.3.32q15.364.026,30.731,0a3.1,3.1,0,0,0,1.3-.32c1.9-.918,3.768-1.921,5.686-2.8a5.694,5.694,0,0,1,2.206-.525c2.8-.06,5.609-.021,8.413-.026,1.746,0,3.49,0,5.236-.037.247-.006.66-.2.7-.378.249-1.041.411-2.1.617-3.236H158c-.228,0-.458,0-.686,0a1.826,1.826,0,0,1-1.869-1.105,1.861,1.861,0,0,1,.514-2.185c2.753-2.751,5.529-5.48,8.247-8.262a9.608,9.608,0,0,1,7.441-3.095C173.275,295.807,174.9,295.77,176.667,295.77ZM168.336,283.4a177.526,177.526,0,0,0-8.15-16.492,4.216,4.216,0,0,0-1.845-1.553,28.247,28.247,0,0,0-10.269-2.125q-8.823-.384-17.662-.32a50.582,50.582,0,0,0-12.062,1.479c-2.189.557-4.234,1.228-5.32,3.559-2.366,5.071-4.856,10.084-7.29,15.12a.87.87,0,0,0-.026.3c10.34-2.2,20.787-2.243,31.219-2.243C147.381,281.13,157.852,281.175,168.336,283.4Zm-68,34.348c0,1.851-.024,3.589.009,5.325a1.8,1.8,0,0,0,1.983,1.965q5.313.035,10.626,0A1.841,1.841,0,0,0,114.964,323c.024-1.2.034-2.4-.017-3.6a1.142,1.142,0,0,0-.473-.759,5.763,5.763,0,0,0-3.475-.918C107.491,317.8,103.979,317.751,100.334,317.751Zm73.191,0c-3.615,0-7.127.047-10.636-.026a5.791,5.791,0,0,0-3.473.923,1.126,1.126,0,0,0-.465.763c-.052,1.14-.03,2.284-.019,3.428.013,1.527.671,2.2,2.2,2.209,1.714.015,3.428,0,5.142,0,1.772,0,3.542.017,5.314-.009,1.11-.017,1.886-.589,1.923-1.551C173.574,321.615,173.525,319.736,173.525,317.751Zm-61.391-11.036c-1.944-2-3.806-3.972-5.733-5.88a5.248,5.248,0,0,0-3.845-1.413q-2.574,0-5.146,0c-.215,0-.43.041-.781.075.088,2.434.176,4.815.265,7.213C102.089,306.714,107.1,306.714,112.134,306.714Zm49.376-.028h15.568v-7.228c-2.168,0-4.314-.1-6.443.045a4.737,4.737,0,0,0-2.665,1C165.785,302.422,163.755,304.512,161.51,306.686Z" transform="translate(-92.99 -259.089)" fill="#86a1a4" />
                    <path id="Path_522" data-name="Path 522" d="M217.18,429.636h19.228c.228,0,.458.009.686,0a1.858,1.858,0,0,1,1.514,3.185q-2.832,3.394-5.658,6.791c-1.043,1.251-2.1,2.495-3.127,3.761a2.3,2.3,0,0,1-1.929.91q-10.687-.02-21.372,0a2.331,2.331,0,0,1-1.923-.923q-4.242-5.122-8.516-10.219c-.613-.733-1.133-1.477-.643-2.473.465-.946,1.325-1.041,2.258-1.039Q207.437,429.649,217.18,429.636Zm-16.17,3.686c2.015,2.417,3.905,4.712,5.839,6.97a1.438,1.438,0,0,0,.983.32q9.393.029,18.789-.009a1.7,1.7,0,0,0,1.14-.525c1.738-2.013,3.426-4.069,5.125-6.114.151-.183.275-.389.452-.641C222.55,433.322,211.869,433.322,201.011,433.322Z" transform="translate(-173.256 -392.955)" fill="#86a1a4" />
                  </svg>
                  <p className="text-[#333333] font-bold text-lg ml-3 mt-3">Total Cars</p>
                </div>
                <p className="text-[#86A1A4] font-semibold text-sm mt-3 mb-0">Total Cars</p>
                <p className="text-[#013453] font-semibold text-xl">
                  {carStatus?.total_cars || 0}
                </p>
              </div>
              <div>
                <CircleImg type="Active Cars" value={carStatus?.car_driven} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="mb-3" xs={16} md={12}>
          <div className="border-solid rounded-md bg-[#FFFFFF] shadow-sm shadow-#0000000F pt-3 px-4">
            <div className="d-flex flex-row justify-content-between">
              <div>
                <div className="d-flex flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="60" viewBox="0 0 67.475 74.639">
                    <g id="Icon_feather-calendar" data-name="Icon feather-calendar" transform="translate(-3 -1.5)">
                      <path id="Path_551" data-name="Path 551" d="M11.664,6H61.811a7.164,7.164,0,0,1,7.164,7.164V63.311a7.164,7.164,0,0,1-7.164,7.164H11.664A7.164,7.164,0,0,1,4.5,63.311V13.164A7.164,7.164,0,0,1,11.664,6Z" transform="translate(0 4.164)" fill="none" stroke="#86a1a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                      <path id="Path_552" data-name="Path 552" d="M24,3V17.328" transform="translate(27.065 0)" fill="none" stroke="#86a1a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                      <path id="Path_553" data-name="Path 553" d="M12,3V17.328" transform="translate(10.41 0)" fill="none" stroke="#86a1a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                      <path id="Path_554" data-name="Path 554" d="M4.5,15H68.975" transform="translate(0 16.656)" fill="none" stroke="#86a1a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                      <path id="Path_555" data-name="Path 555" d="M55.531,98.2l8.4-9,10.4,9,20-18.2" transform="translate(-37.031 -41.361)" fill="none" stroke="#86a1a4" strokeWidth="3" />
                    </g>
                  </svg>
                  <p className="text-[#333333] leading-6 font-bold text-lg ml-3 mt-2 mb-3">
                    Previous / Current
                    <br />
                    Week Status
                  </p>
                </div>
                <p className="text-[#86A1A4] font-semibold text-sm mt-2 mb-0">Trips This Week</p>
                <p className="text-[#013453] font-semibold text-xl">
                  {!weeklyCompare?.[0]?.total_trips ? 0 : weeklyCompare?.[0]?.total_trips}
                </p>
              </div>
              <div>
                <CircleImg type="Trips Last Week" value={weeklyCompare?.[1]?.total_trips} />
              </div>
            </div>
          </div>
        </Col>
        <Col className="mb-3" xs={16} md={12}>
          <div className="border-solid rounded-md bg-[#FFFFFF] shadow-sm shadow-#0000000F pt-3 px-4">
            <div className="d-flex flex-row justify-content-between">
              <div>
                <div className="d-flex flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="60" viewBox="0 0 80.224 76.892">
                    <path id="Icon_open-graph" data-name="Icon open-graph" d="M64.22,0,36.54,26.584l-9.135-8.861L0,44.573l9.135,8.861,18.27-17.989,9.135,8.861L73.081,8.861ZM0,62.03v8.861H73.081V62.03Z" transform="translate(3.581 3.5)" fill="#86a1a4" stroke="#fff" strokeWidth="5" />
                  </svg>
                  <p className="text-[#333333] font-bold text-lg ml-3 mt-3">EPD</p>
                </div>
                <p className="text-[#86A1A4] font-semibold text-sm mt-3 m-0">Revenue Per Car</p>
                <p className="text-[#013453] font-semibold text-xl">
                  <span className="font-sans font-semibold">₹</span>
                  {' '}
                  {(!weeklyCompare[0]?.revenue || !weeklyCompare[0]?.car_driven) ? 0
                    : (calculateData(
                      weeklyCompare[0]?.revenue,
                      weeklyCompare[0]?.car_driven,
                    )).toFixed(1)}
                </p>
              </div>
              <div>
                <CircleImg
                  type="Rev. Per Trip"
                  value={(!weeklyCompare[0]?.revenue || !weeklyCompare[0]?.total_trips) ? 0
                    : (calculateData(
                      weeklyCompare[0]?.revenue,
                      Number(weeklyCompare[0]?.total_trips),
                    )).toFixed(1)}
                />
              </div>
              <div>
                <CircleImg
                  type="Rev. Per Hour"
                  value={(!weeklyCompare[0]?.revenue || !weeklyCompare[0]?.online_hours) ? 0
                    : (calculateData(
                      weeklyCompare[0]?.revenue,
                      weeklyCompare[0]?.online_hours,
                    )).toFixed(1)}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="mb-3" xs={16} md={12}>
          <div className="border-solid rounded-md bg-[#FFFFFF] shadow-sm shadow-#0000000F pt-3 px-4">
            <div className="d-flex flex-row justify-content-between">
              <div>
                <div className="d-flex flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="60" viewBox="0 0 80.224 76.892">
                    <path id="Icon_open-graph" data-name="Icon open-graph" d="M64.22,0,36.54,26.584l-9.135-8.861L0,44.573l9.135,8.861,18.27-17.989,9.135,8.861L73.081,8.861ZM0,62.03v8.861H73.081V62.03Z" transform="translate(3.581 3.5)" fill="#86a1a4" stroke="#fff" strokeWidth="5" />
                  </svg>
                  <p className="text-[#333333] font-bold text-lg ml-3 mt-3">Total Online Hours</p>
                </div>
                <p className="text-[#86A1A4] font-semibold text-sm mt-3 m-0">Total Online Hours</p>
                <p className="text-[#013453] font-semibold text-xl">
                  {!weeklyCompare[0]?.online_hours ? 0
                    : weeklyCompare[0]?.online_hours?.toFixed(1)}
                </p>
              </div>
              <div>
                <CircleImg
                  type="SHPV"
                  value={(!weeklyCompare[0]?.online_hours || !carStatus?.car_driven) ? 0
                    : (calculateData(
                      weeklyCompare[0]?.online_hours,
                      Number(carStatus?.car_driven),
                    ))?.toFixed(1)}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WithPageHandler(Dashboard);
