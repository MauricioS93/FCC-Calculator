
// Show
let show = document.querySelector('#show');

// Operators
let deleteAll = document.querySelector('#deleteAll');
let backOne = document.querySelector('#backOne');
let equal = document.querySelector('#total');
//Numbers
var pressed = document.querySelectorAll(".pressed");


let operators = ['+', '-', '*', '/'];
let operators2 = ['.'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let input = [];
let result;

pressed.forEach(press => {
  press.addEventListener('click', ()=>{
    var inner = press.innerHTML;
    if(inner === '=' || inner === 'AC' || inner === 'CE'){
      deleteKey(inner);
    } else {
      input.push(inner);
      updateShow();
    }
  });
});

function updateShow(){
  show.innerHTML = input.join('');
}

function deleteKey (obj) {
  if(obj === "CE"){
    input.pop();
    show.innerHTML = input.join('');
  } else if (obj === '='){
    evaluate();
  } else if (obj === "AC"){
    input = [];
    result = '';
    show.innerHTML = 0;
  }
}

function evaluate(){
  result = input.join('');
  if(eval(result) % 1 === 0){
    show.innerHTML = eval(result);
    input = [eval(result)];
  } else {
    show.innerHTML = eval(result).toFixed(2);
    input = [eval(result).toFixed(2)];
  }
}