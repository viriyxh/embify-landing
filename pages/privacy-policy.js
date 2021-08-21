import Link from "next/link"
import { Button } from "react-bootstrap"
import styles from "../styles/Page.module.css"

const PrivacyPolicy = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flexCenter}>
        <div className="text-center">
          <h1>Privacy Policy</h1>
          <h3><span className={styles.red}>Don’t hurry!</span> We’re working on this page.</h3>
          <Link href="/" passHref><Button variant="primary">Go back</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
