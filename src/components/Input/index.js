import "./index.css";
import eye from "../../assets/icons/eye.svg";

const Input = (props) => {
  return (
    <>
      <label className="inputLabel" htmlFor={props.id}>
        {props.label}
      </label>
      <div className="input__wrapper">
        <input
          className="input"
          type={props.showPassword ? "text" : props.type}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
        {props.type === "password" ? (
          <span
            className="input__showPassword"
            onClick={
              props.showPassword !== undefined
                ? () => props.toggleShowPassword()
                : null
            }
          >
            <img src={eye} alt="" />
          </span>
        ) : null}
      </div>
    </>
  );
};

export default Input;
