import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material'
import React from 'react'
import Image1 from '../images/write.webp'

const ChairmanMessage = () => {
  return (
    <>
      <Paper>
        <Card>
          <CardMedia
            component="img"
            height="290"
            image={Image1}
            title="Chairman"
            alt="Chairman"
          />
          <CardContent>
            <Typography variant="h5" gutterBottom component="h1" sx={{ borderBottom: 1, borderColor: "divider" }}>
              Chairman's Message
            </Typography>
            <Paper variant="outlined" sx={{
              p: 2,
              mb: 2
            }}>
              <Typography variant="body1" gutterBottom component="div" color="text.secondary" >
                Dear Students, First of all, I am very much thankful to you for showing interest in Pfixs Computer Education. In the fast changing global economic environment, Pfixs has also changed its programs and activities as per the changes in the global perspective. Global boundaries are vanishing; It merges people of diverse cultures, age groups and nationally.
              </Typography>
            </Paper>

            <Paper variant="outlined" sx={{
              p: 2,
              mb: 2
            }}>
              <Typography variant="body1" gutterBottom component="div" color="text.secondary" >
                Education is a bridge which connects the world. Pfixs Computer Education offers a platform to enhance your life and career through the quality education in a highly competitive and healthy environment with the best infrastructure. We provides placement opportunities to its graduates from a variety of reputed organisation covering a diverse range of fields. We firmly believe in doing things. Our aim is to aware students to utilise their capabilities.

              </Typography>
            </Paper>

            <Typography variant="body1" gutterBottom component="div" color="text.secondary" >
              Our primary goal is to train those needy students of the society who cannot afford hefty fees due to the financial issues. Today we are near to our landmark and has become one of the best Institution in Allahabad. Workshops and Seminars are organised for all the students of Pfixs Computer Education who are enrolled in various courses. During these Seminars and workshops, students remove their doubts and problems if they might have related to the particular subject.

            </Typography>

            <Typography variant="body1" gutterBottom component="div" color="text.secondary" >
              Your positive energy with our support system will make us flourishing in our mutual goals. Like our past students have been doing since last so many years. I wish all students a very successful academic year ahead. Your aspiration in our inspiration and your destination is our reputation. We are excited to see you succeed. Once again, I am thankful to all the students and parents for their confidence in the Pfixs Computer Education.


            </Typography>
            <Typography variant="h5" gutterBottom component="p" sx={{ borderBottom: 1, borderColor: "divider", textAlign: "center", mt: 3 }} >
              "Best wishes for your bright future."
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom component="div" sx={{ textAlign : "center"}}>
              - Balvant Singh CEO (Pfixs)
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </>
  )
}

export default ChairmanMessage