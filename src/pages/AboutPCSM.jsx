import { Card, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Image from '../images/degree.png'

const AboutPCSM = () => {
  return (
    <>
      <Paper>
        <Card>
          <CardMedia  
            component="img"
            height="290"
            image={Image}
            alt="AboutPCSM Image"
          />
            <CardContent>
              <Typography variant="h5" gutterBottom component="h1" sx={{ borderBottom: 1, borderColor: "divider" }}>
                About the PCSM
              </Typography>
              <Typography variant="body1" gutterBottom component="div" color="text.secondary" >
                Pfixs Computer Saksharta Mission (PCSM), believes in the foundation of technology, that Computer science has brought new opportunities and challenges to traditional study style, and has changed the foundational concepts in education.
              </Typography>
              
                <Grid
                  container
                  columns={{ xs: 4, md: 12 }}
                  spacing={3}
                  sx={{
                    display: "flex",
                    alignItmes: "center",
                    justifyContent: "center",
                    p: 3,
                  }}>
                  <Grid item xs={6}>
                    <Card sx={{ "minHeight": 200 }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom component="div">
                          Skill Development
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" gutterBottom component="div">
                          Our institutions and authorized centers are engaged in highly specialized academic and industry training programs to promote skills among its students and youth, with a greater emphasis on the improvement of employment opportunities and research activities.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card sx={{ "minHeight": 200 }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom component="div">
                          Franchise
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" gutterBottom component="div">
                          We are offer the franchise of our mission towards computer education the ability to grow under a common brand and share the knowledge of information technology. If you are looking for business opportunities in the education contact us.

                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card sx={{ "minHeight": 200 }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom component="div">
                          Online Examination
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" gutterBottom component="div">
                          The Pfixs Computer Saksharta Mission, PCSM, offers online certification tests on a variety, Access all Premium & Members Only Exams; Unlimited Certification; Signed & sealed. If you prefer, we also offer courses individually.

                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card sx={{ "minHeight": 200 }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom component="div">
                          Mission
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" gutterBottom component="div">
                          In present time, some big Institution run their one-year or more than one-year programme in higher charges. Due to which the middle class families of our societies cannot afford the load of their charges.

                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card sx={{ "minHeight": 200 }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom component="div">
                          Vision
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" gutterBottom component="div">
                          Our mission studied their theme properly and decided to provide better higher technical education in computer making a foundation of "Pfixs Computer Saksharta Mission".


                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
             
            </CardContent>
          
        </Card>
      </Paper>
    </>
  )
}

export default AboutPCSM