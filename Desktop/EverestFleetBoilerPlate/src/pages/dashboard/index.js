import { Helmet } from 'react-helmet';
import Dashboard from 'components/app/home/dashboard';

const HisaabPage = () => (
  <>
    <Helmet title="Dashboard" />
    <div style={{ fontFamily: 'montserrat' }} className="flex flex-col mt-5 pl-3 pr-10 mb-4">
      <div className="mt-5 mb-3">
        <p className="font-bold mt-5 text-[#333333] text-2xl">
          <Dashboard />
        </p>
      </div>
    </div>
  </>
);

export default HisaabPage;
