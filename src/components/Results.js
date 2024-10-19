import React from "react";

const Results = ({ driverIncome, ownerIncome }) => {
  return (
    <div className="results">
      <p>Ingresos del Chofer: S/ {driverIncome.toFixed(2)}</p>
      <p>Ingresos del Dueño: S/ {ownerIncome.toFixed(2)}</p>
    </div>
  );
};

export default Results;
