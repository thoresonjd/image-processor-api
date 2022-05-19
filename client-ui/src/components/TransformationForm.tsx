import React from 'react'
import { Box } from '@mui/material'
import Flip from './transformations/Flip'
import Resize from './transformations/Resize'
import Rotate from './transformations/Rotate'
import Thumbnail from './transformations/Thumbnail'
import Grayscale from './transformations/Grayscale'
import Saturation from './transformations/Saturation'

interface Props {
  flipHorizontal: boolean,
  flipVertical: boolean,
  setFlipHorizontal: Function,
  setFlipVertical: Function
  resize: number[],
  setResize: Function
  rotate: number,
  rotateLeft: boolean,
  rotateRight: boolean,
  setRotate: Function,
  setRotateLeft: Function,
  setRotateRight: Function
  thumbnail: boolean,
  setThumbnail: Function
  grayscale: boolean,
  setGrayscale: Function,
  grayscalePercentage: number,
  setGrayscalePercentage: Function,
  saturation: number,
  setSaturation: Function
}

const TransformationForm: React.FC<Props> = (props) => {
  return (
    <Box sx={{m: '10px'}} component="form" noValidate autoComplete="off">
      <Flip 
        flipHorizontal={props.flipHorizontal}
        flipVertical={props.flipVertical}
        setFlipHorizontal={props.setFlipHorizontal}
        setFlipVertical={props.setFlipVertical}
      />
      <Resize resize={props.resize} setResize={props.setResize}/>
      <Rotate 
        rotate={props.rotate}
        rotateLeft={props.rotateLeft}
        rotateRight={props.rotateRight}
        setRotate={props.setRotate}
        setRotateLeft={props.setRotateLeft}
        setRotateRight={props.setRotateRight}
      />
      <Thumbnail thumbnail={props.thumbnail} setThumbnail={props.setThumbnail}/>
      <Grayscale 
        grayscale={props.grayscale}
        grayscalePercentage={props.grayscalePercentage}
        setGrayscale={props.setGrayscale}
        setGrayscalePercentage={props.setGrayscalePercentage}
      />
      <Saturation saturation={props.saturation} setSaturation={props.setSaturation}/>
    </Box>
  );
}

export default TransformationForm
