import { useEffect, useState } from "react";
import Client from "./../core/Client";
import RepositoryClient from "./../backend/RepositoryClient";
import CollectionClient from "./../db/CollectionClient";
import useTableOrForm from "./useTableOrForm";

const useClient = () => {
  const repo: RepositoryClient = new CollectionClient();
  const { showForm, showTable, onShowTable, onShowForm } = useTableOrForm();
  const [clients, setClients] = useState<Client[]>([]);
  const [selected, setSeleted] = useState<Client>(Client.empty());

  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    repo.getAll().then((result) => {
      setClients(result);
      onShowTable();
    });
  };

  const clientSelected = (client: Client) => {
    onShowForm();
    setSeleted(client);
  };

  const clientDeleted = (client: Client) => {
    repo.delete(client);
    getAll();
  };

  const clientSave = (client: Client) => {
    repo.save(client);
    getAll();
  };

  const clientNew = (client: Client) => {
    setSeleted(Client.empty());
    onShowForm();
  };

  return {
    clients,
    clientDeleted,
    clientNew,
    clientSave,
    clientSelected,
    getAll,
    selected,
    showTable,
    onShowTable,
  };
};

export default useClient;
