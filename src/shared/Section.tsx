import { Box } from "@mui/material";
import { ReactNode } from "react";
import { SECTION_WIDTH } from "../constants";

type Props = {
    children: ReactNode;
};

export const Section = ({ children }: Props) => {
    return (
        <Box
            // bgcolor="yellow"
            width={SECTION_WIDTH}
        >
            {children}
        </Box>
    );
};

export default Section;