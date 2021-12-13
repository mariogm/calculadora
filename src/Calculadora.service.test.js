import React from 'react';
import ReactDOM from 'react-dom';
import CalcService from './Calculadora.service';

describe('CalcService test', () => {
  const [calc, pushNumber, ADDITION, SUBTRACTION, DIVISION, MULTIPLICATION] = CalcService();

  it('must asure 1 + 4 = 5', () => {
    let add = calc(1, 4, ADDITION);
    expect(add).toEqual(5);
  });

  it('must asure 10 - 3 = 7', () => {
    let subtract = calc(10, 3, SUBTRACTION);
    expect(subtract).toEqual(7);
  });

  it('must asure 12 - 3 = 4', () => {
    let divide = calc(12, 3, DIVISION);
    expect(divide).toEqual(4);
  });

  it('must asure 9 * 5 = 45', () => {
    let multiply = calc(9, 5, MULTIPLICATION);
    expect(multiply).toEqual(45);
  });

  it('must return 0 for invalid operation', () => {
    let invalid = calc(10, 20, '%');
    expect(invalid).toEqual(0);
  });

});
