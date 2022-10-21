import {
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { ErrorToast } from "../common/toast/toastHelpers";
import { Context } from "../../context/ContextProvider";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import theme from "../../styles/theme";
import ProfileDrawer from "../ui-components/profile/profile-drawer";

interface MainHeaderProps {
  handleDrawerOpen: any;
  open: boolean;
  drawerWidth: any;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const MainHeader: React.FunctionComponent<MainHeaderProps> = ({
  handleDrawerOpen,
  open,
  drawerWidth,
}) => {
  const router = useRouter();

  const context = useContext<any>(Context);
  const profileContext = context?.Profile;
  const toastContext = context?.Toast;
  const profileInfo = context?.Profile?.state?.profileDetails;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    // background: theme.custom.white,
    boxShadow: "none",
    borderBottom: "1px solid #E0E0E0",
    width: `calc(100% - calc(${theme.spacing(7)} + 1px))`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      boxShadow: "none",
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  // const getProfileDetails = async () => {
  //   await get(`api/profile`)
  //     .then((res) => {
  //       profileContext?.dispatch({
  //         type: "user-profile",
  //         value: res.data.body?.profile,
  //       });
  //     })
  //     .catch((err) => {
  //       ErrorToast(err.response.data, toastContext);
  //     });
  // };

  // useEffect(() => {
  //   if (localStorage.getItem("redloftoken")) {
  //     if (!profileInfo?.uuid) {
  //       getProfileDetails();
  //     }
  //   } else {
  //     router.push(`/`);
  //   }
  // }, [router.pathname]);

  return (
    <Box>
      <AppBar
        sx={{ background: theme.palette.primary.main }}
        position="fixed"
        open={open}
      >
        <Toolbar
          sx={{
            mx: 5,
            minHeight: "48px !important",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: theme.palette.primary.main,
          }}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link passHref href="/dashboard">
              <Typography
                variant="body2"
                component={"span"}
                textTransform={"uppercase"}
                color="text.secondary"
                fontWeight={700}
                letterSpacing={"0.06em"}
                fontSize="0.6875rem"
                sx={{
                  textDecoration: "none",
                }}
              >
                Comet Foundation {router.pathname}
              </Typography>
            </Link>
          </Breadcrumbs>
          <Stack direction={"row"} alignItems={"center"} gap={5}>
            <Link href="/profile" passHref>
              <Stack direction={"row"} alignItems={"center"} gap={1}>
                <Image
                  src={"/icons/sidebar/profile.svg"}
                  width="11px"
                  height={"12px"}
                  alt=""
                />
              </Stack>
            </Link>
            <Link href="/notifications" passHref>
              <IconButton>
                <Badge
                  color="primary"
                  sx={{ background: "primary" }}
                  badgeContent={profileInfo?.notifications_count}
                >
                  <NotificationsNoneIcon
                    sx={{
                      color: router.pathname?.includes("notifications")
                        ? "primary"
                        : "default",
                    }}
                  />
                </Badge>
              </IconButton>
            </Link>
            <Box>
              {/* <Link href="/profile" passHref>
                <Avatar
                  alt="Admin"
                  src={profileInfo?.photo}
                  sx={{ width: 33, height: 33, cursor: "pointer" }}
                />
              </Link> */}
              <ProfileDrawer />
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainHeader;
