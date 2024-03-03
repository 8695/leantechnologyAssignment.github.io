 import styles from "../css/iconhori.module.css";
 import feebackLogo from "../png/hand-gesture.png";
 import chatLogo from "../png/chat2.png";
 import flagLogo from "../png/flags.png";
 import cancelLogo from "../png/x.png";
 import noteLogo from "../png/writing.png";

 export function Iconhori(){
    return(
      <div className={styles.iconshori}>
      <div className={styles.iconContainer}>
      <img src={flagLogo} alt="logo" className={styles.icon} />
      <img src={feebackLogo} alt="logo" className={styles.icon}/>
      <img src={noteLogo} alt="suggestion" className={styles.icon}/>
      <img src={chatLogo} alt="logo" className={styles.icon} />
      <img src={cancelLogo} alt="logo" className={styles.icon} />
      </div>


      
      </div>
    )
 }