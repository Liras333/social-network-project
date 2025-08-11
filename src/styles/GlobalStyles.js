import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root{
   
    
    --color-0:#ffffff;
    --color-creamy-1:#f7ebe7;
    --color-creamy-2:#efd7cf;
    --color-creamy-3:#deae9f;
    --color-creamy-4:#a49e97;

    --color-green-1:#879693;
    --color-green-2:#6a8e8f;
    --color-green-3:#436e6f;
    --color-green-4:#1c4e4f;
    --color-green-5:#0a2d2e;
}

*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}

body {
    font-family: "Karla", sans-serif;
    font-size:18px;
    /* background-color: var(--color-creamy-1); */
    /* background-color: rgba(20, 35, 37, 1); */
    background-color: rgba(235, 246, 248, 1);
}

` 