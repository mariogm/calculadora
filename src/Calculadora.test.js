import React from 'react';
import ReactDOM from 'react-dom';
import Calculadora from './Calculadora';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Calculadora tests', () => {

  it('renders Calculadora component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculadora/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('must reset calculator display', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('resultDisplay')).toHaveValue('0');
  });

  it('must add 3 + 5 and return 8', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('='));
    expect(getByTestId('resultDisplay')).toHaveValue('8');
  });

  it('must show 1 after adding 3 + 5 = 8 then clicking 1', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('='));
    fireEvent.click(getByText('1'));
    expect(getByTestId('resultDisplay')).toHaveValue('1');
  });


});


