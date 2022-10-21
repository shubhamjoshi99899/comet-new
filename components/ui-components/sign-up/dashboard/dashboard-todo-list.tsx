import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import { Stack, Typography } from "@mui/material";
import DarkButton from "../../../common/buttons/dark-button";
import WhiteButton from "../../../common/buttons/white-button";
import BorderButton from "../../../common/buttons/border-button";
import PrimaryButton from "../../../common/buttons/primary-button";

interface Props {
  list?: any;
  editBtn?: any;
  dell?: any;
  chek?: any;
  setBolean?: any;
  check?: any;
  add?: any;
}

const lists = [
  { id: "1l9a70xzt", todo: "Coding", tc: false },

  { id: "1l9a70xzt", todo: "Attend Classes", tc: false },

  { id: "1l9a70xzt", todo: "Learn Design", tc: false },

  { id: "1l9a70xzt", todo: "Complete assignment", tc: false },
  { id: "1l9a70xzt", todo: "Play games", tc: false },

  { id: "1l9a70xzt", todo: "Learn Java", tc: true },
];

const DashboardToDoList: React.FC<Props> = ({
  list,
  editBtn,
  dell,
  chek,
  setBolean,
  check,
  add,
}) => {
  return (
    <Card
      sx={{
        // width: "100%",
        border: "1px solid #e1e1e1",
        m: 2,
        p: 2,
        borderRadius: "12px",
      }}
    >
      {" "}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
        mb={2}
      >
        <Typography fontWeight={700} fontSize="1.2rem" variant="h6">
          Tasks
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
      <Box
        sx={{
          p: 2,
        }}
      >
        {lists.map((item: any, index: number) => (
          <Stack
            direction="row"
            justifyContent="space-between"
            key={index}
            alignItems="center"
          >
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid xs={2} sm={2} md={2} lg={2} mb={1}>
                <Checkbox
                  checked={item.tc ? true : false}
                  onClick={(e) => chek(item.id, !item.tc, item.todo)}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                />
              </Grid>
              <Grid xs={4} sm={4} md={4} lg={4} mb={1}>
                <Typography sx={{ textAlign: "left" }}>
                  {item.tc ? <s> {item.todo}</s> : item.todo}
                </Typography>
                {"       "}
              </Grid>
              <Grid xs={2} sm={2} md={2} lg={2} mb={1}>
                <WhiteButton
                  // onClick={(e) => dell(item.id)}
                  text="Delete"
                  variant="text"
                  sx={{ height: "32px" }}
                />
              </Grid>
              <Grid xs={3} sm={3} md={3} lg={3} mb={1}>
                <PrimaryButton
                  variant="contained"
                  // onClick={(e) => editBtn(item)}
                  text="✎  edit"
                  sx={{ height: "32px" }}
                />
              </Grid>
            </Grid>
          </Stack>
        ))}
      </Box>
    </Card>
  );
};

export default DashboardToDoList;
