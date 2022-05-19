import React from 'react'
import { FormControlLabel, Slider, Switch, Box } from '@mui/material'

interface Props {
  grayscale: boolean,
  grayscalePercentage: number,
  setGrayscale: Function,
  setGrayscalePercentage: Function
}

const Grayscale: React.FC<Props> = (props) => {
  return (
    <>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Box sx={{width: '25%'}}>Grayscale</Box>
        <Box sx={{width: '75%', display: 'flex', padding: 0}}>
          <FormControlLabel
            label='Default' 
            control={
              <Switch 
                checked={props.grayscale}
                onChange={(e) => props.setGrayscale(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
          />
        </Box>
      </Box>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Box sx={{width: '25%'}}>Grayscale %</Box>
        <Box sx={{width: '75%', padding: 0}}>
          <Slider
            color='secondary'
            value={props.grayscalePercentage * 100}
            valueLabelDisplay="auto"
            defaultValue={0}
            min={0}
            max={100}
            scale={(v) => {return v/100}}
            onChange={(e, v) => {
              if (typeof(v) === 'number')
                props.setGrayscalePercentage(v / 100)
            }}
          />
        </Box>
      </Box>
    </>
  )
}

export default Grayscale