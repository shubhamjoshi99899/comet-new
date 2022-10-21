import { Box, Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import SignUpForm from "../components/ui-components/sign-up/sign-up-form";
const Home: NextPage = () => {
  return (
    <>
      <Container>
        <SignUpForm />
      </Container>
    </>
  );
};

export default Home;
