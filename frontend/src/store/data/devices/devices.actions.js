import * as devicesAT from './devices.action-types';
import { URL } from '../../../constants';
import { logout } from '../../auth/auth.actions';

const baseUrl = `${URL}/devices`;

const setDeviceModelsState = (data) => ({
  type: devicesAT.SET_DEVICE_MODELS,
  payload: data,
});
const setDeviceBrandsState = (data) => ({
  type: devicesAT.SET_DEVICE_BRANDS,
  payload: data,
});

const addDeviceState = (device) => ({
  type: devicesAT.ADD_DEVICE,
  payload: device,
});

const updateDeviceState = (device) => ({
  type: devicesAT.UPDATE_DEVICE,
  payload: device,
});

const deleteDeviceState = (id) => ({
  type: devicesAT.DELETE_DEVICE,
  payload: id,
});

export const fetchDevices = () => (dispatch) => {
  dispatch(fetchDeviceBrands());
  dispatch(fetchDeviceModels());
};

const setDeleteDeviceError = (error) => ({
  type: devicesAT.SET_DELETE_DEVICE_ERROR,
  payload: error,
});

export const unsetDeleteDeviceError = () => ({
  type: devicesAT.UNSET_DELETE_DEVICE_ERROR,
});

// GET models
const fetchDeviceModels = () => {
  return (dispatch) => {
    fetch(baseUrl)
      .then((res) => handleErrors(res, dispatch))
      .then((res) => res.json())
      .then((data) => dispatch(setDeviceModelsState(data)))
      .catch((error) => console.log(error));
  };
};
// GET brands
const fetchDeviceBrands = () => {
  return (dispatch) => {
    fetch(baseUrl + '/brands')
      .then((res) => handleErrors(res, dispatch))
      .then((res) => res.json())
      .then((data) => dispatch(setDeviceBrandsState(data)))
      .catch((error) => console.log(error));
  };
};

// POST
export const postDevice = (device) => (dispatch) => {
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(device),
  })
    .then((res) => handleErrors(res, dispatch))
    .then((res) => res.json())
    .then((device) => dispatch(addDeviceState(device)))
    .catch(catchErrors);
};

// PUT
export const putDevice = (device) => (dispatch) => {
  fetch(baseUrl + `/${device.idDevice}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(device),
  })
    .then((res) => handleErrors(res, dispatch))
    .then(() => {
      dispatch(updateDeviceState(device));
      dispatch(fetchDeviceBrands());
    })
    .catch(catchErrors);
};

// DELETE
export const deleteDevice = (id) => (dispatch) => {
  fetch(baseUrl + '/' + id, { method: 'DELETE' })
    .then((res) => handleErrors(res, dispatch))
    .then(() => dispatch(deleteDeviceState(id)))
    .catch((error) =>
      error.json().then((response) => {
        console.log(response);
        if (response.detail === 'Nie usunięto zleceń urządzenia')
          dispatch(setDeleteDeviceError(id));
      })
    );
};

const handleErrors = (response, dispatch) => {
  if (!response.ok) {
    if (response?.status === 401) {
      dispatch(logout());
    }

    throw response;
  }
  return response;
};

const catchErrors = (error) => {
  try {
    error
      .json()
      .then((body) =>
        console.log(
          `Server error: [${body.status} ${body.statusText ?? ''} ${
            body.detail ?? ''
          }]`
        )
      );
  } catch (error) {
    console.log(error);
  }
};
