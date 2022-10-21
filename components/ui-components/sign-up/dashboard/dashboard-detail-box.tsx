import { Box, Card, Grid, Stack, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PsychologyIcon from "@mui/icons-material/Psychology";
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

const DashboardDetaiBox = () => {
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
          <Grid xs={12} sm={12} md={12} lg={12} mb={1}>
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
                <StyledText>Projects Undertaken</StyledText>
                <StyledText sx={{ fontSize: "42px" }}> 0 </StyledText>

                <StyledBox>
                  <BusinessCenterIcon
                    sx={{
                      transition: "ease 0.5s",
                      "&:hover": {
                        width: "70px",
                        height: "70px",
                      },
                      cursor: "pointer",
                      height: "60px",
                      width: "60px",
                    }}
                  />
                </StyledBox>
              </Stack>
            </StyledCard>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={12} mb={1}>
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
                <StyledText>Certificates Earned</StyledText>
                <StyledText sx={{ fontSize: "42px" }}> 0 </StyledText>

                <StyledBox>
                  <EmojiEventsIcon
                    sx={{
                      transition: "ease 0.5s",
                      "&:hover": {
                        width: "70px",
                        height: "70px",
                      },
                      cursor: "pointer",
                      height: "60px",
                      width: "60px",
                    }}
                  />
                </StyledBox>
              </Stack>
            </StyledCard>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={12} mb={1}>
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
                <StyledText>Courses Enrolled &nbsp; &nbsp;</StyledText>
                <StyledText sx={{ fontSize: "42px" }}> 0 </StyledText>

                <StyledBox>
                  <AdminPanelSettingsIcon
                    sx={{
                      transition: "ease 0.5s",
                      "&:hover": {
                        width: "70px",
                        height: "70px",
                      },
                      cursor: "pointer",
                      height: "60px",
                      width: "60px",
                    }}
                  />
                </StyledBox>
              </Stack>
            </StyledCard>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={12} mb={1}>
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
                <StyledText>Interview Attempted</StyledText>
                <StyledText sx={{ fontSize: "42px" }}> 0 </StyledText>

                <StyledBox>
                  <PsychologyIcon
                    sx={{
                      transition: "ease 0.5s",
                      "&:hover": {
                        width: "70px",
                        height: "70px",
                      },
                      cursor: "pointer",
                      height: "60px",
                      width: "60px",
                    }}
                  />
                </StyledBox>
              </Stack>
            </StyledCard>
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

export default DashboardDetaiBox;
