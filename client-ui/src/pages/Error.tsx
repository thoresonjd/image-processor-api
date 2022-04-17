import React from 'react'
import Meme from '../assets/this-is-fine.png'
import { Box } from '@mui/material'

const Error: React.FC = () => {
  return (
    <Box sx={{textAlign: 'center'}} >
      <img src={Meme} alt='this-is-fine' />
    </Box>
  )
}

export default Error