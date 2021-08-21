import FooterMenu from "./FooterMenu"
import { Row, Col } from "react-bootstrap"

const FooterDirectory = ({ menus }) => {
  return (
    <Row>
      {menus.map((menu) => (
        <Col key={menu.title} sm className="pb-sm-0 pb-3">
          <FooterMenu title={menu.title} menus={menu.menus} />
        </Col>
      ))}
    </Row>
  )
}

export default FooterDirectory
