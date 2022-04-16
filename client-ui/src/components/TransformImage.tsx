import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from '@mui/material'
import MimeTypes from '../constants/MimeTypes'
import TransformationForm from './TransformationForm'

const api = axios.create({
  baseURL: 'http://localhost:6969/'
})

interface Props {
  image: string | undefined,
  setImage: Function
}

const TransformImage: React.FC<Props> = ({image, setImage}) => {

  const [transformedImage, setTransformedImage] = useState<string | undefined>(image)
  const [flipHorizontal, setFlipHorizontal] = useState<boolean>(false)
  const [flipVertical, setFlipVertical] = useState<boolean>(false)
  const [resize, setResize] = useState<number[]>([])
  const [rotate, setRotate] = useState<number>(0)
  const [rotateLeft, setRotateLeft] = useState<boolean>(false)
  const [rotateRight, setRotateRight] = useState<boolean>(false)
  const [thumbnail, setThumbnail] = useState<boolean>(false)
  const [grayscale, setGrayscale] = useState<boolean>(false)
  const [saturation, setSaturation] = useState<number>(1)

  useEffect(() => (
    setImage(transformedImage)
  ), [transformedImage, setImage])

  const getExtensionFromMimeType = (b64: string) => {
    for (var mimeType in MimeTypes) {
      if (b64.indexOf(mimeType) === 0) {
        return MimeTypes[mimeType];
      }
    }
  }

  const truncateIdentifierPrefix = (b64Image: string | undefined) => {
    const pattern = /data:image\/.{3,4};base64,/
    let b64Truncated = b64Image?.replace(pattern, '')
    return b64Truncated
  }

  const attachIdentifierPrefix = (b64Image: string | undefined) => {
    if (!b64Image) return
    let extension = getExtensionFromMimeType(b64Image)
    let b64Extended = 'data:image/'+ extension +';base64,' + b64Image
    return b64Extended
  }

  const constructJsonPostRequest = () => {
    // TODO: Construct JSON based on frontend interaction
    let transformations = Array<string | object>()

    if (flipHorizontal) transformations.push('flip-horizontal')
    if (flipVertical) transformations.push('flip-vertical')
    if (resize.length === 2) transformations.push({'resize': resize})
    if (rotate) transformations.push({'rotate': rotate})
    if (rotateLeft) transformations.push('rotate-left')
    if (rotateRight) transformations.push('rotate-right')
    if (thumbnail) transformations.push('thumbnail')
    if (grayscale) transformations.push('grayscale')
    if (saturation) transformations.push({'saturate': saturation})

    let jsonRequest = {
      'image': truncateIdentifierPrefix(image),
      'transformations': [...transformations]
    }

    return jsonRequest
  }

  const postRequest = () => {
    let req = constructJsonPostRequest()
    api.post('/', req).then(res => {
      let img = attachIdentifierPrefix(res.data['image'])
      setTransformedImage(img)
    })
  }

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
        saturation={saturation}
        setSaturation={setSaturation}
      />
      <Button onClick={()=>postRequest()}>POST request</Button>
    </div>
  );
}

export default TransformImage

const structure = {
  'image': 'image',
  'transformations': [
    'thumbnail',
    'grayscale',
    'flip-horizontal',
    'flip-vertical',
    'rotate-left',
    'rotate-right',
    {'rotate': 'degrees'},
    {'resize': ['width', 'height']},
    {'saturate': 'value'}
  ]
}
