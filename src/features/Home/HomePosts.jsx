import styled from "styled-components"
import { usePosts } from "./usePosts";
import { useUser } from "../Auth/useUser"
import SkeletonLoader from "../../ui/SkeletonLoader";
import Post from "../../ui/Post"
import AddPost from "./AddPost"
import { useComments } from "./useComments";
import { useAppContext } from "../../hooks/AppContext";

const StyledHomePosts = styled.div`
    width:47rem;
    margin: 0 auto;
`

function HomePosts() {
    const { likes, user } = useAppContext();
    const { posts, isLoading } = usePosts();
    const { comments } = useComments();



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
                <Post key={post.postId} post={post} likes={likes} user={user} comments={comments} />
            ))}

        </StyledHomePosts>
    )
}

export default HomePosts
