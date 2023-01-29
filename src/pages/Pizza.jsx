import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'

const Pizza = () => {
  const {id} = useParams()

  const {pizzas} = useGlobalContext()


  const pizzaData = pizzas.find(item => item.id === id)

  return (
    <Container maxWidth="lg">
      <h1>{pizzaData.name}</h1>
      <p>{pizzaData.desc}</p>

    </Container>
  )
}

export default Pizza