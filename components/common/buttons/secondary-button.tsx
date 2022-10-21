import { LoadingButton } from "@mui/lab";
import { Box, Theme, Typography } from "@mui/material";
import React from "react";

type VariantProps = "text" | "outlined" | "contained" | undefined;

interface SecondaryButtonProps {
  text: string;
  onClick?: any;
  variant: VariantProps;
  sx?: any;
  loading?: boolean;
  disabled?: boolean;
  type?: any;
  icon?: boolean;
  iconLink?: any;
}


const SecondaryButton: React.FunctionComponent<SecondaryButtonProps> = ({
  text,
  onClick,
  variant,
  sx,
  loading,
  disabled,
  type,
  icon,
  iconLink,
}) => {
  return (
    <LoadingButton
      onClick={onClick}
      variant={variant}
      type={type ? type : "submit"}
      sx={{ 
      boxShadow: "none",
      height: "29px",
      background: (theme:Theme) =>  theme.palette.primary.light,
      "&:hover": {
        background: (theme:Theme) =>  theme.palette.primary.light,
      },}}
      loading={loading}
      disabled={loading || disabled}
    >
      <Box mr={1} mt={1}>
        {icon && iconLink}
      </Box>
      <Typography
        fontSize={"14px"}
        fontWeight={700}
        variant="body1"
        component={"p"}
        textTransform={"none"}
        color="primary"
      >
        {text}
      </Typography>
    </LoadingButton>
  );
};

export default SecondaryButton;
