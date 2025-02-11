import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ minHeight: "4rem", height: "4rem"}}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Piznex
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;