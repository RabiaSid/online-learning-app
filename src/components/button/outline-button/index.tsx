import { Button } from "@mui/material";
import baseColors from "../../../constant";

type ButtonProps = {
  type?: any;
  label?: any;
  children?: React.ReactNode;
  onClick?: (...args: any[]) => any;
};

export default function OutlineButton(props: ButtonProps) {
  const { type, label, onClick, children } = props;

  return (
    <Button
      type={type}
      className="my-2 rounded-1 btn_Outline border shadow-none"
      sx={{ background: baseColors.shadowGrey, color: baseColors.lightGrey }}
      variant="contained"
      color="primary"
      fullWidth
      onClick={onClick}
    >
      {label}
      {children}
    </Button>
  );
}
