import { Container } from '@mui/material'
import React from 'react'
import PizzaDetail from '../components/PizzaDetail'
import { useGlobalContext } from '../context/GlobalContext'

const Cart = () => {
  const {pizzas} = useGlobalContext()
  return (
    <Container maxWidth="lg">
      {pizzas.map((item) => <PizzaDetail pizza={item} />)}
    </Container>
  )
}

export default Cart