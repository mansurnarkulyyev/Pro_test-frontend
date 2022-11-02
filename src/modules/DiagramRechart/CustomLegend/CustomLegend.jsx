import SVGCreator from "../../../shared/components/SVGCreator";
import styles from "./customLegend.module.scss";

const CustomLegend = ({ data, total, iconName, iconWidth, iconHeight }) => {
  const elements = data.map(({ name, value, color }) => {
    const percent = `${Math.round((value / total) * 100)}%`;
    return (
      <li className={styles.item} key={name}>
        <div className={styles.upper} style={{ fill: color }}>
          <SVGCreator
            iconName={iconName}
            width={iconWidth}
            height={iconHeight}
          />
          <div className={styles.percent}>{percent}</div>
        </div>
        <span className={styles.name}>{name}</span>
      </li>
    );
  });
  return <ul>{elements}</ul>;
};

export default CustomLegend;
