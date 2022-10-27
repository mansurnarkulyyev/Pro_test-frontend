import PropTypes from "prop-types";
import sprite from "../../../images/icons/sprite.svg";

const SVGCreator = ({ iconName, width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-${iconName}`}></use>
    </svg>
  );
};

SVGCreator.defaultProps = {
  width: 32,
  height: 32,
};

SVGCreator.propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default SVGCreator;
