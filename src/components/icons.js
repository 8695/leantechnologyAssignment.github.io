import { useState } from "react";
import styles from "../css/icons.module.css"
import notesIcon from "../png/contract.png";
import { Contact } from "./contact";
export function Icons(){

   const [showContact, setshowContact]=useState(false);

   function showContent(){
       setshowContact(true);
   }
  return(
    <div className={styles.container} >
     {/* Conditionally render either the image or the icon component */}
     {showContact ? (
      <Contact onClose={() => setshowContact(false)}/>
    ) : (
      <img
        src={notesIcon}
        alt="Notes Icon"
        className={styles.noteIcon}
        onClick={showContent}
      />
    )}
    </div>
  )
}