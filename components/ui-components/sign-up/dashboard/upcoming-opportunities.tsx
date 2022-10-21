import { Box, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import theme from "../../../../styles/theme";
import PrimaryButton from "../../../common/buttons/primary-button";

const UpcomingOpportunities = () => {
  return (
    <>
      <Card
        sx={{
          maxWidth: "1o0%",
          border: "1px solid #e1e1e1",
          m: 2,
          p: 2,
          borderRadius: "12px",
          backgroundImage: "linear-gradient(#008acc, #bbe1fa)",
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{ color: "#f9f9f9" }}
          fontWeight={700}
          fontSize="1.2rem"
          variant="h6"
        >
          Upcoming Opportunities
        </Typography>
        <Stack
          direction={"row"}
          alignItems="center"
          mb={1}
          flexGrow={1}
          justifyContent="space-between"
        >
          <Box>
            <Typography
              sx={{ color: "#f9f9f9" }}
              fontWeight={700}
              fontSize="1.6em"
              variant="h6"
            >
              Web Development Masterclass
            </Typography>
            <Typography
              sx={{ color: "#f9f9f9" }}
              fontWeight={700}
              fontSize="1.2rem"
              variant="h6"
            >
              with Shubham Joshi
            </Typography>
            <Typography
              sx={{ color: "#f9f9f9" }}
              fontWeight={700}
              fontSize="1.2rem"
              variant="h6"
            >
              Beginner to Advance level
            </Typography>
            <Typography
              sx={{ color: "#EB1D36" }}
              fontWeight={700}
              fontSize="1.2rem"
              variant="h6"
            >
              October 12, 2022
            </Typography>
            <Typography
              sx={{ color: "" }}
              fontWeight={700}
              fontSize="1rem"
              variant="h6"
            >
              12:00 p.m. IST
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "12px",
              p: 1,
            }}
          >
            <Image
              src="/profile.jpg"
              width={"300px"}
              height="300px"
              style={{ borderRadius: "12px", margin: "20px" }}
              alt="mentor"
            />
          </Box>
        </Stack>
      </Card>
    </>
  );
};

export default UpcomingOpportunities;
