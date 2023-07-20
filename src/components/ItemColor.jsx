import { ListGroup, Button, Card } from "react-bootstrap";

const ItemColor = ({ color, borrarColor }) => {
  return (
    <Card className="mx-2 d-flex mx-1 border-1">
      <h3 className="text-center display-9">{color}</h3>
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
      <Button
        className="m-2"
        variant="success"
        onClick={() => borrarColor(color)}
      >
        Borrar
      </Button>
    </Card>
  );
};

export default ItemColor;
