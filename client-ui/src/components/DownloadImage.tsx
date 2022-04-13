import React from 'react'
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download'
import { saveAs } from 'file-saver'

interface Props {
  image: string | undefined
}

const DownloadImage: React.FC<Props> = ({image}) => {

  const download = () => {
    if (!image) return
    saveAs(image, 'image.png')
  }

  const DownloadButton = () => {
    return (
      <Button onClick={() => download()}>
        <DownloadIcon />
        Download Image
      </Button> 
    );
  }

  return (
    <DownloadButton />
  );
}

export default DownloadImage
