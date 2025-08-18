import { BiSolidHeart, BiSolidGroup, BiSolidContact, BiSolidPlusCircle, BiSolidHome } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";



const StyledNavigation = styled.aside`
    height:calc(100% - 60px);
    background-color: rgba(236, 244, 246, 1);
    display:flex;
    flex-direction: column;
    gap:1rem;
    align-items: start;
    margin:1rem;

    & div {
        width:100%
    }
    & a {
        color: #19191a;
        font-weight: 400;
        letter-spacing: 2px;
        display:inline-flex;
        align-items:center;
        gap:1rem;
        text-decoration: none;
        font-size:1.3rem;
        width:100%;
        padding:1.5rem;
        transition: all .07s ease;
        border-radius: 1rem;
    }

    & a:hover {
        color: #1c3ab1;
        background-color: rgb(147, 201, 214);
    }

    & a.active{
        color: #1c3ab1;
        background-color: rgb(147, 201, 214);
        outline: 2px solid #396cf8;
    }
`

const NewPost = styled(NavLink)`
    background-color: rgb(190, 229, 239);
`

function Navigation() {
    return (
        <StyledNavigation>

            {/* <NewPost to="new-post">
                <span>
                    <BiSolidPlusCircle />
                </span>
                <span>
                    NEW POST
                </span>
            </NewPost> */}

            <NavLink to="home">
                <span>
                    <BiSolidHome />
                </span>
                <span>
                    Start
                </span>
            </NavLink>


            <NavLink to="friends">
                <span>
                    <BiSolidContact />
                </span>
                <span>
                    Friends
                </span>
            </NavLink>

            <NavLink to="groups">
                <span>
                    <BiSolidGroup />
                </span>
                <span>
                    Groups
                </span>
            </NavLink>

            <NavLink to="favorite">
                <span>

                    <BiSolidHeart />
                </span>
                <span>
                    Favorite
                </span>
            </NavLink>

        </StyledNavigation>
    )
}

export default Navigation;
