import { useState } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';

export default function InputForm({
  children,
  label,
  name,
  type,
  placeholder,
  id,
  title,
  isPassword = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      {!isPassword ? (
        <FieldWrap>
          <label htmlFor={id}>{label}</label>
          <Field
            className="field"
            name={name}
            type={type}
            placeholder={placeholder}
            id={id}
            title={title}
          />
          {children}
        </FieldWrap>
      ) : (
        <FieldWrap>
          <label htmlFor={id}>{label}</label>
          <Field
            className="field"
            name={name}
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder}
            id={id}
            title={title}
          />
          <Icon
            className="icon"
            width="24px"
            height="24px"
            fill="#fff"
            iconName={showPassword ? 'icon-eye-on' : 'icon-eye-off'}
            onClick={handleClickShowPassword}
          />
          {children}
        </FieldWrap>
      )}
    </>
  );
}

const FieldWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  line-height: 1.55;
  &::before {
    position: absolute;
    content: '';
    height: 1px;
    width: 100%;
    background: #fff;
    bottom: 0;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  label {
    font-size: 14px;
    margin-bottom: 5.5px;
  }

  .field {
    margin-bottom: 7px;
    padding: 0;
    font-size: 16px;
    line-height: 1.55;
    opacity: 0.7;
    background: transparent;
    border: none;
    color: #fff;
  }

  .icon {
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
`;

InputForm.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  isPassword: PropTypes.bool,
};
