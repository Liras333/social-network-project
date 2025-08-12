import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavigation = styled.aside`
    height:100dvh;
        background-color: rgba(236, 244, 246, 1);

    /* background-color:white; */

    display:flex;
    flex-direction: column;
    gap:1rem;
    align-items: start;
    margin:1rem;

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
        transition: all .05s ease;
        border-radius: 1rem;
    }

    & a:hover {
        background-color: rgb(147, 201, 214);
    }

    & a.active{
        color: black
    }
`

function Navigation() {
    return (
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
