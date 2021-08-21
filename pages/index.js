import Header from "../components/Header"
import Footer from "../components/Footer"
import { Container } from "react-bootstrap"
import styles from "../styles/Landing.module.css"

const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Container className={styles.container}>
        <div className={styles.overlay}></div>
        <div className={styles.flexCenter}>
          <div className={styles.contentWrapper}>
            <h1>Embify.com</h1>
            <h3>Our new stunning website is coming soon...</h3>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default LandingPage
