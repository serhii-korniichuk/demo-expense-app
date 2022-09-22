import React, {FC, useRef, LegacyRef} from 'react';
import "../../styles/index.scss";

interface IInput {
    title: string,
    control: any,
    name: string,
}

const Input: FC<IInput> = ({title, control, name}) => {

    return (
        <div className="input-box">
            <span>{title}</span>
            <input
                {...control.register(name, {required: true, minLength: 6})}
                type="text"
            />
        </div>
    );
};

export default Input;