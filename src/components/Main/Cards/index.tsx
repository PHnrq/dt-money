import { IncomeCard } from "./IncomeCard";
import { OutcomeCard } from "./OutcomeCard";
import { CardStyle } from "./style";
import { TotalCard } from "./TotalCard";

export function Cards(){
    return(
        <CardStyle>
            <IncomeCard/>
            <OutcomeCard/>
            <TotalCard/>
        </CardStyle>
    )
}