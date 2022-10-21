import { LoadingButton } from "@mui/lab";
import { Theme, Typography } from "@mui/material";
import React from "react";
import theme from "../../../styles/theme";

type VariantProps = "text" | "outlined" | "contained" | undefined;

interface PrimaryButtonProps {
  text: string;
  onClick?: any;
  variant: VariantProps;
  sx?: any;
  loading?: boolean;
  disabled?: boolean;
  type?: any;
  fullWidth?: any;
  mb?: any;
}

const PrimaryButton: React.FunctionComponent<PrimaryButtonProps> = ({
  text,
  onClick,
  variant,
  loading,
  disabled,
  type,
  fullWidth,
  mb,
  sx,
}) => {
  return (
    <LoadingButton
      color="primary"
      onClick={onClick}
      variant={variant}
      type={type ? type : "submit"}
      sx={{
        boxShadow: "none",
        height: "48px",
        mb: mb,
        background: theme.palette.primary.main,

        "&:hover": {
          color: "black",
          background: theme.palette.secondary.main,
          // color: "black",
        },
        ...sx,
      }}
      loading={loading}
      fullWidth={fullWidth}
      disabled={loading || disabled}
    >
      <Typography
        fontSize={"14px"}
        fontWeight={700}
        variant="body1"
        component={"p"}
        textTransform={"none"}
      >
        {text}
      </Typography>
    </LoadingButton>
  );
};

export default PrimaryButton;
