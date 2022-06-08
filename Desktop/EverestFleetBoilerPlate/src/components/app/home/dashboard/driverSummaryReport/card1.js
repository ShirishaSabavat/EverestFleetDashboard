import BlankImg from '../../../../../assets/images/blankImg.png';

const SummaryReportCard1 = ({ driverData = [] }) => {
  const driverDetails = driverData?.[0];
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-1 p-0">
                <img
                  style={{ height: '70px' }}
                  className=" border-solid rounded-full"
                  width="70"
                  src={!driverDetails?.photo
                    ? BlankImg : `https://jarvis.everestfleet.com/media/${driverDetails?.photo}`}
                  alt="d"
                />
              </div>
              <div className="col-11 pr-0 pl-5 py-0">
                <div className="row">
                  <div className="col-6">
                    <div>
                      <h6 className="text-[#333333] text-md mt-2 mb-1">{driverDetails?.driver_name}</h6>
                      <p className="text-[#013453] font-regular text-xs">
                        Joining date:
                        {' '}
                        <span className="text-[#013453] font-bold text-md">{driverDetails?.date_of_joining}</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-6 d-flex flex-row justify-content-end">
                    <div>
                      <h6 className="text-[#013453] text-end font-bold text-md m-0">{driverDetails?.trips}</h6>
                      <p className="text-[#013453] font-regular text-xs">Total Trips</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex flex-row">
                <div className="h-4 ml-10 pl-6 pr-4 text-center border-solid border-r-2 border-[#86A1A4]">
                  <p className="text-[#86A1A4] font-regular text-xs m-0">
                    Mobile No:
                    {' '}
                    <span className="text-[#333333] font-semibold text-xs">{driverDetails?.mobile}</span>
                  </p>
                </div>
                <div className="mx-2 h-4 px-2 text-center border-solid border-r-2 border-[#86A1A4]">
                  <p className="text-[#86A1A4] font-regular text-xs my-0 mr-2">
                    Employee Id:
                    {' '}
                    <span className="text-[#333333] font-semibold text-xs">{driverDetails?.employee_id}</span>
                  </p>
                </div>
                <div className="mx-2 h-4 px-2 text-center border-solid border-r-2 border-[#86A1A4]">
                  <p className="text-[#86A1A4] font-regular text-xs my-0 mr-4">
                    Last Car No:
                    {' '}
                    <span className="text-[#333333] font-semibold text-xs">{driverDetails?.last_car_number}</span>
                  </p>
                </div>
                <div className="h-4 px-2 text-center">
                  <p className="text-[#86A1A4] font-regular text-xs m-0">
                    Days Worked in Uber:
                    {' '}
                    <span className="text-[#333333] font-semibold text-xs">{driverDetails?.days_worked}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SummaryReportCard1;
