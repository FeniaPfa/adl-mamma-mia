import { Container,  Stack } from '@mui/material';
import Header from '../components/Header';
import { useFetch } from '../hooks/useFetch';
import PizzaCard from '../components/PizzaCard';

const Home = () => {
  const { data } = useFetch('pizzas.json');
  return (
    <>
      <Header />
      <Container maxWidth="xl">

      <Stack direction="row" gap="2rem" flexWrap="wrap" justifyContent="center">



        {data.map((item) => (
          <PizzaCard key={item.id} item={item} />
        ))}
      </Stack>
        </Container>
    </>
  );
};

export default Home;
