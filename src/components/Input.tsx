interface InputProps {
  type: "text" | "number";
  text: string;
  value: any;
  readOnly?: boolean;
  onChange?: (valor: any) => void;
  className?: string;
}

const Input = (props: InputProps) => {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.text}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.readOnly}
        onChange={(e) => props.onChange?.(e.target.value)}
        className={`
            border border-purple-500 rounded-lg
            focus:outline-none bg-gray-50 px-4 py-2 
            ${props.somenteLeitura ? "" : "focus:bg-white"}
        `}
      />
    </div>
  );
};

export default Input;
