import TextField from '@material-ui/core/TextField';

const FormInput = (props) => {
  const { inputType, valueKey, text, stateValue, error, resetThenSet } = props;

  const handleChange = (event) => resetThenSet(valueKey, event.target.value);

  return (
    <TextField
      error={error?.length > 0}
      fullWidth
      label={text}
      type={inputType}
      value={stateValue ?? ''}
      helperText={error}
      onChange={handleChange}
      style={{ marginTop: 16, marginBottom: 8 }}
      size="small"
    />
  );
};

export default FormInput;
