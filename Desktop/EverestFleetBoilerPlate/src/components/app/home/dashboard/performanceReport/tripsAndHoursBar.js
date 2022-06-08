import React from 'react';
import { Bar } from '@ant-design/plots';
import { Card } from 'antd';

const TripsAndHoursBar = ({ driverDailyData }) => {
  const data = driverDailyData.map((item) => ({
    type: `${item?.date}`,
    sales: Number(item?.online_hours || 0),
    name: `${item?.online_hours} hrs / ${item?.trips} Trips`,
  }));
  const config = {
    data,
    xField: 'sales',
    yField: 'type',
    seriesField: 'name',
    // legend: {
    //   layout: 'vertical',
    //   position: 'right-top',
    // },
    legend: false,
    color: ({ sales }) => (sales === 0 ? '#FC2109' : '#37BDC8'),
    label: {
      style: {
        fill: '#013453',
        fontSize: 18,
        fontWeight: 'bold',
      },
      rotate: false,
      position: 'left',
      content: (originData) => originData?.name,
    },
    barBackground: {
      style: {
        fill: 'rgba(0,0,0,0.1)',
      },
    },
    interactions: [
      {
        type: 'active-region',
        enable: false,
      },
    ],
  };
  return (
    <div>
      <div className="container">
        <Card>
          <div className="row">
            <div className="col-12">
              <Bar style={{ height: '300px' }} {...config} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TripsAndHoursBar;
