// import { RadialBar, Progress } from '@ant-design/plots';
import { RingProgress } from '@ant-design/plots';
import React from 'react';

const CarDetails = (props) => {
  const { carSummary = {} } = props;
  const config = {
    height: 130,
    width: 130,
    autoFit: false,
    percent: !carSummary?.total_trips || !carSummary?.running_cars || !carSummary?.target_trips ? 0
      : ((Number(carSummary?.total_trips)
        / Number(carSummary?.running_cars)) / Number(carSummary?.target_trips)),
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
  // const roundNumber = (num) => Math.round(num * 1000) / 1000;
  // const data = [
  //   {
  //     name: 'Trips Per Car',
  //     star: (!carSummary?.total_trips || !carSummary?.running_cars) ? 0
  //       : roundNumber(((Number(carSummary?.total_trips))
  //         / (Number(carSummary?.running_cars)))),
  //   },
  //   {
  //     name: 'Target Trips',
  //     star: !carSummary?.target_trips ? 0 : roundNumber(Number(carSummary?.target_trips)),
  //   },
  // ];
  // const config = {
  //   data,
  //   xField: 'name',
  //   yField: 'star',
  //   maxAngle: 1000,
  //   radius: 0.9,
  //   innerRadius: 0.8,
  //   tooltip: false,
  //   // tooltip: {
  //   //   formatter: (datum) => ({
  //   //     name: 'Value',
  //   //     value: datum.star,
  //   //   }),
  //   // },
  //   colorField: 'name',
  //   color: ({ name }) => {
  //     if (name === 'Target Trips') {
  //       return '#06b4cf';
  //     }
  //     return '#ebe710';
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
  //         Target Trips </br><span class="text-[#013453] text-base">
  //         ${!carSummary?.target_trips ? 0 : Number(carSummary?.target_trips)}</span></p>
  //       </div>`;
  //       },
  //     },
  //   ],
  // };
  // const configureProgress = {
  //   height: 60,
  //   width: 220,
  //   autoFit: false,
  //   percent: !carSummary?.total_trips || !carSummary?.running_cars
  // || !carSummary?.target_trips ? 0
  //     : ((Number(carSummary?.total_trips)
  //       / Number(carSummary?.running_cars)) / Number(carSummary?.target_trips)),
  //   barWidthRatio: 0.1,
  //   color: ['#06b4cf', '#E8EDF3'],
  // };
  return (
    <div style={{ fontFamily: 'montserrat' }} className="row p-4">
      <div className="col-5 p-0">
        <h6 style={{ fontSize: '14px', marginTop: '10px' }}>
          <span className="pt-0.5 pl-1 pr-1 mr-1 rounded-full" style={{ backgroundColor: '#FC8B09', fontSize: '6px' }} />
          <span className="text-[#333333] font-bold">
            {!carSummary?.total_trips ? 0 : (carSummary?.total_trips)}
          </span>
          <br />
          <span style={{ fontSize: '12px' }} className="text-[#86A1A4] font-medium ml-3">Total Trips</span>
        </h6>
        <h6 style={{ fontSize: '14px', marginTop: '10px' }}>
          <span className="pt-0.5 pl-1 pr-1 mr-1 rounded-full" style={{ backgroundColor: '#73A235', fontSize: '6px' }} />
          <span className="text-[#333333] font-bold">
            {!carSummary?.target_trips ? 0 : (Number(carSummary?.target_trips))}
          </span>
          <br />
          <span style={{ fontSize: '12px' }} className="text-[#86A1A4] font-medium ml-3">Target Trips</span>
        </h6>
        <h6 style={{ fontSize: '14px', marginTop: '10px' }}>
          <span className="pt-0.5 pl-1 pr-1 mr-1 rounded-full" style={{ backgroundColor: '#E3EA31', fontSize: '6px' }} />
          <span className="text-[#333333] font-bold">
            {!carSummary?.total_trips || !carSummary?.running_cars ? 0
              : ((Number(carSummary?.total_trips))
                / (Number(carSummary?.running_cars))).toFixed(1)}
          </span>
          <br />
          <span style={{ fontSize: '12px' }} className="text-[#86A1A4] font-medium ml-3">
            Actual Trips
            {' '}
            <span className="ml-3">Per Car</span>
          </span>
        </h6>
      </div>
      <div className="col-7">
        <RingProgress {...config} />
        {/* <RadialBar
          style={{
            height: '140px', width: '140px', margin: '-20px',
          }}
          {...config}
        /> */}
      </div>
      {/* <div className="col-12 pt-3 px-0">
        <h6 style={{ fontSize: '12px', margin: '0px', padding: '0px' }}>
          <span className="text-[#333333] font-bold">
            {!carSummary?.total_trips || !carSummary?.running_cars || !carSummary?.target_trips ? 0
              : (((Number(carSummary?.total_trips)
                / Number(carSummary?.running_cars))
                / Number(carSummary?.target_trips)) * 100).toFixed(1)}
            {' '}
            %
          </span>
          <br />
          <span style={{ fontSize: '10px' }} className="text-[#86A1A4]">Achieved</span>
        </h6>
        <Progress
          style={{
            margin: '-23px', paddingLeft: '22px',
          }}
          {...configureProgress}
        />
      </div> */}
    </div>
  );
};

export default CarDetails;
