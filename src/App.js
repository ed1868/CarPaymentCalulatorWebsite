import React, { useState } from 'react';
import './App.css';

function App() {
  const [carPrice, setCarPrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  // Function to handle the calculation (to be implemented)
  const calculateMonthlyPayment = () => {
    const principal = carPrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm;

    // Ensure we have all the necessary data and it's valid
    if (principal > 0 && monthlyInterestRate >= 0 && numberOfPayments > 0) {
      const monthlyPayment = principal *
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

      setMonthlyPayment(monthlyPayment.toFixed(2));
    } else {
      setMonthlyPayment('Invalid input');
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Nomad Car Payment Calculator</h1>
      </header>
      <main>
        <div className="calculator">
          <input
            type="number"
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
            placeholder="Car Price"
          />
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            placeholder="Down Payment"
          />
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="Loan Term (months)"
          />
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Interest Rate (%)"
          />
          <button onClick={calculateMonthlyPayment}>Calculate</button>
        </div>
        <div className="result">
          Monthly Payment: {monthlyPayment ? `$${monthlyPayment}` : 'Enter values to calculate'}
        </div>
      </main>
    </div>
  );
}

export default App;
