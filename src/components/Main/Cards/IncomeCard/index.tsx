import { IncomeCardStyle } from "./style";
import IncomeImg from "../../../../assets/income.svg"

export function IncomeCard(){
    return(
        <IncomeCardStyle>
            <div>
                <p>Entradas</p>
                <img src={IncomeImg} alt="Circulo verde com uma seta verde apontada pra cima dentro do circulo" />
            </div>
            <strong>R$ 17.400,00</strong>
        </IncomeCardStyle>
    )
}