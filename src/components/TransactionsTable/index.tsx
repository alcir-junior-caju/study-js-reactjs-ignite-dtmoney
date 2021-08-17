import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Entrada</td>
            <td>22/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="withdraw">R$ -2.000</td>
            <td>Saída</td>
            <td>22/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
