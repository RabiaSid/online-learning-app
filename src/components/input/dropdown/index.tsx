import { ReactNode } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import baseColors from "../../../constant";

type propsInputSelect = {
  SelectValue?: string;
  HeaderValue?: string;
  name?: string;
  SelectOnChange?: (...args: any[]) => any;
  children?: ReactNode;
};

export default function InputSelect(props: propsInputSelect) {
  const { name, SelectValue, HeaderValue, SelectOnChange, children } = props;

  return (
    <>
      <Select
        className="border w-100 rounded "
        labelId="country-select-label"
        id="country-select"
        name={name}
        value={SelectValue}
        onChange={SelectOnChange}
        displayEmpty
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", // Remove border
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "none", // Remove border on hover
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", // Remove border on focus
            border: "none",
          },
          height: "5vh",
          background: baseColors.shadowGrey,

        }}
      >
        <MenuItem
          value=""
          disabled={true}
          sx={{ background: "rgb(128, 189, 255, 0.1)" }}
        >
          <em
            style={{
              color: "#9caccb",
              fontStyle: "normal",
            }}
          >
            {HeaderValue}
          </em>
        </MenuItem>
        {children}
      </Select>
    </>
  );
}
