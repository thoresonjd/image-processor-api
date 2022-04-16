import React from 'react'
import { Box, Slider } from '@mui/material'

interface Props {
  saturation: number,
  setSaturation: Function
}

const Saturation: React.FC<Props> = (props) => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Box sx={{width: '25%'}}>Saturation</Box>
      <Box sx={{width: '75%', padding: 0}}>
        <Slider
          value={props.saturation * 10}
          valueLabelDisplay="auto"
          defaultValue={10}
          min={-100}
          max={100}
          scale={(v) => {return v/10}}
          onChange={(e, v) => {
            if (typeof(v) === 'number')
              props.setSaturation(v / 10)
          }}
        />
      </Box>
    </Box>  
  )
}

export default Saturation