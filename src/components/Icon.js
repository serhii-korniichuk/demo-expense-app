import PropTypes from 'prop-types';
import sprite from 'img/sprite.svg';

const Icon = ({ onClick, iconName, width, height, fill, stroke, ...props }) => {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      onClick={onClick}
    >
      <use href={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

export default Icon;

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  onClick: PropTypes.func,
  props: PropTypes.any,
};
