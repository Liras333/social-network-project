import styled from "styled-components"
import UserProfile from "./UserProfile"

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

function Comment({ comment, postUserUid }) {
    return (
        <StyledComment>
            <UserProfile position="right" postUserUid={postUserUid} />
            <p>{comment.content}</p>
        </StyledComment>
    )
}

export default Comment
