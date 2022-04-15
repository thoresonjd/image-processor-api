import React from 'react'
import { FormControlLabel, Switch, Box } from '@mui/material';

interface Props {
  flipHorizontal: boolean,
  flipVertical: boolean,
  setFlipHorizontal: Function,
  setFlipVertical: Function
}

const Flip: React.FC<Props> = (props) => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Box sx={{width: '25%'}}>Flip</Box>
      <Box sx={{width: '75%'}}>
        <FormControlLabel
          label='Horizontal' 
          control={
            <Switch 
              checked={props.flipHorizontal}
              onChange={(e) => props.setFlipHorizontal(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
        />
        <FormControlLabel
          label='Vertical' 
          control={
            <Switch 
              checked={props.flipVertical}
              onChange={(e) => props.setFlipVertical(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
        />
      </Box>
    </Box>
  );
}

export default Flip
