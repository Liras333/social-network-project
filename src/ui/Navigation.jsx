import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavigation = styled.aside`
    width:15rem;
    height:100dvh;
    background-color: #d6f8f8;
    display:flex;
    flex-direction: column;
    gap:1rem;
    align-items: start;

    & div{
        width:100%;
    }
    & a {
        color: #19191a;
        font-weight: 400;
        letter-spacing: 2px;
        display:inline-block;
        text-decoration: none;
        font-size:1.3rem;
        width:100%;
        padding:1.5rem;
        transition: all .05s ease
    }

    & a:hover {
        background-color: rgb(147, 201, 214);
    }

    & a.active{
        color: black
    }
`

function Navigation(){
  return(
    <StyledNavigation>
            <NavLink to="users">User</NavLink>
            <NavLink to="new-post">ADD NEW POST</NavLink>
            <NavLink to="friends">Friends</NavLink>
            <NavLink to="groups">Groups</NavLink>
            <NavLink to="favorite">Favorite</NavLink>
    </StyledNavigation>
  )
}

export default Navigation;
