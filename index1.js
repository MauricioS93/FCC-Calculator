
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

// Using the keyboard
this.addEventListener('keyup', (data)=>{
  console.log(data.key);
});




// Logic when pressed any button
pressed.forEach(press => {
  press.addEventListener('click', ()=>{
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
    message.innerHTML = "Can't do that";
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
    console.log('error there is an operators and an operator 1 together');
  // checks if when pressed equal and there is nothing in the array then don nothing and show 0 at show
  } else if(input.length < 1){
    show.innerHTML = 0;
    console.log('Equal pressed with no numbers in input');
  // checks if the resutl has decimals 
  } else if(eval(result) % 1 === 0){
    show.innerHTML = Number(eval(result));
    input = [Number(eval(result))];
  } else {
  // if result has decimals then it shows only two.
    show.innerHTML = Number(eval(result).toFixed(2));
    input = [Number(eval(result).toFixed(2))];
  }
}

