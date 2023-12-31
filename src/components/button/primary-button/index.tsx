import { Button } from "@mui/material";
import baseColors from "../../../constant";

type ButtonProps = {
  type?:any;
  label?: any;
  children?: React.ReactNode;
  onClick?: (...args: any[]) => any;
};

export default function PrimaryButton(props: ButtonProps) {
  const {type, label, onClick, children } = props;

  return (
    <Button type={type} className='my-2 rounded-1 btn_primary' sx={{background:baseColors.green}} variant="contained" color="primary" fullWidth onClick={onClick}>
      {label}{children}
    </Button>
  );
}
