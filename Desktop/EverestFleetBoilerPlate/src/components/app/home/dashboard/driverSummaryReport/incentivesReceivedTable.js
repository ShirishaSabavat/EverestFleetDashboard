import { Table } from 'antd';
import moment from 'moment';

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
    title: 'Incentives Received',
    props: {
      style: {
        fontStyle: 'Montserrat', color: '#013453', fontWeight: '600', fontSize: '12px',
      },
    },
    dataIndex: 'incentivesReceived',
    align: 'end',
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

const incentivesReceivedTable = ({ incentiveData = [] }) => {
  const data = Array.isArray(incentiveData) && incentiveData.length > 0
    ? incentiveData.map((item, index) => ({
      key: index,
      date: `${moment(item?.week_start_date).format('DD')} ${moment(item?.week_start_date).format('MMM')} - ${moment(item?.week_end_date).format('DD')} ${moment(item?.week_end_date).format('MMM')} ${moment(item?.week_start_date).format('YYYY')}`,
      incentivesReceived: `₹ ${item?.insentive}`,
    })) : 0;
  return (
    <div>
      <h6 className="text-sm m-1 text-[#333333] font-bold pl-3 pt-3">No. of Incentives Received</h6>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};
export default incentivesReceivedTable;
