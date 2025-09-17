import styled from "styled-components";

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

export default function Modal() {
    return(
        <StyledModal>
            <div>Modal Content</div>
        </StyledModal>
    )
}

function Toggle({children}){
    return (
        {children}
        
    )
}

function Window({children}){
    return (
        {children}
    )
}

Modal.Toggle = Toggle;
Modal.Window = Window;
