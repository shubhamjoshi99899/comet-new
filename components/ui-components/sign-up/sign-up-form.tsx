import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  Theme,
  Typography,
} from "@mui/material";
import { sign } from "crypto";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import PrimaryButton from "../../common/buttons/primary-button";
import SecondaryButton from "../../common/buttons/secondary-button";
import CustomizedInputField from "../../common/input-fields/custom-input-field";
import PasswordField from "../../common/input-fields/custom-password-field";
import SigninCardHeader from "./sign-up-header";

interface Props {}

const SignUpForm: React.FC<Props> = ({}) => {
  const [signup, setSignUp] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      password: "",
    },
    // validationSchema: SignInValidationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const router = useRouter();
  const handleSignUp = () => {
    setSignUp(!signup);
  };
  return (
    <>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                maxWidth: signup ? "47.5rem" : "27.5rem",
                width: "100%",
                padding: "2rem 2.875rem",
                border: "0.0625rem solid #EFEFEF",
                boxShadow: "none",
                borderRadius: "0.75rem",
              }}
            >
              <SigninCardHeader />

              {signup ? (
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    sx={{ marginBottom: "16px" }}
                  >
                    <CustomizedInputField
                      error={
                        formik.touched.first_name &&
                        Boolean(formik.errors.first_name)
                      }
                      label="First name*"
                      placeholder="Please enter your first name"
                      value={formik.values.first_name}
                      id="first_name"
                      name="first_name"
                      formik={formik}
                      helperText={
                        formik.touched.first_name && formik.errors.first_name
                      }
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    sx={{ marginBottom: "16px" }}
                  >
                    <CustomizedInputField
                      error={
                        formik.touched.last_name &&
                        Boolean(formik.errors.last_name)
                      }
                      label="Last Name*"
                      placeholder="Please enter your last name"
                      value={formik.values.last_name}
                      id="last_name"
                      name="last_name"
                      formik={formik}
                      helperText={
                        formik.touched.last_name && formik.errors.last_name
                      }
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    sx={{ marginBottom: "16px" }}
                  >
                    <CustomizedInputField
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      label="Email*"
                      placeholder="Please enter your email"
                      value={formik.values.email}
                      id="email"
                      name="email"
                      formik={formik}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    sx={{ marginBottom: "16px" }}
                  >
                    <CustomizedInputField
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      label="Phone number*"
                      placeholder="Please enter your phone number"
                      value={formik.values.phone}
                      id="phone"
                      name="phone"
                      formik={formik}
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    sx={{ marginBottom: "16px" }}
                  >
                    <PasswordField
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      label="Password*"
                      placeholder="Please enter your Password"
                      value={formik.values.password}
                      id="password"
                      name="password"
                      formik={formik}
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                    />
                  </Grid>
                </Grid>
              ) : (
                <Box>
                  <Box sx={{ marginBottom: "16px" }}>
                    <CustomizedInputField
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      label="Email*"
                      placeholder="Please enter your email"
                      value={formik.values.email}
                      id="email"
                      name="email"
                      formik={formik}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Box>

                  <Box sx={{ marginBottom: "16px" }}>
                    <PasswordField
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      label="Password*"
                      placeholder="Please enter your Password"
                      value={formik.values.password}
                      id="password"
                      name="password"
                      formik={formik}
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                    />
                  </Box>
                </Box>
              )}
              <PrimaryButton
                sx={{
                  width: "100%",
                  height: "48px",
                  borderRadius: "5px",
                  marginTop: "16px",
                  mb: 2,
                }}
                variant="contained"
                text={signup ? "Sign Up" : "Sign in"}
                type="submit"
                // loading={loading}
                fullWidth
                onClick={() => router.push("/dashboard")}
              />
              {/* <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    color: (theme: Theme) => theme.palette.secondary.main,
                    textAlign: "center",
                  }}
                  component="span"
                  color="primary"
                >
                  {signup ? "Already have an account?" : "Create an account"}
                </Typography>
                <Divider orientation="vertical" />
                <SecondaryButton
                  variant="text"
                  text={signup ? "Sign in" : "Sign up"}
                  onClick={handleSignUp}
                />
              </Box> */}
            </Card>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default SignUpForm;
