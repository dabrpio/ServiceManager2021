import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

function deviceDialogContent(props) {
  const { device, setDevice } = props;

  const handleTextFieldChange =
    (name) =>
    ({ target: { value } }) => {
      setDevice({ ...device, [name]: value });
    };

  return (
    <DialogContent dividers>
      <TextField
        fullWidth
        label="Typ"
        type="text"
        value={device.type ?? ''}
        onChange={handleTextFieldChange('type')}
        style={{ marginTop: 16, marginBottom: 8 }}
        size="small"
      />
      <TextField
        fullWidth
        label="Firma"
        type="text"
        value={device.brand ?? ''}
        onChange={handleTextFieldChange('brand')}
        style={{ marginTop: 16, marginBottom: 8 }}
        size="small"
      />
      <TextField
        fullWidth
        label="Model"
        type="text"
        value={device.model ?? ''}
        onChange={handleTextFieldChange('model')}
        style={{ marginTop: 16, marginBottom: 8 }}
        size="small"
      />
    </DialogContent>
  );
}

export default deviceDialogContent;

deviceDialogContent.propTypes = {
  device: PropTypes.object.isRequired,
  newDevice: PropTypes.bool,
};
