import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const Insfratructure = () => {
  return (
    <Card sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
    }}>
      <CardContent>
        <Typography variant="h4">
        Insfratructure
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Insfratructure