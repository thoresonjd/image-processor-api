import React, { useEffect, useState } from 'react'
import { Box, TextField } from '@mui/material'

interface Props {
  resize: number[],
  setResize: Function
}

const Resize: React.FC<Props> = (props) => {

  const [size, setSize] = useState<number[]>()
  const [width, setWidth] = useState<number | undefined>(undefined)
  const [height, setHeight] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (!height)
      setSize([])
    else if (width && height)
      setSize([width, height])
  }, [width, height])

  useEffect(() => {
    if (!width)
      setSize([])
    else if (width && height) 
      setSize([width, height])
  }, [width, height])

  useEffect(() => (
    props.setResize(size)
  ), [size, props])

  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Box sx={{width: '25%'}}>Resize</Box>
      <Box sx={{display: 'flex', width: '75%'}}>
        <TextField 
          label='Width'
          type='number'
          variant='outlined'
          size='small'
          onChange={e => setWidth(parseInt(e.target.value))}
        />
        <TextField
          label='Height'
          type='number'
          variant='outlined'
          size='small'
          onChange={e => setHeight(parseInt(e.target.value))}
        />
      </Box>
    </Box>
  )
}

export default Resize