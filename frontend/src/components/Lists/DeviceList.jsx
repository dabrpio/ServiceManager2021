import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { selectDeviceModelsState } from '../../store/data/devices/devices.selectors';
import withEnhancedTable from './Table/EnhancedTable';
import DeviceTableRow from './Table/Rows/DeviceTableRow';

const DeviceTable = withEnhancedTable(DeviceTableRow);

const headCells = [
  {
    id: 'idDevices',
    label: 'ID',
  },
  {
    id: 'type',
    label: 'Rodzaj',
  },
  {
    id: 'brand',
    label: 'Firma',
  },

  {
    id: 'model',
    label: 'Model',
  },
];

function DeviceList({ devices }) {
  return (
    <DeviceTable headCells={headCells} data={devices} heading="Urządzenia" />
  );
}

const mapStateToProps = (state, ownProps) => ({
  devices: selectDeviceModelsState(state),
});

export default connect(mapStateToProps, null)(DeviceList);

DeviceList.propTypes = {
  devices: PropTypes.array.isRequired,
};
