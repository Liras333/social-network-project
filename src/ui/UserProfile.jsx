import styled from "styled-components";
import { useUser } from "../features/Auth/useUser";
import { useUserUid } from "../features/Auth/useUserUid";


const UserBox = styled.div`
    display:flex;
    align-items: center;
    gap:.7rem;
    cursor: pointer;
`

export const StyledUserProfile = styled.img`
    width:2.5rem;
`

export default function UserProfile({ postUserUid, src, alt, position = "left", type }) {
    const { user } = useUser();
    const { userUid } = useUserUid()

    const postUser = userUid?.find((el) => el?.userUid === postUserUid)
    const nickname = postUser?.nickname ? postUser?.nickname : type !== "post" ? user.nickname : 'anon'

    return (
        <UserBox>
            {position === "left" && <span><b>{nickname}</b></span>}
            <StyledUserProfile src={src} alt={alt} />
            {position === "right" && <span><b>{nickname}</b></span>}
        </UserBox>
    )
}
