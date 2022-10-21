import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import CurrentCourses from "../components/ui-components/sign-up/dashboard/current-courses";
import DashboardTasks from "../components/ui-components/sign-up/dashboard/dadhboard-tasks";
import DashboardCalendar from "../components/ui-components/sign-up/dashboard/dashboard-calendar";
import DashboardDetaiBox from "../components/ui-components/sign-up/dashboard/dashboard-detail-box";
import "react-calendar/dist/Calendar.css";
import DashboardStatsCard from "../components/ui-components/sign-up/dashboard/dashboard-stats-card";
import DashboardBar from "../components/ui-components/sign-up/dashboard/graphs/dashboard-bar";
import UpcomingOpportunities from "../components/ui-components/sign-up/dashboard/upcoming-opportunities";
import DashboardMessage from "../components/ui-components/sign-up/dashboard/dashboard-message";
import DashboardToDoList from "../components/ui-components/sign-up/dashboard/dashboard-todo-list";
import LectureDetaiBox from "../components/ui-components/sign-up/dashboard/lectures-details";

const Dashboard = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ textAlign: "center" }}></Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <DashboardMessage />
          <DashboardToDoList />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <DashboardStatsCard />
          <DashboardTasks />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <DashboardBar />
          <LectureDetaiBox />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <CurrentCourses />
          <UpcomingOpportunities />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <DashboardDetaiBox />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <DashboardCalendar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
