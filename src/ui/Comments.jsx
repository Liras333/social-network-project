import styled from "styled-components"
import { useOnePost } from "../features/Home/useOnePost"
import Post from "./Post"
import Spinner from "./Spinner"
import { useLikes } from "../features/Home/useLikes"
import AddComment from "../features/Home/addComment"

const CommentBox = styled.div`
    width:25rem;
    height:100dvh;
    background-color: #ffffff;
    border-radius:15px;
    padding:1rem ;
`


function Comments({ postId }) {
    const { post, isLoading: isLoadingPost } = useOnePost(postId)
    const {likes} = useLikes()
    console.log(post?.[0])

    if(isLoadingPost) return <Spinner type="small"/>

    return (
        <CommentBox>
            <Post post={post?.[0]} likes={likes} />
            <AddComment />
        </CommentBox>
    )
}

export default Comments
