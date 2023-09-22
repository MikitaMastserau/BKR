import PropTypes from "prop-types";

import styles from "./styles.module.scss";

export const Supertitle = ({ color, text }) => {
   return (
      <p className={styles.title} style={{ color: `${color}` }}>{text}</p>
   )
};

Supertitle.propTypes = {
   color: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
};