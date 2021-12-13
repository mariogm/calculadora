import React, { useState } from 'react';
import './Calculadora.css';
import CalcService from './Calculadora.service';
import { Container, Card, Row, Col, Button, Form } from 'react-bootstrap';

function Calculadora() {

  const [calc, pushNumber, ADDITION, SUBTRACTION, DIVISION, MULTIPLICATION] = CalcService();
  const [resultDisplay, setResultDisplay] = useState('0');
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState(null);
  const [operation, setOperation] = useState(null);
 
  function handleNumberClick(n) {
    let result;

    // which number to be set: n1 or n2?
    if(operation === null) { // concatenate number and display number 1
      result = pushNumber(number1, n);
      setNumber1(result);
    } else { // concatenate number and display number 2
      result = pushNumber(number2, n);
      setNumber2(result);
    }

    setResultDisplay(result);
  }


  function handleOperationClick(op) {

    // set operation state if it is null
    if(operation === null) {
      setOperation(op);
      return;
    }

    // do calc, set number 1 to result and clear number 2 
    if(number2 !== null) {
      const result = calc(number1, number2, operation);

      setOperation(op);
      setNumber1(result.toString());
      setNumber2(null);
      setResultDisplay(result.toString());
    }

  }

  function doCalc() {
    if(number2 === null) {
      return;
    }

    const result = calc(number1, number2, operation);
    reset();
    setResultDisplay(result.toString());
  }

  function reset() {
    setResultDisplay('0');
    setNumber1('0');
    setNumber2(null);
    setOperation(null);
  }

  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center bg-secondary" style={{ height: '100%' }}>
      <Card style={{ width: '360px' }} className="m-1 p-3 bg-primary rounded-3 shadow">
        <h2 className="text-white mb-4">Calculadora</h2>
        <div>
        <Row className="mb-3">
          <Col className="d-grid" xs={3}><Button variant="btn btn-lg btn-danger" onClick={reset}>C</Button></Col>
          <Col className="d-grid" xs={9}><Form.Control type="text" name="resultDisplay" placeholder="0" size="lg" style={{ textAlign: "right" }} readOnly value={resultDisplay} data-testid="resultDisplay" /></Col>
        </Row>
        <Row className="mb-3">
          <Col className="d-grid"><Button variant="info" size="lg" onClick={() => handleNumberClick('7')}>7</Button></Col>
          <Col className="d-grid"><Button variant="info" size="lg" onClick={() => handleNumberClick('8')}>8</Button></Col>
          <Col className="d-grid"><Button variant="info" size="lg" onClick={() => handleNumberClick('9')}>9</Button></Col>
          <Col className="d-grid"><Button variant="secondary" size="lg" onClick={() => handleOperationClick(DIVISION)}>÷</Button></Col>
        </Row>
        <Row className="mb-3">
          <Col className="d-grid"><Button variant="info" size="lg" onClick={() => handleNumberClick('4')}>4</Button></Col>
          <Col className="d-grid"><Button variant="info" size="lg" onClick={() => handleNumberClick('5')}>5</Button></Col>
          <Col className="d-grid"><Button variant="info" size="lg" onClick={() => handleNumberClick('6')}>6</Button></Col>
          <Col className="d-grid"><Button variant="secondary" size="lg" onClick={() => handleOperationClick(MULTIPLICATION)}>×</Button></Col>
        </Row>
        <Row className="mb-3">
          <Col className="d-grid"><Button variant="info" size="lg" onClick={() => handleNumberClick('1')}>1</Button></Col>
          <Col className="d-grid"><Button variant="info" size="lg" onClick={() => handleNumberClick('2')}>2</Button></Col>
          <Col className="d-grid"><Button variant="info" size="lg" onClick={() => handleNumberClick('3')}>3</Button></Col>
          <Col className="d-grid"><Button variant="secondary" size="lg" onClick={() => handleOperationClick(SUBTRACTION)}>-</Button></Col>
        </Row>
        <Row>
          <Col className="d-grid"><Button variant="info" size="lg" onClick={() => handleNumberClick('0')}>0</Button></Col>
          <Col className="d-grid"><Button variant="secondary" size="lg" onClick={() => handleNumberClick('.')}>.</Button></Col>
          <Col className="d-grid"><Button variant="secondary" size="lg" onClick={doCalc}>=</Button></Col>
          <Col className="d-grid"><Button variant="secondary" size="lg" onClick={() => handleOperationClick(ADDITION)}>+</Button></Col>
        </Row>

      </div>
        </Card>
    </Container>
  );
}

export default Calculadora;
