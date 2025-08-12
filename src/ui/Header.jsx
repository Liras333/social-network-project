import styled from "styled-components";
import  SearchInput from "./SearchInput";
import { ProfileImg } from "./ProfileImg";

const StyledHeader = styled.header`
    width: 100%;
    height:60px;
    padding:1rem;
    background-color:white;
    color: var(--color-blue-0);
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d6d5ff;
    grid-area: 1 / 1 / 1 / 3 ;
`

const UserBox = styled.div`
    display:flex;
    align-items: center;
    gap:1rem;
    padding: .3rem 1rem;
`


function Header() {
  return (
    <StyledHeader>
      <img src="logo.png" alt="Logo" />
      <SearchInput type="text" placeholder="Search" />

      <UserBox >
        <span>User</span>
        <ProfileImg src="./default-profile-picture.png" />
      </UserBox>
    </StyledHeader>
  )
}

export default Header;