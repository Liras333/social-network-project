import styled from "styled-components"
import { useOnePost } from "../features/Home/useOnePost"
import Post from "./Post"
import Spinner from "./Spinner"
import { useLikes } from "../features/Home/useLikes"
import AddComment from "../features/Home/addComment"
import { useComments } from "../features/Home/useComments"
import Comment from "./Comment"

const CommentBox = styled.div`
    width:25rem;
    height:100dvh;
    background-color: #ffffff;
    border-radius:15px;
    padding:1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`


function Comments({ postId }) {
    const { post, isLoading: isLoadingPost } = useOnePost(postId)
    const { likes } = useLikes()
    const { comments, isLoading } = useComments(postId);

    if (isLoadingPost) return <Spinner type="small" />
    console.log(comments)

    return (
        <CommentBox>
            <Post post={post} likes={likes} />
            <AddComment />
            {comments?.map((comment) => <Comment key={comment.commentId} comment={comment} />)}
        </CommentBox>
    )
}

export default Comments
