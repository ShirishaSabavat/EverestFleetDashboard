/* eslint-disable no-unused-vars */
import * as axios from 'axios';
import Cookies from 'js-cookie';
import { store } from 'redux/store';

const globalHeaders = {
  Authorization: `Token ${Cookies.get('token')}`,
};
const onFetch = ({ url, method, headers = {} }) => {
  try {
    return axios({
      url: `${process.env.REACT_APP_FLEET_SERVER_URL}${url}`,
      // url,
      method,
      headers: {
        ...globalHeaders,
        ...headers,
      },
    });
  } catch (error) {
    return error;
  }
};
export const onFetchTeamApi = (teamID) => onFetch({ url: `/fleet/api/teamApi/${teamID}/`, method: 'GET' });
export const onFetchAllTeamsApi = () => onFetch({ url: '/fleet/api/teamApi/', method: 'GET' });

export const onFetchHisaabSummary = ({ teamIDValue }, { startOfWeek, endOfWeek }) => onFetch({ url: `/api/hisaab_summary/${teamIDValue},${startOfWeek},${endOfWeek}/`, method: 'GET' });
export const onFetchHisaabDriverOSApi = ({ teamIDValue }, { startOfWeek, endOfWeek }) => onFetch({ url: `/api/hisaab_driveros/${teamIDValue},${startOfWeek},${endOfWeek}/`, method: 'GET' });
export const onFetchHisaabWeekStatusApi = ({ enterValue }, { startOfWeek, endOfWeek }) => onFetch({ url: `/api/driver_os/${enterValue},${startOfWeek},${endOfWeek}/`, method: 'GET' });
export const onFetchHisaabHighOSApi = ({ teamIDValue }, { startOfWeek, endOfWeek }) => onFetch({ url: `/api/highos/${teamIDValue},${startOfWeek},${endOfWeek}/`, method: 'GET' });
export const onFetchHisaabAmountRecoveredApi = ({ teamIDValue }, { startOfWeek, endOfWeek }) => onFetch({ url: `/api/recover_amt/${teamIDValue},${startOfWeek},${endOfWeek}/`, method: 'GET' });
export const onFetchHisaabDriverDataApi = (driverId) => onFetch({ url: `/api/drivers/${driverId}/`, method: 'GET' });

export const onFetchHisaabDataApi = (driverId, { startOfWeek, endOfWeek }) => onFetch({ url: `/api/weekly_hisaab/${driverId},${startOfWeek},${endOfWeek}/`, method: 'GET' });
export const onFetchDriverWeeklyDataApi = (driverId) => onFetch({ url: `/api/driver_weekly_data/${driverId}/`, method: 'GET' });

export const onFetchCarSummaryApi = ({ teamIDValue }, { startOfWeek, endOfWeek }) => onFetch({ url: `/api/car_summary/${teamIDValue},${startOfWeek},${endOfWeek}/`, method: 'GET' });
export const onFetchIncentiveApi = ({ startOfWeek, endOfWeek }, { cityIDValue }) => onFetch({ url: `/api/incentive/${startOfWeek},${endOfWeek},${cityIDValue}/`, method: 'GET' });
export const onFetchIncentivesDataApi = ({ teamIDValue }, { startOfWeek, endOfWeek }) => onFetch({ url: `/api/car_inctive/${teamIDValue},${startOfWeek},${endOfWeek}/`, method: 'GET' });
export const onFetchMetricForCarsApi = ({ teamIDValue }, { startOfWeek, endOfWeek }) => onFetch({ url: `/api/car_status_weekly/${teamIDValue},${startOfWeek},${endOfWeek}/`, method: 'GET' });

export const onFetchCarStatusApi = ({ teamIDValue }, { day }) => onFetch({ url: `/api/car_status/${teamIDValue},${day}/`, method: 'GET' });
export const onFetchCarDailySidebarApi = (carType, { teamIDValue }, { day }) => onFetch({ url: `/api/cardaily/${carType},${teamIDValue},${day},${day}/`, method: 'GET' });
export const onFetchCarWeeklyCardApi = (carType, { carNumberValue }, { teamIDValue }, { startOfWeek, endOfWeek }) => onFetch({ url: `/api/carweekly/${carType},${carNumberValue},${teamIDValue},${startOfWeek},${endOfWeek}/`, method: 'GET' });
export const onFetchCarDailyTableApi = (carType, { teamIDValue }, { startOfWeek, endOfWeek }) => onFetch({ url: `/api/cardaily/${carType},${teamIDValue},${startOfWeek},${endOfWeek}/`, method: 'GET' });

