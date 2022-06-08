import { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { useMenuContext } from 'context/menuContext';
import AppHeader from 'components/layouts/AppHeader';
import DashboardHeader from 'components/layouts/dashboardHeader';
import Sidebar from 'components/layouts/sidebar';
// import DriverHisaabDataPage from 'pages/driverHisaabData';

const {
  Header,
  Sider,
  Content,
} = Layout;

const MainLayout = ({
  children,
}) => {
  const { menu, path } = useMenuContext();
  const [sideBarLayout, setSideBarLayout] = useState(false);

  useEffect(() => {
    let timeout = null;
    const onHandleResize = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (window.innerWidth < 1580) setSideBarLayout(true);
        if (window.innerWidth > 1580) setSideBarLayout(false);
      }, 150);
    };

    window.addEventListener('resize', onHandleResize);
    return () => window.removeEventListener('resize', onHandleResize);
  }, []);

  return (
    <Layout style={{ fontFamily: 'montserrat' }}>
      <Layout style={{ fontFamily: 'montserrat' }}>
        {path === '/home/driverHisaabData' ? ''
          : (
            <Sider
              collapsible
              collapsed={sideBarLayout}
              width={240}
              defaultCollapsed={false}
              style={{ fontFamily: 'montserrat', height: 'auto', backgroundSize: 'cover' }}
              className="h-screen sticky top-0 font-semi-bold text-xs border-r-1 shadow-md opacity-1 border-gray-100"
              trigger={(
                <div className="border-t border-r-1 shadow-md opacity-1 border-gray-100">
                  {sideBarLayout ? 'Expand' : 'Collapse'}
                </div>
              )}
              onCollapse={() => setSideBarLayout((prevState) => !prevState)}
            >
              <Sidebar />
            </Sider>
          )}
        <Layout style={{ height: 'auto', backgroundSize: 'cover' }} className="bg-gray-50">
          {path === '/home/driverHisaabData' ? ''
            : (
              <Header style={{ padding: 0, backgroundColor: 'transparent' }}>
                {menu === 'Dashboard' ? <DashboardHeader /> : <AppHeader />}
              </Header>
            )}
          <Content className="pl-0.5 h-100">
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
