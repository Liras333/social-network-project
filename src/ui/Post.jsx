import styled from "styled-components"
import UserProfile from "../ui/UserProfile"
import { BsSuitHeart, BsSuitHeartFill, BsChat, BsPostageHeart, BsPostageHeartFill } from "react-icons/bs";
import { useState } from "react";

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


    h2 {
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
    const { id: idPost, title, content, likes, comments } = post;

    function handleLikePost() {
        setLiked(liked => !liked)
    }

    return (
        <StyledPost >
            <UserDate>
                <UserProfile src="./default-profile-picture.png" alt="User Profile" position="right" />
                {new Date().toLocaleDateString("en-US", {})}

            </UserDate>
            
            <h2>{title}</h2>
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
                {liked ? likes + 1 : likes}
            </LikeButton>

            <InitialButton title="Comments">
                <BsChat /> {comments}
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
