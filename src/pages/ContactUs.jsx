import {
  Card,
  CardContent,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

import React from "react";
// import image from "../images/1.webp";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ContactUs = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card
        square
        sx={{
          minHeight: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            Contact Us
          </Typography>
        </CardContent>
      </Card>

      <Card
        square
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Typography variant="h5">Contact Us</Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default ContactUs;
