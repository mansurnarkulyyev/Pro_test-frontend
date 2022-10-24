import { Link } from "react-router-dom";

import sprite from "../../images/icons/sprite.svg";
import styles from "./footer.module.scss"

function Footer() {
    return (
        <footer className={styles.footer} >
            
            <p className={styles.footerText}>
                <span className={styles.copyright} >&copy;</span>
                2022 | All Rights Reserved | Developed with 
                <svg className={styles.heart} >
                    <use href={sprite + "#heart"}></use>
                </svg>
                 by <Link to={"/contacts"} style={{textDecoration: "underline", color: "rgba(255, 255, 255, 0.4)"}} >GoIT Students</Link></p>
        </footer>
    )
};

export default Footer; 