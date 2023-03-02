
// Create Division Element

const container = document.createElement('div');
container.setAttribute('class','container');
document.body.append(container);

//create Heading

const heading = document.createElement('h1');
heading.setAttribute('id','title');
heading.innerText = "Dom calculator";
container.append(heading);

//create description

const description = document.createElement('p');
description.setAttribute('id','description');
description.innerText = 'Calculater Using Arithematic Operator And Numbers In Dynamic Way';
container.append(description);

//Create Second Container

const secondContainer = document.createElement('div');
secondContainer.setAttribute('class','second-container');
container.append(secondContainer);

// Create Input

const input = document.createElement('input');
input.setAttribute('id','result');
input.setAttribute('type','text');
input.setAttribute('placeholder','0');
secondContainer.append(input);

//Create Third Container

const thirdContainer = document.createElement('div');
thirdContainer.setAttribute('class','third-container');
secondContainer.append(thirdContainer);

// Create Cancel Button

const btn1 = createButton('button', 'button', 'c', 'clear', 'btn btn-info', 'AC');
thirdContainer.append(btn1);

// Create Delete Button

const btn2 = createButton('button', 'button', 'delete', 'delete', 'btn btn-info', '←');
thirdContainer.append(btn2);

// Create Dot Button

const btn3 = createButton('button', 'button', '.', 'dot', 'btn btn-info', '.');
thirdContainer.append(btn3);

// Create Multiply Symbol

const btn4 = createButton('button', 'button', '*', 'multi', 'btn btn-info', 'x');
thirdContainer.append(btn4);

// Create First Row(9,8,7,/)

const btn5 = createButton('button', 'button', '9', '9', "btn btn-light", '9');
const btn6 = createButton('button', 'button', '8', "8", "btn btn-light", '8');
const btn7 = createButton("button", "button", "7", "7", "btn btn-light", "7");
const btn8 = createButton('button', 'button', '/', 'divi', 'btn btn-info', '/');
thirdContainer.append(btn5, btn6, btn7, btn8);

// Create Second Row(6,5,4,-)

const btn9 = createButton('button', 'button', '6', '6', "btn btn-light", '6');
const btn10 = createButton('button', 'button', '5', '5', "btn btn-light", '5');
const btn11 = createButton('button', 'button', '4', '4', "btn btn-light", '4');
const btn12 = createButton('button', 'button', '-', 'subtract', 'btn btn-info', '-');
thirdContainer.append(btn9, btn10, btn11, btn12);


// Create Third Row(3,2,1,+)

const btn13 = createButton('button', 'button', '3', '3', "btn btn-light", '3');
const btn14 = createButton('button', 'button', '2', '2', "btn btn-light", '2');
const btn15 = createButton('button', 'button', '1', '1', "btn btn-light", '1');
const btn16 = createButton('button', 'button', '+', 'add', 'btn btn-info', '+');

thirdContainer.append(btn13, btn14, btn15, btn16);

// Create Fourth Row(0,00,=)

let btn17 = createButton('button', 'button', '0', '0', "btn btn-light", '0');
let btn18 = createButton('button', 'button', '00', '00', "btn btn-light", '00');
let btn19 = createButton('button', 'button', '=', 'equal', 'equal-button  btn btn-primary', '=');
thirdContainer.append(btn17, btn18, btn19);

// Function for Buttons


function createButton(btnTag, btnType, btnValue, btnId, btnClassName, name) {
  let button = document.createElement(btnTag);
  button.setAttribute('type', btnType);
  button.setAttribute('value', btnValue);
  button.setAttribute('id', btnId);
  button.setAttribute('class', btnClassName);
  button.innerText = name;

  button.addEventListener('click', (e) => {
    let data = e.target.value;
    if (data == "=") {
      equal();
    }
    else if (data === 'delete') {
      del();
    }
    else {
      display(data);
    }
    if (data == 'c') {
      clear();
    }
  })
  return button;
}

let resultView = document.getElementById('result');

function display(num) {
  resultView.value += num;
}

function equal() {
  try {
    resultView.value = eval(resultView.value);
  } catch (err) {
    alert('Enter Numbers Only');
  }
}

function del() {
  resultView.value = resultView.value.slice(0, -1);
}

function clear() {
  resultView.value = ' ';
}