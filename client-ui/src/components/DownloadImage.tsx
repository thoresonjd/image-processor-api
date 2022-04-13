import React from 'react'
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download'

interface Props {
  image: string | undefined
}

const DownloadImage: React.FC<Props> = ({image}) => {

  const decodeBase64 = () => {
    // TODO: Convert Base64 to file
  }

  const download = () => {
    // TODO: Implement download
  }

  const DownloadButton = () => {
    return (
      <Button>
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
