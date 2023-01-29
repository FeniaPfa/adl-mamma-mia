import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import PizzaDetail from '../components/PizzaDetail'
import { useGlobalContext } from '../context/GlobalContext'

const Cart = () => {
  const {pizzas} = useGlobalContext()
  return (
    <Container maxWidth="md" sx={{margin:"2rem auto"}}>
      <Typography variant='h4'>Detalles del pedido:</Typography>
      <Stack gap="2rem">

      {pizzas.map((item) => <PizzaDetail pizza={item} />)}
      </Stack>
    </Container>
  )
}

export default Cart