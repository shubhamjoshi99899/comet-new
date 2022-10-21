import React, { useContext } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Box, NoSsr, Stack, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import MuiDrawer from "@mui/material/Drawer";
import { useRouter } from "next/router";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import { SuccessToast } from "../common/toast/toastHelpers";
import { Context } from "../../context/ContextProvider";
import { profileDetails } from "../../context/interfaces";
import MainHeader from "./header";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LaptopIcon from "@mui/icons-material/Laptop";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ChatIcon from "@mui/icons-material/Chat";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import GroupsIcon from "@mui/icons-material/Groups";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import ListIcon from "@mui/icons-material/List";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import theme from "../../styles/theme";
const drawerWidth = 220;

const DrawerData = [
  {
    link: "/dashboard",
    title: "Dashboard",
    activeIcon: <DashboardIcon />,
    inactiveIcon: <DashboardIcon />,
  },
  {
    link: "/trackivity",
    title: "Trackivity",
    activeIcon: <TimelapseIcon />,
    inactiveIcon: <TimelapseIcon />,
  },
  {
    link: "/self-service",
    title: "Self Service",
    activeIcon: <DryCleaningIcon />,
    inactiveIcon: <DryCleaningIcon />,
  },
  {
    link: "courses",
    title: "Courses",
    activeIcon: <LaptopIcon />,
    inactiveIcon: <LaptopIcon />,
  },
  {
    link: "/learning-paths",
    title: "Learning Path",
    activeIcon: <AccountTreeIcon />,
    inactiveIcon: <AccountTreeIcon />,
  },
  {
    link: "/chats",
    title: "Chats",
    activeIcon: <ChatIcon />,
    inactiveIcon: <ChatIcon />,
  },
  {
    link: "/opportunities",
    title: "Opportunities",
    activeIcon: <WorkspacePremiumIcon />,
    inactiveIcon: <WorkspacePremiumIcon />,
  },
  {
    link: "/team",
    title: "Team",
    activeIcon: <GroupsIcon />,
    inactiveIcon: <GroupsIcon />,
  },
  {
    link: "/settings",
    title: "Settings",
    activeIcon: <ElectricBoltIcon />,
    inactiveIcon: <ElectricBoltIcon />,
  },
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  minHeight: "48px",
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  // background: theme.palette.secondary.light,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // background: theme.palette.secondary.light,
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const MainLayout = () => {
  const router = useRouter();
  const context = useContext<any>(Context);
  const profileContext = context?.Profile;
  const toastContext = context?.Toast;
  const profileInfo = context?.Profile?.state?.profileDetails;

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen((prevState: boolean) => !prevState);
  };

  const handleLogout = () => {
    router.push("/");
    SuccessToast("Succesfully logged out", toastContext);
    localStorage.clear();
  };

  return (
    <NoSsr>
      <Box display={"flex"} sx={{ background: "#fff !important" }}>
        <MainHeader
          handleDrawerOpen={handleDrawerOpen}
          open={open}
          drawerWidth={drawerWidth}
        />
        <Drawer variant="permanent" open={open}>
          <DrawerHeader
            sx={{
              minHeight: "48px !important",
            }}
          >
            <Image
              src={"/text-logo.png"}
              width="102px"
              height={"31px"}
              alt="comet"
            />
            <IconButton
              onClick={handleDrawerOpen}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2,
              }}
            >
              <ListIcon />
            </IconButton>
          </DrawerHeader>
          <List
            sx={{
              marginTop: "20px",
            }}
          >
            {/* <Stack alignItems={"center"}>
              <Avatar
                sx={{
                  width: "130px",
                  height: "130px",
                }}
                src="./profile.jpg"
              />
              <Typography
                fontSize={"14px"}
                fontWeight={700}
                variant="body1"
                component={"p"}
                textTransform={"none"}
                color="primary"
              >
                Shubham Joshi
              </Typography>
              <Typography
                fontSize={"14px"}
                fontWeight={700}
                variant="body1"
                component={"p"}
                textTransform={"none"}
                color="primary"
              >
                BCA 3rd year
              </Typography>
            </Stack> */}
            {DrawerData?.map((data, index) => (
              <Link passHref key={index} href={data.link}>
                <Tooltip
                  title={!open ? data?.title : ""}
                  arrow
                  placement="right"
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 3,
                      backgroundColor: router.pathname?.includes(data?.link)
                        ? theme.palette.primary.main
                        : "transparent",
                      "&:hover": {
                        backgroundColor: router.pathname?.includes(data?.link)
                          ? theme.palette.primary.main
                          : theme.palette.secondary.main,
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: router.pathname?.includes(data?.link)
                          ? theme.palette.secondary.dark
                          : theme.palette.primary.main,
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {data?.activeIcon}
                    </ListItemIcon>
                    <ListItemText
                      primary={data.title}
                      sx={{
                        opacity: open ? 1 : 0,
                        fontSize: "0.875rem",
                        fontWeight: router.pathname?.includes(data?.link)
                          ? 700
                          : 500,
                        color: router.pathname?.includes(data?.link)
                          ? theme.palette.text.primary
                          : theme.palette.text.secondary,
                      }}
                    />
                  </ListItemButton>
                </Tooltip>
              </Link>
            ))}

            <Tooltip title={!open ? "Logout" : ""} arrow placement="right">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 3,
                  backgroundColor: (theme: Theme) => "transparent",
                  "&:hover": {
                    backgroundColor: (theme: Theme) =>
                      theme.palette.secondary.main,
                  },
                }}
                onClick={handleLogout}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <LogoutIcon
                    sx={{
                      color: "#777",
                      fontSize: "22px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={"Logout"}
                  sx={{
                    opacity: open ? 1 : 0,
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: (theme: Theme) => theme.palette.text.secondary,
                  }}
                />
              </ListItemButton>
            </Tooltip>
          </List>
        </Drawer>
      </Box>
    </NoSsr>
  );
};

export default MainLayout;
