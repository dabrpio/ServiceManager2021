import styles from './FormInput.module.scss';
import TextField from '@material-ui/core/TextField';

const FormInput = (props) => {
  const { inputType, valueKey, text, stateValue, error, resetThenSet } = props;

  const handleChange = (event) => resetThenSet(valueKey, event.target.value);

  return (
    <div className={styles.input_wrapper}>
      {/* <label>{text}</label>
      <input
        className={classnames(styles.input, {
          [styles.empty]: !stateValue && !error,
          [styles.error]: error,
        })}
        type={inputType}
        pattern={inputPattern}
        value={stateValue ?? ''}
        onChange={(event) => resetThenSet(valueKey, event.target.value)}
      /> */}
      <TextField
        fullWidth
        label={text}
        size="small"
        type={inputType}
        value={stateValue ?? ''}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
