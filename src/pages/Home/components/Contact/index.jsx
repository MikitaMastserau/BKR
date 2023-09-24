import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import { Supertitle } from "components/Supertitle";

import bread14 from "static/images/bread14.png";
import location from "static/icons/location.svg";
import phone from "static/icons/phone.svg";

import styles from "./styles.module.scss";

export const Contact = () => {
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <section className={styles.contact} id="contact">
         <div className={styles.container}>
            <div className={styles.contact__photo}>
               <img src={bread14} alt="" />
            </div>
            <div>
               <div className={styles.contact__hat}>
                  <Supertitle color="#171B1B" text="Get in Touch" />
                  <h2>Contact With Us</h2>
               </div>
               <div className={styles.contact__info}>
                  <div className={styles.contact__block}>
                     <div className={styles.contact__icon}><img src={location} alt="" /></div>
                     <div className={styles.contact__text}>
                        <Supertitle color="#171B1B" text="01" />
                        <h4>Address</h4>
                        <p>764 Richardson Rd. Bethpage, NY 11714</p>
                     </div>
                  </div>
                  <div className={styles.contact__block}>
                     <div className={styles.contact__icon}><img src={phone} alt="" /></div>
                     <div className={styles.contact__text}>
                        <Supertitle color="#171B1B" text="02" />
                        <h4>Phone</h4>
                        <p>+1 (234) 567-89-02</p>
                     </div>
                  </div>
               </div>
               <button className={styles.contact__btn} onClick={() => handleClickOpen()}>Contact Us</button>
               <Dialog open={open} onClose={handleClose}>
                  <DialogTitle align="center">
                     {"Would you like to call us? You will be redirected to the call."}
                  </DialogTitle>
                  <DialogActions>
                     <Button onClick={handleClose} variant="outlined" color="warning" size="large">No</Button>
                     <Button onClick={() => { window.open("tel:+12345678902"); handleClose(); }} variant="outlined" color="warning" size="large" autoFocus>Yes</Button>
                  </DialogActions>
               </Dialog>
            </div>
         </div>
      </section>
   )
};