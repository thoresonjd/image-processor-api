import React from 'react'
import { Zoom } from '@mui/material'

interface Props {
  image: string | undefined
}

const DisplayImage: React.FC<Props> = ({image}) => {
  return (
    <div className='display-image center'>
      {image ? (
        <Zoom in>
          <img src={image} alt='image' className='image'/>
        </Zoom>
      ) : (
        "Image Preview"
      )}
    </div>
  );
}

export default DisplayImage