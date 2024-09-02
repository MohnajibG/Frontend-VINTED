const Input = ({ setState, state, label, id, type, placeholder }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        className="input"
        placeholder={placeholder}
        id={id}
        type={type}
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
    </div>
  );
};

export default Input;
