import { RadialBar } from '@ant-design/plots';
import SmallCarImg from '../../../../../assets/images/smallCarImg.jpg';

const CarAndDaysReport = (props) => {
  const { carNum = '', days = '' } = props;
  const data = [
    {
      star: 50,
      days,
    },
  ];
  const config = {
    data,
    yField: 'star',
    maxAngle: 580,
    radius: 0.55,
    innerRadius: 0.8,
    autoFit: true,
    tooltip: false,
    colorField: 'star',
    color: '#37BDC8',
    barBackground: {},
    barStyle: {
      lineCap: 'round',
    },
    annotations: [
      {
        type: 'html',
        position: ['50%', '55%'],
        html: (container, view) => {
          const coord = view.getCoordinate();
          const w = coord.polarRadius * coord.innerRadius * 1.15;
          return `<div style="transform:translate(-50%,-46%)">
          <p class="text-[#013453] font-bold" style="margin: -5px; text-align: center; font-size: 14px" width="${(w / 203) * 231}" height="${w}">${days || 0}</p>
          <p style="font-size: 10px" class="text-[#86A1A4] font-semiBold">Days</p>
          </div>`;
        },
      },
    ],
  };
  return (
    <div className="row p-2">
      <div className="col-6 d-flex flex-row">
        <img alt="SmallCarImg" src={SmallCarImg} style={{ height: '55px', width: '100px' }} />
        <h6 className="mt-3">{carNum || 0}</h6>
      </div>
      <div className="col-6 d-flex flex-row justify-end">
        <RadialBar
          style={{
            height: '100px', width: '100px', marginTop: '-24px',
          }}
          {...config}
        />
      </div>
    </div>
  );
};

export default CarAndDaysReport;
