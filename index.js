const typeOfAction = prompt('What type of action do you want to do? (please enter: add, sub, mult or div)');
const number1 = prompt('Please enter your first number');
const number2 = prompt('Please enter your second number');
if (typeOfAction === null || number1 === null || number2 === null) {
    alert(`Incorrect data`);
} else if (isNaN(+number1) || isNaN(+number2)) {
    alert(`Incorrect number`);
} else {
    if (typeOfAction === 'add') {
        resultAdd = (+number1)+(+number2);
        alert(`${number1} + ${number2} = ${resultAdd}`);
    } else if (typeOfAction === 'sub') {
        resultSub = number1-number2;
        alert(`${number1} - ${number2} = ${resultSub}`)
    } else if (typeOfAction === 'mult') {
        resultMult = number1*number2;
        alert(`${number1} * ${number2} = ${resultMult}`)
    } else if (typeOfAction === 'div') {
        resultDiv = number1/number2;
        alert(`${number1} / ${number2} = ${resultDiv}`)
    } else {
        alert(`Wrong type of action`);
    }
}
