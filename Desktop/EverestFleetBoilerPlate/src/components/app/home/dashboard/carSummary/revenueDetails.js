// import { RadialBar } from '@ant-design/plots';
import { RingProgress } from '@ant-design/plots';
import React from 'react';
// import { CarOutlined, ClockCircleOutlined } from '@ant-design/icons';
// import TargetRevenuePlot from './targetRevenuePlot';
// import RevenueAchievedPlot from './revenueAchievedPlot';

const CarDetails = (props) => {
  const { carSummary = {} } = props;
  const roundNumber = (num) => Math.round(num * 1000) / 1000;
  const config = {
    height: 130,
    width: 130,
    autoFit: false,
    percent: (!carSummary?.total_revenue || !carSummary?.total_cars)
      || !carSummary?.target_revenue ? 0
      : ((Number(carSummary?.total_revenue)
        / Number(carSummary?.total_cars))
        / Number(carSummary?.target_revenue)),
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
        formatter: () => '% Achieved',
      },
    },
  };
  // const data = [
  //   {
  //     name: '',
  //     star: !carSummary?.total_revenue || !carSummary?.total_cars ? 0
  //       : roundNumber(Number(carSummary?.total_revenue) / Number(carSummary?.total_cars)),
  //   },
  //   {
  //     name: 'Rev Per Car',
  //     star: !carSummary?.total_revenue || !carSummary?.total_cars ? 0
  //       : roundNumber(Number(carSummary?.total_revenue) / Number(carSummary?.total_cars)),
  //   },
  //   {
  //     name: 'Target Revenue',
  //     star: !carSummary?.target_revenue ? 0
  //       : roundNumber(Number(carSummary?.target_revenue)),
  //   },
  // ];
  // const config = {
  //   data,
  //   xField: 'name',
  //   yField: 'star',
  //   maxAngle: 1000,
  //   radius: 1.0,
  //   innerRadius: 0.75,
  //   tooltip: false,
  //   // tooltip: {
  //   //   formatter: (datum) => ({
  //   //     name: 'Value',
  //   //     value: datum.star,
  //   //   }),
  //   // },
  //   colorField: 'name',
  //   color: ({ name }) => {
  //     if (name === 'Target Revenue') {
  //       return '#06b4cf';
  //     } if (name === 'Rev Per Car') {
  //       return '#73A235';
  //     }
  //     return '#E3EA31';
  //   },
  //   barBackground: {},
  //   barStyle: {
  //     lineCap: 'round',
  //   },
  //   annotations: [
  //     {
  //       type: 'html',
  //       position: ['50%', '50%'],
  //       html: (container, view) => {
  //         const coord = view.getCoordinate();
  //         const w = coord.polarRadius * coord.innerRadius * 1.15;
  //         return `<div style="transform:translate(-50%,-46%)">
  //         <p class="text-[#86A1A4] font-bold"
  //         style="text-align: center; font-size: 10px"
  //         width="${(w / 203) * 231}" height="${w}">
  //         Target <br/>Revenue<br/><span class="text-[#013453] text-base">
  //         ${!carSummary?.target_revenue ? 0 : Number(carSummary?.target_revenue)}</span></p >
  //         </div > `;
  //       },
  //     },
  //   ],
  // };
  return (
    <div style={{ fontFamily: 'montserrat' }} className="row p-4">
      <div className="col-12 mb-3 d-flex flex-row justify-content-center">
        <RingProgress
          style={{ marginTop: '-15px' }}
          {...config}
        />
        {/* <RadialBar
          style={{
            height: '160px', width: '160px', padding: '0px',
            marginTop: '-28px', marginBottom: '-8px',
          }}
          {...config}
        /> */}
      </div>
      <div className="col-12">
        <div className="flex flex-row justify-between" style={{ fontSize: '14px', marginTop: '10px' }}>
          <p>
            <span className="pt-0.5 pl-1 pr-1 mr-1 rounded-full" style={{ backgroundColor: '#FC8B09', fontSize: '6px' }} />
            <span className="text-[#333333] font-bold">
              <span className="font-sans font-semibold">₹</span>
              {' '}
              {!carSummary?.total_revenue ? 0
                : roundNumber(carSummary?.total_revenue).toFixed(1)}
            </span>
          </p>
          <p style={{ fontSize: '12px' }} className="text-[#86A1A4] mt-0.5 font-medium ml-5"> -  Total Revenue</p>
        </div>
        <div className="flex flex-row justify-between" style={{ fontSize: '14px' }}>
          <p>
            <span className="pt-0.5 pl-1 pr-1 mr-1 rounded-full" style={{ backgroundColor: '#73A235', fontSize: '6px' }} />
            <span className="text-[#333333] font-bold">
              <span className="font-sans font-semibold">₹</span>
              {' '}
              {!carSummary?.target_revenue ? 0
                : roundNumber(Number(carSummary?.target_revenue))}
            </span>
          </p>
          <p style={{ fontSize: '12px' }} className="text-[#86A1A4] mt-0.5 font-medium ml-5"> -  Target Revenue</p>
        </div>
        <div className="flex flex-row justify-between" style={{ fontSize: '14px' }}>
          <p>
            <span className="pt-0.5 pl-1 pr-1 mr-1 rounded-full" style={{ backgroundColor: '#E3EA31', fontSize: '6px' }} />
            <span className="text-[#333333] font-bold">
              <span className="font-sans font-semibold">₹</span>
              {' '}
              {!carSummary?.total_revenue || !carSummary?.total_cars ? 0
                : roundNumber(Number(carSummary?.total_revenue)
                  / Number(carSummary?.total_cars))?.toFixed(1)}
            </span>
          </p>
          <p style={{ fontSize: '12px' }} className="text-[#86A1A4] mt-0.5 font-medium ml-5"> -  Actual Rev Per Car</p>
        </div>
      </div>
      <div className="col-12 bg-[#FEF0F5] rounded-lg mt-3 mb-1">
        <div className="row d-flex flex-row justify-content-space-between p-2.5">
          <div className="col-8">
            <h6 className="text-md text-[#013453] font-bold mt-2 mb-0">
              <span className="font-sans font-semibold">₹</span>
              {' '}
              {!carSummary?.total_revenue || !carSummary?.total_cars ? 0
                : (carSummary.total_revenue
                  / carSummary.total_cars)?.toFixed(1)}
            </h6>
            <p className="font-medium text-[#013453] m-0" style={{ fontSize: '10px' }}>Revenue Per Car</p>
          </div>
          <div className="col-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-100 h-100" viewBox="0 0 76.521 76.521">
              <g id="Group_742" data-name="Group 742" transform="translate(-683 -1268)">
                <path id="Path_657" data-name="Path 657" d="M38.26,76.521A38.26,38.26,0,0,1,38.26,0a4.5,4.5,0,1,1,0,9A29.258,29.258,0,1,0,67.518,38.26a4.5,4.5,0,0,1,9,0A38.228,38.228,0,0,1,38.26,76.521Z" transform="translate(683 1268)" fill="#d17ea7" />
                <g id="car" transform="translate(705 1293)">
                  <path id="Path_521" data-name="Path 521" d="M92.991,273.578c.1-.577.165-1.161.3-1.729a4.861,4.861,0,0,1,2.31-3.19.877.877,0,0,0,.292-.376c.977-2.045,1.942-4.1,2.923-6.14.173-.362.407-.693.605-1.043a2.875,2.875,0,0,1,1.809-1.2,16.889,16.889,0,0,1,4.108-.69,51.636,51.636,0,0,1,7.024,0,14.893,14.893,0,0,1,4.772.937,2.255,2.255,0,0,1,1.206,1.057c.868,1.708,1.736,3.416,2.588,5.132.325.655.6,1.336.907,2a.81.81,0,0,0,.29.338,5.14,5.14,0,0,1,2.454,3.957,19.619,19.619,0,0,1-.521,7,.74.74,0,0,1-.512.6c-.073.024-.143.179-.146.276-.017.6.024,1.2-.026,1.795a1.877,1.877,0,0,1-1.9,1.893c-1.431.054-2.868.031-4.3-.024a1.874,1.874,0,0,1-1.686-1.738c-.023-.348,0-.7,0-1.1a4.625,4.625,0,0,1-2.314.229c-3.107.019-6.214.012-9.321,0a2.5,2.5,0,0,1-1.606-.258c0,.319,0,.573,0,.826a1.907,1.907,0,0,1-1.871,2.052c-1.39.068-2.788.068-4.177,0a1.927,1.927,0,0,1-1.88-2.082c-.008-.526,0-1.053,0-1.579,0-.167-.009-.281-.22-.332a.631.631,0,0,1-.448-.577c-.2-1.282-.394-2.565-.59-3.847l-.061-.393Q92.991,274.477,92.991,273.578Zm30.188-1.255a3.851,3.851,0,0,0-1.165-2.086,5.349,5.349,0,0,0-2.646-1.188,35.262,35.262,0,0,0-5.843-.6,107.412,107.412,0,0,0-11.421.119,21.838,21.838,0,0,0-4.7.722,4.157,4.157,0,0,0-2.159,1.424,3.625,3.625,0,0,0-.718,1.616c.719,0,1.4-.006,2.079,0a3.1,3.1,0,0,1,2.2.916c1.069,1.047,2.124,2.11,3.175,3.176a.875.875,0,0,1,.234.452c.067.441-.253.731-.776.731q-3.252,0-6.5,0h-.346c.053.307.095.572.144.835.091.479.092.482.576.482,1.559,0,3.117-.009,4.676.009a2.017,2.017,0,0,1,.8.189c.692.319,1.365.68,2.051,1.013a1.129,1.129,0,0,0,.469.116q5.543.009,11.087,0a1.116,1.116,0,0,0,.469-.116c.687-.331,1.359-.693,2.051-1.012a2.055,2.055,0,0,1,.8-.189c1.011-.022,2.023-.008,3.035-.009.63,0,1.259,0,1.889-.013.089,0,.238-.072.254-.137.09-.376.148-.759.223-1.168H116.2a.659.659,0,0,1-.674-.4.671.671,0,0,1,.185-.788c.993-.992,1.995-1.977,2.975-2.981a3.466,3.466,0,0,1,2.685-1.116C121.955,272.336,122.543,272.323,123.179,272.323Zm-3.006-4.462a64.04,64.04,0,0,0-2.941-5.95,1.522,1.522,0,0,0-.666-.56,10.192,10.192,0,0,0-3.7-.766q-3.183-.138-6.372-.116a18.247,18.247,0,0,0-4.352.534,2.5,2.5,0,0,0-1.919,1.284c-.853,1.83-1.752,3.638-2.63,5.455a.315.315,0,0,0-.009.109,53.781,53.781,0,0,1,11.263-.809A53.818,53.818,0,0,1,120.173,267.861ZM95.64,280.253c0,.668-.009,1.295,0,1.921a.648.648,0,0,0,.715.709q1.917.013,3.834,0a.664.664,0,0,0,.726-.736c.009-.433.012-.866-.006-1.3a.412.412,0,0,0-.171-.274,2.079,2.079,0,0,0-1.254-.331C98.222,280.269,96.955,280.253,95.64,280.253Zm26.406,0c-1.3,0-2.571.017-3.837-.009a2.089,2.089,0,0,0-1.253.333.406.406,0,0,0-.168.275c-.019.411-.011.824-.007,1.237,0,.551.242.792.793.8.618.005,1.237,0,1.855,0,.639,0,1.278.006,1.917,0,.4-.006.68-.213.694-.56C122.063,281.647,122.045,280.969,122.045,280.253ZM99.9,276.271c-.7-.722-1.373-1.433-2.068-2.121a1.893,1.893,0,0,0-1.387-.51q-.929,0-1.857,0c-.078,0-.155.015-.282.027.032.878.064,1.737.1,2.6Zm17.814-.01h5.617v-2.608c-.782,0-1.556-.036-2.325.016a1.709,1.709,0,0,0-.961.362C119.253,274.722,118.521,275.477,117.711,276.261Z" transform="translate(-92.99 -259.089)" fill="#333" />
                  <path id="Path_522" data-name="Path 522" d="M203.16,429.632H210.1c.082,0,.165,0,.247,0a.67.67,0,0,1,.546,1.149q-1.022,1.224-2.041,2.45c-.376.452-.757.9-1.128,1.357a.832.832,0,0,1-.7.328q-3.856-.007-7.711,0a.841.841,0,0,1-.694-.333q-1.53-1.848-3.072-3.687c-.221-.265-.409-.533-.232-.892.168-.341.478-.376.815-.375Q199.645,429.637,203.16,429.632Zm-5.834,1.33c.727.872,1.409,1.7,2.107,2.515a.519.519,0,0,0,.355.116q3.389.011,6.779,0a.612.612,0,0,0,.411-.189c.627-.726,1.236-1.468,1.849-2.206.054-.066.1-.14.163-.231Z" transform="translate(-187.313 -416.398)" fill="#333" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="col-12 bg-[#F0FBE2] rounded-lg my-1">
        <div className="row d-flex flex-row justify-content-space-between p-2.5">
          <div className="col-8">
            <h6 className="text-md text-[#013453] font-bold mt-2 mb-0">
              <span className="font-sans font-semibold">₹</span>
              {' '}
              {!carSummary?.total_revenue || !carSummary?.total_trips ? 0
                : (carSummary.total_revenue / Number(carSummary?.total_trips)).toFixed(1)}
            </h6>
            <p className="font-medium text-[#013453] m-0" style={{ fontSize: '10px' }}>Revenue Per Trip</p>
          </div>
          <div className="col-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-100 h-100" viewBox="0 0 76.521 76.521">
              <g id="Group_740" data-name="Group 740" transform="translate(-683 -1395)">
                <path id="Path_658" data-name="Path 658" d="M38.26,76.521A38.26,38.26,0,0,1,38.26,0a4.5,4.5,0,1,1,0,9A29.258,29.258,0,1,0,67.518,38.26a4.5,4.5,0,0,1,9,0A38.228,38.228,0,0,1,38.26,76.521Z" transform="translate(683 1395)" fill="#73a235" />
                <g id="car" transform="translate(705 1420)">
                  <path id="Path_521" data-name="Path 521" d="M92.991,273.578c.1-.577.165-1.161.3-1.729a4.861,4.861,0,0,1,2.31-3.19.877.877,0,0,0,.292-.376c.977-2.045,1.942-4.1,2.923-6.14.173-.362.407-.693.605-1.043a2.875,2.875,0,0,1,1.809-1.2,16.889,16.889,0,0,1,4.108-.69,51.636,51.636,0,0,1,7.024,0,14.893,14.893,0,0,1,4.772.937,2.255,2.255,0,0,1,1.206,1.057c.868,1.708,1.736,3.416,2.588,5.132.325.655.6,1.336.907,2a.81.81,0,0,0,.29.338,5.14,5.14,0,0,1,2.454,3.957,19.619,19.619,0,0,1-.521,7,.74.74,0,0,1-.512.6c-.073.024-.143.179-.146.276-.017.6.024,1.2-.026,1.795a1.877,1.877,0,0,1-1.9,1.893c-1.431.054-2.868.031-4.3-.024a1.874,1.874,0,0,1-1.686-1.738c-.023-.348,0-.7,0-1.1a4.625,4.625,0,0,1-2.314.229c-3.107.019-6.214.012-9.321,0a2.5,2.5,0,0,1-1.606-.258c0,.319,0,.573,0,.826a1.907,1.907,0,0,1-1.871,2.052c-1.39.068-2.788.068-4.177,0a1.927,1.927,0,0,1-1.88-2.082c-.008-.526,0-1.053,0-1.579,0-.167-.009-.281-.22-.332a.631.631,0,0,1-.448-.577c-.2-1.282-.394-2.565-.59-3.847l-.061-.393Q92.991,274.477,92.991,273.578Zm30.188-1.255a3.851,3.851,0,0,0-1.165-2.086,5.349,5.349,0,0,0-2.646-1.188,35.262,35.262,0,0,0-5.843-.6,107.412,107.412,0,0,0-11.421.119,21.838,21.838,0,0,0-4.7.722,4.157,4.157,0,0,0-2.159,1.424,3.625,3.625,0,0,0-.718,1.616c.719,0,1.4-.006,2.079,0a3.1,3.1,0,0,1,2.2.916c1.069,1.047,2.124,2.11,3.175,3.176a.875.875,0,0,1,.234.452c.067.441-.253.731-.776.731q-3.252,0-6.5,0h-.346c.053.307.095.572.144.835.091.479.092.482.576.482,1.559,0,3.117-.009,4.676.009a2.017,2.017,0,0,1,.8.189c.692.319,1.365.68,2.051,1.013a1.129,1.129,0,0,0,.469.116q5.543.009,11.087,0a1.116,1.116,0,0,0,.469-.116c.687-.331,1.359-.693,2.051-1.012a2.055,2.055,0,0,1,.8-.189c1.011-.022,2.023-.008,3.035-.009.63,0,1.259,0,1.889-.013.089,0,.238-.072.254-.137.09-.376.148-.759.223-1.168H116.2a.659.659,0,0,1-.674-.4.671.671,0,0,1,.185-.788c.993-.992,1.995-1.977,2.975-2.981a3.466,3.466,0,0,1,2.685-1.116C121.955,272.336,122.543,272.323,123.179,272.323Zm-3.006-4.462a64.04,64.04,0,0,0-2.941-5.95,1.522,1.522,0,0,0-.666-.56,10.192,10.192,0,0,0-3.7-.766q-3.183-.138-6.372-.116a18.247,18.247,0,0,0-4.352.534,2.5,2.5,0,0,0-1.919,1.284c-.853,1.83-1.752,3.638-2.63,5.455a.315.315,0,0,0-.009.109,53.781,53.781,0,0,1,11.263-.809A53.818,53.818,0,0,1,120.173,267.861ZM95.64,280.253c0,.668-.009,1.295,0,1.921a.648.648,0,0,0,.715.709q1.917.013,3.834,0a.664.664,0,0,0,.726-.736c.009-.433.012-.866-.006-1.3a.412.412,0,0,0-.171-.274,2.079,2.079,0,0,0-1.254-.331C98.222,280.269,96.955,280.253,95.64,280.253Zm26.406,0c-1.3,0-2.571.017-3.837-.009a2.089,2.089,0,0,0-1.253.333.406.406,0,0,0-.168.275c-.019.411-.011.824-.007,1.237,0,.551.242.792.793.8.618.005,1.237,0,1.855,0,.639,0,1.278.006,1.917,0,.4-.006.68-.213.694-.56C122.063,281.647,122.045,280.969,122.045,280.253ZM99.9,276.271c-.7-.722-1.373-1.433-2.068-2.121a1.893,1.893,0,0,0-1.387-.51q-.929,0-1.857,0c-.078,0-.155.015-.282.027.032.878.064,1.737.1,2.6Zm17.814-.01h5.617v-2.608c-.782,0-1.556-.036-2.325.016a1.709,1.709,0,0,0-.961.362C119.253,274.722,118.521,275.477,117.711,276.261Z" transform="translate(-92.99 -259.089)" fill="#333" />
                  <path id="Path_522" data-name="Path 522" d="M203.16,429.632H210.1c.082,0,.165,0,.247,0a.67.67,0,0,1,.546,1.149q-1.022,1.224-2.041,2.45c-.376.452-.757.9-1.128,1.357a.832.832,0,0,1-.7.328q-3.856-.007-7.711,0a.841.841,0,0,1-.694-.333q-1.53-1.848-3.072-3.687c-.221-.265-.409-.533-.232-.892.168-.341.478-.376.815-.375Q199.645,429.637,203.16,429.632Zm-5.834,1.33c.727.872,1.409,1.7,2.107,2.515a.519.519,0,0,0,.355.116q3.389.011,6.779,0a.612.612,0,0,0,.411-.189c.627-.726,1.236-1.468,1.849-2.206.054-.066.1-.14.163-.231Z" transform="translate(-187.313 -416.398)" fill="#333" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="col-12 bg-[#F5F8CE] rounded-lg mt-1">
        <div className="row d-flex flex-row justify-content-space-between p-2.5">
          <div className="col-8">
            <h6 className="text-md text-[#013453] font-bold mt-2 mb-0">
              <span className="font-sans font-semibold">₹</span>
              {' '}
              {!carSummary?.total_revenue / !carSummary?.total_online_hours ? 0
                : (carSummary.total_revenue / carSummary.total_online_hours).toFixed(1)}
            </h6>
            <p className="font-medium text-[#013453] m-0" style={{ fontSize: '10px' }}>Revenue Per Hour</p>
          </div>
          <div className="col-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-100 h-100" viewBox="0 0 76.521 76.521">
              <g id="Group_741" data-name="Group 741" transform="translate(-683 -1522)">
                <path id="Path_659" data-name="Path 659" d="M38.26,76.521A38.26,38.26,0,0,1,38.26,0a4.5,4.5,0,1,1,0,9A29.258,29.258,0,1,0,67.518,38.26a4.5,4.5,0,0,1,9,0A38.228,38.228,0,0,1,38.26,76.521Z" transform="translate(683 1522)" fill="#bebe1f" />
                <g id="Icon_feather-clock" data-name="Icon feather-clock" transform="translate(703.467 1542.417)">
                  <path id="Path_561" data-name="Path 561" d="M31.917,17.458A14.458,14.458,0,1,1,17.458,3,14.458,14.458,0,0,1,31.917,17.458Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path id="Path_562" data-name="Path 562" d="M18,9v8.675l5.783,2.892" transform="translate(-0.542 -0.217)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
