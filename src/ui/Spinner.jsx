import styled, { css } from "styled-components";

const StyledSpinner = styled.div`

    ${(props) => props.$type === "big" && css`
        width: 300px;
        height:300px;
        border: 7px solid #232328;
    `}

    ${(props) => props.$type === "tiny" && css`
        width: 20px
        height: 20px
        border: 5px solid #FFF;
    `}

    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
         transform: rotate(360deg);
    }
    }
`

function Spinner({ type = "tiny" }) {
    return (
        <StyledSpinner $type={type} />
    )
}


export default Spinner;