import Wrapper from "../shared/Wrapper";
import Navbar from "../components/Navbar";
import Section from "../shared/Section";
import { Post, PostsResponse } from "../types";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState } from "react";
import axios from "axios";
import Infobox from "../components/article/Infobox";


export const Home = () => {

  const breakPoints: Record<number, number> = {};
  for (let index = 1; index < 8; index++) {
    breakPoints[400 * index] = index;
  }

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<PostsResponse>('https://dummyjson.com/posts')
      .then(response => {
        const data: Post[] = [
          {
            id: 0,
            title: "Poiss",
            body: "Su bunsid on minu omad",
            tags: [],
            views: 0,
            userId: 0,
            imageUrl: "/images/image.png"
          },
          ...response.data.posts.map((post) => ({ ...post, imageUrl: `https://picsum.photos/${(post.views % 500) + 500}/${((post.views * post.id) % 500) + 600}` }))
          ]
        setPosts(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <Wrapper>
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
    </Wrapper>
  );
}


export default Home;