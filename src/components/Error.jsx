import { Alert, AlertTitle, Container } from "@mui/material";
import React from "react";

const Error = () => {
    return (
        <Container maxWidth="md" sx={{ margin: "3rem auto" }}>
            <Alert variant="filled" severity="error">
                <AlertTitle>Error</AlertTitle>
                Pizza <strong>no encontrada</strong>
            </Alert>
        </Container>
    );
};

export default Error;
