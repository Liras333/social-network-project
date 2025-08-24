import styled from "styled-components"

const CommentBox = styled.div`
    width:25rem;
    height:100dvh;
    background-color: #ffffff;
    border-radius:15px;
    padding:1rem ;
`

function Comments() {
    return (
        <CommentBox>
            <h2 style={{ position: "sticky", top: '1rem', left: 0, }}>Comments</h2>

        </CommentBox>
    )
}

export default Comments
