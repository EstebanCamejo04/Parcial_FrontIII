/* eslint-disable react/prop-types */

const Card = ({ nombre, apellido }) => {
  return (
    <div className="card">
      <h2>Información ingresada:</h2>
      <p>
        <strong>Nombre:</strong> {nombre}
      </p>
      <p>
        <strong>Apellido:</strong> {apellido}
      </p>
    </div>
  );
};

export default Card;
