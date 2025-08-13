import styled from "styled-components";
import { BiSearch } from "react-icons/bi";


const SearchInputBox = styled.div`
    height:2.5rem;
    cursor: pointer;
    display:flex;
    align-items: center;
    
    
    & button {
        width:3rem;
        height:2.5rem;
        border-top-right-radius:2rem;
        border-bottom-right-radius:2rem;
        background-color: rgb(221, 233, 235);
        border:none;
        border-left: 1px solid rgb(196, 204, 206);
        font-size:1.1rem;
        cursor:pointer;
        display:flex;
        align-items: center;
        justify-content: center;

        &:hover{
            background-color: rgb(197, 213, 217);
        }
    }

`

const StyledSearchInput = styled.input`
    width:20rem;
    height:2.5rem;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border:1px solid gray;
    font-size:16px;
    padding:.9rem 1rem;
    border:none;
    background-color: rgb(236, 244, 246);
    


    &:focus {
        outline:none;
        border: 2px solid #396cf8;
    }

`



function SearchInput({ type, placeholder }) {
    return (
        <SearchInputBox>
            <StyledSearchInput type={type} placeholder={placeholder} />
            <button ><BiSearch /></button>
        </SearchInputBox>
    )
}

export default SearchInput;

