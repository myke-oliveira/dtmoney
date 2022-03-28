import { Container } from "./styles";

export function TransactionsTable() {
  return <Container>
    <table>
      <thead>
        <th>Titulo</th>
        <th>Valor</th>
        <th>Categoria</th>
        <th>Data</th>
      </thead>
      <tbody>
        <tr>
          <td>Desenvolvimento de site</td>
          <td className="deposit">R$ 12.000,00</td>
          <td>Desenvolvimento</td>
          <td>20/02/2021</td>
        </tr>
        <tr>
          <td>Aluguel</td>
          <td className="withdraw">- R$ 1.100,00</td>
          <td>Casa</td>
          <td>17/02/2021</td>
        </tr>
      </tbody>
    </table>
  </Container>
}