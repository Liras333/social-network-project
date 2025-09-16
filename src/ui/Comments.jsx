import styled, { keyframes } from "styled-components"
import { useOnePost } from "../features/Home/useOnePost"
import Post from "./Post"
import AddComment from "../features/Home/addComment"
import Comment from "./Comment"
import { useUser } from "../features/Auth/useUser"
import { useAppContext } from "../hooks/AppContext"

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

function Comments({ postId, comments }) {
    const { likes } = useAppContext();

    const { post, isLoading: isLoadingPost } = useOnePost(postId)

    const { user } = useUser()


    const commentsPost = comments
        ?.filter(comment => comment?.postId === parseInt(postId))
        ?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        || [];

    if (isLoadingPost) return null

    return (
        <CommentBox>
            <Post post={post} likes={likes} />
            <AddComment />
            {commentsPost?.length > 0
                ? commentsPost?.map((comment) => <Comment user={user} postUserUid={comment.userUid} key={comment.commentId} comment={comment} />)
                : <span>Add first Comment!</span>
            }
        </CommentBox>
    )
}

export default Comments
