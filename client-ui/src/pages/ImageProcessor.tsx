import React, {useState} from "react";
import { AppBar, Toolbar } from '@mui/material';
import { UploadImage, DownloadImage, TransformImage, DisplayImage } from '../components';

const ImageProcessor: React.FC = () => {

  const [image, setImage] = useState<string | undefined>(undefined)

  return (
    <>
      <AppBar position='static'>
        <Toolbar sx={{margin: '0 auto'}}>
          <UploadImage setImage={setImage} />
          <DownloadImage image={image}/>
        </Toolbar>
      </AppBar>
      <div className='dashboard'>
        <TransformImage image={image} setImage={setImage}/>
        <DisplayImage image={image}/>
      </div>
    </>
  )
}

export default ImageProcessor