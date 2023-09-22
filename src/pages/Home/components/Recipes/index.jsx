import { Supertitle } from "components/Supertitle";

import time1 from "static/icons/time1.svg";
import time2 from "static/icons/time2.svg";
import bread12 from "static/images/bread12.png";
import cakes from "static/images/cakes.png";
import croissants2 from "static/images/croissants2.png";
import cheesecake from "static/images/cheesecake.png";
import bread13 from "static/images/bread13.png";

import styles from "./styles.module.scss";

export const Recipes = () => {
   return (
      <section className={styles.recipes}>
         <div className={styles.container}>
            <div className={styles.recipes__hat}>
               <Supertitle color="#fff" text="Our Recipes" />
               <h2>Explore Sweet & Delicious Recipes</h2>
            </div>
            <div className={styles.recipes__content}>
               <div className={styles.recipes__big}>
                  <img src={bread12} alt="" />
                  <div>
                     <Supertitle color="#171B1B" text="Bakery" />
                     <h3>Delicious Bread</h3>
                     <div>
                        <p>Flows by their place and supplies it with the necessary regelialia.</p>
                        <div><img src={time1} alt="" /><p>5 min</p></div>
                     </div>
                  </div>
               </div>
               <div className={styles.recipes__smalls}>
                  <div className={styles.recipes__card}>
                     <img src={cakes} alt="" />
                     <div>
                        <div>
                           <p>Bakery</p>
                           <div><img src={time2} alt="" /><p>10 min</p></div>
                        </div>
                        <p>Malted wheat flake bread</p>
                     </div>
                  </div>
                  <div className={styles.recipes__card}>
                     <img src={croissants2} alt="" />
                     <div>
                        <div>
                           <p>Bakery</p>
                           <div><img src={time2} alt="" /><p>7 min</p></div>
                        </div>
                        <p>Biscoff cake with lotus biscuits</p>
                     </div>
                  </div>
                  <div className={styles.recipes__card}>
                     <img src={cheesecake} alt="" />
                     <div>
                        <div>
                           <p>Bakery</p>
                           <div><img src={time2} alt="" /><p>5 min</p></div>
                        </div>
                        <p>Peanut butter and chocolate cake</p>
                     </div>
                  </div>
                  <div className={styles.recipes__card}>
                     <img src={bread13} alt="" />
                     <div>
                        <div>
                           <p>Bakery</p>
                           <div><img src={time2} alt="" /><p>15 min</p></div>
                        </div>
                        <p>Soft wheat bun with mixed filling</p>
                     </div>
                  </div>
               </div>
            </div>
            <button className={styles.recipes__btn}>Explore</button>
         </div>
         <div className={styles.recipes__spot}></div>
      </section>
   )
};