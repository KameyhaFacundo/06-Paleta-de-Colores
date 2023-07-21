import { ListGroup, Button, Card } from "react-bootstrap";

const ItemColor = ({ color, borrarColor }) => {
  return (
    <Card className="mx-2 d-flex mx-1 border-1">
      <p className="text-center">
        <strong> {color.toUpperCase()}</strong>
      </p>
      <div
        style={{
          width: "50%",
          height: "100px",
          margin: "0 auto",
          backgroundColor: color,
          textAlign: "center",
          lineHeight: "200px",
        }}
      ></div>
      <Button className="m-2" variant="dark" onClick={() => borrarColor(color)}>
        Borrar
      </Button>
    </Card>
  );
};

export default ItemColor;
