import { Layout } from 'antd';

const { Content } = Layout;

const AuthLayout = ({ children }) => (
  <Layout style={{ fontFamily: 'montserrat', overflowX: 'hidden' }}>
    <Content>
      {children}
    </Content>
  </Layout>
);

export default AuthLayout;
