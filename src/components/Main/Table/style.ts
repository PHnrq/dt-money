import styled from "styled-components";

export const TableStyle = styled.table`
  width: 100%;
  border-spacing: 0 0.8rem;

  th, td{
    font-size: 1.6rem;
    color: var(--text);
    font-weight: 400;
    padding: 2rem 3.2rem;
  }

  th{
    text-align: start;
  }

  td{
    border: 0;
    background-color: var(--shape);
    border-radius: 0.5rem;

    &:nth-child(1){
      color: var(--title);
    }

    &.income{
      color: var(--green);
    }

    &.outcome{
      color: var(--red);
    }
  }
   
`