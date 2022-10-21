import { LoadingButton } from "@mui/lab";
import { Theme, Typography } from "@mui/material";
import React from "react";

type VariantProps = "text" | "outlined" | "contained" | undefined;

interface BorderButtonProps {
  text: string;
  onClick?: any;
  variant: VariantProps;
  sx?: any;
  loading?: boolean;
  disabled?: boolean;
  icon?: any;
  type?: any;
}

const BorderButton: React.FunctionComponent<BorderButtonProps> = ({
  text,
  onClick,
  variant,
  sx,
  loading,
  disabled,
  icon,
  type,
}) => {
  return (
    <LoadingButton
      onClick={onClick}
      variant={variant}
      type={type ? type : "submit"}
      sx={{
        boxShadow: "none",
        height: "32px",
        // backgroundColor: (theme: Theme) => theme.palette.primary.dark,
      }}
      loading={loading}
      disabled={loading || disabled}
    >
      {icon}
      <Typography
        fontSize={"14px"}
        fontWeight={700}
        variant="body1"
        component={"p"}
        textTransform={"none"}
        color="primary.main"
      >
        {text}
      </Typography>
    </LoadingButton>
  );
};

export default BorderButton;
