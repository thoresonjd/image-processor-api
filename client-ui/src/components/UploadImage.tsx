import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import UploadIcon from '@mui/icons-material/Upload'

const validExtensions = ['jpg', 'jpeg', 'png', 'gif']

interface Props {
  setImage: Function
}

const UploadImage: React.FC<Props> = ({setImage}) => {

  const [uploadedImage, setUploadedImage] = useState<string | undefined>(undefined)  

  useEffect(() => (
    setImage(uploadedImage)
  ), [uploadedImage, setImage])

  const hasValidExtension = (filename: string) => {
    let tokens = filename.split('.')
    if (tokens.length === 0) 
      return false
    return validExtensions.includes(tokens[tokens.length - 1])
  }

  const encodeBase64 = (file: any) => {
    return new Promise<string> ((resolve,reject)=> {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString() || '');
      reader.onerror = error => reject(error);
  })
 }

  const fileSelectedHandler = (event: React.BaseSyntheticEvent) => {
    if (!hasValidExtension(event.target.files[0].name)) return
    if (event.target.files && event.target.files[0])
      encodeBase64(event.target.files[0]).then(data => setUploadedImage(data))
  }

  const UploadButton = () => {
    return (
      <>
        <input
          style={{ display: 'none' }}
          id="upload-image"
          name="upload-image"
          type="file"
          onChange={fileSelectedHandler}
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
