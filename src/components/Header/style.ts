import styled from "styled-components";

export const HeaderStyle = styled.header`
    
    background-color: var(--blue);
    
    div{
        max-width: 78%;
        display: flex;
        justify-content: space-between;
        padding: 3.6rem 0 13.6rem;
        margin: 0 auto;
    }

    button{
        background-color: var(--blue-light);
        color: var(--shape);
        padding: 1.2rem 3.2rem;
        font-size: 1.6rem;
        font-weight: 600;
        border-radius: 0.5rem;
        cursor: pointer;
        
        &:hover{
            filter: brightness(0.9);
        }
    }

`