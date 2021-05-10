import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Dropdown = (props) => {
  const { list, defaultTitle, setSelected, stateValue } = props;

  return (
    <Autocomplete
      options={list.map((i) => i.title)}
      id="disable-portal"
      size="small"
      fullWidth
      value={stateValue}
      onChange={(event, newValue) => {
        setSelected(newValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label={defaultTitle} margin="normal" />
      )}
    />
  );
};

export default Dropdown;
