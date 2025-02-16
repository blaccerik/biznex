import { Typography, Button, Box, ButtonBase } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Section from "../shared/Section";

export const Navbar = () => {

  const navigate = useNavigate();

  return (
    <Section>
      <Box display="flex" flexDirection="column" mb="2rem" mt="5rem">
        <ButtonBase onClick={() => navigate("/")} disableRipple>
          <Box mb="1rem" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Typography
              sx={{ fontWeight: "bold", fontSize: "5rem", fontFamily: "'Poppins', sans-serif" }}
            >
              PIZNEX
            </Typography>
            <Typography
              sx={{ fontStyle: "italic", fontSize: "1rem", fontFamily: "'Dancing Script', cursive" }}
            >
              "Anna raha siia!"
            </Typography>
          </Box>
        </ButtonBase>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/menu">Menu</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Box>
      </Box>
    </Section>
  );
}

export default Navbar;