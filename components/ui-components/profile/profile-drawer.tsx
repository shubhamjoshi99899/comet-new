import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Stack, SwipeableDrawer, Typography } from "@mui/material";
import PrimaryButton from "../../common/buttons/primary-button";
import theme from "../../../styles/theme";
import WhiteButton from "../../common/buttons/white-button";

type Anchor = "top" | "left" | "bottom" | "right";

const ProfileDrawer = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        pt: 4,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack alignItems={"center"}>
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
          color="black"
        >
          Shubham Joshi
        </Typography>
        <Typography
          fontSize={"12px"}
          fontWeight={700}
          variant="body1"
          component={"p"}
          textTransform={"none"}
          color="black"
        >
          shubhamjoshi99899@gmail.com
        </Typography>
        <Typography
          fontSize={"14px"}
          fontWeight={700}
          variant="body1"
          component={"p"}
          textTransform={"none"}
          color="black"
          mb={2}
        >
          BCA 3rd year
        </Typography>
        <PrimaryButton
          variant="outlined"
          text="View Complete Profile"
          sx={{
            background: "transparent",
            mb: 2,
            "&:hover": {
              color: "black",
              background: theme.palette.primary.main,
              // color: "black",
            },
          }}
        />
        <WhiteButton variant="contained" text="Logout" />
      </Stack>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar
            onClick={toggleDrawer(anchor, true)}
            alt="Admin"
            // src={profileInfo?.photo}
            sx={{ width: 33, height: 33, cursor: "pointer" }}
          />
          {/* <Button onClick={toggleDrawer(anchor, true)}>Open</Button> */}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProfileDrawer;
