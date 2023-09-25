import { Supertitle } from "components/Supertitle";

import mainBread from "static/images/mainBread.jpg";

import styles from "./styles.module.scss";

export const Main = () => {
   return (
      <main className={styles.main}>
         <div className={styles.container}>
            <div className={styles.main__hat}>
               <Supertitle color="#000" text="Since 1984" />
               <h1>Fresh Bakery Every Day</h1>
               <p className={styles.main__text}>Even the all-powerful Pointing has no control about the blind texts it is an almost.</p>
            </div>
         </div>
         <img className={styles.main__photo} src={mainBread} alt="" />
      </main>
   )
};