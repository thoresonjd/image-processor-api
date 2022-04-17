import React, { useState, useEffect } from 'react'
import { FormControlLabel, Switch, Box, TextField } from '@mui/material'

interface Props {
  rotate: number,
  rotateLeft: boolean,
  rotateRight: boolean,
  setRotate: Function,
  setRotateLeft: Function,
  setRotateRight: Function
}

const Rotate: React.FC<Props> = (props) => {

  const [degrees, setDegrees] = useState<number>(0)

  useEffect(() => (
    props.setRotate(degrees)
  ), [degrees, props])

  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Box sx={{width: '25%'}}>Rotate</Box>
      <Box sx={{width: '75%', display: 'flex'}}>
        <FormControlLabel
          label='L' 
          control={
            <Switch 
              checked={props.rotateLeft}
              onChange={(e) => props.setRotateLeft(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
        />
        <FormControlLabel
          label='R' 
          control={
            <Switch 
              checked={props.rotateRight}
              onChange={e => props.setRotateRight(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
        />
        <TextField 
          label='Degrees'
          type='number'
          variant='outlined'
          size='small'
          onChange={e => setDegrees(parseInt(e.target.value))}
        />
      </Box>
    </Box>  
  )
}

export default Rotate
