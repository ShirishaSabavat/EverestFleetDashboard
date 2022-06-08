import { Card } from 'antd';
import TableModal from './tableModal';
import bgRemovedBigImg from '../../../../../assets/images/bgRemovedBigImg.png';

const CarsDrivenCard = (props) => {
  const {
    selectedCar = {}, carDaily = [], onClickValue, setOnClickValue,
  } = props;
  const onClickFunction = () => {
    setOnClickValue(true);
  };
  const roundNumber = (num) => Math.round(num * 1000) / 1000;

  return (
    <div style={{ fontFamily: 'montserrat' }}>
      <div className="container-fluid mb-4">
        <Card>
          <div className="row">
            <div className="col-3">
              <img className="w-100 h-75" src={bgRemovedBigImg} alt="rupee2" />
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-6">
                  <h6 className="text-[#333333] text-base font-semibold m-0">{selectedCar?.car_number}</h6>
                  <p className="text-[#333333] font-medium text-sm mb-0">
                    {selectedCar?.company_name}
                    {' '}
                    {selectedCar?.model_name}
                  </p>
                </div>
                <div className="col-6 d-flex flex-row justify-content-end">
                  <div>
                    <button type="button" onClick={onClickFunction} className="bg-[#37BDC8] mb-3 text-white rounded-full px-3 py-2">Get more Car Info.</button>
                  </div>
                </div>
                <hr className="mt-0 text-[#86A1A4]" />
                <div style={{ fontSize: '10px' }} className="col-12 font-semibold flex flex-row mb-3">
                  <div className="h-9 text-center border-solid border-r-2 border-[#86A1A4] px-3">
                    <p className="text-[#333333] mb-1">
                      {typeof selectedCar?.total_trips !== 'string' ? 0
                        : selectedCar?.total_trips}
                    </p>
                    <p className="text-[#86A1A4] mb-0">Trips</p>
                  </div>
                  <div className="h-9 text-center border-solid border-r-2 border-slate-400 px-3">
                    <p className="text-[#333333] mb-1">
                      {typeof selectedCar?.total_online_hours
                        !== 'number' ? 0 : roundNumber(selectedCar?.total_online_hours).toFixed(1)}
                    </p>
                    <p className="text-[#86A1A4] mb-0">Total Online Hours</p>
                  </div>
                  <div className="h-9 text-center border-solid border-r-2 border-slate-400 px-3">
                    <p className="text-[#333333] mb-1">
                      ₹
                      {' '}
                      {typeof selectedCar?.total_revenue !== 'number' ? 0
                        : roundNumber(selectedCar?.total_revenue).toFixed(1)}
                    </p>
                    <p className="text-[#86A1A4] mb-0">Total Revenue</p>
                  </div>
                  <div className="h-9 text-center border-solid border-r-2 border-slate-400 px-3">
                    <p className="text-[#333333] mb-1">
                      {typeof selectedCar?.trips_per_hours !== 'number' ? 0
                        : roundNumber(selectedCar?.trips_per_hours).toFixed(1)}
                    </p>
                    <p className="text-[#86A1A4] mb-0">Trips per Hour</p>
                  </div>
                  <div className="h-9 text-center px-3">
                    <p className="text-[#333333] mb-1">
                      {typeof selectedCar?.avg_online_hours !== 'number' ? 0
                        : roundNumber(selectedCar?.avg_online_hours).toFixed(1)}
                    </p>
                    <p className="text-[#86A1A4] mb-0">Avg. Online Hour</p>
                  </div>
                </div>
                <div style={{ fontSize: '10px' }} className="col-12 font-semibold flex flex-row justify-center">
                  <div className="h-9 text-center border-solid border-r-2 border-slate-400 px-3">
                    <p className="text-[#333333] mb-1">
                      ₹
                      {' '}
                      {typeof selectedCar?.revenue_per_day !== 'number' ? 0
                        : roundNumber(selectedCar?.revenue_per_day).toFixed(1)}
                    </p>
                    <p className="text-[#86A1A4] mb-0">Revenue Per Day</p>
                  </div>
                  <div className="h-9 text-center border-solid border-r-2 border-slate-400 px-3">
                    <p className="text-[#333333] mb-1">
                      ₹
                      {' '}
                      {typeof selectedCar?.revenue_per_trips !== 'number' ? 0
                        : roundNumber(selectedCar?.revenue_per_trips).toFixed(1)}
                    </p>
                    <p className="text-[#86A1A4] mb-0">Revenue Per Trip</p>
                  </div>
                  <div className="h-9 text-center px-3">
                    <p className="text-[#333333] mb-1">
                      ₹
                      {' '}
                      {typeof selectedCar?.revenue_per_hours !== 'number' ? 0
                        : roundNumber(selectedCar?.revenue_per_hours).toFixed(1)}
                    </p>
                    <p className="text-[#86A1A4] mb-0">Revenue Per Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className={onClickValue === true ? 'container' : 'container d-none'}>
        <TableModal carDaily={carDaily} />
      </div>
    </div>
  );
};
export default CarsDrivenCard;
