import React from 'react'
import { Zoom, Box } from '@mui/material'
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
        <Box sx={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
          <ImageOutlinedIcon fontSize='large' />
          Image Preview
        </Box>
      )}
    </div>
  );
}

export default DisplayImage