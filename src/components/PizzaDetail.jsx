import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'

const PizzaDetail = ({pizza}) => {

  const { currentPizzas, addPizza, substractPizza } = useGlobalContext()
  const pizzaCart = currentPizzas.find(item => item.id === pizza.id)

  return (

    <Stack direction="row" justifyContent="space-around" >
      <Stack direction="row" gap="1rem" flexGrow="1" alignItems="center">

      <img src={pizza.img} alt={pizza.name} width="100"/>
      <Typography variant="h6">{pizza.name}</Typography>
      </Stack>
      <Stack direction="row"  gap="1rem" alignItems="center">
      <Typography variant="h6">{pizzaCart.unitaryTotal}</Typography>
      <Button variant="contained" color="secondary" size='small' onClick={() => substractPizza(pizza)}>-</Button>
      <Typography variant="h6">{pizzaCart.quantity}</Typography>
      <Button variant='contained' size="small" onClick={() => addPizza(pizza)}>+</Button>
      </Stack>
      
    </Stack>
  )
}

export default PizzaDetail