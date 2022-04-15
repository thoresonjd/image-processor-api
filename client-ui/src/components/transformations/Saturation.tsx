import React from 'react'
import { Box, TextField } from '@mui/material'

interface Props {
  saturation: number,
  setSaturation: Function
}

const Saturation: React.FC<Props> = (props) => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Box sx={{width: '25%'}}>Saturation</Box>
      <Box sx={{width: '75%', padding: 0}}>
        <TextField
          key={0}
          value={props.saturation}
          label='Saturation' 
          type='number' 
          variant='outlined' 
          size='small'
          sx={{width: '50%'}}
          onChange={event => {
            const { value } = event.target;
            props.setSaturation(parseInt(value));
          }}
        />
      </Box>
    </Box>  
  )
}

export default Saturation