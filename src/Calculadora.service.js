function CalcService() {

  const ADDITION = '+';
  const SUBTRACTION = '-';
  const DIVISION = '/';
  const MULTIPLICATION = '*';

  function calc(n1, n2, op) {

    let result;

    switch(op) {
      case ADDITION:
        result = parseFloat(n1) + parseFloat(n2);
        break;
      case SUBTRACTION:
        result = parseFloat(n1) - parseFloat(n2);
        break;
      case DIVISION:
        result = parseFloat(n1) / parseFloat(n2);
        break;
      case MULTIPLICATION:
        result = parseFloat(n1) * parseFloat(n2);
        break;
      default:
        result = 0;
    }

    return result;
  }

  function pushNumber(currentN, newN) {

    // if current number is '0' or null => reset value
    if(currentN === '0' || currentN === null) {
      currentN = '';
    }

    // if first character is '.' => push '0' before
    if(newN === '.' && currentN === '') {
      return '0.';
    }

    // if current number already has '.' => return same value
    if(newN === '.' && currentN.includes('.')) {
      return currentN;
    }

    return currentN + newN;

  }

  return [calc, pushNumber, ADDITION, SUBTRACTION, DIVISION, MULTIPLICATION];

}

export default CalcService;