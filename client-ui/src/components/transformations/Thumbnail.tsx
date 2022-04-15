import React from 'react'
import { FormControlLabel, Switch, Box } from '@mui/material'

interface Props {
  thumbnail: boolean,
  setThumbnail: Function
}

const Thumbnail: React.FC<Props> = (props) => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Box sx={{width: '25%'}}>Tumbnail</Box>
      <Box sx={{width: '75%', padding: 0}}>
        <FormControlLabel
          label='' 
          control={
            <Switch 
              checked={props.thumbnail}
              onChange={(e) => props.setThumbnail(e.target.checked)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
        />
      </Box>
    </Box>  
  )
}

export default Thumbnail