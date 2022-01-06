import { logout } from './auth/auth.actions';

export const handleErrors = (response, dispatch) => {
  if (!response.ok) {
    if (response?.status === 401) {
      dispatch(logout());
    }
    throw response;
  }
  return response;
};

export const createHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  apiKey: localStorage.getItem('apiKey'),
});
