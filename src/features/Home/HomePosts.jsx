import styled from "styled-components"
import { usePosts } from "./usePosts";
import { useLikes } from "./useLikes";
import SkeletonLoader from "../../ui/SkeletonLoader";
import Post from "../../ui/Post"
import AddPost from "./AddPost"




const StyledHomePosts = styled.div`
    width:47rem;
    margin: 0 auto;
    
`

function HomePosts() {
    const { posts, isLoading } = usePosts();
    const {likes} = useLikes()


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
                    <Post key={post.postId} post={post} likes={likes} />
                ))}

        </StyledHomePosts>
    )
}

export default HomePosts
