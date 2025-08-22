import styled from "styled-components"
import { usePosts } from "./usePosts";
import Post from "../../ui/Post"
import AddPost from "./AddPost"
import Spinner from "../../ui/Spinner";

const StyledHomePosts = styled.div`
    width:47rem;
    margin: 0 auto;
`

function HomePosts() {
    const { posts, isLoading, error } = usePosts();



    if (isLoading) {
        return (
            <>
                <Spinner />
                <Spinner />
                <Spinner />
                <Spinner />
            </>
        )
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
