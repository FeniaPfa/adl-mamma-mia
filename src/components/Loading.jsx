import { CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
    return (
        <>
            <Stack
                justifyContent="center"
                alignItems="center"
                gap="3rem"
                sx={{ margin: "5rem auto" }}
            >
                <CircularProgress
                    size={200}
                    color="secondary"
                />
                <Typography
                    variant="h3"
                    component="span"
                    color="primary"
                >
                    Cargando pizzas...
                </Typography>
            </Stack>
        </>
    );
};

export default Loading;
