import { Box, CircularProgress } from "@mui/material";
import { Post } from "../../types";
import { useState } from "react";
import { SECTION_WIDTH } from "../../constants";
import { motion } from "framer-motion";

type Props = {
    post: Post;
};

export const Infobox = ({ post }: Props) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [hovered, setHovered] = useState(false);

    const add0 = (nr: number) => {
        return nr < 10 ? "0" + nr.toString() : nr.toString()
    }

    const dateToString = (date: Date) => {
        return `${add0(date.getDate())}.${add0(date.getMonth() + 1)}.${date.getFullYear()}`
    }

    return (
        <Box position="relative">
            {hovered && (
                <motion.div
                    style={{
                        position: "absolute"
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -20 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                >
                    <Box
                        display="flex" 
                        width={SECTION_WIDTH}
                        justifyContent="flex-end"
                        alignItems="center"
                        gap="10px"
                    >
                        <Box padding="5px 30px" bgcolor="gold" textTransform="capitalize">
                            {post.tags[0] !== undefined ? post.tags[0] : "unknown"}
                        </Box>
                        <Box>
                            By {post.user} / {dateToString(new Date(post.views ** 3))}
                        </Box>
                    </Box>
                </motion.div>
            )}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: hovered ? 20 : 0 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer"
                }}
            >
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
                            height: "100%",
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
            </motion.div>
        </Box>

    );
};

export default Infobox;