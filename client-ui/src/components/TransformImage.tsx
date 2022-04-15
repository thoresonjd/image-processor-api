import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FormControlLabel } from '@mui/material' 
import { Switch } from '@mui/material'
import { TextField } from '@mui/material'
import { Box } from '@mui/material'
import { Button } from '@mui/material'
import MimeTypes from '../constants/MimeTypes'

const api = axios.create({
  baseURL: "http://localhost:6969/"
})

interface Props {
  image: string | undefined,
  setImage: Function
}

const TransformImage: React.FC<Props> = ({image, setImage}) => {

  const [transformedImage, setTransformedImage] = useState<string | undefined>(image)  

  useEffect(() => (
    setImage(transformedImage)
  ), [transformedImage, setImage])

  const getExtensionFromMimeType = (b64: string) => {
    for (var mimeType in MimeTypes) {
      if (b64.indexOf(mimeType) === 0) {
        return MimeTypes[mimeType];
      }
    }
  }

  const removeTag = (b64WithTag: string | undefined) => {
    const pattern = /data:image\/.{3,4};base64,/
    let b64TagRemoved = b64WithTag?.replace(pattern, '')
    return b64TagRemoved
  }

  const constructJsonPostRequest = () => {
    // TODO: Construct JSON based on frontend interaction
    let jsonRequest = {
      'image': removeTag(image),
      'transformations': [
        'flip-horizontal'
      ]
    }
    return jsonRequest
  }

  const postRequest = () => {
    let req = constructJsonPostRequest()
    api.post('/', req).then(res => {
      let ext = getExtensionFromMimeType(res.data['image'])
      let img = 'data:image/'+ ext +';base64,' + res.data['image']
      setTransformedImage(img)
    })
  }

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
      <Button onClick={()=>postRequest()}>POST request</Button>
    </div>
  );
}

export default TransformImage

const structure = {
  'image': 'image',
  'transformations': [
    'thumbnail',
    'grayscale',
    'flip-horizontal',
    'flip-vertical',
    'rotate-left',
    'rotate-right',
    {'rotate': 'degrees'},
    {'resize': ['width', 'height']},
    {'saturate': 'value'}
  ]
}
