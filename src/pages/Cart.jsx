import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import PizzaDetail from "../components/PizzaDetail";
import { useGlobalContext } from "../context/GlobalContext";
import Swal from "sweetalert2";

const Cart = () => {
    const { pizzas, total, formatNumber } = useGlobalContext();

    const pay = () => {
        let timerInterval;
        Swal.fire({
            title: "Redirigiendo a su banco",

            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector("b");
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft();
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {

            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    };

    return (
        <Container
            maxWidth="md"
            sx={{ margin: "2rem auto" }}
        >
            <Typography
                variant="h4"
                fontWeight="bold"
            >
                Detalles del pedido:
            </Typography>
            <Stack
                gap="2rem"
                sx={{
                    margin: "1rem auto",
                    padding: "2rem",
                    background: "#fff",
                }}
            >
                {pizzas.map((item) => (
                    <PizzaDetail
                        key={item.id}
                        pizza={item}
                    />
                ))}
            </Stack>
            <Stack
                alignItems="flex-start"
                mt="1.2rem"
                gap="1rem"
            >
                <Typography variant="h4">
                    Total: $ {formatNumber(total)}
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    onClick={pay}
                >
                    Ir a Pagar
                </Button>
            </Stack>
        </Container>
    );
};

export default Cart;
