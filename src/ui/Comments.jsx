import styled, { keyframes } from "styled-components"
import Post from "./Post"
import AddComment from "../features/Home/addComment"
import Comment from "./Comment"
import { useAppContext } from "../hooks/AppContext"
import Spinner from "./Spinner"

const slideComment = keyframes`
    from{
        transform:translateX(-100%)
    }
    to{
        transorm:translateX(0)
    }
`

const CommentBox = styled.div`
    width:25rem;
    background-color: #ffffff;
    border-radius:15px;
    padding:.5rem 1rem ;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    animation: ${slideComment} .15s linear;
`

function Comments({ postId }) {
    const { likes, user, post, comments } = useAppContext();


    const commentsPost = comments
        ?.filter(comment => comment?.postId === parseInt(postId))
        ?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        || [];

    if(!post) return (
        <CommentBox>
            <span><Spinner/></span>
        </CommentBox>
    )

    return (
        <CommentBox>
            <Post post={post} likes={likes} comments={comments} />
            <AddComment />
            {commentsPost?.length > 0
                ? commentsPost?.map((comment) => <Comment user={user} postUserUid={comment.userUid} key={comment.commentId} comment={comment} />)
                : <span>Add first Comment!</span>
            }
        </CommentBox>
    )
}

export default Comments
