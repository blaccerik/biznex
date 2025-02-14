import { Box } from "@mui/material";
import { ReactNode } from "react";


type Props = {
    children: ReactNode;
};

export const Wrapper = ({ children }: Props) => {
    return (
        <Box
            border="1rem solid black"
            height="100vh"
            width="100vw"
            padding="3rem"
            overflow="auto"
            sx={{
                "&::-webkit-scrollbar": {
                    width: "10px",
                },
                "&::-webkit-scrollbar-track": {
                    background: "lightgray",
                },
                "&::-webkit-scrollbar-thumb": {
                    background: "darkgray",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                    background: "gray",
                }
            }}
        >
            {children}
        </Box>
    );
};


export default Wrapper;
