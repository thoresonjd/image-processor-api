import React, { useState, useEffect } from 'react'
import { FormControlLabel } from '@mui/material' 
import { Switch } from '@mui/material'
import { TextField } from '@mui/material'
import { Box } from '@mui/material'
import TestBackendAccess from './TestBackendAccess'

interface Props {
  setImage: Function
}

const TransformImage: React.FC<Props> = ({setImage}) => {

  const [transformedImage, setTransformedImage] = useState<string | undefined>(undefined)  

  useEffect(() => (
    setImage(transformedImage)
  ), [transformedImage, setImage])

  const Flip = () => {
    return (
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Box sx={{width: '25%'}}>Flip</Box>
        <Box sx={{width: '75%'}}>
          <FormControlLabel 
            control={<Switch onChange={()=>console.log("H Flip")}/>} 
            label='Horizontal'
          />
          <FormControlLabel 
            control={<Switch onChange={()=>console.log("V Flip")}/>} 
            label='Vertical'
          />
        </Box>
      </Box>
    );
  }

  const Resize = () => {
    return (
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Box sx={{width: '25%'}}>Resize</Box>
        <Box sx={{display: 'flex', width: '75%'}}>
          <TextField label='Height' variant='outlined' size='small' />
          <TextField label='Width' variant='outlined' size='small' />
        </Box>
      </Box>
    )
  }

  const Rotate = () => {
    return (
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Box sx={{width: '25%'}}>Rotate</Box>
        <Box sx={{width: '75%'}}>
          <TextField label='Degrees' variant='outlined' size='small' />
        </Box>
      </Box>  
    )
  }

  const Thumbnail = () => {
    return (
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Box sx={{width: '25%'}}>Tumbnail</Box>
        <Box sx={{width: '75%', padding: 0}}>
          <FormControlLabel 
            control={<Switch onChange={()=>console.log("V Flip")}/>} 
            label=''
          />
        </Box>
      </Box>  
    )
  }

  const Grayscale = () => {
    return (
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Box sx={{width: '25%'}}>Grayscale</Box>
        <Box sx={{width: '75%', padding: 0}}>
          <FormControlLabel 
            control={<Switch onChange={()=>console.log("V Flip")}/>} 
            label=''
          />
        </Box>
      </Box>  
    )
  }

  const TransformationForm = () => {
    return (
      <Box sx={{m: '10px'}} component="form" noValidate autoComplete="off">
        <Flip />
        <Resize />
        <Rotate />
        <Thumbnail />
        <Grayscale />
      </Box>
    );
  }

  return (
    <div className='transformation-tools'>
      <h1>Transformations</h1>
      <TransformationForm />
      <TestBackendAccess />
    </div>
  );
}

export default TransformImage
