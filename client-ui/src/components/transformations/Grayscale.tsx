import React from 'react'
import { FormControlLabel, Switch, Box } from '@mui/material'

interface Props {
  grayscale: boolean,
  setGrayscale: Function
}

const Grayscale: React.FC<Props> = (props) => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Box sx={{width: '25%'}}>Grayscale</Box>
      <Box sx={{width: '75%', padding: 0}}>
        <FormControlLabel
          label='' 
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
  )
}

export default Grayscale