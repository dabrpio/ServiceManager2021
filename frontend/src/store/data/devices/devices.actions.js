import * as devicesAT from './devices.action-types';

const baseUrl = `https://localhost:5001/api/urzadzenia`;

const setDevicesState = (data) => ({
  type: devicesAT.SET_DEVICES,
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

// GET
export const fetchDevices = () => {
  return (dispatch) => {
    fetch(baseUrl)
      .then(handleErrors)
      .then((res) => res.json())
      .then((data) => dispatch(setDevicesState(data)))
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
