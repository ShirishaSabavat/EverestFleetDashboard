import { Table } from 'antd';
import moment from 'moment';

const incentivesReceivedTable = ({ selectedCard = '', selectedCardData = [] }) => {
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      align: 'start',
      render(text) {
        return {
          props: {
            style: {
              fontStyle: 'Montserrat', color: '#333333', fontWeight: '600', fontSize: '10px',
            },
          },
          children: <div>{text}</div>,
        };
      },
    },
    {
      title: selectedCard === 'No. of times Reported for Dead Kms' ? 'Dead KMs' : 'Amount',
      props: {
        style: {
          fontStyle: 'Montserrat', color: '#013453', fontWeight: '600', fontSize: '12px',
        },
      },
      dataIndex: 'amount',
      align: 'start',
      render(text) {
        return {
          props: {
            style: {
              fontStyle: 'Montserrat', color: '#013453', fontWeight: '600', fontSize: '12px',
            },
          },
          children: <div className={selectedCard === 'No. of times Reported for Dead Kms' ? 'text-[#013453]' : 'text-[#FF0000]'}>{text}</div>,
        };
      },
    },
    {
      title: 'Remark',
      props: {
        style: {
          fontStyle: 'Montserrat', color: '#013453', fontWeight: '600', fontSize: '12px',
        },
      },
      dataIndex: 'remark',
      align: 'start',
      render(text) {
        return {
          props: {
            style: {
              fontStyle: 'Montserrat', color: '#013453', fontWeight: '600', fontSize: '12px',
            },
          },
          children: <div>{text}</div>,
        };
      },
    },
  ];

  const data = Array.isArray(selectedCardData) && selectedCardData.length > 0
    ? selectedCardData.sort((a, b) => {
      const dateA = new Date(a?.date);
      const dateB = new Date(b?.date);
      return dateB - dateA;
    }).map((item, index) => ({
      key: index,
      date: `${moment(item?.date).format('DD')} ${moment(item?.date).format('MMM')} ${moment(item?.date).format('YYYY')}`,
      amount: item?.amount?.toFixed(0),
      remark: item?.remarks,
    })) : 0;
  return (
    <div>
      <h6 className="text-sm m-1 text-[#37BDC8] font-bold pl-3 py-3">{selectedCard}</h6>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};
export default incentivesReceivedTable;
