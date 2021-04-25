import classnames from 'classnames';
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
    error,
  } = props;

  return (
    <input
      className={classnames(styles.input, {
        [styles.error]: error,
      })}
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
