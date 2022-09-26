import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const Services = () => {
  return (
    <Card sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
    }}>
      <CardContent>
        <Typography variant="h1">
          Services
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Services