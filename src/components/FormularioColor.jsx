import { Form, Button, Card } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useState } from "react";

const FormularioColor = () => {
  const [color, setColor] = useState("");
  const [colores, setColores] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setColores([...colores, color]);
    e.target.reset();
  };

  const borrarColor = (colorBorrar) => {
    let listaColoresFiltrada = colores.filter(
      (itemColor) => itemColor !== colorBorrar
    );
    setColores(listaColoresFiltrada);
  };

  return (
    <>
      <Card body className="my-3">
        <h1 className="text-center text-dark">Administrar Colores</h1>
        <hr className=" border-1" />

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 d-flex" controlId="color">
            <Form.Control
              type="text"
              placeholder="Ingrese un color ej: blue"
              onChange={(e) => setColor(e.target.value)}
            ></Form.Control>
            <Button variant="dark mx-2" type="submit">
              Guardar
            </Button>
          </Form.Group>
        </Form>
      </Card>
      <hr className="border-1" />
      <ListaColores colores={colores} borrarColor={borrarColor}></ListaColores>
    </>
  );
};

export default FormularioColor;
