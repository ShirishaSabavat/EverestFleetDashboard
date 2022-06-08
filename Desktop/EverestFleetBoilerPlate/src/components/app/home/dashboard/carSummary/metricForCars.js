import { Line } from '@ant-design/plots';
// import React, { useState, useEffect } from 'react';

const CarDetails = ({ metricForCars = {} }) => {
  const data = [
    {
      date: 'Mon',
      type: 'Cars Not Run',
      value: !metricForCars[0]?.not_running_cars ? 0 : Number(metricForCars[0]?.not_running_cars),
    },
    {
      date: 'Mon',
      type: 'Cars in (Breakdown, Insurance & Repair)',
      value: !metricForCars[0]?.others ? 0 : Number(metricForCars[0]?.others),
    },
    {
      date: 'Tue',
      type: 'Cars Not Run',
      value: !metricForCars[1]?.not_running_cars ? 0 : Number(metricForCars[1]?.not_running_cars),
    },
    {
      date: 'Tue',
      type: 'Cars in (Breakdown, Insurance & Repair)',
      value: !metricForCars[1]?.others ? 0 : Number(metricForCars[1]?.others),
    },
    {
      date: 'Wed',
      type: 'Cars Not Run',
      value: !metricForCars[2]?.not_running_cars ? 0 : Number(metricForCars[2]?.not_running_cars),
    },
    {
      date: 'Wed',
      type: 'Cars in (Breakdown, Insurance & Repair)',
      value: !metricForCars[2]?.others ? 0 : Number(metricForCars[2]?.others),
    },
    {
      date: 'Thu',
      type: 'Cars Not Run',
      value: !metricForCars[3]?.not_running_cars ? 0 : Number(metricForCars[3]?.not_running_cars),
    },
    {
      date: 'Thu',
      type: 'Cars in (Breakdown, Insurance & Repair)',
      value: !metricForCars[3]?.others ? 0 : Number(metricForCars[3]?.others),
    },
    {
      date: 'Fri',
      type: 'Cars Not Run',
      value: !metricForCars[4]?.not_running_cars ? 0 : Number(metricForCars[4]?.not_running_cars),
    },
    {
      date: 'Fri',
      type: 'Cars in (Breakdown, Insurance & Repair)',
      value: !metricForCars[4]?.others ? 0 : Number(metricForCars[4]?.others),
    },
    {
      date: 'Sat',
      type: 'Cars Not Run',
      value: !metricForCars[5]?.not_running_cars ? 0 : Number(metricForCars[5]?.not_running_cars),
    },
    {
      date: 'Sat',
      type: 'Cars in (Breakdown, Insurance & Repair)',
      value: !metricForCars[5]?.others ? 0 : Number(metricForCars[5]?.others),
    },
    {
      date: 'Sun',
      type: 'Cars Not Run',
      value: !metricForCars[6]?.not_running_cars ? 0 : Number(metricForCars[6]?.not_running_cars),
    },
    {
      date: 'Sun',
      type: 'Cars in (Breakdown, Insurance & Repair)',
      value: !metricForCars[6]?.others ? 0 : Number(metricForCars[6]?.others),
    },
  ];
  const config = {
    data,
    xField: 'date',
    yField: 'value',
    yAxis: {
      label: {
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    seriesField: 'type',
    color: ({ type }) => {
      if (type === 'Cars Not Run') {
        return '#06b4cf';
      }
      return '#e83723';
    },

  };
  return (
    <div style={{ fontFamily: 'montserrat' }} className="row pt-2 pb-1 px-3">
      <div className="col-12">
        <Line height={200} {...config} />
      </div>
    </div>
  );
};

export default CarDetails;
