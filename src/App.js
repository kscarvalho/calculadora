import React, { useState } from 'react';

import Input from './components/Input';
import Button from './components/Button';



import { Container, Content, Row } from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState ('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
  };

  //FUNCTION PARA ADICIONAR O NUMERO AO INPUT
  const handleAddNumber = (num) => {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  //FUNCTION SOMA
  const handleSumNumbers = () => {
    if(firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('');
         setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  //FUNCTION SUBTRAIR
  const handleMinusNumbers = () => {
    if(firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('');
        setOperation('-');
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
    }
  }
  
  // FUNCTION MULTIPLICAR
  const handleMultiplcationNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber)); //SALVA O PROMEIRO NUMERO
      setCurrentNumber(''); // LIMPA PARA DIGITAR O PROXIMO
      setOperation('x');
    } else {
      const multiplicacao = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplicacao));
      setFirstNumber('0');
      setOperation('');
    }
  }

  // FUNCTION DIVIDIR 
    const handleDivisorNumbres = () => {
      if(firstNumber === '0') {
        setFirstNumber(String(currentNumber)); //SALVA PRIMEIRO NUMERO
        setCurrentNumber(''); // LIMPA PARA DIGITAR O PROXIMO
        setOperation('/')
      } else {
        const divisao = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(divisao));
        setFirstNumber('0');
        setOperation('');

      }      
    }

  //FUNCTION PORCENTAGEM
  const handlePorcentagemNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('%');
    } else {
      const porcentagem = Number(firstNumber) * Number(currentNumber / 100);
      setCurrentNumber(String(porcentagem));
        setFirstNumber('0');
        setOperation('');
    }
  }

  //FUNCTION IGUAL
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case 'x':
            handleMultiplcationNumbers();
            break; 
          case '/':
            handleDivisorNumbres();
            break;   
          case '%':
            handlePorcentagemNumbers();
            break;  
          default:
      }
    } 
  }


  return (
    <Container>
        <Content>
           <Input value={currentNumber} /> 
              <Row>
                <Button label="C" onClick={handleOnClear}/>
                <Button label="%" onClick={handlePorcentagemNumbers}/>
                <Button label="/" onClick={handleDivisorNumbres}/>
                <Button label="x" onClick={handleMultiplcationNumbers}/>
              </Row>
              <Row>
                <Button label="7" onClick={() => handleAddNumber('7')}/>
                <Button label="8" onClick={() => handleAddNumber('8')}/>
                <Button label="9" onClick={() => handleAddNumber('9')}/>
                <Button label="-" onClick={handleMinusNumbers}/>
              </Row> 
              <Row>
                <Button label="4" onClick={() => handleAddNumber('4')}/>
                <Button label="5" onClick={() => handleAddNumber('5')}/>
                <Button label="6" onClick={() => handleAddNumber('6')}/>
                <Button label="+" onClick={handleSumNumbers}/>
              </Row> 
              <Row>
                <Button label="1" onClick={() => handleAddNumber('1')}/>
                <Button label="2" onClick={() => handleAddNumber('2')}/>
                <Button label="3" onClick={() => handleAddNumber('3')}/>
                <Button label="=" onClick={handleEquals}/>
              </Row>
              <Row>
                <Button label="0" onClick={() => handleAddNumber('0')}/>
              </Row>
              
        </Content>
    </Container>
  );
}

export default App;
