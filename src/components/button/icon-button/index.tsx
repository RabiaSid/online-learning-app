import Button from "@mui/material/Button";

type ButtonProps = {
  startIcon?: any;
  className?: any;
  classNameText?: any;
  label?: string;
  onClick?: (...args: any[]) => any;
};

export default function IconButton(props: ButtonProps) {
  const { startIcon, className, label, onClick, classNameText} = props;

  return (
    <Button
      className={className}
      startIcon={startIcon}
      onClick={onClick}
      variant="contained"
      fullWidth={true}
    >
      <text className={classNameText}>{label}</text>
    </Button>
  );
}
