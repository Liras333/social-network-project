import styled, { css } from "styled-components"
import UserProfile from "../../ui/UserProfile"
import { useState } from "react"
import { useAddPost } from "./useAddPost";


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

const TitleInput = styled.input`
    padding: 1rem;
    font-size: 1rem;
    width: 100%;
    border: none;
    border-radius: 10px;
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

const Button = styled.button`
    padding: 1rem;
    background-color: #424b57;
    color: white;
    border: none;
    font-size:1rem;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        filter:brightness(1.2)
    }
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
            postId: Math.floor(Math.random() * 100), // Simulating a post ID
            title,
            content,
        })

    }

    return (
        <StyledAddPost>
            <h2>Add a new post</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <TitleInput onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Title" required />
                <br />
                <Content name="content" onChange={(e) => setContent(e.target.value)} value={content} required placeholder="Write what you want to say other people."/>
                <br />
                <Button disabled={isAddingPost} type="submit">{isAddingPost ? 'Publishing' : 'Publish'}</Button>
            </Form>


        </StyledAddPost >
    )
}

export default AddPost
