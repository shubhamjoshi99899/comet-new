import { Box, NoSsr } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import HomeHeader from "./home-header";
import MainLayout from "./sidebar";
const Layout = (props: any) => {
  const router = useRouter();
  const context = useContext<any>(Context);
  const backdropContext = context?.BackdropLoader;

  const profileContext = context?.Profile;
  const toastContext = context?.Toast;
  const profileInfo = context?.Profile?.state?.profileDetails;
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      {router.pathname === "/" ? <HomeHeader /> : <MainLayout />}
      {/* <HomeHeader /> */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          my: 10,
          mx: 5,
          marginRight: { xs: 2, sm: 2, md: 0, lg: 0 },
        }}
      >
        {props.children}
      </Box>
      {/* <BackdropLoader open={open} /> */}
    </Box>
  );
};

export default Layout;
