import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Button({ children, width, onClick, type }) {
  return (
    <ButtonEl type={type} onClick={onClick} width={width}>
      {children}
    </ButtonEl>
  );
}

const ButtonEl = styled.button`
  width: ${props => props.width || '98px'};
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.55;
  color: #ffffff;
  background: #539713;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  cursor: pointer;

  &:hover {
    background: rgba(127, 170, 240, 1);
  }
`;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  with: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired,
};
