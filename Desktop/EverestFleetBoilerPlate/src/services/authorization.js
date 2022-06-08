/* eslint-disable no-unused-vars */
import Cookies from 'js-cookie';
import axios from 'axios';
import { store } from 'redux/store';
import actions from 'redux/user/actionTypes';
import client from './client';

export const login = async (payload) => {
  const { variables } = payload;
  try {
    const response = await client.post('/api/login/', variables);
    const {
      token, team, manager_id: managerId, city_id: cityId,
    } = response.data;
    Cookies.set('token', token);
    Cookies.set('team', team);
    Cookies.set('manager', managerId);
    Cookies.set('city', cityId);

    store.dispatch({
      type: actions.SET_STATE,
      payload: {
        team: team[0],
        manager: managerId[0],
        city: cityId[0],
      },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// load current account if token is verified
// and dispatch data
export const currentAccountLoad = async () => {
  const { userReducer: { team } } = store.getState();
  if (!team) return false;
  try {
    const response = await client.get(`/fleet/api/teamApi/${team}/`);
    store.dispatch({
      type: actions.SET_STATE,
      payload: {
        teamInfo: response.data,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

// logout and remove all the cookies
export const logout = async () => {
  Cookies.remove('token');
  Cookies.remove('token');
  Cookies.remove('team');
  Cookies.remove('manager');
  Cookies.remove('city');

  return false;
};
