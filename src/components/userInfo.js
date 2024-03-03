import userLogo from "../png/profile.png";
import edit from "../png/edit.png";
import styles from "../css/userComment.module.css"
import likeIcon from "../png/like.png";
import messageIcon from "../png/chat.png";
import { useState } from "react";

export function UserInfo() {

  const [inputValue,setInputValue]=useState("");

  function sumbitForm(e){
    e.preventDefault();
    setInputValue("");
  }
  return (
    <div className={styles.userComment}>
      <div className={styles.userhead}>
        <div className={styles.user}>
          <img src={userLogo} alt="logo" className={styles.userlogo} />
       
          <p className={styles.userName}>
          Neha Bhat <span style={{width:"58px",fontWeight:"500",padding:"10px",fontSize:"20px" }}>(You)</span>
          <br/>
          <span className={styles.date}>Jun 27, 2023</span>
        </p>
         
        
        </div>
        <div>
        <img src={edit} alt="editLogo" className={styles.editLogo} />
        <span className={styles.edit}>Edit</span>
        </div>
        
      </div>
      <div className={styles.comment}>
        <p>
          Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim
          ornare feugi vitae. Eget proin aliquam blandit eget vitae erat
          fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus
          sit pel sit elit morbi. Mi sed mauris aenean odio egestas ullamcorper.
          Dignissim in vel fusce id. Sit blandit diam ridiculus ipsum interdum
          ut velit quam. Bibendum amet mi.... <span style={{fontWeight:"600" ,fontSize:"20px"}}>Show more</span>
        </p>
      </div>
      <div className={styles.commentForm}>
      <div style={{width:"73px", height:"30px", display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
      <img src={likeIcon} alt="like" className={styles.likeicon}/>
      <p className={styles.likeText}>Like</p>
      </div>
      <div className={styles.messageForm}>
      <div className={styles.insForm}>
      <img src={messageIcon} alt="icon" className={styles.mssgeIcon} />
      <input type="text" placeholder="Add acomment" className={styles.input}  value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button className={styles.btn} onClick={sumbitForm}> Post</button>
      </div>
      
      </div>
      </div>
    </div>
  );
}
