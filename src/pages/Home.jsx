import { Container, Stack } from "@mui/material";
import Header from "../components/Header";
import Loading from "../components/Loading";
import PizzaCard from "../components/PizzaCard";
import { useGlobalContext } from "../context/GlobalContext";

const Home = () => {
    const { pizzas, loading } = useGlobalContext();

    if(loading) return <Loading />

    return (
        <>
            <Header />
            <Container
                maxWidth="xl"
                sx={{ margin: "2rem auto" }}
            >
                <Stack
                    direction="row"
                    gap="2rem"
                    flexWrap="wrap"
                    justifyContent="center"
                >
                    {pizzas.map((item) => (
                        <PizzaCard
                            key={item.id}
                            pizza={item}
                        />
                    ))}
                </Stack>
            </Container>
        </>
    );
};

export default Home;
