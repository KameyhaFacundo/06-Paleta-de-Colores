import { Row, Col } from "react-bootstrap";
import ItemColor from "./ItemColor";

const ListaColores = ({ colores, borrarColor }) => {
  return (
    <Row xs={1} lg={3} md={2} sm={3} xl={4} className="g-4">
      {colores.map((color, index) => (
        <Col key={index}>
          <ItemColor
            key={index}
            color={color}
            borrarColor={borrarColor}
          ></ItemColor>
        </Col>
      ))}
    </Row>
  );
};

export default ListaColores;
