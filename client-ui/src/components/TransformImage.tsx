import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, Box } from '@mui/material'
import MIMETypes from '../constants/MIMETypes'
import TransformationForm from './TransformationForm'

/*** API endpoint ***/

const api = axios.create({
  baseURL: 'http://localhost:2022/image-processor'
})

/*** Image transformation component ***/

interface Props {
  image: string | undefined,
  origImage: string | undefined,
  setImage: Function
}

const TransformImage: React.FC<Props> = ({image, origImage, setImage}) => {

  /*** Redirect handler ***/

  const redirect = useNavigate()

  /*** Transformations ***/

  const [flipHorizontal, setFlipHorizontal] = useState<boolean>(false)
  const [flipVertical, setFlipVertical] = useState<boolean>(false)
  const [resize, setResize] = useState<number[]>([])
  const [rotate, setRotate] = useState<number>(0)
  const [rotateLeft, setRotateLeft] = useState<boolean>(false)
  const [rotateRight, setRotateRight] = useState<boolean>(false)
  const [thumbnail, setThumbnail] = useState<boolean>(false)
  const [grayscale, setGrayscale] = useState<boolean>(false)
  const [grayscalePercentage, setGrayscalePercentage] = useState<number>(0)
  const [saturation, setSaturation] = useState<number>(1)

  /*** Handle image transformations ***/

  const postRequest = () => {
    let req = constructJsonPostRequest()
    api.post('/', req).then(res => {
      let img = attachMediaTypePrefix(res.data['image'])
      setImage(img)
    }).catch(err => {
      console.log(err.response.data, err.response.status)
      redirect('/error')
    })
  }

  const getExtensionFromMimeType = (b64: string) => {
    for (var mimeType in MIMETypes) {
      if (b64.indexOf(mimeType) === 0) {
        return MIMETypes[mimeType];
      }
    }
  }

  const truncateMediaTypePrefix = (b64Image: string | undefined) => {
    if (!b64Image) return;
    const pattern = /data:image\/.{3,4};base64,/
    let b64Truncated = b64Image?.replace(pattern, '')
    return b64Truncated
  }

  const attachMediaTypePrefix = (b64Image: string | undefined) => {
    if (!b64Image) return
    let extension = getExtensionFromMimeType(b64Image)
    let b64Extended = 'data:image/'+ extension +';base64,' + b64Image
    return b64Extended
  }

  const constructJsonPostRequest = () => {
    let transformations = Array<string | object>()

    if (flipHorizontal) transformations.push('flip-horizontal')
    if (flipVertical) transformations.push('flip-vertical')
    if (resize.length === 2) transformations.push('resize(' + resize[0] + ',' + resize[1] + ')')
    if (rotateLeft) transformations.push('rotate-left')
    if (rotateRight) transformations.push('rotate-right')
    if (rotate) transformations.push('rotate(' + rotate + ')')
    if (thumbnail) transformations.push('thumbnail')
    if (grayscale) transformations.push('grayscale')
    if (grayscalePercentage) transformations.push('grayscale-percentage(' + grayscalePercentage + ')')
    if (saturation !== 1) transformations.push('saturate(' + saturation + ')')

    let jsonRequest = {
      'image': truncateMediaTypePrefix(image),
      'transformations': [...transformations]
    }

    return jsonRequest
  }

  /*** Reset image to original ***/

  const resetImage = () => {
    if (!origImage || image === origImage) return
    setImage(origImage)
  }

  /*** Clear input fields ***/

  const clearInputFields = () => {
    setFlipHorizontal(false)
    setFlipVertical(false)
    setResize([])
    setRotate(0)
    setRotateLeft(false)
    setRotateRight(false)
    setThumbnail(false)
    setGrayscale(false)
    setGrayscalePercentage(0)
    setSaturation(1)
  }

  /*** Render ***/

  return (
    <div className='transformation-tools'>
      <h1>Transformations</h1>
      <TransformationForm
        flipHorizontal={flipHorizontal}
        flipVertical={flipVertical}
        setFlipHorizontal={setFlipHorizontal}
        setFlipVertical={setFlipVertical}
        resize={resize}
        setResize={setResize}
        rotate={rotate}
        rotateLeft={rotateLeft}
        rotateRight={rotateRight}
        setRotate={setRotate}
        setRotateLeft={setRotateLeft}
        setRotateRight={setRotateRight}
        thumbnail={thumbnail}
        setThumbnail={setThumbnail}
        grayscale={grayscale}
        setGrayscale={setGrayscale}
        grayscalePercentage={grayscalePercentage}
        setGrayscalePercentage={setGrayscalePercentage}
        saturation={saturation}
        setSaturation={setSaturation}
      />
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Button color='warning' variant='outlined' onClick={() => postRequest() }>
          POST request
        </Button>
      </Box>
      <br />
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Button color='secondary' variant='outlined' onClick={() => clearInputFields() }>
          Clear Fields
        </Button>
      </Box>
      <br />
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Button color='error' variant='outlined' onClick={() => resetImage()}>
          Reset Image
        </Button>
      </Box>
    </div>
  );
}

export default TransformImage
