import styled from "styled-components"
import { usePosts } from "./usePosts";
import Post from "../../ui/Post"
import AddPost from "./AddPost"

const StyledHomePosts = styled.div`
    width:47rem;
    margin: 0 auto;
`

// const posts = [
//     {
//         id: 1,
//         title: "Post 1",
//         content: "This is the content of post 1.",
//         likes: 10,
//         comments: 5,
//     },
//     {
//         id: 2,
//         title: "Post 2",
//         content: "This is the content of post 2. It can be longer than the first post to demonstrate how it looks with more text. It can also include more details or information about the topic being discussed.",
//         likes: 30,
//         comments: 15
//     },
//     {
//         id: 3,
//         title: "Post 3",
//         content: "This is the content of post 3. It can be anything you want to share with your audience. Posts can vary in length and content, providing a platform for users to express their thoughts, ideas, or updates. It can include images, links, or any other media to enhance the message being conveyed.",
//         likes: 30,
//         comments: 15
//     },
//     {
//         id: 4,
//         title: "Post 4",
//         content: "This is the content of post 3. It can be anything you want to share with your audience. Posts can vary in length and content, providing a platform for users to express their thoughts, ideas, or updates. It can include images, links, or any other media to enhance the message being conveyed.",
//         likes: 30,
//         comments: 15
//     }
// ]
function HomePosts() {
    const { posts, isLoading, error } = usePosts();

    console.log(posts)

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <StyledHomePosts>
            <AddPost />
            {posts.map(post => (
                <Post key={post.postId} post={post} />
            ))}
        </StyledHomePosts>
    )
}

export default HomePosts
