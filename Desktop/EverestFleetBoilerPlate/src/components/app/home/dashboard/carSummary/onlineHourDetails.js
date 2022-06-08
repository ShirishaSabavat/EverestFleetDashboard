import { RingProgress } from '@ant-design/plots';

const CarDetails = (props) => {
  const { carSummary = {} } = props;
  // const roundNumber = (num) => Math.round(num * 1000) / 1000;
  const config = {
    height: 120,
    width: 120,
    autoFit: false,
    percent: (!carSummary?.total_online_hours || !carSummary?.running_cars) ? 0
      : ((Number(carSummary?.total_online_hours)
        / Number(carSummary?.running_cars))
        / Number(carSummary?.target_online_hours)),
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
  //     name: 'Avg Online',
  //     star: (!carSummary?.total_online_hours || !carSummary?.running_cars) ? 0
  //       : roundNumber(Number(carSummary?.total_online_hours)
  //         / Number(carSummary?.running_cars)),
  //   },
  //   {
  //     name: 'Percentage Achieved (%)',
  //     star: (!carSummary?.total_online_hours || !carSummary?.running_cars) ? 0
  //       : roundNumber(Number(carSummary?.total_online_hours)
  //         / Number(carSummary?.running_cars)),
  //   },
  //   {
  //     name: 'Target Online Hrs',
  //     star: (!carSummary?.target_online_hours) ? 0
  //       : Number(carSummary?.target_online_hours),
  //   },
  // ];
  // const config = {
  //   data,
  //   xField: 'name',
  //   yField: 'star',
  //   maxAngle: 1000,
  //   radius: 0.8,
  //   innerRadius: 0.7,
  //   autoFit: true,
  //   tooltip: false,
  //   // tooltip: {
  //   //   formatter: (datum) => ({
  //   //     name: 'Value',
  //   //     value: datum.star,
  //   //   }),
  //   // },
  //   colorField: 'name',
  //   color: ({ name }) => {
  //     if (name === 'Target Online Hrs') {
  //       return '#37BDC8';
  //     } if (name === 'Percentage Achieved (%)') {
  //       return '#FC2109';
  //     }
  //     return '#73A235';
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
  //         <p class="text-[#86A1A4] font-bold" style="text-align: center; font-size: 10px"
  //         width="${(w / 203) * 231}" height="${w}">
  //         Target <br/>Online Hrs <br/><span class="text-[#013453] text-base">
  //         ${(!carSummary?.target_online_hours) ? 0 :
  // Number(carSummary?.target_online_hours)}</span></p>
  //         </div>`;
  //       },
  //     },
  //   ],
  // };
  return (
    <div style={{ fontFamily: 'montserrat' }} className="row p-4">
      <div className="col-12 d-flex flex-row justify-content-center">
        {/* <RadialBar
          style={{
            height: '150px', width: '150px', marginTop: '-25px',
          }}
          {...config}
        /> */}
        <RingProgress
          style={{ marginTop: '-15px' }}
          {...config}
        />
      </div>
      <div className="flex flex-row mt-2">
        <div className="h-12 pr-4 text-center border-solid border-r-2 border-slate-400 ...">
          <h6 style={{ fontSize: '14px' }}>
            <span className="pt-0.5 pl-1 pr-1 mr-1 rounded-full" style={{ backgroundColor: '#FC8B09', fontSize: '6px' }} />
            <span className="text-[#333333] font-bold">
              {(!carSummary?.total_online_hours) ? 0
                : carSummary?.total_online_hours?.toFixed(0)}
              {' '}
              Hrs
            </span>
            <br />
            <span style={{ fontSize: '12px' }} className="text-[#86A1A4]">
              Total Online
              <br />
              Hrs
            </span>
          </h6>
        </div>
        <div className="h-12 px-3 text-center border-solid border-r-2 border-slate-400 ...">
          <h6 style={{ fontSize: '14px' }}>
            <span className="pt-0.5 pl-1 pr-1 mr-1 rounded-full" style={{ backgroundColor: '#73A235', fontSize: '6px' }} />
            <span className="text-[#333333] font-bold">
              {(!carSummary?.target_online_hours) ? 0
                : carSummary?.target_online_hours}
              {' '}
              Hrs
            </span>
            <br />
            <span style={{ fontSize: '12px' }} className="text-[#86A1A4]">
              Target Online
              <br />
              Hrs
            </span>
          </h6>
        </div>
        <div className="pl-4 text-center">
          <h6 style={{ fontSize: '14px' }}>
            <span className="pt-0.5 pl-1 pr-1 mr-1 rounded-full" style={{ backgroundColor: '#E3EA31', fontSize: '6px' }} />
            <span className="text-[#333333] font-bold">
              {(!carSummary?.total_online_hours || !carSummary?.running_cars) ? 0
                : (Number(carSummary?.total_online_hours)
                  / Number(carSummary?.running_cars)).toFixed(1)}
              {' '}
              Hrs
            </span>
            <br />
            <span style={{ fontSize: '12px' }} className="text-[#86A1A4]">
              Actual Online
              <br />
              Hrs Per Car
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
