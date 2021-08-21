import Link from "next/link"
import { Nav } from "react-bootstrap"

const HeaderItem = ({ title, link }) => {
  return (
    <Link href={link} passHref>
      <Nav.Link>{title}</Nav.Link>
    </Link>
  )
}

export default HeaderItem
