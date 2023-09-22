import { Supertitle } from "components/Supertitle";

import styles from "./styles.module.scss";

export const Process = () => {
   return (
      <section className={styles.process}>
         <div className={styles.container}>
            <div className={styles.process__hat}>
               <Supertitle color="#fff" text="Our Process" />
               <h2>How We Work</h2>
            </div>
            <div className={styles.process__content}>
               <div className={styles.process__step}>
                  <Supertitle color="#171B1B" text="01" />
                  <h3>Contact</h3>
                  <p>Nothing the copy said could convince her and so it didn’t take long.</p>
                  <div className={styles.process__hov}></div>
               </div>
               <div className={styles.process__step}>
                  <Supertitle color="#171B1B" text="02" />
                  <h3>Baking</h3>
                  <p>At sea, millions of needles pricked the skin of a huge blue monster...</p>
                  <div className={styles.process__hov}></div>
               </div>
               <div className={styles.process__step}>
                  <Supertitle color="#171B1B" text="03" />
                  <h3>Delivery</h3>
                  <p>Pouring rain. Frequent drizzle fell on pavements, they shone richly.</p>
                  <div className={styles.process__hov}></div>
               </div>
               <div className={styles.process__step}>
                  <Supertitle color="#171B1B" text="04" />
                  <h3>Tasty</h3>
                  <p>Myra kissed his neck above his collar. The glasses fell on the grass.</p>
                  <div className={styles.process__hov}></div>
               </div>
            </div>
         </div>
      </section>
   )
};