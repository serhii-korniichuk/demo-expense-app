import React, {FC, useState, ClipboardEvent} from 'react';

import hideEye from "../../assets/eye.svg";
import showEye from "../../assets/eye-slash.svg";

import "../../styles/index.scss";

interface IPasswordInput {
    title: string,
    control: any,
    name: string
}

const PasswordInput: FC<IPasswordInput> = ({title, control, name}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const pasteHandler = (event: ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();

        return
    }
    const inputTypeHandler = () => {
        setShowPassword(!showPassword)
    }

    const INPUT_IMAGE = showPassword ? hideEye : showEye;
    const INPUT_TYPE = showPassword ? "text" : "password";

    return (
        <div className="input-box input-box--password">
            <span>{title}</span>
            <input
                {...control.register(name, {required: true, minLength: 8})}
                   onPaste={pasteHandler}
                   type={INPUT_TYPE}
            />
            <img
                onClick={inputTypeHandler}
                className={INPUT_IMAGE}
                src={INPUT_IMAGE}
                alt="icon"
            />
        </div>
    );
};

export default PasswordInput;