import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { MenuItem, Theme } from "@mui/material";

interface Props {
  id?: any;
  label?: string;
  placeholder?: any;
  value?: any;
  error?: any;
  helperText?: any;
  name?: string;
  multiline?: boolean;
  rows?: any;
  type?: any;
  sx?: any;
  className?: any;
  data?: any;
  select?: any;
  disabled?: any;
  onChange?: any;
  fromConfig?: any;
  fromInvoices?: any;
}

const CustomizedSelectField: React.FC<Props> = ({
  label,
  id,
  value,
  error,
  onChange,
  type,
  helperText,
  name,
  multiline,
  rows,
  placeholder,
  sx,
  className,
  disabled,
  data,
  fromConfig,
  fromInvoices,
}) => {

  return (
    <Box mt={1}>
      <InputLabel sx={{fontWeight: 500,
    fontSize: "0.875rem",
    color: (theme:Theme)=>theme.palette.text.secondary,
    marginBottom: "6px",}}>{label}</InputLabel>
      <TextField
          
        InputProps={{
          style: {
            height: rows > 0 ? "auto" : "3rem",
            borderRadius: "0.3125rem",
            fontSize: "0.9375rem",
            // border: "0.0625rem solid #EFEFEF",
            boxShadow: "none",
          },
        }}
    
        fullWidth
        select
        onChange={onChange}
        type={type ? type : "text"}
        value={value}
        defaultValue=" "
        id={id}
        rows={rows}
        multiline={multiline}
        error={error}
        name={name}
        helperText={helperText}
        disabled={disabled}
        sx={sx}
      >
        <MenuItem disabled value=" ">
          {placeholder}
        </MenuItem>
        {data?.map((option: any) => (
          <MenuItem
            key={option.id}
            value={
              fromConfig
                ? option?.anchor?.id
                : fromInvoices
                ? option?.id
                : option?.value
            }
            disabled={fromConfig && option?.disabled ? true : false}
          >
            {fromConfig
              ? option?.anchor?.company?.name
              : fromInvoices
              ? option?.company_name
              : option.name
              ? option.name
              : option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};
export default CustomizedSelectField;
