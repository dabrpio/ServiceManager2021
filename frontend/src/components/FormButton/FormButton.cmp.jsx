import Button from '@material-ui/core/Button';

function FormButton(props) {
  return (
    <Button
      variant="contained"
      color="primary"
      type={props.inputType}
      fullWidth
      style={props.loginButton ? { marginTop: 40 } : { marginTop: 20 }}
    >
      {props.text}
    </Button>
  );
}

export default FormButton;
