import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../App";
import { getInitialFields } from "../../../utils/utils";
import Input from "../../ui/Input/Input";
import { validateRequiredField } from "./helpers";
import styles from "./styles.module.css";

const Form = ({ fields }) => {
  const initialFields = getInitialFields(fields);

  const { errors, setErrors, enteredData, setEnteredData } = useContext(AuthContext);

  useEffect(() => {
    setErrors(initialFields);
    setEnteredData(initialFields);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const error = validateRequiredField(value);

    setErrors({ ...errors, [name]: error });
    setEnteredData({ ...enteredData, [name]: value });
  };

  return (
    <div>
      {fields.map((field) => (
        <div key={field.name} className={styles.inputWrapper}>
          <Input
            name={field.name}
            type={field.type}
            label={field.label}
            onChange={handleChange}
            placeholder={field.label}
            error={errors?.[field.name]}
            value={enteredData?.[field.name]}
          />
        </div>
      ))}
    </div>
  );
};

export default Form;
