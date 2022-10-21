import { Card, Icon, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
// import "../styles/miniCalendar.css";

const isWeekend = (date: Dayjs) => {
  const day = date.day();

  return day === 0 || day === 6;
};
const DashboardCalendar = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));

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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            // orientation="landscape"
            openTo="day"
            value={value}
            shouldDisableDate={isWeekend}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Card>
    </>
  );
};

export default DashboardCalendar;
