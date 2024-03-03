
import styles from "../css/contactForm.module.css";
 export function Contactfrom(){

  return (
    
      <div className={styles.formcard}>
        <div className={styles.header}>
          <p className={styles.Text}>
          Let us know what your queries are!
          </p>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.titleInput}>
            <p className={styles.lab}>Your Name</p>

            <div className={styles.para}>
              <input type="text" placeholder="Enter Your name" required className={styles.dropdown}/>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.desTitle}>
              <p className={styles.lab}>What would you like to ask</p>
              <div className={styles.descInpt}>
                <textarea
                 placeholder="write here..."
                  className={styles.Inpt}
                
                />
                <div className={styles.btndiv}>
                <button  className={styles.btn}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}