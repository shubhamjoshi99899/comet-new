import { Card, Typography } from "@mui/material";
import React from "react";
import theme from "../../../../styles/theme";
import PrimaryButton from "../../../common/buttons/primary-button";

const DashboardMessage = () => {
  return (
    <>
      <Card
        sx={{
          // width: "100%",
          border: "1px solid #e1e1e1",
          m: 2,
          p: 2,
          borderRadius: "12px",
        }}
      >
        <Typography fontWeight={700} fontSize="22px" variant="h1" mb={1}>
          Good Morning, Shubham
        </Typography>
        <Typography
          fontWeight={500}
          fontSize="14px"
          variant="h1"
          sx={{ color: theme.palette.text.secondary, opacity: 0.7, mb: 1 }}
        >
          You have 6 tasks and 12 assignments to finish this week. Your progress
          activity is going good.
        </Typography>
        <PrimaryButton
          sx={{ height: "32px", borderRadius: "12px" }}
          text="View Schedule"
          variant="contained"
        />
      </Card>
    </>
  );
};

export default DashboardMessage;
