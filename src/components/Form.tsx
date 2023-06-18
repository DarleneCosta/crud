import Input from "./Input";
import Client from "./../core/Client";
import { useState } from "react";
import Button from "./Button";

interface FormProps {
  client: Client;
  onChange?: (client: Client) => void;
  onCancel?: () => void;
}

const Form = (props: FormProps) => {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);
  return (
    <div>
      {id ? (
        <Input text="Código" value={id} readOnly className="mb-5" />
      ) : (
        false
      )}
      <Input text="Nome" value={name} onChange={setName} className="mb-5" />
      <Input text="Idade" type="number" value={age} onChange={setAge} />
      <div className="flex justify-end mt-7">
        <Button
          color="blue"
          className="mr-2"
          onClick={() => props.onChange?.(new Client(name, +age, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button onClick={props.onCancel}>Cancelar</Button>
      </div>
    </div>
  );
};

export default Form;
