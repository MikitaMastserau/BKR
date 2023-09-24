import { useCallback } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

export const LogoButton = ({ color }) => {
   const scrollDown = useCallback(() => {
      window.scroll({
         behavior: "smooth",
         top: 0,
      });
   }, []);

   return (
      <button className={styles.logo} onClick={() => scrollDown()} style={{ color: `${color}` }}>BKR</button>
   )
};

LogoButton.propTypes = {
   color: PropTypes.string.isRequired,
};