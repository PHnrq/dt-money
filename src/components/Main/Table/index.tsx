import { TableStyle } from "./style";

export function Table(){
    return(
        <TableStyle>
            <thead>
                <th>Titulo</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data</th>
            </thead>
            <tbody>
                <tr>
                    <td>Desenvolvimento de site</td>
                    <td className="income">R$ 12.000,00</td>
                    <td>Venda</td>
                    <td>13/04/2021</td>
                </tr>
                <tr>
                    <td>Hamburguer</td>
                    <td className="outcome">- R$ 59,00</td>
                    <td>Alimentação</td>
                    <td>10/04/2021</td>
                </tr>
                <tr>
                    <td>Aluguel do apartamento</td>
                    <td className="outcome">- R$ 1.200,00</td>
                    <td>Casa</td>
                    <td>27/03/2021</td>
                </tr>
                <tr>
                    <td>Computador</td>
                    <td className="income">R$ 5.400,00</td>
                    <td>Venda</td>
                    <td>15/03/2021</td>
                </tr>
            </tbody>
        </TableStyle>
    )
}