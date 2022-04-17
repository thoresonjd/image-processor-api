import React from 'react'
import { Zoom } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image';

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
        <ImageIcon fontSize='large' />
      )}
    </div>
  );
}

export default DisplayImage