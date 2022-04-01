import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    padding: 3.6rem 0 13.6rem;
    background-color: var(--blue);

    button{
        background-color: var(--blue-light);
        color: var(--shape);
        padding: 1.2rem 3.2rem;
        font-size: 1.6rem;
        font-weight: 600;
        border-radius: 0.5rem;
    }
`