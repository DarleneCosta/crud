import { useState, useEffect } from "react";
import Layout from "./../components/Layout";
import Table from "./../components/Table";
import Client from "./../core/Client";
import Button from "./../components/Button";
import Form from "./../components/Form";
import RepositoryClient from "./../backend/RepositoryClient";
import CollectionClient from "./../db/CollectionClient";
import useClient from "./../hooks/useClient";

const Home = () => {
  const {
    clients,
    clientDeleted,
    clientNew,
    clientSave,
    clientSelected,
    getAll,
    selected,
    showTable,
    onShowTable,
  } = useClient();
  return (
    <div
      className={`flex justify-center items-center h-screen bg-gradient-to-r
    from-blue-500 to-purple-500 text-white`}
    >
      <Layout title="Cadastro Simples">
        {showTable ? (
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
            onCancel={() => onShowTable()}
          />
        )}
      </Layout>
    </div>
  );
};
export default Home;
