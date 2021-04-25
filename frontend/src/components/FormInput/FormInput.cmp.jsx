import styles from './FormInput.module.scss';

const FormInput = (props) => {
  const {
    inputType,
    pattern,
    min,
    valueKey,
    text,
    stateValue,
    setValue,
  } = props;
  return (
    <input
      className={styles.input}
      type={inputType}
      pattern={pattern}
      min={min}
      value={stateValue[valueKey] ?? ''}
      onChange={(event) =>
        setValue({
          ...stateValue,
          [valueKey]: event.target.value,
        })
      }
      placeholder={text}
    />
  );
};

export default FormInput;
