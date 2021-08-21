import Link from "next/link"
import styles from "../styles/FooterItem.module.css"

const FooterItem = ({ title, link }) => {
  return (
    <li className={`${styles.footerItem} py-1`}>
      <Link href={link}>
        <a className={styles.footerLink}>{title}</a>
      </Link>
    </li>
  )
}

export default FooterItem
