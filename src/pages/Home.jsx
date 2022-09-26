import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  CardHeader,
  Paper,
  Button,
  styled,
  Tooltip,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import Image from "../images/1.webp";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  margin: 10px;
`;

const Home = () => {
  return (
    <>
      <Paper elevation={0} variant="outlined">
        <CardMedia
          component={"img"}
          height={""}
          width={"100%"}
          image={Image}
          alt="image"
        />
      </Paper>
      <Paper
        variant={"outlined"}
        sx={{
          background: "#eee",
          border: "none",
          boxShadow: "none",
        }}
      >
        <Grid
          container
          columns={{ xs: 4, md: 12 }}
          spacing={3}
          sx={{
            display: "flex",
            alignItmes: "center",
            justifyContent: "center",
            p: 3,
          }}
        >
          <Grid item xs={6}>
            <Card
              variant={"outlined"}
              sx={{
                minHeight: 310,
              }}
            >
              <CardContent>
                <Typography variant={"h4"}>WHY JOIN US</Typography>
                <Typography>
                  Our institutions and authorized centers are engaged in highly
                  specialized academic and industry training programs to promote
                  skills among its students and youth, with a greater emphasis
                  on the improvement of employment opportunities and research
                  activities.If a student sticks with taking computer courses
                  for long enough, he will have a chance to become certified to
                  perform certain specialized roles within a business. Even
                  completing a beginner's computer course gives the student
                  better job possibilities.
                </Typography>
                <StyledNavLink to={"/onlineQuiz"}>
                  <Tooltip title="Online Quiz" placement="bottom" arrow>
                    <StyledButton variant={"contained"}>
                      Online Quiz
                    </StyledButton>
                  </Tooltip>
                </StyledNavLink>

                <StyledNavLink to={"/certificates"}>
                  <Tooltip title="Certificates" placement="bottom" arrow>
                    <StyledButton variant={"contained"}>
                      Certificates
                    </StyledButton>
                  </Tooltip>
                </StyledNavLink>

                <StyledNavLink to={"/photoGallery"}>
                  <Tooltip title="Photo Gallary" placement="right" arrow>
                    <StyledButton variant={"contained"}>
                      Photo Gallery
                    </StyledButton>
                  </Tooltip>
                </StyledNavLink>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Card
              variant={"outlined"}
              sx={{
                minHeight: 310,
              }}
            >
              <CardHeader
                sx={{
                  background: blue[600],
                  color: "#fff",
                }}
                title="Latest News"
              />
              <Paper
                variant={"outlined"}
                square
                sx={{
                  minHeight: 245,
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                }}
              ></Paper>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Home;
