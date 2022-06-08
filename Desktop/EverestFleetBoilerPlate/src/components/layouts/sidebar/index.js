import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from 'redux/store';
import '@fontsource/montserrat';
import { useMenuContext } from 'context/menuContext';
import { useDayCalenderContext } from 'context/dayCalenderContext';
import { useCalenderContext } from 'context/calenderContext';
import { useEffect } from 'react';
import moment from 'moment';
import everestFleetLogo from '../../../assets/images/everestFleetLogo.png';
import ReportsImg1 from '../../../assets/images/reportsImg1.jpeg';
// import ReportsImg2 from '../../../assets/images/reportsImg2.jpeg';

const { SubMenu, Item } = Menu;
const sidebarMenu = [
  {
    title: 'Dashboard',
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-2" viewBox="0 0 22.4 22.4">
        <path id="Icon_material-dashboard" data-name="Icon material-dashboard" d="M4.5,16.389h9.511V4.5H4.5Zm0,9.511h9.511V18.767H4.5Zm11.889,0H25.9V14.011H16.389Zm0-21.4v7.133H25.9V4.5Z" transform="translate(-4 -4)" fill="none" stroke="#86a1a4" strokeWidth="1" />
      </svg>
    ),
    key: '/home/dashboard',
  },
  {
    title: 'Hisaab',
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" style={{ marginLeft: '-8px' }} className="mr-0.5" viewBox="0 0 25 39">
        <g id="Coin_" data-name="Coin " transform="translate(-17 -11)">
          <g id="Icon" transform="translate(17 24.901)">
            <g id="Ellipse_64" data-name="Ellipse 64" transform="translate(0 0.099)" fill="none" stroke="#86a1a4" strokeWidth="1">
              <circle cx="12.5" cy="12.5" r="12.5" stroke="none" />
              <circle cx="12.5" cy="12.5" r="12" fill="none" />
            </g>
            <path id="Icon_awesome-rupee-sign" data-name="Icon awesome-rupee-sign" d="M9.968,4.321a.388.388,0,0,0,.388-.388V2.638a.388.388,0,0,0-.388-.388H.388A.388.388,0,0,0,0,2.638V4.087a.388.388,0,0,0,.388.388h2.76a2.335,2.335,0,0,1,1.973.882H.388A.388.388,0,0,0,0,5.745V7.04a.388.388,0,0,0,.388.388H5.526a2.237,2.237,0,0,1-2.419,1.9H.388A.388.388,0,0,0,0,9.714V11.43a.388.388,0,0,0,.125.285l5.342,4.931a.388.388,0,0,0,.263.1H8.4a.388.388,0,0,0,.263-.674L3.782,11.568a4.434,4.434,0,0,0,4.477-4.14H9.968a.388.388,0,0,0,.388-.388V5.745a.388.388,0,0,0-.388-.388h-1.9a4.433,4.433,0,0,0-.461-1.036Z" transform="translate(7.53 4.015)" fill="none" stroke="#86a1a4" strokeWidth="1" />
          </g>
          <text id="_" data-name="?" transform="translate(26 23)" fill="none" stroke="#86a1a4" strokeWidth="1" fontSize="11" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600"><tspan x="0" y="0">?</tspan></text>
          <text id="_2" data-name="?" transform="translate(33 24)" fill="none" stroke="#86a1a4" strokeWidth="1" fontSize="9" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600"><tspan x="0" y="0">?</tspan></text>
          <text id="_3" data-name="?" transform="translate(22 24)" fill="none" stroke="#86a1a4" strokeWidth="1" fontSize="9" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600"><tspan x="0" y="0">?</tspan></text>
        </g>
      </svg>
    ),
    key: '/home/hisaab',
  },
  {
    title: 'Driver Hisaab',
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" style={{ marginLeft: '-8px' }} className="mr-0.5" viewBox="0 0 25 39">
        <g id="Coin_" data-name="Coin " transform="translate(-17 -11)">
          <g id="Icon" transform="translate(17 24.901)">
            <g id="Ellipse_64" data-name="Ellipse 64" transform="translate(0 0.099)" fill="none" stroke="#86a1a4" strokeWidth="1">
              <circle cx="12.5" cy="12.5" r="12.5" stroke="none" />
              <circle cx="12.5" cy="12.5" r="12" fill="none" />
            </g>
            <path id="Icon_awesome-rupee-sign" data-name="Icon awesome-rupee-sign" d="M9.968,4.321a.388.388,0,0,0,.388-.388V2.638a.388.388,0,0,0-.388-.388H.388A.388.388,0,0,0,0,2.638V4.087a.388.388,0,0,0,.388.388h2.76a2.335,2.335,0,0,1,1.973.882H.388A.388.388,0,0,0,0,5.745V7.04a.388.388,0,0,0,.388.388H5.526a2.237,2.237,0,0,1-2.419,1.9H.388A.388.388,0,0,0,0,9.714V11.43a.388.388,0,0,0,.125.285l5.342,4.931a.388.388,0,0,0,.263.1H8.4a.388.388,0,0,0,.263-.674L3.782,11.568a4.434,4.434,0,0,0,4.477-4.14H9.968a.388.388,0,0,0,.388-.388V5.745a.388.388,0,0,0-.388-.388h-1.9a4.433,4.433,0,0,0-.461-1.036Z" transform="translate(7.53 4.015)" fill="none" stroke="#86a1a4" strokeWidth="1" />
          </g>
          <text id="_" data-name="?" transform="translate(26 23)" fill="none" stroke="#86a1a4" strokeWidth="1" fontSize="11" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600"><tspan x="0" y="0">?</tspan></text>
          <text id="_2" data-name="?" transform="translate(33 24)" fill="none" stroke="#86a1a4" strokeWidth="1" fontSize="9" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600"><tspan x="0" y="0">?</tspan></text>
          <text id="_3" data-name="?" transform="translate(22 24)" fill="none" stroke="#86a1a4" strokeWidth="1" fontSize="9" fontFamily="Montserrat-SemiBold, Montserrat" fontWeight="600"><tspan x="0" y="0">?</tspan></text>
        </g>
      </svg>
    ),
    key: '/home/driverHisaab',
  },
  {
    title: 'Car Management',
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" style={{ marginLeft: '-6px' }} className="mr-2" viewBox="0 0 32.343 25.733">
        <g id="car" transform="translate(0.2 0.2)">
          <path id="Path_521" data-name="Path 521" d="M92.991,273.686c.1-.582.166-1.169.3-1.742a4.9,4.9,0,0,1,2.327-3.214.884.884,0,0,0,.294-.379c.984-2.06,1.956-4.127,2.944-6.186.174-.364.41-.7.61-1.05a2.9,2.9,0,0,1,1.822-1.211,17.015,17.015,0,0,1,4.139-.695,52.015,52.015,0,0,1,7.076,0,15,15,0,0,1,4.808.944,2.272,2.272,0,0,1,1.215,1.065c.875,1.72,1.749,3.442,2.607,5.171.327.66.6,1.346.914,2.013a.816.816,0,0,0,.292.341,5.179,5.179,0,0,1,2.472,3.986,19.765,19.765,0,0,1-.525,7.049.745.745,0,0,1-.516.607c-.073.024-.144.181-.147.278-.017.6.024,1.209-.027,1.808a1.891,1.891,0,0,1-1.918,1.907c-1.442.054-2.89.031-4.333-.024a1.888,1.888,0,0,1-1.7-1.751c-.023-.351,0-.7,0-1.107a4.661,4.661,0,0,1-2.331.231c-3.13.02-6.26.012-9.39,0a2.518,2.518,0,0,1-1.618-.26c0,.321,0,.577,0,.832a1.922,1.922,0,0,1-1.885,2.067c-1.4.068-2.808.068-4.208,0a1.941,1.941,0,0,1-1.894-2.1c-.008-.53,0-1.061,0-1.591,0-.168-.009-.283-.221-.335a.636.636,0,0,1-.451-.582c-.2-1.291-.4-2.584-.595-3.876l-.061-.4Q92.991,274.592,92.991,273.686Zm30.413-1.265a3.879,3.879,0,0,0-1.173-2.1,5.388,5.388,0,0,0-2.665-1.2,35.532,35.532,0,0,0-5.887-.607,108.226,108.226,0,0,0-11.506.12,22,22,0,0,0-4.734.728,4.188,4.188,0,0,0-2.175,1.434,3.652,3.652,0,0,0-.724,1.628c.725,0,1.41-.006,2.095,0a3.124,3.124,0,0,1,2.218.923c1.077,1.055,2.14,2.125,3.2,3.2a.881.881,0,0,1,.235.456c.067.444-.255.736-.782.736q-3.276,0-6.552,0H94.6c.053.309.1.576.145.841.091.483.093.485.581.485,1.57,0,3.141-.009,4.711.009a2.032,2.032,0,0,1,.8.191c.7.321,1.375.686,2.067,1.02a1.138,1.138,0,0,0,.473.116q5.584.009,11.17,0a1.126,1.126,0,0,0,.473-.116c.692-.334,1.369-.7,2.067-1.019a2.069,2.069,0,0,1,.8-.191c1.018-.022,2.039-.008,3.058-.009.635,0,1.269,0,1.9-.013.09,0,.24-.073.256-.138.091-.378.149-.764.224-1.176H116.37a.664.664,0,0,1-.679-.4.676.676,0,0,1,.187-.794c1-1,2.01-1.992,3-3a3.492,3.492,0,0,1,2.7-1.125C122.171,272.434,122.763,272.421,123.4,272.421Zm-3.028-4.5a64.524,64.524,0,0,0-2.962-5.994,1.533,1.533,0,0,0-.671-.564,10.267,10.267,0,0,0-3.732-.772q-3.207-.139-6.42-.116a18.384,18.384,0,0,0-4.384.538,2.52,2.52,0,0,0-1.934,1.294c-.86,1.843-1.765,3.665-2.65,5.5a.316.316,0,0,0-.009.11,54.178,54.178,0,0,1,11.347-.815A54.213,54.213,0,0,1,120.376,267.926ZM95.659,280.41c0,.673-.009,1.3,0,1.935a.652.652,0,0,0,.721.714q1.931.013,3.862,0a.669.669,0,0,0,.732-.742c.009-.436.013-.872-.006-1.308a.415.415,0,0,0-.172-.276,2.1,2.1,0,0,0-1.263-.334C98.261,280.427,96.984,280.41,95.659,280.41Zm26.6,0c-1.314,0-2.59.017-3.866-.009a2.1,2.1,0,0,0-1.262.335.409.409,0,0,0-.169.277c-.019.414-.011.83-.007,1.246,0,.555.244.8.8.8.623.005,1.246,0,1.869,0,.644,0,1.287.006,1.931,0,.4-.006.685-.214.7-.564C122.28,281.815,122.262,281.132,122.262,280.41ZM99.948,276.4c-.707-.727-1.384-1.444-2.084-2.137a1.907,1.907,0,0,0-1.4-.514q-.936,0-1.87,0c-.078,0-.156.015-.284.027.032.885.064,1.75.1,2.622Zm17.947-.01h5.658v-2.627c-.788,0-1.568-.036-2.342.016a1.722,1.722,0,0,0-.968.364C119.449,274.839,118.711,275.6,117.895,276.389Z" transform="translate(-92.99 -259.089)" fill="#86a1a4" stroke="#fff" strokeWidth="0.4" />
          <path id="Path_522" data-name="Path 522" d="M203.219,429.632h6.989c.083,0,.167,0,.249,0a.675.675,0,0,1,.55,1.158q-1.029,1.234-2.057,2.469c-.379.455-.763.907-1.137,1.367a.838.838,0,0,1-.7.331q-3.884-.007-7.768,0a.847.847,0,0,1-.7-.335q-1.542-1.862-3.1-3.714c-.223-.267-.412-.537-.234-.9.169-.344.481-.378.821-.378Q199.677,429.637,203.219,429.632Zm-5.877,1.34c.732.879,1.419,1.713,2.122,2.533a.522.522,0,0,0,.357.116q3.414.011,6.829,0a.618.618,0,0,0,.414-.191c.632-.732,1.245-1.479,1.863-2.222.055-.066.1-.141.164-.233Z" transform="translate(-187.254 -416.3)" fill="#86a1a4" stroke="#fff" strokeWidth="0.4" />
        </g>
      </svg>
    ),
    key: '/home/carManagement',
  },
  {
    title: 'Car Summary',
    icon: () => (
      <img src={ReportsImg1} style={{ marginLeft: '-4px' }} height={50} width={24} className="mr-2" alt="cs" />
    ),
    key: '/home/carSummary',
  },
  {
    title: 'Performance Report',
    icon: () => (
      <img src={ReportsImg1} style={{ marginLeft: '-4px' }} height={20} width={24} className="mr-2" alt="cs" />
    ),
    key: '/home/performanceReport',
  },
  {
    title: 'Weekly Summary Report',
    icon: () => (
      <img src={ReportsImg1} style={{ marginLeft: '-4px' }} height={20} width={24} className="mr-2" alt="cs" />

    ),
    key: '/home/weeklySummaryReport',
  },
  {
    title: 'Weekly Compare Report',
    icon: () => (
      <img src={ReportsImg1} style={{ marginLeft: '-4px' }} height={20} width={24} className="mr-2" alt="cs" />

    ),
    key: '/home/weeklyCompareReport',
  },
  {
    title: 'Dead KMs Report',
    icon: () => (
      <img src={ReportsImg1} style={{ marginLeft: '-4px' }} height={20} width={24} className="mr-2" alt="cs" />

    ),
    key: '/home/deadKMsReport',
  },
  {
    title: 'Driver Rating Report',
    icon: () => (
      <img src={ReportsImg1} style={{ marginLeft: '-4px' }} height={20} width={24} className="mr-2" alt="cs" />

    ),
    key: '/home/driverRatingReport',
  },
  {
    title: 'Driver Summary Report',
    icon: () => (
      <img src={ReportsImg1} style={{ marginLeft: '-4px' }} height={20} width={24} className="mr-2" alt="cs" />

    ),
    key: '/home/driverSummaryReport',
  },
  {
    title: 'Driver Daily Report',
    icon: () => (
      <img src={ReportsImg1} style={{ marginLeft: '-4px' }} height={20} width={24} className="mr-2" alt="cs" />

    ),
    key: '/home/driverDailyReport',
  },
  {
    title: 'Car Daily Report',
    icon: () => (
      <img src={ReportsImg1} style={{ marginLeft: '-4px' }} height={20} width={24} className="mr-2" alt="cs" />

    ),
    key: '/home/carDailyReport',
  },
];

