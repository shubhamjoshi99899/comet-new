import { Box, Card, Grid, Stack, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import DescriptionIcon from "@mui/icons-material/Description";
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "100%",
  border: "1px solid #e1e1e1",
  margin: 2,
  padding: "16px",
  borderRadius: "12px",
  textAlign: "center",
}));

const StyledText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1rem",
  lineHeight: "12px",
  marginBottom: "10px",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1rem",
  lineHeight: "32px",
  //   border: "1px solid #000",
  borderRadius: "4px",
}));

const details = [
  {
    name: "C++ Lectures",
    time: "12:00 p.m.",
  },
  {
    name: "JavaScript Lectures",
    time: "2:00 p.m.",
  },
  {
    name: "Python Lectures",
    time: "4:00 p.m.",
  },
];

const LectureDetaiBox = () => {
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  });
  return (
    <>
      <Grid container>
        <Card
          sx={{
            width: "100%",
            border: "1px solid #e1e1e1",
            m: 2,
            p: 2,
            borderRadius: "12px",
          }}
        >
          <Typography fontWeight={700} fontSize="1.2rem" variant="h6" mb={2}>
            Stats and Details
          </Typography>
          {details.map((detail: any, index: number) => (
            <Grid key={index} xs={12} sm={12} md={12} lg={12} mb={1}>
              <StyledCard
                onMouseOver={() => setState({ raised: true, shadow: 3 })}
                onMouseOut={() => setState({ raised: false, shadow: 1 })}
                raised={state.raised}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <StyledText>{detail.name}</StyledText>
                  <StyledText sx={{ fontSize: "16px", fontWeight: 700 }}>
                    {" "}
                    {detail.time}
                  </StyledText>
                  <Box>
                    <Stack
                      direction={"row"}
                      gap={1}
                      alignItems="center"
                      sx={{
                        border: "1px solid #f0f0f0",
                        mb: 1,
                        borderRadius: "8px",
                        px: 2,
                      }}
                    >
                      <VideoCallIcon
                        sx={{
                          transition: "ease 0.5s",
                          "&:hover": {
                            width: "32px",
                            height: "32px",
                            color: " #4285F4",
                          },
                          cursor: "pointer",
                          height: "30px",
                          width: "30px",
                          color: "#34A853",
                          paddingRight: "6px",
                          borderRight: "1px solid #f0f0f0",
                        }}
                      />
                      {/* <Typography>Meet</Typography> */}

                      <DescriptionIcon
                        sx={{
                          transition: "ease 0.5s",
                          "&:hover": {
                            width: "27px",
                            height: "27px",
                            color: " #4285F4",
                          },
                          cursor: "pointer",
                          height: "25px",
                          width: "25px",
                          color: "#EA4335",
                        }}
                      />
                      {/* <Typography>Notes</Typography> */}
                    </Stack>
                  </Box>
                </Stack>
              </StyledCard>
            </Grid>
          ))}
        </Card>
      </Grid>
    </>
  );
};

export default LectureDetaiBox;
