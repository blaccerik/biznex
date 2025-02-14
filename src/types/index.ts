export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    views: number;
    userId: number;
    imageUrl: string;
}

export interface PostsResponse {
    posts: Post[];
}