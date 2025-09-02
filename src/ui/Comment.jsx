import styled from "styled-components"
import UserProfile from "./UserProfile"
import { useUser } from "../features/Auth/useUser"

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
    const {user} = useUser();
    return (
        <StyledComment>
            {
                user.sub === comment.userUid && <span>X</span>
            }
            <UserProfile position="right" postUserUid={postUserUid} />
            <p>{comment.content}</p>

        </StyledComment>
    )
}

export default Comment
