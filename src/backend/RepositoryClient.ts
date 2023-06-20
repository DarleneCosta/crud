import Client from "./../core/Client";

export default interface RepositoryClient {
  save(client: Client): Promise<Client>;
  delete(client: Client): Promise<void>;
  getAll(): Promise<Client[]>;
}
