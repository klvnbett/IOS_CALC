const primaryDispaly = document.querySelector('.primary-display');
const secondaryDispaly = document.querySelector('.primary-display');
const buttons = document.querySelector('.buttons-container');
let operator = '';
let firstNumber = '';

buttons.addEventListener('click', (event) => {
    // primaryDispaly.innerHTML += event.target.innerHTML;
    // if (event.target.classList.contains('number')) {
    //     if (primaryDispaly.innerText === '0' && event.target === '0') {
    //         console.log('do nothing')
    //             // primaryDispaly.innerHTML += event.target.innerHTML;
    //     } else if (primaryDispaly.innerHTML === '0') {
    //         primaryDispaly.innerText = event.target.innerHTML;
    //     } else {
    //         primaryDispaly.innerText += event.target.innerHTML;
    //     }

    // }//
    let primaryValue = primaryDispaly.innerHTML;
    let buttonValue = event.target.innerHTML;

    if (event.target.classList.contains('number')) {
        if (primaryValue === '0' && buttonValue === '0') {
            console.log('Do Nothing');
        } else if (primaryValue === '0') {
            primaryDispaly.innerHTML = buttonValue;
        } else {
            primaryDispaly.innerHTML += buttonValue;
        }
    }
    if (event.target.classList.contains('operator')) {
        // console.log(buttonValue);
        // switch (buttonValue) {
        //     case '+'
        // }
        operator = buttonValue;
        firstNumber = primaryValue;
        secondaryDispaly.innerHTML = firstNumber + '' + operator;
        primaryDispaly.innerHTML = '0';
        console.log(firstNumber)
    }
    if (event.target.classList.contains('equal')) {
        switch (operator) {
            case '+':
                primaryDispaly.innerHTML =
                    Number(firstNumber) + Number(primaryDispaly.innerHTML);
                secondaryDispaly.innerHTML = '';
                break;
        }
    }
});