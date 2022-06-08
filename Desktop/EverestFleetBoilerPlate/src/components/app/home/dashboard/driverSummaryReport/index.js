/* eslint-disable import/extensions */
import { Card, Col, Row } from 'antd';
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';
import {
  onFetchEmpSummaryApi, onFetchEmpMonthlySummaryApi, onFetchRunningCarsApi,
  onFetchPenaltiesApi, onFetchRtoFinesApi, onFetchDeadKmApi,
} from 'services/axios';
import WithPageHandler from 'components/layouts/pageHandler';
import Card1 from './card1';
import NoOfTripsBar from './noOfTripsBar';
import CarsAndDays from './carsAndDays';
import Averages from './averages';
import TotalSumCards from './totalSumCards';
import IncentivesReceivedTable from './incentivesReceivedTable';
import TotalSumCardsTable from './totalSumCardsTable';

// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve) => {
  setTimeout(() => resolve(), 3000);
});

const SummaryReportCharts = ({
  pageState,
  setPageState,
  empId = '',
}) => {
  const [driverData = [], setDriverData] = useState([]);
  const [incentiveData = [], setIncentiveData] = useState([]);
  const [carsData = [], setCarsData] = useState([]);
  const [onClick = [], setOnClick] = useState(false);
  const [selectedCard = [], setSelectedCard] = useState('');
  const [selectedCardData = [], setSelectedCardData] = useState([]);
  const [penaltiesData = [], setPenaltiesData] = useState([]);
  const [rtoFinesData = [], setRtoFinesData] = useState([]);
  const [deadKmData = [], setDeadKmData] = useState([]);

  const onFetchData = async () => {
    try {
      await promise;
      setPageState('loaded');
    } catch (error) {
      setPageState('error');
    }
  };

  useEffect(() => {
    onFetchData();
    onFetchEmpSummaryApi(empId)
      .then((res) => {
        setDriverData(res?.data);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }, [empId]);

  useEffect(() => {
    onFetchData();
    onFetchEmpMonthlySummaryApi(empId)
      .then((res) => {
        setIncentiveData(res?.data);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }, [empId]);

  useEffect(() => {
    onFetchData();
    onFetchRunningCarsApi(empId)
      .then((res) => {
        setCarsData(res?.data);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }, [empId]);
  useEffect(() => {
    onFetchData();
    onFetchPenaltiesApi(empId)
      .then((res) => {
        setPenaltiesData(res?.data);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }, [empId]);
  useEffect(() => {
    onFetchData();
    onFetchRtoFinesApi(empId)
      .then((res) => {
        setRtoFinesData(res?.data);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }, [empId]);
  useEffect(() => {
    onFetchData();
    onFetchDeadKmApi(empId)
      .then((res) => {
        setDeadKmData(res?.data);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }, [empId]);

  const carsList = Array.isArray(carsData) && carsData.length > 0
    ? carsData?.map((item, index) => ({
      key: index,
      carNum: item?.car_number,
      days: item?.date,
    })) : '';
  // return null during page loading or data fetching error
  if (pageState === 'loading' || pageState === 'error') return null;

  return (

    <div>
      <Row gutter={16}>
        <Col span={24}>
          <Card style={{ minHeight: '120px', marginBottom: '15px' }}>
            <Card1 driverData={driverData} />
          </Card>
        </Col>
        <Col span={12}>
          <Card style={{ height: '225px', marginBottom: '15px' }}>
            <NoOfTripsBar incentiveData={incentiveData} />
          </Card>
        </Col>
        <Col span={12} style={{ overflowX: 'hidden', overflowY: 'scroll', height: '225px' }}>
          <Row gutter={16}>
            {Array.isArray(carsList) && carsList.length > 0
              ? carsList?.map((arrayItem) => (
                <Col span={24} key={arrayItem?.key}>
                  <div style={{ backgroundColor: '#ffffff', height: '65px', marginBottom: '15px' }}>
                    <CarsAndDays carNum={arrayItem?.carNum} days={arrayItem?.days} />
                  </div>
                </Col>
              )) : 0}
          </Row>
        </Col>
        <Col span={24}>
          <div style={{ backgroundColor: '#ffffff', height: '300px', marginBottom: '15px' }}>
            <Averages driverData={driverData} />
          </div>
        </Col>
        <Col span={16}>
          <div
            style={{
              backgroundColor: '#ffffff', height: '260px', marginBottom: '15px', padding: '20px 35px 20px 35px',
            }}
            className="border-dotted border-1 border-[#86A1A4] rounded-md"
          >
            <TotalSumCards
              driverData={driverData}
              incentiveData={incentiveData}
              setSelectedCard={setSelectedCard}
              setOnClick={setOnClick}
              setSelectedCardData={setSelectedCardData}
              penaltiesData={penaltiesData}
              rtoFinesData={rtoFinesData}
              deadKmData={deadKmData}
            />
          </div>
        </Col>
        <Col span={8}>
          <div style={{
            overflowX: 'hidden', overflowY: 'scroll', backgroundColor: '#ffffff', height: '260px', marginBottom: '15px',
          }}
          >
            <IncentivesReceivedTable incentiveData={incentiveData} />
          </div>
        </Col>
        <Col span={24} className={onClick === true ? 'container' : 'container d-none'}>
          <div style={{
            backgroundColor: '#ffffff', marginBottom: '15px',
          }}
          >
            <TotalSumCardsTable
              incentiveData={incentiveData}
              selectedCard={selectedCard}
              selectedCardData={selectedCardData}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WithPageHandler(SummaryReportCharts);
