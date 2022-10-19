import { Link } from "react-router-dom";

import styles from "./footer.module.scss"

function Footer() {
    return (
        <footer className={styles.footer} >
            <p className={styles.footerText}><span className={styles.copyright} >&copy;</span> 2022 | All Rights Reserved | Developed with <span className={styles.heart} >&#129505;</span> by <Link to={"/contacts"} style={{color: "rgba(255, 255, 255, 0.4)"}} >GoIT Students</Link></p>
        </footer>
    )
};

export default Footer; 