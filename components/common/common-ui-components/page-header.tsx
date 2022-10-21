import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../../../styles/theme";

interface Props {
  heading: any;
  subheading?: any;
}

const PageHeader: React.FC<Props> = ({ heading, subheading }) => {
  return (
    <Box mb={2}>
      <Typography variant="h1" fontSize="22px" fontWeight={700}>
        {heading}
      </Typography>
      <Typography
        variant="h6"
        fontSize="12px"
        fontWeight={550}
        sx={{ color: theme.palette.text.secondary }}
      >
        {subheading}
      </Typography>
    </Box>
  );
};

export default PageHeader;
