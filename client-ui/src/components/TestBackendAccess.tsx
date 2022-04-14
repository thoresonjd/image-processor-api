import React from 'react'
import { Button } from '@mui/material'
import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:6969/"
})

const TestBackendAccess: React.FC = () => {

  const postRequest = () => {
    api.post('/', {origin: 'react', method: 'post'}).then(res => {
      console.log(res.data)
    })
  }

  const getRequest = () => {
    api.get('/').then(res => {
      console.log(res.data)
    })
  }

  return (
    <>
      <Button onClick={()=>postRequest()}>POST request</Button>
      <Button onClick={()=>getRequest()}>GET request</Button>
    </>
  )
}

export default TestBackendAccess
