import React, { useState } from 'react';

type Props = {
  name: string;
  value: string;
  setName: (name: string) => void;
  type: string;
  placeholder: string;
}

export const Input: React.FC<Props> = ({ name, value, setName, type, placeholder }) => {
  const [isOpenPas, setIsOpenPas] = useState(false);

  return (
    <div 
      className="input"
    >
      <label 
        className="input__label"
      >
        {name}
      </label>
      <span className="input__area">
        <input 
          type={isOpenPas ? 'text' : 'password'} 
          className="input__field"
          value={value}
          placeholder={placeholder}
          onChange={(e) => setName(e.target.value)}
          required
        />
          {(type === 'password' || isOpenPas) && (
            <span 
              className={isOpenPas ? "input__eye input__eye--open" : "input__eye input__eye--closed"}
              onClick={() => {setIsOpenPas(prev => !prev)}}
            ></span>
          )}
      </span>
    </div>
  )
}