import Wrapper from "../shared/Wrapper";
import Navbar from "../components/Navbar";
import Section from "../shared/Section";
import { Post, PostsResponse } from "../types";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState } from "react";
import axios from "axios";
import Infobox from "../components/article/Infobox";
import { Box } from "@mui/material";
import { SECTION_NUMBER } from "../constants";


export const Home = () => {

  const breakPoints: Record<number, number> = {};
  for (let index = 1; index <= SECTION_NUMBER; index++) {
    breakPoints[400 * index] = index;
  }

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<PostsResponse>('https://dummyjson.com/posts')
      .then(response => {
        console.log(response.data.posts[0]);

        const data: Post[] = [
          {
            id: 0,
            title: "Poiss",
            body: "Su bunsid on minu omad",
            tags: [],
            views: 0,
            userId: 0,
            imageUrl: "/images/image.png",
            user: "erik"
          },
          ...response.data.posts.map((post) => ({
            ...post,
            user: "paap",
            imageUrl: `https://picsum.photos/${(post.views % 500) + 500}/${((post.views * post.id) % 500) + 600}`
          }))
        ]
        setPosts(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <Wrapper>
      <Box display="flex" justifyContent="center">
        <Box
          width="100%"
          maxWidth="1800px"
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={breakPoints}
          >
            <Masonry>
              <Navbar />
              {posts.map((post) => (
                <Section key={post.title}>
                  <Infobox post={post} />
                </Section>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Box>
      </Box>

    </Wrapper>
  );
}

export default Home;