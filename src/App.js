import React, { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import "./styles.css";

const App = () => {
  const [driverIncome, setDriverIncome] = useState(0);
  const [ownerIncome, setOwnerIncome] = useState(0);

  const calculateIncome = (
    totalIncome,
    totalExpenses,
    driverPercentage,
    ownerPercentage,
    scenario
  ) => {
    totalIncome = parseFloat(totalIncome);
    totalExpenses = parseFloat(totalExpenses);
    driverPercentage = parseFloat(driverPercentage) / 100;
    ownerPercentage = parseFloat(ownerPercentage) / 100;

    let driverIncome, ownerIncome;

    switch (scenario) {
      case "shared-expenses":
        const netIncomeShared = totalIncome - totalExpenses;
        driverIncome = netIncomeShared * driverPercentage;
        ownerIncome = netIncomeShared * ownerPercentage;
        break;
      case "owner-expenses":
        driverIncome = totalIncome * driverPercentage;
        ownerIncome = totalIncome * ownerPercentage - totalExpenses;
        break;
      case "driver-expenses":
        driverIncome = totalIncome * driverPercentage - totalExpenses;
        ownerIncome = totalIncome * ownerPercentage;
        break;
      default:
        driverIncome = totalIncome * 0.4;
        ownerIncome = totalIncome * 0.6;
        break;
    }

    setDriverIncome(driverIncome);
    setOwnerIncome(ownerIncome);
  };

  return (
    <div className="container">
      <h1>Gestión de Alquiler de Automóvil</h1>
      <Form calculateIncome={calculateIncome} />
      <Results driverIncome={driverIncome} ownerIncome={ownerIncome} />
    </div>
  );
};

export default App;
