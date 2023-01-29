import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import PizzaDetail from '../components/PizzaDetail'
import { useGlobalContext } from '../context/GlobalContext'

const Cart = () => {
  const {pizzas, total} = useGlobalContext()
  return (
    <Container maxWidth="md" sx={{margin:"2rem auto"}}>
      <Typography variant='h4'>Detalles del pedido:</Typography>
      <Stack gap="2rem">

      {pizzas.map((item) => <PizzaDetail key={item.id} pizza={item} />)}
      </Stack>
      <Stack alignItems="flex-start" mt="1rem" gap="1rem">
        <Typography variant='h4'>Total: {total}</Typography>
        <Button variant="contained">Ir a Pagar</Button>
      </Stack>
    </Container>
  )
}

export default Cart