import { Box, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Box
      bgcolor="red"
      width="100%"
      height="100%"
      style={{
        backgroundImage: 'url(images/image.png)',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      alignItems="center"
      justifyContent="center"
      display="flex"
    >
      <Typography variant="h3" color="white">Anna raha siia!</Typography>
    </Box>
  );
}


export default Home;