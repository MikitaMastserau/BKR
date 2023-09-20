import { LogoButton } from "components/LogoButton";

import styles from "./styles.module.scss";

export const Header = () => {
   return (
      <header className={styles.header}>
         <div className={styles.container}>
            <div className={styles.header__links}>
               <LogoButton />
               <nav>
                  <a href="#1">About</a>
                  <a href="#1">Products</a>
                  <a href="#1">Recipes</a>
               </nav>
            </div>
            <button className={styles.header__btn}>Contact</button>
         </div>
      </header>
   )
};