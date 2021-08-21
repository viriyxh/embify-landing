import { Fragment } from "react"
import FooterItem from "./FooterItem"
import styles from "../styles/FooterMenu.module.css"

const FooterMenu = ({ title, menus }) => {
  return (
    <Fragment>
      <h5>{title}</h5>
      <ul className={styles.footerMenu}>
        {menus.map((menu) => (
          <FooterItem key={menu.title} title={menu.title} link={menu.link} />
        ))}
      </ul>
    </Fragment>
  )
}

export default FooterMenu
