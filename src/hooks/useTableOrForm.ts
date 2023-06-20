import { useState } from "react";

const useTableOrForm = () => {
  const [show, setShow] = useState<"table" | "form">("table");
  const onShowTable = () => setShow("table");
  const onShowForm = () => setShow("form");
  return {
    showForm: show === "form",
    showTable: show === "table",
    onShowTable,
    onShowForm,
  };
};

export default useTableOrForm;
