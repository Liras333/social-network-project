import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    height:60px;
    padding:1rem;
    /* background-color: var(--color-green-4); */
    background-color: #0d668a;
    color: var(--color-blue-0);
    display:flex;
    justify-content: space-between;
    align-items: center;
`

function Header(){
  return(
    <StyledHeader>
        <img src="logo.ico" alt="Logo" />
        <input type="text" placeholder="Search" />

        <div>
            <span>User</span>
            <img src="userLogo.png" />
        </div>
    </StyledHeader>
  )
}

export default Header;