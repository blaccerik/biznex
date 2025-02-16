export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    views: number;
    userId: number;
    user: string;
    imageUrl: string;
}

export interface PostsResponse {
    posts: Post[];
}