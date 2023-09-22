import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import { Supertitle } from "components/Supertitle";

import play from "static/images/play.svg";

import styles from "./styles.module.scss";

export const Banner = () => {
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <section className={styles.banner}>
         <div className={styles.container}>
            <div className={styles.banner__play}>
               <img onClick={handleClickOpen} src={play} alt="" />
               <Dialog open={open} onClose={handleClose}>
                  <DialogTitle align="center">
                     {"Would you like to follow the link to a YouTube video about the history of our bakery?"}
                  </DialogTitle>
                  <DialogActions>
                     <Button onClick={handleClose} variant="outlined" color="warning" size="large">No</Button>
                     <Button onClick={() => { window.open("https://youtu.be/fhM0cGiH8R4?si=V5yTTBTmbwvVs9lj"); handleClose(); }} variant="outlined" color="warning" size="large" autoFocus>Yes</Button>
                  </DialogActions>
               </Dialog>
            </div>
            <div className={styles.banner__hat}>
               <Supertitle color="#fff" text="Our Video" />
               <h2>Story Behind Every Piece</h2>
            </div>
         </div>
      </section>
   )
};