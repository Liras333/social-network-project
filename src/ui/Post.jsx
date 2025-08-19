import { useState } from "react";
import styled from "styled-components"
import UserProfile from "../ui/UserProfile"
import { BsSuitHeart, BsSuitHeartFill, BsChat, BsPostageHeart, BsPostageHeartFill } from "react-icons/bs";

const StyledPost = styled.article`
    color: #222224;
    background-color: #f9fcff;
    height:auto;
    border-radius: 10px;
    padding: 1rem;
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
            background-color: #980303;
            background-color: #e0e0e0;
        }
`

const UserDate = styled.div`
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    gap:10px;
`
const LikeButton = styled(InitialButton)`
color: ${props => props.liked && "#d10505"};
`

const FavoriteButton = styled(InitialButton)`
color: ${props => props.favorited && "#424b57"};
`


function Post({ post }) {

    const [liked, setLiked] = useState(false)
    const [favorited, setFavorited] = useState(false)
    const { postId, title, content, created_at } = post;

    function handleLikePost() {
        setLiked(liked => !liked)


    }

    return (
        <StyledPost >
            <UserDate>
                <UserProfile src="./default-profile-picture.png" alt="User Profile" position="right" />
                {new Date(created_at).toLocaleDateString("en-US", {})}
            </UserDate>

            <h3>{title}</h3>
            <p>
                {content}
            </p>

            <hr />

            <LikeButton title="likes" liked={liked} onClick={() => handleLikePost()}>
                {!liked
                    ?
                    <BsSuitHeart />
                    :
                    <BsSuitHeartFill />
                }
            </LikeButton>

            <InitialButton title="Comments">
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
