import styled from "styled-components";
import { useUser } from "../features/Auth/useUser";
import { useUserUid } from "../features/Auth/useUserUid";
import { useNavigate } from "react-router-dom";


const UserBox = styled.div`
    display:flex;
    align-items: center;
    gap:.7rem;
    cursor: pointer;
`

export const StyledUserProfile = styled.img`
    width:2.5rem;
`

export default function UserProfile({ postUserUid, alt, position = "left", type }) {
    
    const navigate = useNavigate();

    const { user } = useUser();
    const { userUid } = useUserUid()
    const postUser = userUid?.find((el) => el?.userUid === postUserUid)
    const nickname = postUser?.nickname ? postUser?.nickname : type !== "post" ? user?.nickname : 'anon'



    function handleClick() {
        navigate(`/user/`);
    }

    return (
        <UserBox onClick={handleClick}>
            {position === "left" && <span><b>{nickname}</b></span>}
            <StyledUserProfile src="/default-profile-picture.png" alt={alt} />
            {position === "right" && <span><b>{nickname}</b></span>}
        </UserBox>
    )
}
