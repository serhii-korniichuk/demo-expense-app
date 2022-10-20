import { useState } from "react";
import { Svg } from "../SharedBlocks/SharedBlocks";
import { Input, InputIconBtn, InputWrapper } from "./InputField.styled";
import svgIcons from "../../images/icons.svg";

const InputField = ({
  onChange = null,
  type = "text",
  id,
  name,
  value = "",
  required = false,
  minLength = 0,
}) => {
  const [showPass, setShowPass] = useState(false);

  const actualType = type === "password" && showPass ? "text" : type;

  const toggleShowPass = () => {
    setShowPass((showPass) => !showPass);
  };

  return (
    <InputWrapper>
      <Input
        id={id ? id : name}
        type={actualType}
        name={name}
        value={value}
        required={required}
        minLength={minLength}
        autocomplete="off"
        onChange={onChange}
      />
      {type === "password" && (
        <InputIconBtn type="button" onClick={toggleShowPass}>
          <Svg>
            <use
              href={
                showPass
                  ? svgIcons + "#icon-eye-on"
                  : svgIcons + "#icon-eye-off"
              }
            />
          </Svg>
        </InputIconBtn>
      )}
    </InputWrapper>
  );
};

export default InputField;
