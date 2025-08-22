import styled from "styled-components";
import SearchInput from "./SearchInput";
import UserProfile from "./UserProfile";

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


function Header() {
  return (
    <StyledHeader>
      <img src="logo.png" alt="Logo" />
      <SearchInput type="text" placeholder="Search" />

      <UserProfile src="/default-profile-picture.png" alt="User Profile" position="left" />
    </StyledHeader>
  )
}

export default Header;