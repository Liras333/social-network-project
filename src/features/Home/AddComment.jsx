import styled, { css } from "styled-components"
import { useState } from "react"
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";

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
        height: 3.5rem;
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



    function handleSubmit(e) {
        e.preventDefault();
        // if (title.trim() === "" || content.trim() === "") {
        //     return;
        // }
        setContent("");

    }


    localStorage.setItem("title", "asd");
    return (
        <StyledAddPost>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Content  required placeholder="Add Comment" />
                <br />
                {/* <Button  type="submit">{isAddingPost ? <Spinner type="tiny" /> : 'Publish'}</Button> */}
                <Button >Publish</Button> 
            </Form>


        </StyledAddPost >
    )
}

export default AddComment

