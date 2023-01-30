import {
    AppBar,
    Badge,
    Container,
    Link,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const Navbar = () => {
    const { total, totalPizzaCount, formatNumber } = useGlobalContext();

    const activeStyle = {
        fontWeight: "bold",
    };

    const activeLink = ({ isActive }) =>
        isActive ? activeStyle : { color: "white" };

    return (
        <AppBar
            position="sticky"
            component="nav"
        >
            <Container maxWidth="lg">
                <Toolbar
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Stack
                        direction="row"
                        sx={{ alignItems: "center", gap: ".8rem" }}
                    >
                        <Typography
                            variant="h4"
                            component="h1"
                            fontWeight="bold"
                        >
                            🍕 Pizzería Mamma Mia!!
                        </Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        gap="1.2rem"
                        sx={{ "> a": { color: "#fff" } }}
                    >
                        <Link
                            variant="h5"
                            style={activeLink}
                            to="/"
                            component={NavLink}
                        >
                            Home
                        </Link>
                        <Link
                            variant="h5"
                            style={activeLink}
                            to="/carrito"
                            component={NavLink}
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            <Badge
                                badgeContent={totalPizzaCount}
                                color="secondary"
                            >
                                <ShoppingCartIcon />
                            </Badge>
                        </Link>
                        <Typography variant="h5">
                            $ {formatNumber(total)}
                        </Typography>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
