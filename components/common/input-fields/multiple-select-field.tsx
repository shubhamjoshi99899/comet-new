import { Box, Checkbox, Chip, TextField, Theme } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

type SizeType = "small" | "medium" | undefined;

interface SelectFieldProps {
  formik: any;
  label?: any;
  fieldName: any;
  helperText?: any;
  error?: any;
  required?: boolean;
  menus?: any;
  value: any;
  onClick?: any;
  defaultValue?: any;
  size: SizeType;
  noMargin?: boolean;
  multiple?: boolean;
  disabled?: boolean;
  placeholder?: string;
  menuValue: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  formik,
  label,
  fieldName,
  error,
  helperText,
  required,
  menus,
  onClick,
  value,
  size,
  noMargin,
  multiple,
  disabled,
  placeholder,
  menuValue,
}) => {

  return (
    <Box
      sx={{
        margin: noMargin ? 0 : "1rem 0",
      }}
    >
      <InputLabel htmlFor={fieldName}
       sx={{
    fontSize: "0.6875rem",
    fontWeight: 600,
    color: (theme:Theme) => theme.palette.text.primary,
    marginBottom: "0.25rem"}}>
        {label}
        {required && <span>*</span>}
      </InputLabel>
      <TextField
        fullWidth
        disabled={disabled}
        variant="outlined"
        id={fieldName}
        name={fieldName}
        size={size ? size : "small"}
        select
        placeholder="Select..."
        onClick={onClick}
        value={value}
        onChange={formik.handleChange}
        error={error}
        helperText={helperText}
        SelectProps={{
          multiple: multiple,
          // value: multiple ? value : [],
          // onChange: formik.handleChange,
          // renderValue: (selected: any) => (
          //   <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          //     {selected.map((value: any, index: number) => (
          //       <Chip
          //         key={index}
          //         label={menus.map((element: any) => {
          //           if (element.id === value) {
          //             return element.name;
          //           }
          //         })}
          //         sx={{
          //           fontSize: "0.6875rem",
          //         }}
          //       />
          //     ))}
          //   </Box>
          // ),
        }}
        sx={{
          textTransform: "capitalize",
          "& .MuiOutlinedInput-root": {
            backgroundColor: disabled ? "#F2F2F2" : "#ffffff",
            borderRadius: "5px",
            borderColor: "#e0e0e0 !important",
            fontSize: size === "small" ? "0.875rem" : "1rem",
            height: multiple ? "auto" : 38,
          },
          "& .MuiFormHelperText-root.Mui-error": {
            marginLeft: 0,
            fontSize: "0.75rem",
          },
        }}
      >
        <MenuItem
          sx={{
            textTransform: "capitalize",
          }}
          disabled
          selected
        >
          Select..
        </MenuItem>
        {menus?.map((item: any, index: number) => (
          <MenuItem
            value={item?.name}
            key={index}
            sx={{
              textTransform: "capitalize",
              wordWrap: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            {item?.[menuValue]}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default SelectField;
