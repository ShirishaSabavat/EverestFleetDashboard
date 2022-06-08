import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { useTeamContext } from 'context/teamIDContext';
import BlankImg from '../../../../../assets/images/blankImg.png';

const PerformanceReportCard = ({ selectedDriverData }) => {
  const { driverETM, setDriverETM } = useTeamContext();
  localStorage.setItem('driverETM', driverETM);
  const roundNumber = (num) => Math.round(num * 1000) / 1000;
  const driverDetailsFun = (driverETMValue) => {
    localStorage.setItem('driverETM', driverETMValue);
    setDriverETM(driverETMValue);
  };

  return (
    <div>
      <div className="container-fluid">
        <Card>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-1 p-0">
                  <img
                    style={{ height: '65px' }}
                    className=" border-solid rounded-full"
                    width="65"
                    src={!selectedDriverData?.photo ? BlankImg : `https://jarvis.everestfleet.com/media/${selectedDriverData?.photo}`}
                    alt="d"
                  />
                </div>
                <div className="col-11 pl-1.5">
                  <div className="row">
                    <div className="col-6">
                      <div>
                        <h6 className="text-[#333333] text-md m-0">{selectedDriverData?.driver_name || ''}</h6>
                        <p className="text-[#013453] font-regular text-xs">
                          Joining date:
                          {' '}
                          <span className="text-[#013453] font-bold text-md">{selectedDriverData?.date_of_joining}</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-6 d-flex flex-row justify-content-end">
                      <div>
                        <h6 className="text-[#013453] font-bold text-md text-end m-0">{selectedDriverData?.total_trips || 0}</h6>
                        <p className="text-[#013453] font-regular text-xs">Total Trips</p>
                      </div>
                    </div>
                    <div className="col-12 mb-3 d-flex flex-row">
                      <div className="h-4 pr-2.5 border-solid border-r-2 border-[#86A1A4]">
                        <p className="text-[#86A1A4] font-regular text-xs m-0">
                          Mobile No:
                          {' '}
                          <span className="text-[#333333] font-semibold text-xs">{selectedDriverData?.mobile}</span>
                        </p>
                      </div>
                      <div className="px-2.5 h-4 text-center border-solid border-r-2 border-[#86A1A4]">
                        <p className="text-[#86A1A4] font-regular text-xs m-0">
                          Employee Id:
                          {' '}
                          <span className="text-[#333333] font-semibold text-xs">
                            <Link
                              onClick={() => {
                                driverDetailsFun(selectedDriverData?.employee_id);
                              }}
                              className="no-underline font-semibold bg-[#ffffff] text-xs hover:bg-[#fff345]"
                              to="/home/driverHisaabData"
                              target="_blank"
                            >
                              {selectedDriverData?.employee_id}
                            </Link>
                          </span>
                        </p>
                      </div>
                      <div className="h-4 px-2.5 text-center border-solid border-r-2 border-[#86A1A4]">
                        <p className="text-[#86A1A4] font-regular text-xs m-0">
                          Last Car No:
                          {' '}
                          <span className="text-[#333333] font-semibold text-xs">{selectedDriverData?.last_car_number || ''}</span>
                        </p>
                      </div>
                      <div className="h-4 px-2.5 text-center">
                        <p className="text-[#86A1A4] font-regular text-xs m-0">
                          Days Worked:
                          {' '}
                          <span className="text-[#333333] font-semibold text-xs">{selectedDriverData?.days_worked}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mt-0 mb-0 text-[#86A1A4]" />
                <div className="col-2 px-2 pt-2 pb-1 text-center border-solid border-r-2 border-[#86A1A4]">
                  <h6 className="text-xs text-[#333333] font-semibold m-0">
                    {selectedDriverData?.target_trip || 0}

                  </h6>
                  <p className="text-xs text-[#86A1A4] m-0">Target Trips</p>
                </div>
                <div className="col-2 p-2 pb-1 text-center border-solid border-r-2 border-[#86A1A4]">
                  <h6 className="text-xs text-[#333333] font-semibold m-0">
                    {selectedDriverData?.balance_trip > 0 ? selectedDriverData?.balance_trip : 0}
                  </h6>
                  <p className="text-xs text-[#86A1A4] m-0">Balance Trips</p>
                </div>
                <div className="col-2 p-2 pb-1 text-center border-solid border-r-2 border-[#86A1A4]">
                  <h6 className="text-xs text-[#333333] font-semibold m-0">
                    {!selectedDriverData?.total_online_hours ? 0
                      : roundNumber(selectedDriverData?.total_online_hours).toFixed(1)}
                    {' '}
                    hrs
                  </h6>
                  <p className="text-xs text-[#86A1A4] m-0">Total Online Hours</p>
                </div>
                <div className="col-2 p-2 pb-1 text-center border-solid border-r-2 border-[#86A1A4]">
                  <h6 className={
                    !selectedDriverData?.outstating && Number(selectedDriverData?.outstating) < 0
                      ? 'text-[#FF0000] text-xs font-semibold m-0' : 'text-[#333333] text-xs font-semibold m-0'
                  }
                  >
                    ₹
                    {' '}
                    {!selectedDriverData?.outstating ? 0
                      : roundNumber(selectedDriverData?.outstating).toFixed(1)}
                  </h6>
                  <p className="text-xs text-[#86A1A4] m-0">Outstanding</p>
                </div>
                <div className="col-2 p-2 pb-1 text-center border-solid border-r-2 border-[#86A1A4]">
                  <h6 className="text-xs text-[#333333] font-semibold m-0">
                    {!selectedDriverData?.dead_km ? '' : selectedDriverData?.dead_km.toUpperCase()}
                  </h6>
                  <p className="text-xs text-[#86A1A4] m-0">Dead KMS</p>
                </div>
                <div className="col-2 p-2 pb-1 text-center">
                  <h6 className="text-xs text-[#333333] font-semibold m-0">
                    ₹
                    {' '}
                    {!selectedDriverData?.total_revenue ? 0
                      : roundNumber(selectedDriverData?.total_revenue).toFixed(1)}
                  </h6>
                  <p className="text-xs text-[#86A1A4] m-0">Total Revenue</p>
                </div>
                <hr className="mt-0 mb-0 text-[#86A1A4]" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default PerformanceReportCard;
