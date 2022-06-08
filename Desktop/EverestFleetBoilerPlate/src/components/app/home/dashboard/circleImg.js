import React from 'react';
import { RadialBar } from '@ant-design/plots';

const CircleImg = ({ value, type }) => {
  const data = [
    {
      star: 50,
      days: value,
    },
  ];
  const config = {
    data,
    yField: 'star',
    maxAngle: 645,
    radius: 1,
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
          <p class="text-[#86a1a4] leading-4 font-bold" style="margin: -5px; text-align: center; font-size: 12px" width="${(w / 203) * 231}" height="${w}">${type}</p>
          <p style="font-size: 14px" class="text-[#37BDC8] text-center mt-1.5 font-semibold">${!value ? 0 : value}</p>
          </div>`;
        },
      },
    ],
  };
  return (
    <div>
      <RadialBar
        style={{
          height: '120px', width: '120px', marginTop: '0px',
        }}
        {...config}
      />
    </div>
  );
};

export default CircleImg;
