import React, {useState} from 'react';
import CustomInput from "../CustomInput/CustomInput";
import CloseEye from "../../art/CloseEye";
import OpenEye from "../../art/OpenEye";
import css from './../../../../app.module.scss';

const PasswordInput = ({type,...props}) => {
  const [show, setShow] = useState('password');

  const toggleType = () => {
    setShow(prevState => prevState === 'password' ? 'text' : 'password')
  }

  return (
    <div className={css.password}>
      <CustomInput type={show} {...props}/>
      <div
        className={css.show}
        onClick={toggleType}
      >
        {show === 'password'
          ? <CloseEye />
          : <OpenEye />
        }
      </div>
    </div>
  );
};

export default PasswordInput;