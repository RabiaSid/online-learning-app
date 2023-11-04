import { Button } from "@mui/material";
import baseColors from "../../../constant";

type ButtonProps = {
  type?:any;
  label: any;
  onClick?: (...args: any[]) => any;
};

export default function GradientButton(props: ButtonProps) {
  const {type, label, onClick } = props;

  return (
    <Button type={type} className='my-2 rounded-5 btn_primary w-50' sx={{background:baseColors.green}} variant="contained" color="primary" fullWidth onClick={onClick}>
      {label}
    </Button>
  );
}