export const onFetchDriverRatingApi = ({ teamIDValue }, { day }) => onFetch({ url: `/api/driver_rating/${teamIDValue},${day}/`, method: 'GET' });
export const onFetchDriverWeeklyApi = (driverRating, { teamIDValue }, { startOfWeek, endOfWeek }) => onFetch({ url: `/api/driver_weekly/${driverRating},${teamIDValue},${startOfWeek},${endOfWeek}/`, method: 'GET' });
export const onFetchDriverDailyApi = (driverId, driverRating, { teamIDValue }, { startOfWeek, endOfWeek }) => onFetch({ url: `/api/driver_daily/${driverRating},${teamIDValue},${startOfWeek},${endOfWeek},${driverId}/`, method: 'GET' });

export const onFetchWeeklyReportApi = (selectedTeam, { startOfWeek, endOfWeek }) => onFetch({ url: `/api/weekly_report/${selectedTeam},${startOfWeek},${endOfWeek}/`, method: 'GET' });
export const onFetchWeeklyReportUberKmApi = (selectedTeam, { startOfWeek, endOfWeek }) => onFetch({ url: `/api/weekly_report/uberkm/${selectedTeam},${startOfWeek},${endOfWeek}/`, method: 'GET' });
export const onFetchWeeklyCompareApi = (selectedTeam, { startOfWeek, endOfWeek }) => onFetch({ url: `/api/weekly_campare/${selectedTeam},${startOfWeek},${endOfWeek}/`, method: 'GET' });
export const onFetchWeeklyCompareUberKmApi = (selectedTeam, { startOfWeek, endOfWeek }) => onFetch({ url: `/api/weekly_campare/uberkm/${selectedTeam},${startOfWeek},${endOfWeek}/`, method: 'GET' });

export const onFetchDeadKMReportApi = ({ teamIDValue }, { day }) => onFetch({ url: `/api/dead_km/${teamIDValue},${day}/`, method: 'GET' });
export const onFetchDriverRatingReportApi = ({ teamIDValue }) => onFetch({ url: `/api/driver_report/${teamIDValue}/`, method: 'GET' });

export const onFetchEmpSummaryApi = (employeeId) => onFetch({ url: `/api/etm_summary/${employeeId}/`, method: 'GET' });
export const onFetchEmpMonthlySummaryApi = (employeeId) => onFetch({ url: `/api/monthly_report/${employeeId}/`, method: 'GET' });
export const onFetchRunningCarsApi = (employeeId) => onFetch({ url: `/api/etm_cars/${employeeId}/`, method: 'GET' });
export const onFetchPenaltiesApi = (employeeId) => onFetch({ url: `/api/driver_p/${employeeId}/`, method: 'GET' });
export const onFetchRtoFinesApi = (employeeId) => onFetch({ url: `/api/driver_rto/${employeeId}/`, method: 'GET' });
export const onFetchDeadKmApi = (employeeId) => onFetch({ url: `/api/daily_deadkm/${employeeId}/`, method: 'GET' });

export const onFetchDriverDailyReportApi = ({ startOfWeek, endOfWeek }, { teamIDValue }, {
  day1, day2, day3, day4, day5, day6, day7,
}) => onFetch({ url: `/fleet/driver_report?start_date=${startOfWeek}+&end_date=${endOfWeek}+&team_id=${teamIDValue}&dates%5B%5D=${day1}+&dates%5B%5D=${day2}+&dates%5B%5D=${day3}+&dates%5B%5D=${day4}+&dates%5B%5D=${day5}+&dates%5B%5D=${day6}+&dates%5B%5D=${day7}+`, method: 'GET' });

export const onFetchCarDailyReportApi = ({ startOfWeek, endOfWeek }, { teamIDValue }, {
  day1, day2, day3, day4, day5, day6, day7,
}) => onFetch({ url: `/fleet/car_report?start_date=${startOfWeek}+&end_date=${endOfWeek}+&team_id=${teamIDValue}&dates%5B%5D=${day1}+&dates%5B%5D=${day2}+&dates%5B%5D=${day3}+&dates%5B%5D=${day4}+&dates%5B%5D=${day5}+&dates%5B%5D=${day6}+&dates%5B%5D=${day7}+`, method: 'GET' });
