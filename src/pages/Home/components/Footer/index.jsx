import { LogoButton } from "components/LogoButton";

import facebook from "static/icons/facebook.svg";
import twitter from "static/icons/twitter.svg";
import insta from "static/icons/insta.svg";

import styles from "./styles.module.scss";

export const Footer = () => {
   return (
      <footer className={styles.footer} id="footer">
         <div className={styles.container}>
            <div className={styles.footer__content}>
               <LogoButton color="#fff" />
               <div className={styles.footer__menu}>
                  <p>Menu</p>
                  <a href="#about">About</a>
                  <a href="#products">Products</a>
                  <a href="#recipes">Recipes</a>
                  <a href="#contact">Contact</a>
               </div>
               <div className={styles.footer__menu}>
                  <p>Service</p>
                  <a href="#footer">Bakery</a>
                  <a href="#footer">Delivery</a>
                  <a href="#footer">Catering</a>
                  <a href="#footer">Corporate</a>
               </div>
               <div className={styles.footer__menu}>
                  <p>Social</p>
                  <div className={styles.footer__icons}>
                     <a href="#footer"><img src={facebook} alt="" /></a>
                     <a href="#footer"><img src={twitter} alt="" /></a>
                     <a href="#footer"><img src={insta} alt="" /></a>
                  </div>
               </div>
            </div>
            <div className={styles.footer__down}>
               <p>Copyright © 2020 Laaqiq. All Rights Reserved.</p>
               <div>
                  <a href="#footer">Terms of Use</a>
                  <a href="#footer">Privacy Policy</a>
               </div>
            </div>
         </div>
      </footer>
   )
};