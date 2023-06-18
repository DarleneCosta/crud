import { useState, useEffect } from "react";
import Layout from "./../components/Layout";
import Table from "./../components/Table";
import Client from "./../core/Client";
import Button from "./../components/Button";
import Form from "./../components/Form";

const Home = () => {
  const clients = [
    new Client("Ana", 34, "1"),
    new Client("Bia", 44, "2"),
    new Client("Bruno", 20, "3"),
    new Client("Leo", 24, "4"),
  ];

  const [show, setShow] = useState<"tabela" | "form">("tabela");
  const [selected, setSeleted] = useState<Client>(Client.empty());

  const clientSelected = (client: Client) => {
    setShow("form");
    setSeleted(client);
  };

  const clientDeleted = (client: Client) => {
    alert(client.name);
  };

  const clientSave = (client: Client) => {
    alert(client.name);
    setShow("tabela");
  };

  const clientNew = (client: Client) => {
    setSeleted(Client.empty());
    setShow("form");
  };

  return (
    <div
      className={`flex justify-center items-center h-screen bg-gradient-to-r
    from-blue-500 to-purple-500 text-white`}
    >
      <Layout title="Cadastro Simples">
        {show === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" color="green" onClick={clientNew}>
                Novo Cliente
              </Button>
            </div>
            <Table
              clients={clients}
              clientSelected={clientSelected}
              clientDeleted={clientDeleted}
            ></Table>
          </>
        ) : (
          <Form
            client={selected}
            onChange={clientSave}
            onCancel={() => setShow("tabela")}
          />
        )}
      </Layout>
    </div>
  );
};
export default Home;
