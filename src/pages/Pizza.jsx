import { Container } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

const Pizza = () => {

  const {id} = useParams()

  return (
    <Container maxWidth="lg">
      <h1>Picsa</h1>

    </Container>
  )
}

export default Pizza