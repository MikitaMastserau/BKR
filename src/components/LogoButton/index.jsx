import { useCallback } from "react";

import styles from "./styles.module.scss";

export const LogoButton = () => {
   const scrollDown = useCallback(() => {
      window.scroll({
         behavior: "smooth",
         top: 0,
      });
   }, []);

   return (
      <button className={styles.logo} onClick={() => scrollDown()}>BKR</button>
   )
};