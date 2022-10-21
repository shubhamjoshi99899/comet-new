import {
  Card,
  LinearProgress,
  linearProgressClasses,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../../../../styles/theme";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
  },
}));

const CurrentCourses = () => {
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
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
          mb={2}
        >
          <Typography fontWeight={700} fontSize="1.2rem" variant="h6">
            Current Progress
          </Typography>
          <Typography
            color="primary"
            fontWeight={700}
            fontSize="0.95rem"
            variant="h6"
            sx={{ cursor: "pointer" }}
          >
            View All
          </Typography>
        </Stack>

        <Typography fontWeight={700} fontSize="0.95rem" variant="h6">
          Data Structure and Algorithm
        </Typography>
        <BorderLinearProgress
          sx={{
            height: "10px",
            borderRadius: "20px",
            mb: 2,
          }}
          variant="determinate"
          value={85}
          color="warning"
        />
        <Typography fontWeight={700} fontSize="0.95rem" variant="h6">
          Fundamentals of Computer Science
        </Typography>
        <BorderLinearProgress
          sx={{ height: "10px", borderRadius: "20px", mb: 2 }}
          variant="determinate"
          value={45}
          color="info"
        />
        <Typography fontWeight={700} fontSize="0.95rem" variant="h6">
          Full Stack Web Development
        </Typography>
        <BorderLinearProgress
          sx={{ height: "10px", borderRadius: "20px", mb: 2 }}
          variant="determinate"
          value={65}
          color="success"
        />
        <Typography fontWeight={700} fontSize="0.95rem" variant="h6">
          Cloud Security
        </Typography>
        <BorderLinearProgress
          sx={{ height: "10px", borderRadius: "20px", mb: 2, color: "red" }}
          variant="determinate"
          value={25}
          color="secondary"
        />
        <Typography fontWeight={700} fontSize="0.95rem" variant="h6">
          Virtual Design
        </Typography>
        <BorderLinearProgress
          sx={{ height: "10px", borderRadius: "20px", mb: 2 }}
          variant="determinate"
          value={35}
          color="error"
        />
      </Card>
    </>
  );
};

export default CurrentCourses;
