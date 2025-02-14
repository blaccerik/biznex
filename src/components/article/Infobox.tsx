import { Box, CircularProgress } from "@mui/material";
import { Post } from "../../types";
import { useState } from "react";
import { SECTION_WIDTH } from "../../constants";

type Props = {
    post: Post;
};

export const Infobox = ({ post }: Props) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Box display="flex" flexDirection="column">
            <Box width="100%" overflow="hidden" position="relative">
                {!imageLoaded && (
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width={SECTION_WIDTH}
                        height="6rem"
                    >
                        <CircularProgress />
                    </Box>
                )}
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    onLoad={() => setImageLoaded(true)}
                    style={{
                        width: "100%",
                        height: "0%",
                        objectFit: "cover",
                        borderRadius: "4px",
                        display: imageLoaded ? "block" : "none",
                    }}
                />
            </Box>
            <Box padding="1rem">
                <Box fontSize="1.2rem" mb="0.5rem">
                    {post.title}
                </Box>
                <Box fontSize="0.7rem">{post.body}</Box>
            </Box>
        </Box>
    );
};

export default Infobox;