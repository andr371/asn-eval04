import React, { useState } from 'react';
import '../estilos/Factorial.css'

function CalcularFactorial() {
  const [number, setNumber] = useState('');
  const [factorial, setFactorial] = useState('');

  const calculateFactorial = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setFactorial('Ingresa un número válido');
    } else {
      let result = 1;
      for (let i = 1; i <= num; i++) {
        result *= i;
      }
      setFactorial(`El factorial de ${num} es ${result}`);
    }
  };

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className='box'>
      <h5>Calculadora de Factorial</h5>
      <input type="number" class="form-control" placeholder="Ingrese un número" value={number} onChange={handleInputChange} />
      <br/>
      <button type="button" class="btn btn-primary" onClick={calculateFactorial}>Calcular Factorial</button>
      <p>{factorial}</p>
    </div>
  );
}

export default CalcularFactorial;
