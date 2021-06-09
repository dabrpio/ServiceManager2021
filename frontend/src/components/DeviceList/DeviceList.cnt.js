import { connect } from 'react-redux';
import { selectDevicesState } from '../../store/data/devices/devices.selectors';

import DeviceList from './DeviceList.cmp';

const mapStateToProps = (state, ownProps) => ({
  devices: selectDevicesState(state),
});

export default connect(mapStateToProps, null)(DeviceList);
