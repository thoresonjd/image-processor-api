import React from 'react'
import { Button } from '@mui/material'
import UploadIcon from '@mui/icons-material/Upload'
import SupportedExtensions from '../constants/SupportedExtensions'

interface Props {
  setImage: Function
}

const UploadImage: React.FC<Props> = ({setImage}) => {

  const hasValidExtension = (filename: string) => {
    let tokens = filename.split('.')
    if (tokens.length < 2)
      return false
    return SupportedExtensions.includes(tokens[1])
  }

  const encodeBase64 = (file: any) => {
    return new Promise<string> ((resolve,reject)=> {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString() || '');
      reader.onerror = error => reject(error);
    })
  }

  const selectedFileHandler = (event: React.BaseSyntheticEvent) => {
    let files = event.target.files
    if (!files || !files[0] || !hasValidExtension(files[0].name))
      return
    encodeBase64(event.target.files[0]).then(
      b64Image => setImage(b64Image)
    )
  }

  const UploadButton = () => {
    return (
      <>
        <input
          hidden
          id="upload-image"
          name="upload-image"
          type="file"
          onChange={selectedFileHandler}
        />
        <label htmlFor="upload-image">
          <Button variant='contained' component='span'>
            <UploadIcon />
            Upload Image
          </Button>
        </label>
      </>
    ); 
  }

  return (
    <UploadButton />
  );
}

export default UploadImage
