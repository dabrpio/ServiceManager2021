import classnames from 'classnames';
import styles from './FormButton.module.scss';

function FormButton(props) {
  return (
    <input
      className={classnames(styles.button, {
        [styles.bg_bright]: props.color_bright,
        [styles.bg_dark]: props.color_dark,
      })}
      type={props.inputType}
      value={props.text}
    ></input>
  );
}

export default FormButton;
