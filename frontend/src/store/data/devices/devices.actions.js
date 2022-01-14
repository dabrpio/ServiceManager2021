import { URL } from '../../../constants';
import { setAlert } from '../../alerts/alerts.actions';
import { handleResponse, createHeaders } from '../../utils';
import * as devicesAT from './devices.action-types';

const baseUrl = `${URL}/devices`;

const setDeviceModelsState = (data) => ({
  type: devicesAT.SET_DEVICE_MODELS,
  payload: data,
});

const setDeviceBrandsState = (data) => ({
  type: devicesAT.SET_DEVICE_BRANDS,
  payload: data,
});

export const addDeviceState = (device) => ({
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

export const resetDeviceModelsState = () => ({
  type: devicesAT.RESET_DEVICES,
});

// GET models
const fetchDeviceModels = () => {
  return (dispatch) => {
    fetch(baseUrl, { headers: createHeaders() })
      .then((res) => handleResponse(res, dispatch))
      .then((res) => res.json())
      .then((data) => dispatch(setDeviceModelsState(data)))
      .catch((error) => console.log(error));
  };
};

// GET brands
const fetchDeviceBrands = () => {
  return (dispatch) => {
    fetch(baseUrl + '/brands', { headers: createHeaders() })
      .then((res) => handleResponse(res, dispatch))
      .then((res) => res.json())
      .then((data) => dispatch(setDeviceBrandsState(data)))
      .catch((error) => console.log(error));
  };
};

// POST
export const postDevice = (device) => (dispatch) => {
  fetch(baseUrl, {
    method: 'POST',
    headers: createHeaders(),
    body: JSON.stringify(device),
  })
    .then((res) => handleResponse(res, dispatch))
    .then((res) => res.json())
    .then((device) => dispatch(addDeviceState(device)))
    .catch(catchErrors);
};

// PUT
export const putDevice = (device) => (dispatch) => {
  fetch(baseUrl + `/${device.idDevice}`, {
    method: 'PUT',
    headers: createHeaders(),
    body: JSON.stringify(device),
  })
    .then((res) => handleResponse(res, dispatch))
    .then(() => {
      dispatch(updateDeviceState(device));
      dispatch(fetchDeviceBrands());
    })
    .catch(catchErrors);
};

// DELETE
export const deleteDevice = (id) => (dispatch) => {
  fetch(baseUrl + '/' + id, {
    method: 'DELETE',
    headers: createHeaders(),
  })
    .then((res) => handleResponse(res, dispatch))
    .then(() => dispatch(deleteDeviceState(id)))
    .catch((error) =>
      error.json().then((response) => {
        if (response.detail === 'Nie usunięto zleceń urządzenia')
          dispatch(setAlert(response.detail));
      })
    );
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
