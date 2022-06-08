import { useTeamContext } from 'context/teamIDContext';

const TableModal = (props) => {
  const { carDaily = [] } = props;
  const { carNumber } = useTeamContext();

  const carDailyTableTemp = carDaily.filter((item) => item?.car_number
    === carNumber.carNumberValue);

  const roundNumber = (num) => Math.round(num * 1000) / 1000;
  return (
    <div style={{ fontFamily: 'montserrat' }}>
      <table className="text-[#333333] text-center text-sm w-100">
        <thead>
          <tr>
            <th className="font-normal pb-3">Date</th>
            <th className="font-normal pb-3">Name</th>
            <th className="font-normal pb-3">Contact No.</th>
            <th className="font-normal pb-3">Employee Id</th>
            <th className="font-normal pb-3">Trips</th>
            <th className="font-normal pb-3">Online Hours</th>
            <th className="font-normal pb-3">Total Revenue</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(carDailyTableTemp) && carDailyTableTemp.length > 0
            ? carDailyTableTemp.sort((a, b) => {
              const dateA = new Date(a?.date);
              const dateB = new Date(b?.date);
              return dateB - dateA;
            })
              .map((object, index) => (
                <tr key={index.toString()} className="font-semibold bg-[#FFFFFF] text-[#333333] p-3 text-xs border-b-8 border-[#F1F0F1]">
                  <td className="text-[#86A1A4] py-4 mb-4">{object?.date}</td>
                  <td style={{ width: '100px' }} className="py-4 mb-4">{object?.driver?.name}</td>
                  <td className="py-4 mb-4">{object?.driver?.mobile}</td>
                  <td className="py-4 mb-4">{object?.driver?.employee_id}</td>
                  <td className="py-4 mb-4">{object?.trips}</td>
                  <td className="py-4 mb-4">{roundNumber(object?.online_hours).toFixed(1)}</td>
                  <td className="text-[##013453] text-base">
                    {' '}
                    <span className="font-sans font-medium">₹</span>
                    {' '}
                    {typeof object?.revenue !== 'number' ? 0
                      : roundNumber(object?.revenue).toFixed(1)}
                  </td>
                </tr>
              ))
            : (

              <tr className="text-start font-semibold bg-[#ffffff] text-[#333333] text-xs">
                <td className="py-4"> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>--No Records--</td>
                <td> </td>
                <td> </td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
};
export default TableModal;
