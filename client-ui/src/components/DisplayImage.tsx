import React from 'react'
import { Zoom } from '@mui/material'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

interface Props {
  image: string | undefined
}

const DisplayImage: React.FC<Props> = ({image}) => {
  return (
    <div className='display-image center'>
      {image ? (
        <Zoom in>
          <img src={image} alt='display' className='image'/>
        </Zoom>
      ) : (
        <ImageOutlinedIcon fontSize='large' />
      )}
    </div>
  );
}

export default DisplayImage