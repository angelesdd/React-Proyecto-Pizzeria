import { useState } from "react";

const Compra = () => {
    const [texto, setTexto] = useState("");
  
    const modificarTexto = () => {
      setTexto("Lamentablemente en este momento no es posible realizar esta compra. Le pedimos disculpas por las molestias ocasionadas.");
    };
  
    return (
      <div>
        <p className="text-danger">{texto}</p>
        <p>
          <button onClick={modificarTexto} className="btn btn-primary">Agregar</button>
        </p>
      </div>
    );
  };

export default Compra;
