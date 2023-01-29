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

  const {total, totalPizzaCount} = useGlobalContext()


  const activeStyle = {
    color: "#ffea00",
    fontWeight: "bold",
  };

  const activeLink = ({ isActive }) =>
    isActive ? activeStyle : { color: "white" };

  return (
    <AppBar
      position="static"
      component="nav"
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack
            direction="row"
            sx={{ alignItems: "center", gap: ".8rem" }}
          >
            <span>🍕</span>
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
            >
              Mamma mia!!
            </Typography>
          </Stack>
          <Stack
            direction="row"
            gap="1.2rem"
            sx={{"> a": { color: "#fff" } }}
          >
            <Link
              style={activeLink}
              to="/"
              component={NavLink}
            >
              Home
            </Link>
            <Link
              style={activeLink}
              to="/carrito"
              component={NavLink}
              sx={{display: "flex"}}
            >
              <Badge badgeContent={totalPizzaCount} color="warning">
              <ShoppingCartIcon />

              </Badge>
            </Link>
              <Typography variant="body1">{total}</Typography>

          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
