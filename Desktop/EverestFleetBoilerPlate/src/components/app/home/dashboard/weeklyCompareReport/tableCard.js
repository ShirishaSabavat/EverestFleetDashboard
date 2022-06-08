import React from 'react';
import { Card, Col, Row } from 'antd';

const tableCard = (props) => {
  const { selected, selectedTable } = props;
  const cardTitle = (
    <div className="d-flex flex-row">
      <div className="mr-2.5">
        <img style={{ height: '30px' }} className="rounded-full" width="30" src={selected.src} alt="I" />
      </div>
      <div>
        <p className="text-[#333333] text-sm mt-1 mb-0 font-mulish-bold">{selected.teamName}</p>
      </div>
    </div>
  );

  return (
    <div>
      <Card title={cardTitle}>
        <Row>
          <Col span={24}>
            {selectedTable}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default tableCard;
