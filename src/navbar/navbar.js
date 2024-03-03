import React from 'react';
import styles from "./navbar.module.css";
import profile from "../png/profile.png";
import dropIcon from "../png/down-chevron.png";
// Import the required FontAwesome components


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <p className={styles.logo}>The <span style={{backgroundColor:"white",color:"black", textAlign:"center",padding:"2px"}}>Product</span> Platform</p>
      <div className={styles.navEle}>
        <p style={{marginTop:"5px"}}>Learn</p>      
      <img src={dropIcon} alt="icon" style={{ height:"28px",marginLeft:"-28px",marginTop:"9px"}}/>
       
     


      <p style={{marginTop:"5px"}}>Practice</p>
      <img src={dropIcon} alt="icon" style={{ height:"28px",marginTop:"9px"}}/>
      
        
        <img src={profile} alt="Profile Icon" className={styles.imgIcon} style={{ height:"50px"}}/>
      </div>
    </nav>
  );
}

export default Navbar;
