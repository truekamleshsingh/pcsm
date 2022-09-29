import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  TextField,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import styled from "@emotion/styled";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useState } from "react";
import { addSubcriber } from "../services/api";
import { toast } from "react-toastify";

const StyledA = styled("a")`
  color: #fff;
  text-decoration: none;
  margin-right: 16px;
`;
const StyledTypography = styled(Typography)`
  display: flex;
  alings-itmes: center;
  margin-bottom: 16px;
`;

const Footer = () => {

  const defaultSubscribeValue = {
    email: ''
  }

  const [subscribeValue, setSubscribeValue] = useState(defaultSubscribeValue)

  const subscribeValueChange = (e) => {
    setSubscribeValue({ ...subscribeValue, [e.target.name]: e.target.value })
  }

  const handleSubscribe = async (e) => {
    
    
      if (!subscribeValue.email) {
        toast.error("Email is required")
      } else if(!subscribeValue.email.match([/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/])){
        toast.error("Not a valid email")
      } else {
        const result = await addSubcriber(subscribeValue)
        console.log(result)
      }
  }

  const handleInsta = () => {
    console.log("handleInsta clicked")
  }

  return (
    <>
      <Paper
        square
        sx={{
          minHeight: 250,
          display: "flex",
          justifyContent: "center",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
          columns={{
            xs: 4,
            md: 12,
          }}
        >
          <Grid item xs={4}>
            <Card
              sx={{
                minHeight: 250,
              }}
            >
              <CardHeader
                title="Pfix Computer Education"
                subheader="PFIXS COMPUTER SAKSHARTA MISSION"
              />
              <CardContent
                sx={{
                  fontStyle: "italic",
                }}
              >
                Pfixs Computer Education provides official independent knowledge
                and technology insights, building relevant technology capability
                and capacity that catalyzes Indian innovation and commerce,
                government And accelerates the adoption of technology for the
                benefit of society.
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              sx={{
                minHeight: 250,
              }}
            >
              <CardHeader
                avatar={
                  <>
                    {/* <GroupWorkIcon/> */}
                    <Typography variant={"h5"}>Get In Touch</Typography>
                  </>
                }
              />
              <CardContent>
                <StyledTypography>
                  <WhatsAppIcon sx={{ mr: 1 }} />
                  <StyledA href="tel:9389525260">9389525260</StyledA>
                </StyledTypography>
                <StyledTypography>
                  <WhatsAppIcon sx={{ mr: 1 }} />
                  <StyledA href="tel:9236472072">9236472072</StyledA>
                </StyledTypography>
                <StyledTypography>
                  <EmailIcon sx={{ mr: 1 }} />
                  <StyledA href="mailto:info@pfixseducation.com">
                    info@pfixseducation.com
                  </StyledA>
                </StyledTypography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              sx={{
                minHeight: 250,
              }}
            >
              <CardHeader title="Subscribe Now" />
              <CardContent>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                    alingItems: "center",
                  }}
                >
                  <TextField
                    label="E-mail"
                    size={"small"}
                    name="email"
                    sx={{ mr: 2 }}
                    placeholder="Enput your email"
                    onChange={e => subscribeValueChange(e)}
                  />
                  <Button variant="contained" onClick={e => handleSubscribe(e)} >Subscribe</Button>
                </Paper>
                <Box
                  sx={{
                    mt: 4,
                  }}
                >
                  <IconButton onClick={handleInsta}>
                    <InstagramIcon />
                  </IconButton>
                  <IconButton onClick={handleInsta}>
                    <YouTubeIcon />
                  </IconButton >
                  <IconButton onClick={handleInsta}>
                    <TwitterIcon />
                  </IconButton >
                  <IconButton onClick={handleInsta}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton onClick={handleInsta}>
                    <TelegramIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        square
        sx={{
          minHeight: 100,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ m: 2, textAlign: 'center' }}>
          <Typography align={"center"} variant={"overline"}>
            &#169; Copyright 2019-2020 by Pfixs Ventures Pvt Ltd. All Rights
            Reserved.
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default Footer;
