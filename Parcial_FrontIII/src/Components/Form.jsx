import { useState } from "react";
import Card from "./Card";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.trim().length < 3 || apellido.trim().length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }
    setError("");
    renderCard();
  };

  const renderCard = () => {
    return <Card nombre={nombre} apellido={apellido} />;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido: </label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && (
        <p style={{ color: "red", background: "white", fontWeight: "bold" }}>
          {error}
        </p>
      )}
      {nombre && apellido && !error && renderCard()}
    </div>
  );
}

export default Formulario;
