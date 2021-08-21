import FooterDirectory from "./FooterDirectory"
import FooterText from "./FooterText"
import { Container } from "react-bootstrap"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  const menus = [
    {
      title: "Links",
      menus: [
        { title: "Home", link: "/" },
        { title: "COVID-19", link: "/terms" },
      ],
    },
    {
      title: "Legal",
      menus: [
        { title: "Privacy Policy", link: "/privacy-policy" },
        { title: "Terms of Service", link: "/terms" },
      ],
    },
    {
      title: "Contact",
      menus: [
        { title: "Email", link: "mailto:hello@embify.com" },
        { title: "GitHub", link: "https://github.com/viriyxh" },
      ],
    },
  ]

  return (
    <footer className={`${styles.footer} fixed-bottom`}>
      <Container className="py-4">
        {/* <FooterDirectory menus={menus} /> */}
        {/* <hr className="my-4" /> */}
        <FooterText />
      </Container>
    </footer>
  )
}

export default Footer
