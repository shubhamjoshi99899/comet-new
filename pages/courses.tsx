import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import PageHeader from "../components/common/common-ui-components/page-header";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import PrimaryButton from "../components/common/buttons/primary-button";
import { Divider } from "@mui/joy";

const courses = [
  {
    course_name: "Getting started with Python",
    time: "20 hours",
    rating: "5",
    reviews: "72",
    price: "2,900",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",
  },
  {
    course_name: "C++ MasterClass",
    time: "28 hours",
    rating: "4.5",
    reviews: "65",
    price: "2,400",
    image:
      "https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648",
  },
  {
    course_name: "Web Development Full Stack",
    time: "42 hours",
    rating: "5",
    reviews: "102",
    price: "3,500",
    image:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png",
  },
  {
    course_name: "Cyber Security",
    time: "43 hours",
    rating: "3.7",
    reviews: "45",
    price: "3,200",
    image:
      "https://s27389.pcdn.co/wp-content/uploads/2021/04/creating-rolling-out-effective-cyber-security-strategy-1024x440.jpeg.optimal.jpeg",
  },
  {
    course_name: "Java MasterClass",
    time: "28 hours",
    rating: "4.5",
    reviews: "65",
    price: "2,400",
    image:
      "https://www.developer.com/wp-content/uploads/2021/09/Java-tutorials.jpg",
  },
  {
    course_name: "Web Development Front end",
    time: "31 hours",
    rating: "3",
    reviews: "42",
    price: "1,500",
    image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201111215809/How-to-Become-a-Front-End-Developer-in-2020.png",
  },
];
const Courses = () => {
  return (
    <Box sx={{ marginRight: 2 }}>
      <PageHeader
        heading={"Courses"}
        subheading={"Showing you the best courses by best instructors below.  "}
      />
      <Grid container spacing={2}>
        {courses.map((course: any, index: number) => (
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
                maxHeight="200px"
                sx={{ my: 2, borderBottom: "1px solid #E0E0E0", mb: 1 }}
              >
                <img
                  src={course.image}
                  style={{
                    objectFit: "contain",
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
                      {course.rating} rating
                    </Typography>
                    <Typography
                      fontWeight="lg"
                      sx={{ color: "#01A2A6", ml: 3 }}
                      level="body3"
                    >
                      {course.reviews} reviews
                    </Typography>
                  </Stack>
                  <Typography level="body5">Total price:</Typography>

                  <Typography fontSize="lg" fontWeight="lg">
                    ₹{course.price}
                  </Typography>
                </div>
                <PrimaryButton
                  variant="contained"
                  sx={{ ml: "auto", fontWeight: 600 }}
                  text="Explore"
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Courses;
