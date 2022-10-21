import { Box, Card, Stack, Typography } from "@mui/material";
import EChartsReact from "echarts-for-react";
import React from "react";

var option = {
  tooltip: {
    trigger: "item",
  },

  series: [
    {
      type: "pie",
      radius: ["40%", "70%"],

      labelLine: {
        show: false,
      },
      data: [{ value: 1048 }, { value: 735 }, { value: 580 }],
    },
  ],
};

const DashboardTasks = () => {
  return (
    <>
      <Card
        sx={{
          border: "1px solid #e1e1e1",
          m: 2,
          p: 2,
          borderRadius: "12px",
          // width: "250px",
          height: "300px",
        }}
      >
        <Typography
          sx={{
            px: 2,
            pt: 2,
          }}
          fontWeight={700}
          fontSize="1.2rem"
          variant="h6"
        >
          Stats and Details
        </Typography>
        <Stack
          sx={{
            px: 2,
            pt: 2,
          }}
          direction="row"
          alignItems="center"
        >
          <Box>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <Box
                sx={{
                  background: "rgb(84, 112, 198)",
                  height: "20px",
                  width: "20px",
                  borderRadius: "4px",
                }}
              ></Box>

              <Typography fontWeight={700} fontSize="0.75rem" variant="h6">
                WIP
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <Box
                sx={{
                  background: "rgb(145, 204, 117)",
                  height: "20px",
                  width: "20px",
                  borderRadius: "4px",
                }}
              ></Box>
              <Typography fontWeight={700} fontSize="0.75rem" variant="h6">
                To do
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <Box
                sx={{
                  background: "rgb(250, 200, 88)",
                  height: "20px",
                  width: "20px",
                  borderRadius: "4px",
                }}
              ></Box>
              <Typography fontWeight={700} fontSize="0.75rem" variant="h6">
                Completed
              </Typography>
            </Stack>
          </Box>
          <EChartsReact
            option={option}
            style={{
              height: "250px",
              width: "250px",
            }}
          />
        </Stack>
      </Card>
    </>
  );
};

export default DashboardTasks;
