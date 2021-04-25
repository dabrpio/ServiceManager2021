import { useEffect } from 'react';
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

  useEffect(() => {
    console.log(valueKey);
    console.log(stateValue[valueKey]);
  }, [stateValue]);

  return (
    <input
      className={styles.input}
      type={inputType}
      pattern={pattern}
      min={min}
      value={(valueKey ? stateValue[valueKey] : stateValue) ?? ''}
      onChange={(event) =>
        valueKey
          ? setValue({
              ...stateValue,
              [valueKey]: event.target.value,
            })
          : setValue(event.target.value)
      }
      placeholder={text}
    />
  );
};

export default FormInput;
