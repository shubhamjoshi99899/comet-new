import React from "react";
import { Container, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  background: "#fff",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.16)",
}));

const HomeHeader = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Container maxWidth="lg">
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Image
              src={"/logo.png"}
              width="102px"
              height={"31px"}
              alt="capup"
            />
            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <Image
                src={"/icons/sidebar/profile.svg"}
                width="11px"
                height={"12px"}
                alt=""
              />
              <Typography
                variant="body2"
                component={"a"}
                href="mailto:support@capup.com"
                sx={{
                  color: "#777777",
                }}
              >
                <em>support@comet.com</em>
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default HomeHeader;
