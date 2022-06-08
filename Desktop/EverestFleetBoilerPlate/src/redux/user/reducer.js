import Cookies from 'js-cookie';
import actions from './actionTypes';

const initialState = {
  loading: false,
  error: '',
  authorized: false,
  permission: [],
  team: Cookies.get('team') || '',
  manager: Cookies.get('manager') || '',
  city: Cookies.get('city') || '',
  teamInfo: {},
};

// eslint-disable-next-line default-param-last
const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.SET_STATE:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default userReducer;
