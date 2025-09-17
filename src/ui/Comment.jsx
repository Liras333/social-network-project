import styled from "styled-components"
import UserProfile from "./UserProfile"
import { BiX } from "react-icons/bi"
import { useAppContext } from "../hooks/AppContext"
import { useDeleteComment } from "../features/Home/useDeleteComment"

const StyledComment = styled.div`
    background-color: rgb(236, 244, 246);

    height:auto;
    border-radius: 10px;
    padding: 1rem;

    & hr {
        border: none;
        border-top: 1px solid #ccc;
        margin: .5rem 0;
    }

    & p {
        padding:.5rem 0
    }

`

const UserAndClose = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`

function Comment({ comment, postUserUid }) {
    const { user } = useAppContext()
    const { deleteComment, isDeletingComment } = useDeleteComment()

    function onDeleteComment() {
        deleteComment(comment.commentId)
    }

    return (
        <StyledComment>
            <UserAndClose>
                <UserProfile position="right" postUserUid={postUserUid} />
                {
                    user.sub === comment.userUid
                    && <span style={{ cursor: 'pointer' }} onClick={onDeleteComment}>
                        {isDeletingComment
                            ? <span>wait...</span>
                            : < BiX />
                        }
                    </span>}

            </UserAndClose>
            <p>{comment.content}</p>

        </StyledComment>
    )
}

export default Comment
