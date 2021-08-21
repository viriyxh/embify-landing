import Image from "next/image"
import { Navbar, Container, Nav } from "react-bootstrap"
import HeaderItem from "./HeaderItem"
import styles from "../styles/Header.module.css"

const Header = () => {
  const menus = [
    { title: "Privacy Policy", link: "/privacy-policy" },
    { title: "Terms of Service", link: "/terms" },
    { title: "Contact", link: "mailto:hello@embify.com" },
  ]

  return (
    <Navbar variant="dark" expand="md" className={`${styles.header} fixed-top`}>
      <Container>
        <Navbar.Brand href="/terms">LOGO IS COMING</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto">
            {menus.map((menu) => (
              <HeaderItem key={menu.title} title={menu.title} link={menu.link} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
