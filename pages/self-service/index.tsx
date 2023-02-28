import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import PageHeader from "../../components/common/common-ui-components/page-header";

const SelfService = () => {
  const CARD_PROPERTY = {
    borderRadius: 3,
    boxShadow: 0,
  };

  const cardDetails = [
    {
      name: "My Accessories",
      image: "./images/bed.jpg",
      text: "Help yourself by keeping a track of all the things that you possess.",
      link: "/self-service/my-accessories",
    },
    {
      name: "Washing Machine",
      image: "./images/washing.jpg",
      text: "Help yourself by keeping a track of all the things that you possess.",
      link: "/self-service/washing-machine",
    },
    {
      name: "Cleaniness",
      image: "./images/cleaniness.jpg",
      text: "Help yourself by keeping a track of all the things that you possess.",
      link: "/self-service/cleaniness",
    },
    {
      name: "Food",
      image: "./images/food.jpg",
      text: "Help yourself by keeping a track of all the things that you possess.",
      link: "/self-service/food",
    },
    {
      name: "Apply Leave",
      image: "./images/leave.jpg",
      text: "Help yourself by keeping a track of all the things that you possess.",
      link: "/self-service/apply-leave",
    },
    {
      name: "Complaint Letter",
      image: "./images/complaint.jpg",
      text: "Help yourself by keeping a track of all the things that you possess.",
      link: "/self-service/complaint-letter",
    },
  ];

  const router = useRouter();
  return (
    <Box sx={{ mr: 5 }}>
      <PageHeader
        heading={"Self Service"}
        subheading={"Showing you the facilities you can avail inside comet.  "}
      />
      <Grid container spacing={3}>
        {cardDetails.map((item: any, index: number) => (
          <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
            <Card
              onClick={() => {
                router.push(`/${item.link}`);
              }}
              sx={CARD_PROPERTY}
            >
              <Box>
                <CardMedia
                  component="img"
                  height="194px"
                  image={item.image}
                  alt="Image"
                  sx={{
                    objectFit: "contain",
                    borderBottom: "1px solid #efefef",
                    cursor: "pointer",
                  }}
                />
              </Box>
              <CardContent sx={{ p: 3, mb: 0 }}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ textAlign: "center", cursor: "pointer" }}
                  color="black"
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 3, cursor: "pointer" }}
                  color="black"
                >
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SelfService;
