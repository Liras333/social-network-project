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

const ProfileAndDate = styled.div`
    display: flex;  
    align-items: center;
    gap: .5rem;
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
    color: ${props => props.liked && "#c00d0d"};
`

const FavoriteButton = styled(InitialButton)`
    color: ${props => props.favorited && "#5d616e"};
`


function Post({ post }) {
    const [liked, setLiked] = useState(false)
    const [favorited, setFavorited] = useState(false)
    const { title, content, created_at } = post;

    function handleLikePost() {
        setLiked(liked => !liked)
    }

    return (
        <StyledPost >
            <ProfileAndDate>
                <UserProfile src="/default-profile-picture.png" alt="User Profile" position="right" />
                <span>{new Date(created_at).toLocaleDateString("en-US")}</span>
            </ProfileAndDate>
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
                    <> <BsPostageHeartFill />Favorited </>
                }
            </FavoriteButton>

            
        </StyledPost>
    )
}

export default Post
