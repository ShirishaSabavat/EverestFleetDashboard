import { RingProgress } from '@ant-design/plots';

const CarDetails = (props) => {
  const { carSummary = {} } = props;
  // const roundNumber = (num) => Math.round(num * 1000) / 1000;
  const config = {
    height: 130,
    width: 130,
    autoFit: false,
    percent: !carSummary?.running_cars || !carSummary?.target_car ? 0
      : (Number(carSummary?.running_cars)
        / Number(carSummary?.target_car)),
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
  // const config = {
  //   height: 130,
  //   width: 130,
  //   autoFit: false,
  //   percent: !carSummary?.running_cars || !carSummary?.target_car ? 0
  //     : (Number(carSummary?.running_cars)
  //       / Number(carSummary?.target_car)),
  //   radius: 0.9,
  //   innerRadius: 0.9,
  //   color: ['#37BDC8', '#E8EDF3'],
  //   annotations: [
  //     {
  //       type: 'html',
  //       position: ['50%', '55%'],
  //       content: 'hss',
  //       html: (container, view) => {
  //         const coord = view.getCoordinate();
  //         const w = coord.polarRadius * coord.innerRadius * 1.15;
  //         return `<div style="transform:translate(-50%, 0%)">
  //         <p class="text-[#86A1A4] font-bold" style="marginTop: -15px;
  // text-align: center; font-size: 10px" width="${(w / 203) * 231}" height="${w}">Cars Run</p>
  //         </div>`;
  //       },
  //     },
  //   ],
  // };

  // const data = [
  //   {
  //     name: '% Cars Run',
  //     star: !carSummary?.running_cars ? 0 : Number(carSummary?.running_cars),
  //   },
  //   {
  //     name: 'Cars Run',
  //     star: !carSummary?.running_cars ? 0 : Number(carSummary?.running_cars),
  //   },
  //   {
  //     name: 'Total Cars',
  //     star: !carSummary?.total_cars ? 0 : Number(carSummary?.total_cars),
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
  //     if (name === 'Total Cars') {
  //       return '#37BDC8';
  //     } if (name === 'Cars Run') {
  //       return '#FC8B09';
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
  //         style="text-align: center; font-size: 10px" width="${(w / 203) * 231}" height="${w}">
  //         Target Cars </br> <span class="text-[#013453]
  // text-base">${!carSummary?.target_car ? 0 : roundNumber(carSummary?.target_car)}</span></p>
  //         </div>`;
  //       },
  //     },
  //   ],
  // };
  return (
    <div style={{ fontFamily: 'montserrat' }} className="row p-4">
      <div className="col-7">
        <RingProgress {...config} />
        {/* <RadialBar
          style={{
            height: '160px', width: '160px', margin: '-20px',
          }}
          {...config}
        /> */}
      </div>
      <div className="col-5">
        <h6 style={{ fontSize: '14px', marginTop: '10px' }}>
          <span className="pt-0.5 pl-1 pr-1 mr-1 rounded-full" style={{ backgroundColor: '#FC8B09', fontSize: '6px' }} />
          <span className="text-[#333333] font-bold">
            {!carSummary?.total_cars ? 0 : (carSummary?.total_cars)}
          </span>
          <br />
          <span style={{ fontSize: '12px' }} className="text-[#86A1A4] font-medium ml-3">Total Cars</span>
        </h6>
        <h6 style={{ fontSize: '14px', marginTop: '10px' }}>
          <span className="pt-0.5 pl-1 pr-1 mr-1 rounded-full" style={{ backgroundColor: '#73A235', fontSize: '6px' }} />
          <span className="text-[#333333] font-bold">
            {!carSummary?.target_car ? 0 : (carSummary?.target_car)}
          </span>
          <br />
          <span style={{ fontSize: '12px' }} className="text-[#86A1A4] font-medium ml-3">Target Cars</span>
        </h6>
        <h6 style={{ fontSize: '14px' }}>
          <span className="pt-0.5 pl-1 pr-1 mr-1 rounded-full" style={{ backgroundColor: '#E3EA31', fontSize: '6px' }} />
          <span className="text-[#333333] font-bold">
            {!carSummary?.running_cars ? 0 : (carSummary?.running_cars)}
          </span>
          <br />
          <span style={{ fontSize: '12px' }} className="text-[#86A1A4] ml-3">
            Actual Cars
            {' '}
            <span className="ml-3">Run</span>
          </span>
        </h6>
        {/* <h6 style={{ fontSize: '12px' }}>
          <span className="pt-1 pl-1.5 pr-1.5 mr-1 rounded-sm"
          style={{ backgroundColor: '#37BDC8', fontSize: '6px' }} />
          <span className="text-[#333333] font-bold">
            {!carSummary?.running_cars || !carSummary?.target_car ? 0
              : roundNumber((Number(carSummary?.running_cars)
                / Number(carSummary?.target_car)) * 100).toFixed(2)}
            {' '}
            %
          </span>
          <br />
          <span style={{ fontSize: '10px' }} className="text-[#86A1A4] ml-4">% Cars Run</span>
        </h6> */}
      </div>
    </div>
  );
};

export default CarDetails;
