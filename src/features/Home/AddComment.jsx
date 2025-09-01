import styled, { css } from "styled-components"
import { useEffect, useState } from "react"
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import { useSearchParams } from "react-router-dom";
import { useUser } from "../Auth/useUser";

const StyledAddPost = styled.article`
    background-color: #dfdfdf;
    height:auto;
    border-radius: 10px;
    padding: 1rem;

    & hr {
        border: none;
        border-top: 1px solid #ccc;
        margin: .5rem 0;
    }

    h3 {
        margin: .5rem 0;
    }

`

const Content = styled.textarea`
    padding: 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 10px;
    resize:none;

    ${props => props.value !== "" && css`
        height: 10rem;
    `}

     ${props => props.value == "" && css`
        height:3.5rem;
    `}
    



    &:focus {
        height: 10rem;
    }

`

const Form = styled.form`
    display: flex;
    gap: .5rem;
    flex-direction: column;
`



function AddComment() {
    const [content, setContent] = useState("");
    const [searchParams] = useSearchParams();
    
    const {user} = useUser()
    
    function handleSubmit(e) {
        e.preventDefault();
        
        if (content.trim() === "") {
            return;
        }
        
        const postId = searchParams.get('post')
        const newComment =  {
            userUId: user.sub,
            postId,
            content
        }

        setContent("");
    }


    return (
        <StyledAddPost>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Content value={content} onChange={(e) => setContent(e.target.value)}  required placeholder="Add Comment" />
                <br />
                {/* <Button  type="submit">{isAddingPost ? <Spinner type="tiny" /> : 'Publish'}</Button> */}
                <Button >Publish</Button> 
            </Form>


        </StyledAddPost >
    )
}

export default AddComment

