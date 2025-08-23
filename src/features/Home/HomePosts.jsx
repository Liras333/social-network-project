import styled from "styled-components"
import { usePosts } from "./usePosts";
import Post from "../../ui/Post"
import AddPost from "./AddPost"
import SkeletonLoader from "../../ui/SkeletonLoader";




const StyledHomePosts = styled.div`
    width:47rem;
    margin: 0 auto;

`

function HomePosts() {
    const { posts, isLoading } = usePosts();



    if (isLoading) {
        return (
            <StyledHomePosts>
                <SkeletonLoader />
            </StyledHomePosts>
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
