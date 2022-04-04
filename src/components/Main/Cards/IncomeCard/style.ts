import styled from "styled-components";


export const IncomeCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem 3.2rem 1.8rem;
    background-color: #FFFFFF;
    border-radius: 0.5rem;

    div{
        display: flex;
        justify-content: space-between;

        p{
            font-size: 1.6rem;
            font-weight: 400;
            color: var(--text);
        }
    }

    strong{
        font-size: 3.6rem;
        font-weight: 500;
        color: var(--title);
    }
`