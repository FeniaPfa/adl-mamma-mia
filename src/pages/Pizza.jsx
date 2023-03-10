import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Divider,
    List,
    ListItem,
    Stack,
    Typography,
} from "@mui/material";

import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context/GlobalContext";
import { useFetch } from "../hooks/useFetch";

const Pizza = () => {
    const { id } = useParams();
    const { pizzas, loading } = useFetch("/pizzas.json");
    const { formatNumber, addPizza } = useGlobalContext();

    let pizzaData = pizzas.find((item) => item.id === id);

    if (loading) return <Loading />;
    if (!pizzaData) return <Error />;
    return (
        <Container maxWidth="lg" sx={{ margin: "2rem auto" }}>
            <Card sx={{ display: "flex" }}>
                <CardMedia
                    component="img"
                    title={pizzaData.name}
                    image={pizzaData.img}
                    sx={{ width: "40%", objectFit: "cover" }}
                />
                <Box>
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            padding: "2rem",
                        }}
                    >
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            component="h1"
                        >
                            {pizzaData.name}
                        </Typography>
                        <Divider />
                        <Typography>{pizzaData.desc}</Typography>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            component="h2"
                        >
                            Ingredientes:
                        </Typography>
                        <List>
                            {pizzaData.ingredients.map((item) => (
                                <ListItem
                                    key={item}
                                    sx={{ paddingBlock: ".2rem" }}
                                >
                                    ???? {item}
                                </ListItem>
                            ))}
                        </List>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                component="h2"
                            >
                                Precio: $ {formatNumber(pizzaData.price)}
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => addPizza(pizzaData)}
                            >
                                A??adir
                            </Button>
                        </Stack>
                    </CardContent>
                </Box>
            </Card>
        </Container>
    );
};

export default Pizza;
