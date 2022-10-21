import { LoadingButton } from "@mui/lab";
import { Theme, Typography } from "@mui/material";
import React from "react";

type VariantProps = "text" | "outlined" | "contained" | undefined;

interface DarkButtonProps {
  text: string;
  onClick?: any;
  variant: VariantProps;
  sx?: any;
  loading?: boolean;
  disabled?: boolean;
  type?: any;
}

const DarkButton: React.FunctionComponent<DarkButtonProps> = ({
  text,
  onClick,
  variant,
  sx,
  loading,
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
        // backgroundColor: (theme:Theme) => theme.palette.primary.dark,
      }}
      loading={loading}
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

export default DarkButton;
