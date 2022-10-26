import sprite from "../../../images/icons/sprite.svg";

const SVGCreator = ({ iconName, width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-${iconName}`}></use>
    </svg>
  );
};

export default SVGCreator;
