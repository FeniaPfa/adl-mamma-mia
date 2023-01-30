import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import PizzaDetail from '../components/PizzaDetail'
import { useGlobalContext } from '../context/GlobalContext'

const Cart = () => {
  const {pizzas, total, formatNumber} = useGlobalContext()
  return (
    <Container maxWidth="md" sx={{margin:"2rem auto"}}>
      <Typography variant='h4' fontWeight="bold">Detalles del pedido:</Typography>
      <Stack gap="2rem" sx={{margin:"1rem auto",padding: "2rem", background: "#fff"}}>

      {pizzas.map((item) => <PizzaDetail key={item.id} pizza={item} />)}
      </Stack>
      <Stack alignItems="flex-start" mt="1.2rem" gap="1rem">
        <Typography variant='h4'>Total: $ {formatNumber(total)}</Typography>
        <Button variant="contained" size='large'>Ir a Pagar</Button>
      </Stack>
    </Container>
  )
}

export default Cart