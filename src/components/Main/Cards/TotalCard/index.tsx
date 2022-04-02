import { TotalCardStyle } from "./style";
import TotalImg from "../../../../assets/total.svg"

export function TotalCard(){
    return(
        <TotalCardStyle>
            <div>
                <p>Total</p>
                <img src={TotalImg} alt="Simbolo do Sifrão, um S com um risco no meio" />
            </div>
            <strong>R$ 16.141,00</strong>
        </TotalCardStyle>
    )
}