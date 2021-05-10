import classnames from 'classnames';
import styles from './FormInput.module.scss';

const FormInput = (props) => {
  const {
    inputType,
    inputPattern,
    valueKey,
    text,
    stateValue,
    error,
    resetThenSet,
  } = props;

  return (
    <div className={styles.input_wrapper}>
      <label>{text}</label>
      <input
        className={classnames(styles.input, {
          [styles.empty]: !stateValue && !error,
          [styles.error]: error,
        })}
        type={inputType}
        pattern={inputPattern}
        value={stateValue ?? ''}
        onChange={(event) => resetThenSet(valueKey, event.target.value)}
      />
    </div>
  );
};

export default FormInput;
