import dropLogo from "../png/down-chevron.png";
import styles from "../css/issueForm.module.css";
export function IssueFrom() {
    const text="Lorem ipsum dolor sit amet consectetur. Commodo sed quis dui sit amet nec pellentesque interdum. Vel sed tellus rutrum sit nibh cursus vitae. Pharetra leo eget habitant adipiscing amet.  Vel sed tellus rutrum sit nibh cursus vitae. Pharetra leo eget habitant adipiscing amet.  Vel sed tellus rutrum sit nibh cursus vitae. Pharetra leo eget habitant adipiscing amet.";

  return (
    <div className={styles.formContainer}>
      <div className={styles.formcard}>
        <div className={styles.header}>
          <p className={styles.Text}>
            Let us know about the Issue you are facing right now!
          </p>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.titleInput}>
            <p className={styles.lab}>choose a section</p>

            <div className={styles.para}>
              <p className={styles.dropdown}>Interview Qustion </p>
              <img src={dropLogo} alt="logo" className={styles.logo} />
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.desTitle}>
              <p className={styles.lab}>Describe the issue in detail</p>
              <div className={styles.descInpt}>
                <textarea
                  value={text}
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
    </div>
  );
}
