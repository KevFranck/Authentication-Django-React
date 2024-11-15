import Button from '@mui/material/Button';

export default function ButtonValidation(props) {
  const {label,type} = props
  return (
      <Button type={type} variant="contained" className={"myButton"}>
            {label}
      </Button>

  );
}