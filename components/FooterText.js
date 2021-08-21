import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "../styles/FooterText.module.css"

const FooterText = () => {
  const date = new Date()
  const year = date.getFullYear()

  const iconName = "heart"

  return <div>
    <div className="d-none d-md-block">
      <div className="d-flex">
        <span className="me-auto">Copyright &copy; {year} Embify. All rights reserved.</span>
        <span className="ms-auto">Made with <FontAwesomeIcon icon={iconName} className={styles.red} /> in Bangkok.</span>
      </div>
    </div>
    <div className="d-md-none">
      <span className="d-block pb-2">Made with <FontAwesomeIcon icon={iconName} className={styles.red} /> in Bangkok.</span>
      <span className="d-block">Copyright &copy; {year} Embify. All rights reserved.</span>
    </div>
  </div>
}

export default FooterText
