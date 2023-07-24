import React, { useState } from 'react';
import '../estilos/Factorial.css'

function CalcularFactorial2() {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);

  const calculateFactorial = () => {
    let result = 1;
    for (let i = 1; i <= selectedNumber; i++) {
      result *= i;
    }
    setFactorial(result);
  };

  const handleSelectChange = (e) => {
    const selectedValue = parseInt(e.target.value);
    setSelectedNumber(selectedValue);
  };

  return (
    <div className='box'>
      <h5>Calculadora de Factorial</h5>
      <select class="form-select" value={selectedNumber} onChange={handleSelectChange}>
        {Array.from({ length: 30 }, (_, index) => index + 1).map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <br/>
      <button type="button" class="btn btn-primary" onClick={calculateFactorial}>Calcular Factorial</button>
      <p>{`El factorial de ${selectedNumber} es ${factorial}`}</p>
    </div>
  );
}

export default CalcularFactorial2;
