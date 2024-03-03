import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "../css/feedback.module.css";
import boosterIcon from "../png/startup.png";
import viewsIcon from "../png/eye.png";
import infoIcon from "../png/information.png";
import { UserInfo } from "./userInfo";
import downIcon from "../png/down.png"
import { Icons } from "./icons";

export function Feedback() {
  return (
    <>
      <div className={styles.feedBackPop}>
        <FontAwesomeIcon icon={faArrowLeft} className={styles.arrow} />
        <p className={styles.para}>Back to the Questions</p>
      </div>
      <div className={styles.messageFrame}>
        {/* first container to button and icons */}
        <div className={styles.headCon}>
          <div className={styles.headBtn}>
            <p className={styles.textD}>Design</p>
            <p className={styles.textT}>Technology</p>
          </div>
          <div>
            <img src={boosterIcon} alt="icon" className={styles.imgStartup} />
            <p className={styles.textS}>Startup</p>
          </div>
        </div>
        {/* second container for text area */}
        <div className={styles.textArea}>
          <p className={styles.textUpper}>
            A travel startup wants Amazon to pre-install their personal travel
            agent bot on existing Amazon Echos. What is the value of the
            partnership to the travel startup?
          </p>
          <p className={styles.textLower}>
            Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec
            viverra tincidunt ? Amet ullamcorper velit tristique scelerisque
            donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices
            magna cursus se?
          </p>
        </div>
        {/* third container for views */}
        <div className={styles.viewInfo}>
        <div>
        <img src={viewsIcon} alt="views" className={styles.viewIcon}/>
        <span style={{fontWeight:"500",fontSize:"16px"}}>100 Views</span>
        </div>
        <div>
         <img src={infoIcon} alt="info" className={styles.infoIcon}/>
         <span style={{fontWeight:"500",fontSize:"16px", lineHeight:"10px"}}>How should you word your answer?</span>
        </div>
        </div>
      </div>
      {/* container for total comment count*/}
      <div className={styles.commentCount}>
      <p className={styles.Ans}>Answer(23)</p>

      <div style={{display:"flex"}}>
      <p className={styles.Sort}>Sort by:</p>
      <span className={styles.popular}>Popular
      <span> <img src={downIcon} alt="down" style={{height:"15px",width:"20px"}}/></span>
     </span>
      
      </div>
      </div>
    
     
    <UserInfo />
    <Icons />
    </>
  );
}
