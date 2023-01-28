import { Button, Card, CardContent, CardMedia, Divider, List, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'

const PizzaCard = ({item}) => {
  return (
    <Card key={item.id} sx={{ width: 300 }}>
    <CardMedia
      sx={{ height: 160 }}
      image={item.img}
      title={item.name}
      />
    <CardContent>
      <Stack gap=".5em">

      <Typography variant='h5' sx={{fontWeight: "bold"}}>{item.name}</Typography>
      <Divider variant='middle'/>
      <Typography variant='h6'>Ingredientes:</Typography>
      <List>
        {item.ingredients.map((item) =><ListItem key={item}>🍕 {item}</ListItem>)}
      </List>
      <Divider />
      <Typography variant='h4' textAlign="center" my="1rem">$ {item.price}</Typography>
      <Stack direction="row" gap="1rem" justifyContent="center">
        <Button variant="contained">Ver mas</Button>
        <Button variant="contained">Añadir</Button>
      </Stack>
      </Stack>
    </CardContent>
  </Card>
  )
}

export default PizzaCard