import { useState, useEffect } from "react";
import Layout from "./../components/Layout";
import Table from "./../components/Table";
import Client from "./../core/Client";

const Home = () => {
  const clients = [
    new Client("Ana", 34, "1"),
    new Client("Bia", 44, "2"),
    new Client("Bruno", 20, "3"),
    new Client("Leo", 24, "4"),
  ];

  const clientSelected = (client: Client) => {
    alert(client.name);
  };

  const clientDeleted = (client: Client) => {
    alert(client.name);
  };

  return (
    <div
      className={`flex justify-center items-center h-screen bg-gradient-to-r
    from-blue-500 to-purple-500 text-white`}
    >
      <Layout title="Cadastro Simples">
        <Table
          clients={clients}
          clientSelected={clientSelected}
          clientDeleted={clientDeleted}
        ></Table>
      </Layout>
    </div>
  );
};
export default Home;
