import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { LogoButton } from "components/LogoButton";

import userMail from "static/icons/userMail.svg";

import styles from "./styles.module.scss";

export const Header = () => {
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <header className={styles.header}>
         <div className={styles.container}>
            <div className={styles.header__links}>
               <LogoButton color="#000" />
               <nav>
                  <a href="#about">About</a>
                  <a href="#products">Products</a>
                  <a href="#recipes">Recipes</a>
               </nav>
            </div>
            <button className={styles.header__btn} onClick={handleClickOpen}>Contact</button>
            <Dialog open={open} onClose={handleClose}>
               <DialogTitle align="center">
                  Write your email address so that our manager<br />will contact you with your questions.
               </DialogTitle>
               <DialogContent>
                  <div className={styles.header__mail}>
                     <img src={userMail} alt="" />
                     <TextField
                        autoFocus
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        color="warning"
                        autoComplete="true"
                     />
                  </div>
               </DialogContent>
               <DialogActions>
                  <Button onClick={handleClose} variant="outlined" color="warning" size="large">Cancel</Button>
                  <Button onClick={handleClose} variant="outlined" color="warning" size="large">Subscribe</Button>
               </DialogActions>
            </Dialog>
         </div>
      </header>
   )
};