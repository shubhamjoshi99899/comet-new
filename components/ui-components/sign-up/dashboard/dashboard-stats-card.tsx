import { Card, Stack, styled, Typography } from "@mui/material";
import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import PrimaryButton from "../../../common/buttons/primary-button";
import DashboardDetaiBox from "./dashboard-detail-box";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const DashboardStatsCard = () => {
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
        <Typography fontWeight={700} fontSize="1.2rem" variant="h6">
          Progress
        </Typography>
        <Stack
          direction={"row"}
          alignItems="baseline"
          mb={1}
          flexGrow={1}
          justifyContent="space-between"
        >
          <Stack direction={"row"} alignItems="baseline">
            <Typography fontWeight={700} fontSize="1.8em" variant="h6">
              100
            </Typography>
            <Typography fontWeight={700} fontSize="1.2rem" variant="h6">
              /500
            </Typography>
          </Stack>
          <Typography fontWeight={700} fontSize="1.2rem" variant="h6">
            Beginner
          </Typography>
        </Stack>

        <BorderLinearProgress
          sx={{ height: "20px", borderRadius: "20px", mb: 2 }}
          variant="determinate"
          value={25}
        />

        <PrimaryButton
          sx={{ maxHeight: "38px", borderRadius: "12px", mb: 3 }}
          text="View LeaderBoard"
          variant="contained"
        />
        <Typography fontWeight={700} fontSize="1.3em" variant="h6" mb={1}>
          Your Activity
        </Typography>
      </Card>
    </>
  );
};

export default DashboardStatsCard;
