import { Container, Stack } from "@mui/material";
import Header from "../components/Header";
import PizzaCard from "../components/PizzaCard";

const Home = ({ pizzas }) => {
    return (
        <>
            <Header />
            <Container maxWidth="xl" sx={{ margin: "2rem auto" }}>
                <Stack
                    direction="row"
                    gap="2rem"
                    flexWrap="wrap"
                    justifyContent="center"
                >
                    {pizzas.map((item) => (
                        <PizzaCard key={item.id} pizza={item} />
                    ))}
                </Stack>
            </Container>
        </>
    );
};

export default Home;
