import styled from "styled-components";
import { useUser } from "../features/Auth/useUser";
import { useUserEqualId } from "../features/Auth/useUserEqualId";


const UserBox = styled.div`
    display:flex;
    align-items: center;
    gap:.7rem;
`

export const StyledUserProfile = styled.img`
    width:2.5rem;
`

export default function UserProfile({userUid, src, alt, position = "left", type }) {
    const {user} = useUser();
    const {userEqualId} = useUserEqualId()

    console.log(user.nickname, userEqualId)

    const jakisUser = userEqualId?.find((el) => el?.userUid === userUid && el.nickname) 
    // const nazwaJakiegosUsera = jakisUser ? 

    // const nickname = jakisUser ? userEqualId?.find((el) => el?.nickname)  : 'anon'

    // const username = user.sub === userUid || type !== "post" ? user.nickname : "an"
    // console.log( userEqualId?.find((el) => el?.userUid === user?.nickname))
    return (
        <UserBox>
            {position === "left" && <span><b>{nickname}</b></span>}
            <StyledUserProfile src={src} alt={alt} />
            {position === "right" && <span><b>{nickname}</b></span>}
        </UserBox>
    )
}
