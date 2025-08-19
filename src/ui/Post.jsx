import styled, { css } from "styled-components"
import UserProfile from "../ui/UserProfile"
import { BsSuitHeart, BsSuitHeartFill, BsChat, BsPostageHeart, BsPostageHeartFill } from "react-icons/bs";
import { useState } from "react";

const StyledPost = styled.article`
    background-color: #f9fcff;
    height:auto;
    border-radius: 10px;
    padding: .7rem;
    margin: 1rem 0;

    & hr {
        border: none;
        border-top: 1px solid #ccc;
        margin: .5rem 0;
    }


    h3 {
        margin: .5rem 0;
    }

`

const InitialButton = styled.button`
        display:inline-flex;
        align-items:center;
        gap:5px;
        margin: 0 .5rem;
        cursor: pointer;
        border:none;
        border-radius: 5px;
        padding: .5rem 1rem;
        font-size: 1rem;
        background:none;

        &:hover{
            background-color: #e0e0e0;
        }
`

const LikeButton = styled(InitialButton)`
    color: ${props => props.liked && "red"};
`

const FavoriteButton = styled(InitialButton)`
    color: ${props => props.favorited && "blue"};
`


function Post({ post }) {
    const [liked, setLiked] = useState(false)
    const [favorited, setFavorited] = useState(false)
    const { id: idPost, title, content, likes } = post;

    function handleLikePost() {
        setLiked(liked => !liked)
    }

    return (
        <StyledPost >
            <UserProfile src="./default-profile-picture.png" alt="User Profile" position="right" />
            <h3>{title}</h3>
            <p>
                {content}
            </p>

            <hr />
            <LikeButton liked={liked} onClick={() => handleLikePost()}>
                {!liked
                    ?
                    <BsSuitHeart /> 
                    :
                    <BsSuitHeartFill />
                }
            </LikeButton>

            <InitialButton>
                <BsChat />
            </InitialButton>

            <FavoriteButton favorited={favorited} onClick={() => setFavorited(favorited => !favorited)}>
                {!favorited
                    ?
                    <> <BsPostageHeart /> Add to favorite </>
                    :
                    <> <BsPostageHeartFill />Added to favorite </>
                }
            </FavoriteButton>
            <hr />

        </StyledPost>
    )
}

export default Post
