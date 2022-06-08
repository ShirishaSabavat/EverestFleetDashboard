import { Input, Layout, Menu } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useTeamContext } from 'context/teamIDContext';
import CarsDrivenCard from './carsDrivenCard';
import bgRemovedCarImg from '../../../../../assets/images/bgRemovedCarImg.png';

// eslint-disable-next-line no-unused-vars
const promise = new Promise((resolve) => {
  setTimeout(() => resolve(), 3000);
});
const SideBar = (props) => {
  const {
    carStatus = '', carDailySidebar = [], headerName = '', carWeeklyCard = {},
    onSearchCar, cRSearchValue = '', carDailyTable = [], onClickValue, setOnClickValue,
  } = props;
  const {
    Header, Content, Sider,
  } = Layout;
  const { carNumber, setCarNumber } = useTeamContext();

  const [searchLoading, setSearchLoading] = useState(false);

  // const onSearch = (value) => console.log(value);

  const handleClick = (item, index) => {
    setCarNumber({ carNumberValue: item?.car_number, carCode: index.toString() });
  };
  // global search input on enter
  const globalSearch = (value) => {
    onSearchCar(value);
    setSearchLoading(true);
    setTimeout(() => setSearchLoading(false), 1000);
  };

  const carDailySidebarTemp = carDailySidebar.filter(({
    car_number: carNumberTem,
  }) => (
    `${carNumberTem}`.toLowerCase().includes(cRSearchValue.toLowerCase())
  ));
  return (
    <div style={{ fontFamily: 'montserrat' }}>
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
          <Menu style={{ color: '#86A1A4', fontWeight: 'regular' }} theme="light" selectedKeys={[carNumber.carCode]}>
            <div className="px-3 pt-3 pb-2.5">
              {/* <Search placeholder="Search" onSearch={onSearch} style={{ width: 170 }} /> */}
              <Input
                size="medium"
                placeholder="Search"
                //  onSearch={onSearch}
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
            {carDailySidebarTemp.map((item, index) => (
              <Menu.Item
                key={index.toString()}
                onClick={() => handleClick(item, index)}
              >
                {' '}
                <div className="flex flex-row">
                  <img alt="car" height="40px" width="50px" src={bgRemovedCarImg} />
                  {item?.car_number}
                </div>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background font-bold text-[#333333] text-sm" style={{ paddingLeft: '20px' }}>
            {headerName}
            <span className="text-[#37BDC8]">
              {' '}
              (
              {carStatus || 0}
              )
            </span>
          </Header>
          <Content className="ml-0 mr-6 mt-4">
            <div className="site-layout-background">
              <CarsDrivenCard
                selectedCar={carWeeklyCard[0]}
                carDaily={carDailyTable}
                onClickValue={onClickValue}
                setOnClickValue={setOnClickValue}
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default SideBar;
