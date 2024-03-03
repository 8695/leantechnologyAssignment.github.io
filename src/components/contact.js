import feebackLogo from "../png/hand-gesture.png";
import chatLogo from "../png/chat2.png";
import flagLogo from "../png/flags.png";
import cancelLogo from "../png/x.png";
import noteLogo from "../png/writing.png"; 
import styles from "../css/contact.module.css";
import { useState } from "react";
import { IssueFrom } from "./issueForm";
import { Contactfrom } from "./contactForm";
import { Suggestion } from "./suggestion";

export function Contact({ onClose }) {
   const [activeComponent, setActiveComponent] = useState(null);

   function showContact() {
      setActiveComponent('contactFrm');
   }

   function openContact() {
      setActiveComponent('issue');
   }
   function suggest(){
    setActiveComponent("suggestForm")
   }

   return (
      <div className={`${styles.container} ${activeComponent && styles.bottomIcons}`}>
         <>
            <div className={styles.common} onClick={openContact}>
               <p className={styles.Text}>Report an Issue</p>
               <img src={flagLogo} alt="logo" className={styles.icon} />
            </div>
            <div className={styles.common}>
               <p className={styles.Text}>Share FeedBack</p>
               <img src={feebackLogo} alt="logo" className={styles.icon} />
            </div>
            <div className={styles.common} onClick={suggest}>
               <p className={styles.Text}> Give Suggestion</p>
               <img src={noteLogo} alt="suggestion" className={styles.icon} />
            </div>
            <div className={styles.contact} onClick={showContact}>
               <p className={styles.contactText}>Contact us</p>
               <img src={chatLogo} alt="logo" className={styles.icon} />
            </div>
            <div className={styles.cross} onClick={onClose}>
               <img src={cancelLogo} alt="logo" className={styles.icon} />
            </div>
            {activeComponent === 'issue' && <IssueFrom />}
            {activeComponent === 'contactFrm' && <Contactfrom />}
            {activeComponent==='suggestForm' && <Suggestion />}
         </>
      </div>
   );
}
