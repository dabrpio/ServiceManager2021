import { connect } from 'react-redux';
import { selectDeviceModelsState } from '../../store/data/devices/devices.selectors';

import DeviceList from './DeviceList.cmp';

const mapStateToProps = (state, ownProps) => ({
  devices: selectDeviceModelsState(state),
});

export default connect(mapStateToProps, null)(DeviceList);
