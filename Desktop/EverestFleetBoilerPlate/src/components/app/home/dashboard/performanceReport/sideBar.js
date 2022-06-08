import { useState } from 'react';
import { Input, Layout, Menu } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useTeamContext } from 'context/teamIDContext';
import PerformanceReportCard from './performanceReportCard';
import TripsAndHoursBar from './tripsAndHoursBar';
import BlankImg from '../../../../../assets/images/blankImg.png';

const SideBar = ({
  driverRating,
  driverRatingName,
  driverList = [],
  driverDailyData,
  selectedDriverData,
  setSelectedDriverData,
  onSearchCar,
  cRSearchValue,
}) => {
  const {
    Header, Content, Sider,
  } = Layout;
  const { driverID, setDriverID } = useTeamContext();
  const [searchLoading, setSearchLoading] = useState(false);
  // const onSearch = (value) => console.log(value);

  const handleClick = (item, index) => {
    setDriverID({ driverIDValue: item?.driver_id, carCode: index.toString() });
    setSelectedDriverData(item);
  };

  // global search input on enter
  const globalSearch = (value) => {
    onSearchCar(value);
    setSearchLoading(true);
    setTimeout(() => setSearchLoading(false), 1000);
  };

  const driverListTemp = driverList?.filter(({
    driver_name: driverNameTem,
  }) => (
    `${driverNameTem}`.toLowerCase().includes(cRSearchValue.toLowerCase())
  ));
  return (
    <div>
      <Layout>
        <Sider
          style={{ overflowX: 'hidden', overflowY: 'scroll', height: '640px' }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="light" selectedKeys={[driverID.carCode]}>
            <div className="px-3 pt-3 pb-2.5">
              {/* <Search placeholder="Search" onSearch={onSearch} style={{ width: 170 }} /> */}
              <Input
                size="medium"
                placeholder="Search"
                // onSearch={onSearch}
                prefix={(
                  <img
                    className="mr-3"
                    src="/assets/images/general/loupe.svg"
                    alt="search"
                    width="12"
                  />
                )}
                className="w-100"
                suffix={searchLoading && <LoadingOutlined />}
                bordered
                onChange={({ target: { value } }) => globalSearch(value)}
                value={cRSearchValue}
              />
            </div>
            {driverListTemp?.sort((a, b) => (
              (Number(a?.total_trips) > Number(b?.total_trips)) ? 1 : -1))
              .map((data, index) => (
                <Menu.Item
                  key={index.toString()}
                  onClick={() => handleClick(data, index)}
                >
                  <div className="flex flex-row">
                    <img
                      style={{ height: '30px' }}
                      width="30"
                      className="mt-0.5 mr-2 border-solid rounded-full"
                      src={!data?.photo ? BlankImg : `https://jarvis.everestfleet.com/media/${data?.photo}`}
                      alt="D"
                    />
                    <h6 className="mt-1 text-xs text-[#333333]">
                      {data?.driver_name}
                      <br />
                      <span className="text-[#86A1A4]">
                        Total Trips:
                        {' '}
                        <span className="text-[#333333]">{data?.total_trips}</span>
                      </span>
                    </h6>
                  </div>
                </Menu.Item>
              ))}
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background text-[#333333] font-bold text-sm" style={{ paddingLeft: 20 }}>
            {driverRatingName}
            {' '}
            <span className="text-[#37BDC8]">
              (
              {driverRating}
              )
            </span>
          </Header>
          <Content style={{ margin: '16px 0 0' }}>
            <div className="site-layout-background" style={{ minHeight: 110, marginBottom: '10px' }}>
              <PerformanceReportCard selectedDriverData={selectedDriverData} />
            </div>
            <div className="site-layout-background" style={{ minHeight: 100 }}>
              <TripsAndHoursBar driverDailyData={driverDailyData} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default SideBar;
