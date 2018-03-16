
// CalcOutput
let show = document.querySelector('#show');
let message = document.querySelector('#message');
//Numbers
let pressed = document.querySelectorAll(".pressed");
// Operators
let operators = ['+', '-', '*', '/'];
let operators2 = ['.'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Results
let input = [];
let result = 0;
// Initial state
show.innerHTML = result;

// Logic when pressed any button
pressed.forEach(press => {
  press.addEventListener('click', (click)=>{
    var inner = press.innerHTML;
    if(inner === '=' || inner === 'AC' || inner === 'CE'){
      deleteKey(inner);
    } else {
      updateShow(inner);
    }
  });
});

// Logic updating show 
function updateShow(obj){
  //check if input is 0 you can do equal or press any of the operators unless is '-' for negative numbers.
  if(input.length < 1 && (operators.includes(obj)) && obj !== '-'){
    message.innerHTML = "ERROR";
    console.log('error its an operator');
  // checks second to last input and if its an operator and the new input is also an operator it doesnt let you. 
  } else if (operators.includes(input[input.length-1]) && (operators.indexOf(obj) !== -1) || operators2.includes(input[input.length-1]) && (operators2.indexOf(obj) !== -1)){
    console.log('double operator');
  }  else {
    input.push(obj);
    show.innerHTML = input.join('');
  }
}

// Logic when deleting or equal
function deleteKey (obj) {
  if(obj === "CE"){
    input.pop();
    show.innerHTML = input.join('');
  } else if (obj === '='){
    evaluateResult(obj);
  } else if (obj === "AC"){
    input = [];
    result = '';
    show.innerHTML = 0;
    message.innerHTML = '';
  }
}

// Evaluate the result. 
function evaluateResult(obj){
  result = input.join('');
  // checks if there is an operators at the second to last index and if the following is a dot and we press equal then it will delete the +
  if(operators.includes(input[input.length - 2 ]) && operators2.includes(input[input.length -1])){
    input.pop();
    result = input.join('');
    show.innerHTML = result;
    message.innerHTML = "ERROR";
    console.log('error there is an operators and an operator 1 together');
  // checks if when pressed equal and there is nothing in the array then don nothing and show 0 at show
  } else if(operators.includes(input[input.length - 1])){
    message.innerHTML = "ERROR";
  } else if(input.length < 1){
    show.innerHTML = 0;
    console.log('Equal pressed with no numbers in input');
  // checks if the result has decimals 
  } else if(eval(result) % 1 === 0){
    show.innerHTML = Number(eval(result));
    input = [Number(eval(result))];
  } else {
  // if result has decimals then it shows only two.
    show.innerHTML = Number(eval(result).toFixed(2));
    input = [Number(eval(result).toFixed(2))];
  }
}

// ===================
// Using the keyboard
// ===================
this.addEventListener('keyup', (data)=>{
  if(numbers.includes(Number(data.key)) || [...operators, ...operators2].includes(data.key)){
    let touch = data.key;
    keyUp(touch);
  } else if (data.keyCode === 8) {
    touch = "CE";
    keyUp(touch);
  } else if (data.keyCode === 13) {
    touch = "=";
    keyUp(touch);
  } else if (data.keyCode === 9) {
    touch = "AC";
    keyUp(touch);
  }
});

function keyUp(obj){
  switch(obj){
    case '1':
      document.getElementById("1").click();
      break;
    case '2':
      document.getElementById("2").click();
      break;
    case '3':
      document.getElementById("3").click();
      break;
    case '4':
      document.getElementById("4").click();
      break;
    case '5':
      document.getElementById("5").click();
      break;
    case '6':
      document.getElementById("6").click();
      break;
    case '7':
      document.getElementById("7").click();
      break;
    case '8':
      document.getElementById("8").click();
      break;
    case '9':
      document.getElementById("9").click();
      break;
    case '0':
      document.getElementById("0").click();
      break;
    case 'CE':
      document.getElementById("CE").click();
      break;
    case 'AC':
      document.getElementById("AC").click();
      break;
    case '/':
      document.getElementById("/").click();
      break;
    case '*':
      document.getElementById("*").click();
      break;
    case '+':
      document.getElementById("+").click();
      break;
    case '-':
      document.getElementById("-").click();
      break;
    case '.':
      document.getElementById(".").click();
      break;
    case '=':
      document.getElementById("=").click();
  }
}