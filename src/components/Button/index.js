import "./index.css";

const Button = (props) => {
  return (
    <button
      className={"button" + (props.className ? ` ${props.className}` : "")}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
