import styled from "styled-components"
import { BsSuitHeart, BsSuitHeartFill, BsChat, BsPostageHeart, BsPostageHeartFill } from "react-icons/bs";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import UserProfile from "../ui/UserProfile"
import { useUser } from "../features/Auth/useUser";
import { useAddLike } from "../features/Home/useAddLike";
import { useUnlike } from "../features/Home/useUnlike";
// import { useLikes } from "../features/Home/useLikes";

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
    color: ${props => props.$liked ? "#c00d0d" : "#222"};
    transition: 0.5s all ease;

    & > svg {
        color: ${props => props.$liked ? "#c00d0d" : "#222"};
        transition: color 0.2s;
    }
    
`

const FavoriteButton = styled(InitialButton)`
    color: ${props => props.favorited && "#5d616e"};
`


function Post({ post, likes }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [favorited, setFavorited] = useState(false)
    const [isCommentClicked, setIsCommentClicked] = useState(false)

    const { postId, title, content, created_at, userUid } = post;
    const { addLike, isPending } = useAddLike()
    const { unlike } = useUnlike()
    const { user } = useUser()

    const postLikes = likes?.find(like => like?.postId === postId) ? likes?.filter(like => like?.postId === postId) : ''
    const likesCount = postLikes.length

    const isUserLikedPost = likes?.find(like => like?.postId === postId && like?.userUid === user?.sub)

    function onClickComment() {
        setIsCommentClicked(comment => !comment)

        if (isCommentClicked) {
            setSearchParams((searchParams) => {
                searchParams.set("post", postId);
                return searchParams;
            })
        } else {
            setSearchParams({})
        }
    }



    function handleLikePost() {
        if (!isUserLikedPost) {
            addLike({ postId, userUid: user?.sub })
        }
        else {
            unlike({ postId, userUid: user?.sub })
        }
    }

    return (
        <StyledPost >
            <ProfileAndDate>
                <UserProfile type="post" postUserUid={userUid} src="/default-profile-picture.png" alt="User Profile" position="right" />
                <span>{new Date(created_at).toLocaleDateString("pl-PL")}</span>
            </ProfileAndDate>
            <h3>{title}</h3>
            <p>
                {content}
            </p>

            <hr />
            <LikeButton onClick={handleLikePost} $liked={isUserLikedPost}>
                {!isUserLikedPost
                    ?
                    <BsSuitHeart />
                    :
                    <BsSuitHeartFill />
                }
                {likesCount}
            </LikeButton>

            <InitialButton onClick={onClickComment}>
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
