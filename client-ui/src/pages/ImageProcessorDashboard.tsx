import React, {useState} from "react";
import { AppBar, Toolbar } from '@mui/material'
import TransformImage from "../components/TransformImage";
import DisplayImage from "../components/DisplayImage";
import UploadImage from "../components/UploadImage";

const ImageProcessorDashboard: React.FC = () => {

  const [image, setImage] = useState<string | undefined>(undefined)

  return (
    <>
      <AppBar position='static'>
        <Toolbar sx={{margin: '0 auto'}}>
          <UploadImage setImage={setImage} />
        </Toolbar>
      </AppBar>
      <div className='dashboard'>
        <TransformImage setImage={setImage}/>
        <DisplayImage image={image}/>
      </div>
    </>
  )
}

export default ImageProcessorDashboard