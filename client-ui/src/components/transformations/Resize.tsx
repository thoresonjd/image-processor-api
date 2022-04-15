import React from 'react'
import { Box, TextField } from '@mui/material'

interface Props {
  resize: number[],
  setResize: Function
}

const Resize: React.FC<Props> = () => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Box sx={{width: '25%'}}>Resize</Box>
      <Box sx={{display: 'flex', width: '75%'}}>
        <TextField label='Height' type='number' variant='outlined' size='small' />
        <TextField label='Width' type='number' variant='outlined' size='small' />
      </Box>
    </Box>
  )
}

export default Resize