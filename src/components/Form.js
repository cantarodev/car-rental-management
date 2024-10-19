import React, { useState } from "react";

const Form = ({ calculateIncome }) => {
  const [totalIncome, setTotalIncome] = useState("");
  const [totalExpenses, setTotalExpenses] = useState("");
  const [driverPercentage, setDriverPercentage] = useState(40);
  const [ownerPercentage, setOwnerPercentage] = useState(60);
  const [driverExpensePercentage, setDriverExpensePercentage] = useState(40);
  const [ownerExpensePercentage, setOwnerExpensePercentage] = useState(60);
  const [scenario, setScenario] = useState("shared-expenses");

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateIncome(
      totalIncome,
      totalExpenses,
      driverPercentage,
      ownerPercentage,
      scenario,
      driverExpensePercentage,
      ownerExpensePercentage
    );
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Ingresos Totales:</label>
      <input
        type="number"
        value={totalIncome}
        onChange={(e) => setTotalIncome(e.target.value)}
        required
      />

      <label>Gastos Totales:</label>
      <input
        type="number"
        value={totalExpenses}
        onChange={(e) => setTotalExpenses(e.target.value)}
        required
      />

      <label>Porcentaje del Chofer (%):</label>
      <input
        type="number"
        value={driverPercentage}
        onChange={(e) => setDriverPercentage(e.target.value)}
        required
      />

      <label>Porcentaje del Dueño (%):</label>
      <input
        type="number"
        value={ownerPercentage}
        onChange={(e) => setOwnerPercentage(e.target.value)}
        required
      />

      <label>Porcentaje de Gastos del Chofer (%):</label>
      <input
        type="number"
        value={driverExpensePercentage}
        onChange={(e) => setDriverExpensePercentage(e.target.value)}
        required
      />

      <label>Porcentaje de Gastos del Dueño (%):</label>
      <input
        type="number"
        value={ownerExpensePercentage}
        onChange={(e) => setOwnerExpensePercentage(e.target.value)}
        required
      />

      <label>Escenario:</label>
      <select
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
        required
      >
        <option value="shared-expenses">Gastos Compartidos</option>
        <option value="owner-expenses">Gastos a Cargo del Dueño</option>
        <option value="driver-expenses">Gastos a Cargo del Chofer</option>
      </select>

      <button type="submit">Calcular</button>
    </form>
  );
};

export default Form;
