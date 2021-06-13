import * as devicesAT from './devices.action-types';

const baseUrl = `http://46.41.149.61:5003/api/urzadzenia`;

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

// GET models
const fetchDeviceModels = () => {
  return (dispatch) => {
    fetch(baseUrl)
      .then(handleErrors)
      .then((res) => res.json())
      .then((data) => dispatch(setDeviceModelsState(data)))
      .catch((error) => console.log(error));
  };
};
// GET brands
const fetchDeviceBrands = () => {
  return (dispatch) => {
    fetch(baseUrl + '/brandstest')
      .then(handleErrors)
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
    body: JSON.stringify(),
  })
    .then(handleErrors)
    .then((res) => res.json())
    .then((device) => dispatch(addDeviceState(device)))
    .catch(catchErrors);
};

// PUT
export const putDevice = (device) => (dispatch) => {
  fetch(baseUrl + `/${device.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(device),
  })
    .then(handleErrors)
    .then(() => dispatch(updateDeviceState(device)))
    .catch(catchErrors);
};

// DELETE
export const deleteDevice = (id) => (dispatch) => {
  fetch(baseUrl + '/' + id, { method: 'DELETE' })
    .then(handleErrors)
    .then(() => dispatch(deleteDeviceState(id)))
    .catch(catchErrors);
};

const handleErrors = (response) => {
  if (!response.ok) {
    throw response;
  }
  return response;
};

const catchErrors = (error) =>
  error
    .json()
    .then((body) =>
      console.log(
        `Server error: [${body.status} ${body.statusText ?? ''} ${
          body.detail ?? ''
        }]`
      )
    );
