import Button from '@material-ui/core/Button';

function FormButton(props) {
  return (
    <Button
      variant="contained"
      color="primary"
      type={props.inputType}
      fullWidth
    >
      {props.text}
    </Button>
  );
}

export default FormButton;
