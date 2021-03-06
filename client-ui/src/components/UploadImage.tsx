import React from 'react'
import { Button } from '@mui/material'
import UploadIcon from '@mui/icons-material/Upload'
import SupportedExtensions from '../constants/SupportedExtensions'

interface Props {
  setImage: Function,
  setOrigImage: Function
}

const UploadImage: React.FC<Props> = ({setImage, setOrigImage}) => {

  const hasValidExtension = (filename: string) => {
    let tokens = filename.split('.')
    if (tokens.length < 2)
      return false
    return SupportedExtensions.includes(tokens[tokens.length - 1].toLowerCase())
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
      b64Image => {
        setImage(b64Image) 
        setOrigImage(b64Image)
      }
    )
  }

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
        <Button color='warning' variant='text' component='span'>
          <UploadIcon />
          Upload Image
        </Button>
      </label>
    </>
  );
}

export default UploadImage
