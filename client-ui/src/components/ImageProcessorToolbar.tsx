import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import MenuItem from '@mui/material/MenuItem'

const transformations = ['Apple', 'Banana', 'Orange']

const ImageProcessorToolbar: React.FC = () => {
  
  return (
    <AppBar position='static'>
      <Toolbar sx={{margin: '0 auto'}}>
        {transformations.map((transformation) => (
          <MenuItem>
            {transformation}
          </MenuItem>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default ImageProcessorToolbar
