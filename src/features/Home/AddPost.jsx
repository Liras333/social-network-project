import styled, { css } from "styled-components"
import { useState } from "react"
import { useAddPost } from "./useAddPost";
import Spinner from "../../ui/Spinner";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const StyledAddPost = styled.article`
    background-color: #b3d8ff;
    height:auto;
    border-radius: 10px;
    padding: 1rem;

    & hr {
        border: none;
        border-top: 1px solid #ccc;
        margin: .5rem 0;
    }

    h2 {
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
        height: 15rem;
    `}


    &:focus {
        height: 15rem;
    }

`

const Form = styled.form`
    display: flex;
    gap: .5rem;
    flex-direction: column;
`



function AddPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { addPost, isAddingPost } = useAddPost()

    function handleSubmit(e) {
        e.preventDefault();
        if (title.trim() === "" || content.trim() === "") {
            return;
        }
        setTitle("");
        setContent("");

        addPost({
            title,
            content,
        })
    }


    localStorage.setItem("title", "asd");
    return (
        <StyledAddPost>
            <h2>Add a new post</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Title" required />
                <br />
                <Input type="text" placeholder="#hashtags" />
                <br />
                <Content onChange={(e) => setContent(e.target.value)} value={content} required placeholder="Write what you want to say other people." />
                <br />
                <Button disabled={isAddingPost} type="submit">{isAddingPost ? <Spinner /> : 'Publish'}</Button>
            </Form>


        </StyledAddPost >
    )
}

export default AddPost
