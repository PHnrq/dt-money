import { Cards } from "./Cards";
import { MainStyle } from "./style";
import { Table } from "./Table";

export function Main(){
    return (
        <MainStyle>
            <Cards/>
            <Table/>
        </MainStyle>
    )
}