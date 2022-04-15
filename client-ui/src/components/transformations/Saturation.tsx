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
          value={props.saturation * 100}
          valueLabelDisplay="auto"
          defaultValue={100}
          min={0}
          max={200}
          scale={(v) => {return v/100}}
          onChange={(e, v) => {
            if (typeof(v) === 'number')
              props.setSaturation(v / 100)
          }}
        />
      </Box>
    </Box>  
  )
}

export default Saturation