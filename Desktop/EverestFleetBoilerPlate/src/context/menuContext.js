/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useContext } from 'react';

// initial default value
const MenuContext = createContext({
  menu: 'Dashboard',
});

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState('Dashboard');
  const [path, setPath] = useState('/home/dashboard');

  return (
    <MenuContext.Provider value={{
      menu, setMenu, path, setPath,
    }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
export default MenuProvider;
