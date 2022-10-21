import { Card, Typography } from "@mui/material";
import ReactEChart from "echarts-for-react";

const eChartsOption = {
  xAxis: {
    // name of X Axis
    name: "Category",
    type: "category",
    // Contains the values for XAxis
    data: ["One", "Two", "Three", "Four"],
  },
  yAxis: {
    // name of Y Axis
    name: "Progress",
    type: "value",
  },
  tooltip: {},
  toolbox: {
    feature: {
      // saveAsImage: {},
    },
  },

  series: {
    data: [101, 200, 300, 400],
    type: "bar",
  },
};

const DashboardBar = () => {
  return (
    <Card
      sx={{
        width: "90%",
        height: "52vh",
        m: 2,
        p: 2,
        borderRadius: "12px",
      }}
    >
      <Typography fontWeight={700} fontSize="1.2rem" variant="h6">
        Progress Graph
      </Typography>
      <ReactEChart
        style={{
          width: "90%",
          height: "100%",
        }}
        option={eChartsOption}
      />
    </Card>
  );
};
export default DashboardBar;
