import { AspectRatio, Card, IconButton, Typography } from "@mui/joy";
import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import PrimaryButton from "../components/common/buttons/primary-button";
import PageHeader from "../components/common/common-ui-components/page-header";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

const opportunities = [
  {
    course_name: "Web Development Full Stack",
    time: "20 hours",
    rating: "Frontend Developer",
    mentor: "Shubham Joshi",
    image:
      "https://instagram.fdel65-1.fna.fbcdn.net/v/t51.2885-19/307297876_5136538903125118_7315629827068749373_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel65-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=z-zZ4eXk2wkAX_RGDGa&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCAQ2gX70GoNzDe9PBuhYILvprhTlB-ijS9vrsEHfaegQ&oe=63689943&_nc_sid=8fd12b",
  },
  {
    course_name: "C++ MasterClass",
    time: "28 hours",
    rating: "4.5",
    reviews: "65",
    mentor: "Jeetendra Ranjan",
    image:
      "https://cometservices.org/images/change-leaders/Jitendra-Rajan.jpeg",
  },
  {
    course_name: "Cyber Security",
    time: "42 hours",
    rating: "5",
    reviews: "102",
    mentor: "3,500",
    image:
      "https://cometservices.org/images/change-leaders/Biswajeet-Dhar.jpeg",
  },
  {
    course_name: "Cyber Security",
    time: "43 hours",
    rating: "3.7",
    reviews: "45",
    mentor: "3,200",
    image:
      "https://s27389.pcdn.co/wp-content/uploads/2021/04/creating-rolling-out-effective-cyber-security-strategy-1024x440.jpeg.optimal.jpeg",
  },
  {
    course_name: "Java MasterClass",
    time: "28 hours",
    rating: "4.5",
    reviews: "65",
    mentor: "2,400",
    image:
      "https://www.developer.com/wp-content/uploads/2021/09/Java-tutorials.jpg",
  },
  {
    course_name: "Web Development Front end",
    time: "31 hours",
    rating: "3",
    reviews: "42",
    mentor: "1,500",
    image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201111215809/How-to-Become-a-Front-End-Developer-in-2020.png",
  },
];

const Opportunities = () => {
  return (
    <>
      <Box sx={{ marginRight: 2 }}>
        <PageHeader
          heading={"Opportunities"}
          subheading={
            "Showing you the best upcoming opportunities where you can participate.  "
          }
        />
        <Grid container spacing={2}>
          {opportunities.map((course: any, index: number) => (
            <Grid key={index} item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card
                variant="outlined"
                sx={{
                  // width: 320,
                  border: "1px solid #e1e1e1",
                  background: "#fff",
                  // boxShadow: "1px solid #f1f1f1",
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <Typography level="h2" fontSize="md" fontWeight={700}>
                  {course.course_name}
                </Typography>
                <Typography level="body2" fontWeight={500}>
                  20 hours
                </Typography>
                <IconButton
                  variant="plain"
                  color="neutral"
                  size="sm"
                  sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
                >
                  <BookmarkAdd />
                </IconButton>
                <AspectRatio
                  minHeight="120px"
                  height="350px"
                  sx={{ my: 2, borderBottom: "1px solid #E0E0E0", mb: 1 }}
                >
                  <img
                    src={course.image}
                    style={{
                      objectFit: "fill",
                    }}
                  />
                </AspectRatio>
                {/* <Divider sx={{ color: "#" }} /> */}

                <Box sx={{ display: "flex" }}>
                  <div>
                    <Stack
                      flexGrow={1}
                      justifyContent="space-between"
                      direction="row"
                    >
                      <Typography
                        fontWeight="lg"
                        sx={{ color: "#01A2A6" }}
                        level="body3"
                      >
                        {course.rating}
                      </Typography>
                    </Stack>
                    <Typography level="body5">Mentor:</Typography>

                    <Typography fontSize="lg" fontWeight="lg">
                      {course.mentor}
                    </Typography>
                  </div>
                  <PrimaryButton
                    variant="contained"
                    sx={{ ml: "auto", fontWeight: 600 }}
                    text="View Details"
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Opportunities;
