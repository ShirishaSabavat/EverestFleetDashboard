import { Col, Row } from 'antd';
import CarDetails from './carDetails';
import OnlineHourDetails from './onlineHourDetails';
import TripDetails from './tripDetails';
import RevenueDetails from './revenueDetails';
import IncentivesDetails from './IncentivesDetails';
import MetricForCars from './metricForCars';

const DemoRadialBar = () => (
  <div style={{ fontFamily: 'montserrat', padding: '0px 15px 0px 15px' }}>
    <Row gutter={16}>
      <Col span={7}>
        <div
          style={{
            height: '260px', marginBottom: '10px', marginRight: '-5px', backgroundColor: '#ffffff', boxShadow: '0px 3px 12px #0000000F', borderRadius: '9px', opacity: 1,
          }}
        >
          <div className="p-3">
            <p className="text-[#333333] text-base font-semibold m-0">Car Details</p>
          </div>
          <hr style={{
            height: '1.25px', color: '#CED4D4', margin: '0px',
          }}
          />
          <CarDetails />
        </div>
      </Col>
      <Col span={10}>
        <div
          style={{
            height: '260px', marginBottom: '10px', marginRight: '-5px', backgroundColor: '#ffffff', boxShadow: '0px 3px 12px #0000000F', borderRadius: '9px', opacity: 1,
          }}
        >
          <div className="p-3">
            <p className="text-[#333333] text-base font-semibold m-0">Online Hour Details</p>
          </div>
          <hr style={{
            height: '1.25px', color: '#CED4D4', margin: '0px',
          }}
          />
          <OnlineHourDetails />
        </div>
      </Col>
      <Col span={7}>
        <div
          style={{
            height: '260px', marginBottom: '10px', backgroundColor: '#ffffff', boxShadow: '0px 3px 12px #0000000F', borderRadius: '9px', opacity: 1,
          }}
        >
          <div className="p-3">
            <p className="text-[#333333] text-base font-semibold m-0">Trip Details</p>
          </div>
          <hr style={{
            height: '1.25px', color: '#CED4D4', margin: '0px',
          }}
          />
          <TripDetails />
        </div>
      </Col>
      <Col span={7}>
        <div
          style={{
            height: '600px', marginBottom: '10px', marginRight: '-5px', backgroundColor: '#ffffff', boxShadow: '0px 3px 12px #0000000F', borderRadius: '9px', opacity: 1,
          }}
        >
          <div className="p-3">
            <p className="text-[#333333] text-base font-semibold m-0">Revenue Details</p>
          </div>
          <hr style={{
            height: '1.25px', color: '#CED4D4', margin: '0px',
          }}
          />
          <RevenueDetails />
        </div>
      </Col>
      <Col span={17}>
        <Row gutter={16}>
          <Col span={24}>
            <IncentivesDetails />
          </Col>
          <Col span={24}>
            <div
              style={{
                height: '280px', marginTop: '6px', marginBottom: '10px', backgroundColor: '#ffffff', boxShadow: '0px 3px 12px #0000000F', borderRadius: '9px', opacity: 1,
              }}
            >
              <div className="p-3">
                <p className="text-[#333333] text-base font-semibold m-0">Metric for Details</p>
              </div>
              <hr style={{
                height: '1.25px', color: '#CED4D4', margin: '0px',
              }}
              />
              <MetricForCars />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default DemoRadialBar;
