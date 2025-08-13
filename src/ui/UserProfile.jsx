import styled from "styled-components";


const UserBox = styled.div`
    display:flex;
    align-items: center;
    gap:.7rem;
`

export const StyledUserProfile = styled.img`
    width:2.5rem;

`

export default function UserProfile({ src, alt, position = "left" }) {
    return (
        <UserBox>
            {position === "left" && <span><b>User</b></span>}
            <StyledUserProfile src={src} alt={alt} />
            {position === "right" && <span><b>User</b></span>}
        </UserBox>
    )
}
