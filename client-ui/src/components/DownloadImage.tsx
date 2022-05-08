import React from 'react'
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download'
import { saveAs } from 'file-saver'

interface Props {
  image: string | undefined
}

const DownloadImage: React.FC<Props> = ({image}) => {

  const getExtension = () => {
    if (!image) return
    var extension = /\/.*;/.exec(image)![0]
    extension = extension.slice(1, extension.length - 1)
    return extension
  }

  const download = () => {
    if (!image) return
    saveAs(image, 'result.' + getExtension())
  }

  return (
    <Button color='secondary' onClick={() => download()}>
      <DownloadIcon />
      Download Image
    </Button> 
  );
}

export default DownloadImage
