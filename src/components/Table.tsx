import Client from "./../core/Client";

interface TableProps {
  clients: Client[];
}
const Table = (props: TableProps) => {
  const renderizarCabecalho = () => {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    );
  };
  const renderizarDados = () => {
    // return props.clients?.map((client, i) => {
    //   <tr>
    //     <td>{client.id}</td>
    //     <td>{client.name}</td>
    //     <td>{client.age}</td>
    //   </tr>;
    // });
    console.log(props?.clients);
  };

  return (
    <table>
      {renderizarCabecalho()}
      {renderizarDados()}
    </table>
  );
};
export default Table;
