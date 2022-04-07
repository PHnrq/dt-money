import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    
    h2{ 
        font-size: 2.4rem;
        font-weight: 700;
        color: var(--title);
        margin-block-end: 3.2rem;
    }

    input{ 
        padding: 2rem 2.4rem;
        font-size: 1.6rem;
        background-color: #E7E9EE;
        width: 480px;
        margin-block-end: 1.6rem;
    }

    .btn-register{
        display: flex;
        align-items:center;
        justify-content: center;
        margin-block-start:.8rem;
        padding: 2rem 2.4rem;
        font-size: 1.6rem;
        font-weight: 700;
        color: var(--shape);
        background-color: var(--green);
        width: 480px;
    }

`

export const OptionButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-block-end: 1.6rem;
    
`

interface ButtonTypeProps{
    isActive: boolean,
    activeColor: 'green' | 'red'
}

const colors = {
    green: 'hsla(147, 80%, 36%, 0.1)',
    red: 'hsla(350, 78%, 54%, 0.1)'
}

export const ButtonType = styled.button<ButtonTypeProps>`

    display: flex;
    gap: 1.6rem;
    padding: 2.1rem 7rem;
    border: .15px solid #969CB3;
    border-radius: 0.5rem;
    background-color: ${(props) => props.isActive ? colors[props.activeColor] : 'transparent'};
    cursor: pointer;

      p{
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--title);
      }

      img{
        width: 24px;
        height: 24px;
      }
`