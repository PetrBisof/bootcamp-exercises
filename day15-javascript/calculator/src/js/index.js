let result = 0;
let op = '';

const handlePlusClick = () => {
  const textNumber = document.querySelector('.calc__input');
  const number = parseInt(textNumber.value, 10);
  result += number;

  const textResult = document.querySelector('#text-result');
  textResult.textContent = result;
  op = 'handlePlusClick';
};

const handleSubtractionClick = () => {
  const textNumber = document.querySelector('.calc__input');
  const number = parseInt(textNumber.value, 10);
  result -= number;

  const textResult = document.querySelector('#text-result');
  textResult.textContent = result;
  op = 'handleSubtractionClick';
};

const handleMultiplicationClick = () => {
  const textNumber = document.querySelector('.calc__input');
  const number = parseInt(textNumber.value, 10);
  result *= number;

  const textResult = document.querySelector('#text-result');
  textResult.textContent = result;
  op = 'handleMultiplicationClick';
};


const handleDivisionClick = () => {
  const textNumber = document.querySelector('.calc__input');
  const number = parseInt(textNumber.value, 10);
  result /= number;

  const textResult = document.querySelector('#text-result');
  textResult.textContent = result;
  op = 'handleDivisionClick';
};

const clear = () => {
  result = 0;
  const textResult = document.querySelector('#text-result');
  textResult.textContent = result;
  document.getElementById('delete').value = 0;
  op = 'clear';
};

const equal = () => {
  if (op === 'clear') {
    clear();
  } else if (op === 'handlePlusClick') {
    handlePlusClick();
  } else if (op === 'handleSubtractionClick') {
    handlePlusClick();
  }
};

/* const five = () => {
  let stringInput ='5555';
  stringInput = Array.from(stringInput);
  console.log(typeof stringInput);
  console.log(stringInput);
  }

 five(); */

const one = () => {
  const stringInput = document.getElementById('delete').value;
  const arrayInput = Array.from(stringInput);
  arrayInput.push('1');
  const stringInput2 = arrayInput.join();
  const preparedInput = stringInput2.replace(/,/g, '');
  const preparedInput2 = parseInt(preparedInput, 10);
  document.getElementById('delete').value = preparedInput2;
};

const two = () => {
  const stringInput = document.getElementById('delete').value;
  const arrayInput = Array.from(stringInput);
  arrayInput.push('2');
  const stringInput2 = arrayInput.join();
  const preparedInput = stringInput2.replace(/,/g, '');
  const preparedInput2 = parseInt(preparedInput, 10);
  document.getElementById('delete').value = preparedInput2;
};

const three = () => {
  const stringInput = document.getElementById('delete').value;
  const arrayInput = Array.from(stringInput);
  arrayInput.push('3');
  const stringInput2 = arrayInput.join();
  const preparedInput = stringInput2.replace(/,/g, '');
  const preparedInput2 = parseInt(preparedInput, 10);
  document.getElementById('delete').value = preparedInput2;
};

const four = () => {
  const stringInput = document.getElementById('delete').value;
  const arrayInput = Array.from(stringInput);
  arrayInput.push('4');
  const stringInput2 = arrayInput.join();
  const preparedInput = stringInput2.replace(/,/g, '');
  const preparedInput2 = parseInt(preparedInput, 10);
  document.getElementById('delete').value = preparedInput2;
};

const five = () => {
  const stringInput = document.getElementById('delete').value;
  const arrayInput = Array.from(stringInput);
  arrayInput.push('5');
  const stringInput2 = arrayInput.join();
  const preparedInput = stringInput2.replace(/,/g, '');
  const preparedInput2 = parseInt(preparedInput, 10);
  document.getElementById('delete').value = preparedInput2;
};

const six = () => {
  const stringInput = document.getElementById('delete').value;
  const arrayInput = Array.from(stringInput);
  arrayInput.push('6');
  const stringInput2 = arrayInput.join();
  const preparedInput = stringInput2.replace(/,/g, '');
  const preparedInput2 = parseInt(preparedInput, 10);
  document.getElementById('delete').value = preparedInput2;
};

const seven = () => {
  const stringInput = document.getElementById('delete').value;
  const arrayInput = Array.from(stringInput);
  arrayInput.push('7');
  const stringInput2 = arrayInput.join();
  const preparedInput = stringInput2.replace(/,/g, '');
  const preparedInput2 = parseInt(preparedInput, 10);
  document.getElementById('delete').value = preparedInput2;
};

