import { Supertitle } from "components/Supertitle";

import bread6 from "static/images/bread6.png";
import bread7 from "static/images/bread7.png";
import bread8 from "static/images/bread8.png";
import bread9 from "static/images/bread9.png";

import styles from "./styles.module.scss";

export const Prices = () => {
   return (
      <section className={styles.prices} id="products">
         <div className={styles.container}>
            <div className={styles.prices__hat}>
               <Supertitle color="#171B1B" text="Our Products" />
               <h2>Baked Fresh Every Morning</h2>
            </div>
            <div className={styles.prices__blocks}>
               <div className={styles.prices__bigCard}>
                  <Supertitle color="#FFF" text="Bakery" />
                  <h3>Homemade Bread</h3>
                  <div>
                     <p>Flows by their place and supplies it with the necessary regelialia.</p>
                     <h3>$9</h3>
                  </div>
               </div>
               <div className={styles.prices__card}>
                  <img src={bread6} alt="" />
                  <div>
                     <Supertitle color="#171B1B" text="Fresh" />
                     <div>
                        <p>Bread</p>
                        <h3>$5</h3>
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.prices__blocks}>
               <div className={styles.prices__card}>
                  <img src={bread7} alt="" />
                  <div>
                     <Supertitle color="#171B1B" text="Pastry" />
                     <div>
                        <p>Cupcake</p>
                        <h3>$3</h3>
                     </div>
                  </div>
               </div>
               <div className={styles.prices__card}>
                  <img src={bread8} alt="" />
                  <div>
                     <Supertitle color="#171B1B" text="Sweet" />
                     <div>
                        <p>Biscuits</p>
                        <h3>$2</h3>
                     </div>
                  </div>
               </div>
               <div className={styles.prices__card}>
                  <img src={bread9} alt="" />
                  <div>
                     <Supertitle color="#171B1B" text="Baking" />
                     <div>
                        <p>Brioche</p>
                        <h3>$4</h3>
                     </div>
                  </div>
               </div>
            </div>
            <button className={styles.prices__btn}>Explore</button>
         </div>
      </section>
   )
};