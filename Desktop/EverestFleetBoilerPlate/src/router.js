import { lazy, Suspense } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useMenuContext } from 'context/menuContext';
import AuthLayout from './layout';

const routes = [
  // AUTH RELATED ROUTES
  {
    path: '/auth/sign-in',
    key: 'SIGN-IN',
    exact: true,
    Component: lazy(() => import('pages/auth/sign-in')),
  },
  {
    path: '/auth/sign-up',
    key: 'SIGN-UP',
    exact: true,
    Component: lazy(() => import('pages/auth/sign-up')),
  },
  {
    path: '/auth/page-not-found',
    key: 'PAGE-NOT-FOUND',
    exact: true,
    Component: lazy(() => import('pages/auth/page-not-found')),
  },
  {
    path: '/auth/unauthorized',
    key: 'UNAUTHORIZED',
    exact: true,
    Component: lazy(() => import('pages/auth/unauthorized')),
  },

  // APP RELATED ROUTES
  {
    path: '/home/dashboard',
    key: 'DASHBOARD',
    exact: true,
    Component: lazy(() => import('pages/dashboard')),
  },
  {
    path: '/home/hisaab',
    key: 'HISAAB',
    exact: true,
    Component: lazy(() => import('pages/hisaab')),
  },
  {
    path: '/home/driverHisaabData',
    key: 'DRIVERHISAABDATA',
    exact: true,
    Component: lazy(() => import('pages/driverHisaabData')),
  },
  {
    path: '/home/driverHisaab',
    key: 'DRIVERHISAAB',
    exact: true,
    Component: lazy(() => import('pages/driverHisaab')),
  },
  {
    path: '/home/carManagement',
    key: 'CARMANAGEMENT',
    exact: true,
    Component: lazy(() => import('pages/carManagement')),
  },
  {
    path: '/home/carSummary',
    key: 'CARSUMMARY',
    exact: true,
    Component: lazy(() => import('pages/carSummary')),
  },
  {
    path: '/home/performanceReport',
    key: 'PERFORMANCEREPORT',
    exact: true,
    Component: lazy(() => import('pages/performanceReport')),
  },
  {
    path: '/home/weeklySummaryReport',
    key: 'WEEKLYSUMMARYREPORT',
    exact: true,
    Component: lazy(() => import('pages/weeklySummaryReport')),
  },
  {
    path: '/home/weeklyCompareReport',
    key: 'WEEKLYCOMPAREREPORT',
    exact: true,
    Component: lazy(() => import('pages/weeklyCompareReport')),
  },
  {
    path: '/home/deadKMsReport',
    key: 'DEADKMSREPORT',
    exact: true,
    Component: lazy(() => import('pages/deadKMsReport')),
  },
  {
    path: '/home/driverRatingReport',
    key: 'DRIVERRATINGREPORT',
    exact: true,
    Component: lazy(() => import('pages/driverRatingReport')),
  },
  {
    path: '/home/driverSummaryReport',
    key: 'DRIVERSUMMARYREPORT',
    exact: true,
    Component: lazy(() => import('pages/driverSummaryReport')),
  },
  {
    path: '/home/driverDailyReport',
    key: 'DRIVERDAILYREPORT',
    exact: true,
    Component: lazy(() => import('pages/driverDailyReport')),
  },
  {
    path: '/home/carDailyReport',
    key: 'CARDAILYREPORT',
    exact: true,
    Component: lazy(() => import('pages/carDailyReport')),
  },
];
const Router = ({ history }) => {
  const { setPath } = useMenuContext();
  return (
    <ConnectedRouter history={history}>
      <AuthLayout>
        <Route render={({ location }) => (
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              appear
              timeout={300}
              classNames="fade-in"
            >
              <Switch location={location}>
                <Route exact path="/" render={() => <Redirect to="/home/dashboard" />} />
                {routes.map(({
                  path,
                  Component,
                  exact,
                  key,
                }) => (
                  <Route
                    path={path}
                    key={key}
                    exact={exact}
                    render={() => {
                      setPath(path);
                      return (
                        <Suspense fallback={null}>
                          <Component />
                        </Suspense>
                      );
                    }}
                  />
                ))}
                <Redirect to="/auth/page-not-found" />
              </Switch>
            </CSSTransition>
          </SwitchTransition>
        )}
        />
      </AuthLayout>
    </ConnectedRouter>
  );
};
export default Router;
Router.displayName = 'Router Page';
