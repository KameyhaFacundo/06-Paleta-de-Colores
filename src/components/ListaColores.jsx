import { Row, Col } from "react-bootstrap";
import ItemColor from "./ItemColor";

const ListaColores = ({ colores, borrarColor }) => {
  return (
    <Row lg={4} md={4} sm={3} className="g-4">
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
