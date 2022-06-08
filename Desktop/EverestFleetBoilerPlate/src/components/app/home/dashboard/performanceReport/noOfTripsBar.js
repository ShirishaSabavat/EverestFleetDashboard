import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

const NoOfTripsBar = () => {
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const config = {
    data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    colorField: 'type', // or seriesField in some cases
    color: ['#C2C2C2', '#37BDC8', '#000000'],
    itemWidth: '50px',
    legend: {
      layout: 'horizontal',
      position: 'top-right',
    },
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <span classN>No. of Trips (Last 4 Weeks)</span>
            <Column style={{ margin: '0px', padding: '0px' }} height={160} {...config} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoOfTripsBar;
