import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const PizzaDetail = ({pizza}) => {
  return (

    <Stack direction="row" justifyContent="space-around">
      <Stack direction="row" gap="1rem" flexGrow="1">

      <img src={pizza.img} alt={pizza.name} width="100"/>
      <Typography variant="h6">{pizza.name}</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" gap="1rem">
      <Typography variant="h6">{pizza.price}</Typography>
      <Button variant="contained" color="secondary" size='small'>-</Button>
      <Typography variant="h6">1</Typography>
      <Button variant='contained' size="small">+</Button>
      </Stack>
      
    </Stack>
  )
}

export default PizzaDetail