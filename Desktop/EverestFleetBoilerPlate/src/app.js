import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import client from 'services/apollo_link';
import { store, history } from 'redux/store';
import Router from 'router';

import 'global.scss';
import 'components/kit/vendors/antd/mixins.less';
import CalenderProvider from 'context/calenderContext';
import DriverIDProvider from 'context/driverIDContext';
import TeamProvider from 'context/teamIDContext';
import DayCalenderProvider from 'context/dayCalenderContext';
import WeekOrDaySelectProvider from 'context/weekOrDaySelectContext';
import MenuProvider from 'context/menuContext';

//  ATTENTION:  The below if condition Will set console log to empty function to
// avoid consoling in other environments except development. So, please remove
// this once every console is removed from the app because this only acts as a
// patch work and should be avoided
if (process.env.REACT_APP_NODE_ENV !== 'development') console.log = function () { };

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <CalenderProvider>
        <DriverIDProvider>
          <TeamProvider>
            <DayCalenderProvider>
              <WeekOrDaySelectProvider>
                <MenuProvider>
                  <Router history={history} />
                </MenuProvider>
              </WeekOrDaySelectProvider>
            </DayCalenderProvider>
          </TeamProvider>
        </DriverIDProvider>
      </CalenderProvider>
    </Provider>
  </ApolloProvider>
);

export default App;
//  NOTE:  Use displayName property of a component to ease the debugging
// in terms of component identification in react dev tools
//  ATTENTION:  Please update the display name according to the project
App.displayName = 'Boiler plate';
