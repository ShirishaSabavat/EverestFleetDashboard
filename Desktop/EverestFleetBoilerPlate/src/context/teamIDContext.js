/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useContext } from 'react';

// initial default value
const TeamContext = createContext(
  {
    teamIDValue: 1,
    managerIDValue: 1,
    cityIDValue: 1,
    carNumber: { carNumberValue: '', carCode: '' },
    driverID: { driverIDValue: '', carCode: '' },
    driverETM: 'ETM06628',
  },
);

const TeamProvider = ({ children }) => {
  const carType = ['active', 'nd', 'repair', 'insurance', 'breakdown', 'b2b', 'Rental', 'Fitness_parking', 'parking'];

  const [teamID, setTeamID] = useState({
    teamIDValue: 1,
  });
  const [managerID, setManagerID] = useState({
    managerIDValue: 1,
  });
  const [cityID, setCityID] = useState({
    cityIDValue: 1,
  });
  const [carNumber, setCarNumber] = useState({
    carNumberValue: '',
    carCode: '',
  });
  const [driverID, setDriverID] = useState({
    driverIDValue: '',
    driverCode: '',
  });
  const [driverETM, setDriverETM] = useState('ETM06628');

  return (
    <TeamContext.Provider value={{
      teamID,
      setTeamID,
      managerID,
      setManagerID,
      cityID,
      setCityID,
      carType,
      carNumber,
      setCarNumber,
      driverID,
      setDriverID,
      driverETM,
      setDriverETM,
    }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export const useTeamContext = () => useContext(TeamContext);
export default TeamProvider;