const eight = () => {
  const stringInput = document.getElementById('delete').value;
  const arrayInput = Array.from(stringInput);
  arrayInput.push('8');
  const stringInput2 = arrayInput.join();
  const preparedInput = stringInput2.replace(/,/g, '');
  const preparedInput2 = parseInt(preparedInput, 10);
  document.getElementById('delete').value = preparedInput2;
};

const nine = () => {
  const stringInput = document.getElementById('delete').value;
  const arrayInput = Array.from(stringInput);
  arrayInput.push('9');
  const stringInput2 = arrayInput.join();
  const preparedInput = stringInput2.replace(/,/g, '');
  const preparedInput2 = parseInt(preparedInput, 10);
  document.getElementById('delete').value = preparedInput2;
};

const zero = () => {
  const stringInput = document.getElementById('delete').value;
  const arrayInput = Array.from(stringInput);
  arrayInput.push('0');
  const stringInput2 = arrayInput.join();
  const preparedInput = stringInput2.replace(/,/g, '');
  const preparedInput2 = parseInt(preparedInput, 10);
  document.getElementById('delete').value = preparedInput2;
};


document.addEventListener('DOMContentLoaded', () => {
  const btnPlus = document.querySelector('#btn-plus');
  btnPlus.addEventListener('click', handlePlusClick);
});

document.addEventListener('DOMContentLoaded', () => {
  const btnDivision = document.querySelector('#btn-division');
  btnDivision.addEventListener('click', handleDivisionClick);
});

document.addEventListener('DOMContentLoaded', () => {
  const btnSubtraction = document.querySelector('#btn-subtraction');
  btnSubtraction.addEventListener('click', handleSubtractionClick);
});

document.addEventListener('DOMContentLoaded', () => {
  const btnMultiplication = document.querySelector('#btn-multiplication');
  btnMultiplication.addEventListener('click', handleMultiplicationClick);
});

document.addEventListener('DOMContentLoaded', () => {
  const btnEquals = document.querySelector('#btn-equals');
  btnEquals.addEventListener('click', equal);
});

document.addEventListener('DOMContentLoaded', () => {
  const btnErase = document.querySelector('#btn-clear');
  btnErase.addEventListener('click', clear);
});

document.addEventListener('DOMContentLoaded', () => {
  const btnOne = document.querySelector('#btn-one');
  btnOne.addEventListener('click', one);
});

document.addEventListener('DOMContentLoaded', () => {
  const btnTwo = document.querySelector('#btn-two');
  btnTwo.addEventListener('click', two);
});

document.addEventListener('DOMContentLoaded', () => {
  const btnThree = document.querySelector('#btn-three');
  btnThree.addEventListener('click', three);
});

document.addEventListener('DOMContentLoaded', () => {
  const btnFour = document.querySelector('#btn-four');
  btnFour.addEventListener('click', four);
});

document.addEventListener('DOMContentLoaded', () => {
  const btnFive = document.querySelector('#btn-five');
  btnFive.addEventListener('click', five);
});

document.addEventListener('DOMContentLoaded', () => {
  const btnSix = document.querySelector('#btn-six');
  btnSix.addEventListener('click', six);
});

document.addEventListener('DOMContentLoaded', () => {
  const btnSeven = document.querySelector('#btn-seven');
  btnSeven.addEventListener('click', seven);
});

document.addEventListener('DOMContentLoaded', () => {
  const btnEight = document.querySelector('#btn-eight');
  btnEight.addEventListener('click', eight);
});

document.addEventListener('DOMContentLoaded', () => {
  const btnNine = document.querySelector('#btn-nine');
  btnNine.addEventListener('click', nine);
});

document.addEventListener('DOMContentLoaded', () => {
  const btnZero = document.querySelector('#btn-zero');
  btnZero.addEventListener('click', zero);
});

/*
const resultElement = document.querySelector('.calc__result');
const result = parseInt(resultElement.value, 10);


document.addEventListener('DOMContentLoaded', () => {
  const inputElement = document.querySelector('.calc__input');
  const input = parseInt(inputElement.value, 10);
  let plusResult = 0;
  console.log(input);
  console.log(result);
  const divide = document.querySelector('#btn-divide');
  divide.addEventListener('click', () => {
    plusResult = input + plusResult;
    return plusResult;
    /* plusResult += input; */
/*  console.log(plusResult); */
/*  return result; */
/*   });
});

const plusResult = document.addEventListener();

console.log(plusResult); */
