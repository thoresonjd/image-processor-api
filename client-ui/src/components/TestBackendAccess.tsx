import React from 'react'
import { Button } from '@mui/material'
import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:6969/"
})

const TestBackendAccess: React.FC = () => {
  
  const getRequest = () => {
    api.get('/').then(res => {
      console.log(res.data)
    })
  }

  return (
    <Button onClick={()=>getRequest()}>Backend access</Button>
  )
}

export default TestBackendAccess