const Sidebar = ({
  location: {
    pathname,
  },
  sideBarLayout,
  permission,
}) => {
  const { setMenu } = useMenuContext();
  const { setCalenderDate, onChangeWeekDate } = useCalenderContext();
  const { dayCalenderDate } = useDayCalenderContext();
  const functionCall = (key) => {
    setMenu(key);
    const calenderType = (['Dashboard',
      'Car Management',
      'Car Summary',
      'Performance Report',
      'Weekly Summary Report',
      'Weekly Compare Report',
      'Dead KMs Report',
      'Driver Rating Report',
      'Driver Daily Report',
      'Car Daily Report',
    ].includes(key));
    const startWeek = new Date(moment().startOf('isoweek').format('YYYY-MM-DD'));
    const dayDate = new Date(dayCalenderDate.day);
    if (onChangeWeekDate === false) {
      if (dayDate >= startWeek) {
        if (calenderType === true) {
          const startOfWeek = moment().startOf('isoweek').format('YYYY-MM-DD');
          const endOfWeek = moment().endOf('isoweek').format('YYYY-MM-DD');
          setCalenderDate({ startOfWeek, endOfWeek });
        } else {
          const startOfWeek = moment().startOf('isoweek').subtract(1, 'week').format('YYYY-MM-DD');
          const endOfWeek = moment().endOf('isoweek').subtract(1, 'week').format('YYYY-MM-DD');
          setCalenderDate({ startOfWeek, endOfWeek });
        }
      }
      if (dayDate < startWeek) {
        if (calenderType === true) {
          const startOfWeek = moment().startOf('isoweek').subtract(1, 'week').format('YYYY-MM-DD');
          const endOfWeek = moment().endOf('isoweek').subtract(1, 'week').format('YYYY-MM-DD');
          setCalenderDate({ startOfWeek, endOfWeek });
        } else {
          const startOfWeek = moment().startOf('isoweek').subtract(2, 'week').format('YYYY-MM-DD');
          const endOfWeek = moment().endOf('isoweek').subtract(2, 'week').format('YYYY-MM-DD');
          setCalenderDate({ startOfWeek, endOfWeek });
        }
      }
    }
  };
  useEffect(() => {
    const path = sidebarMenu.filter(({ key }) => key === pathname);
    if (path.length) {
      setMenu(path[0].title);
      const calenderType = (['Dashboard',
        'Car Management',
        'Car Summary',
        'Performance Report',
        'Weekly Summary Report',
        'Weekly Compare Report',
        'Dead KMs Report',
        'Driver Rating Report',
        'Driver Daily Report',
        'Car Daily Report',
      ].includes(path[0].title));
      const startWeek = new Date(moment().startOf('isoweek').format('YYYY-MM-DD'));
      const dayDate = new Date(dayCalenderDate.day);
      if (onChangeWeekDate === false) {
        if (dayDate >= startWeek) {
          if (calenderType === true) {
            const startOfWeek = moment().startOf('isoweek').format('YYYY-MM-DD');
            const endOfWeek = moment().endOf('isoweek').format('YYYY-MM-DD');
            setCalenderDate({ startOfWeek, endOfWeek });
          } else {
            const startOfWeek = moment().startOf('isoweek').subtract(1, 'week').format('YYYY-MM-DD');
            const endOfWeek = moment().endOf('isoweek').subtract(1, 'week').format('YYYY-MM-DD');
            setCalenderDate({ startOfWeek, endOfWeek });
          }
        }
        if (dayDate < startWeek) {
          if (calenderType === true) {
            const startOfWeek = moment().startOf('isoweek').subtract(1, 'week').format('YYYY-MM-DD');
            const endOfWeek = moment().endOf('isoweek').subtract(1, 'week').format('YYYY-MM-DD');
            setCalenderDate({ startOfWeek, endOfWeek });
          } else {
            const startOfWeek = moment().startOf('isoweek').subtract(2, 'week').format('YYYY-MM-DD');
            const endOfWeek = moment().endOf('isoweek').subtract(2, 'week').format('YYYY-MM-DD');
            setCalenderDate({ startOfWeek, endOfWeek });
          }
        }
      }
    }
  }, [pathname]);

  return (
    <>
      <div style={{ fontFamily: 'montserrat' }} className={`py-3 px-6 flex flex-row justify-center border-b border-gray-100 ${sideBarLayout ? 'justify-center' : ''}`}>
        <img
          src={everestFleetLogo}
          alt="app-logo"
          className="h-16"
        />
      </div>
      <Menu
        style={{ borderRight: 'none' }}
        selectedKeys={[pathname]}
        onClick={({ key }) => history.push(key)}
        mode="inline"
      >
        {sidebarMenu.map(({
          title,
          subMenu,
          icon: Icon,
          key: menuKey,
          permission: mainPermission,
        }) => {
          // sub menu
          if (subMenu && subMenu.length) {
            return (
              <SubMenu
                key={title}
                icon={<Icon style={{ paddingBottom: '0.22rem' }} />}
                className="text-xs"
                title={title}
              >
                {subMenu && subMenu.map(({
                  key,
                  label,
                  permission: subPermission,
                }) => {
                  // permission wise rendering for sub menu
                  if (!permission.includes(subPermission)
                    && subPermission) return null;
                  return (
                    <Item
                      key={key}
                      className="text-xs"
                    // onClick={() => functionCall(title)}
                    >
                      {label}
                    </Item>
                  );
                })}
              </SubMenu>
            );
          }
          // main menu
          // permission wise rendering for sub menu
          if (!permission.includes(mainPermission)
            && mainPermission) return null;
          return (
            <Item
              icon={<Icon style={{ paddingBottom: '0.22rem' }} />}
              key={menuKey}
              onClick={() => functionCall(title)}
              className="text-xs"
            >
              {title}
            </Item>
          );
        })}
      </Menu>
    </>
  );
};
const mapStateToProps = ({ userReducer }) => ({
  permission: userReducer.permission,
});

export default connect(mapStateToProps, null)((withRouter(Sidebar)));
