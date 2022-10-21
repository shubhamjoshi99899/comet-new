import { Box, Typography, Theme } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  signup?: any;
}

const SigninCardHeader: React.FC<Props> = ({ signup }) => {
  return (
    <Box sx={{ marginBottom: "2.6875rem", textAlign: "center" }}>
      <Box
        sx={{
          background: (theme: Theme) => theme.palette.primary.main,
          border: 0,
          color: "white",
          margin: "0 auto 1.25rem",
          width: "2.5rem",
          height: "2.5rem",
          borderRadius: "50%",
        }}
        display="flex"
        justifyContent="center"
      >
        <Image
          src={"/favicon.png"}
          width="54px"
          height="24px"
          alt="sign-in image"
        />
      </Box>
      <Box>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "1.25rem",
            marginBottom: "0 !important",
          }}
          gutterBottom
          variant="h5"
          component="h5"
        >
          {signup
            ? "Let’s get started with creating your"
            : "Welcome Back! Log in to your"}
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.25rem",
              color: (theme: Theme) => theme.palette.primary.main,
            }}
            component="span"
            color="primary"
          >
            &nbsp; Account
          </Typography>
        </Typography>
      </Box>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "0.875rem",
          color: "#777777",
        }}
        gutterBottom
        variant="h6"
        component="span"
      >
        Hi there! Ready for some brain-stroming experience?
      </Typography>
    </Box>
  );
};

export default SigninCardHeader;
