import { Helmet } from 'react-helmet';
import DriverRatingReportTable from 'components/app/home/dashboard/driverRatingReport/index';
// import { StarFilled, StarTwoTone } from '@ant-design/icons';

const HisaabPage = () => (
  <>
    <Helmet title="Dashboard" />
    <div style={{ fontFamily: 'montserrat' }} className="flex flex-col pl-3 pr-10 mb-4">
      <div className="mt-5 mb-0">
        <span className="font-bold text-[#333333] text-2xl">
          Driver Rating Report
        </span>
      </div>
      {/* <div className="row mt-5 mb-4">
        <div className="col-8">
          <h3 className="font-bold text-[#333333] text-2xl pl-0 mt-2">
            Driver Rating Report
          </h3>
        </div>
        <div className="col-4">
          <div className="border-dotted border-1 border-[#86A1A4]
          rounded-md bg-[#FFFFFF] px-2 pt-2 pb-0">
            <div className="d-flex flex-row">
              <div className="d-flex flex-column ml-2 mt-1">
                <div className="d-flex flex-row">
                  <svg>icon</svg>
                  <h6 className="text-[#013453] font-montserrat
                  font-extrabold text-lg m-0 pr-2">4.3</h6>
                  <p className="m-0 pt-1" style={{ fontSize: '10px', color: '#37BDC8' }}>
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarTwoTone twoToneColor="#37BDC8" />
                  </p>
                </div>
                <p className="text-[#013453] text-xs font-medium">Aaj Ka Average Everest rating</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <DriverRatingReportTable />
    </div>
  </>
);

export default HisaabPage;
