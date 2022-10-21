import { LoadingButton } from "@mui/lab";
import { Theme, Typography } from "@mui/material";
import React from "react";
import theme from "../../../styles/theme";

type VariantProps = "text" | "outlined" | "contained" | undefined;

interface WhiteButtonProps {
  text: string;
  onClick?: any;
  variant: VariantProps;
  sx?: any;
  loading?: boolean;
  disabled?: boolean;
  type?: any;
  fullWidth?: any;
}

const WhiteButton: React.FunctionComponent<WhiteButtonProps> = ({
  text,
  onClick,
  variant,
  sx,
  loading,
  fullWidth,
  disabled,
  type,
}) => {
  return (
    <LoadingButton
      onClick={onClick}
      variant={variant}
      type={type ? type : "submit"}
      sx={{
        boxShadow: "none",
        height: "48px",
        backgroundColor: (theme: Theme) => theme.palette.error.main,
        "&:hover": {
          color: "black",
          background: theme.palette.error.dark,
          // color: "black",
        },
        ...sx,
      }}
      loading={loading}
      disabled={loading || disabled}
      fullWidth={fullWidth}
    >
      <Typography
        fontSize={"14px"}
        fontWeight={700}
        variant="body1"
        component={"p"}
        textTransform={"none"}
        color="grey.100"
      >
        {text}
      </Typography>
    </LoadingButton>
  );
};

export default WhiteButton;
