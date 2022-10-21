import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import CommentIcon from "@mui/icons-material/Comment";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import EmailIcon from "@mui/icons-material/Email";
import BorderButton from "../components/common/buttons/border-button";
const Notifications = () => {
  const notifications = [
    {
      icon: <LockIcon />,
      message: "Your password has been changed successfully.",
      time: "41 minutes ago",
      background: "#FDEDED",
    },
    {
      icon: <CommentIcon />,
      message: "Shubham commented on your post in the comet discussion.",
      time: "1 day ago",
      background: "#FBB122",
    },
    {
      icon: <AcUnitIcon />,
      message: "Shubham invited you to join Web development group.",
      time: "3 days ago",
      background: "#52DBB2",
    },
    {
      icon: <EmailIcon />,
      message: "You have a new message from Rohit.",
      time: "7 days ago",
      background: "#E5F6FD",
    },
  ];

  return (
    <Box sx={{ mr: 2 }}>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
        mb={1}
      >
        <Typography fontSize={"1rem"} fontWeight={700} mb={2}>
          Notifications
        </Typography>
        <BorderButton text="Mark as read" variant="outlined" />
      </Stack>
      {notifications.map((notification: any, index: number) => (
        <Stack
          key={index}
          direction="row"
          alignItems={"center"}
          gap={2}
          sx={{
            border: "1px solid #E0E0E0",
            p: 2,
            borderRadius: "12px",
            cursor: "pointer",
            backgroundColor: notification.background,
            mb: 2,
          }}
        >
          {notification.icon}
          <Box>
            <Typography fontSize={"0.75rem"} fontWeight={600} variant="h6">
              {notification.message}
            </Typography>
            <Typography fontSize={"0.75rem"} fontWeight={500}>
              {notification.time}
            </Typography>
          </Box>
        </Stack>
      ))}
    </Box>
  );
};

export default Notifications;
