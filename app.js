
// could use onclick or document.querySelector('#id').addEventListener('click', functionName)
// ex: // 
// 
// let total = 0

// document.querySelector('#dominosPizza').addEventListener('click', jumanji)
// function jumanji() {
//   total = total + 3
//   document.querySelector('#placeToPutResult').innerText = total
// }

// CODE I WENT WITH

// first get your element with id of showMe
const calculatorScreen = document.getElementById("showMe");

// next we have three functions to create
// 1 appendToScreen
// 2 clearScreen
// 3 calculate

// https://developer.mozilla.org/en-US/docs/Web/API/Element/append
// using the append() method
function appendToScreen(input){
    showMe.value += input;
}
// x += y is equivalent to x = x + y, except that the 
// expression x is only evaluated once




// this function clears the display because we use an empty string
function clearScreen(){
    showMe.value = "";
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
//the eval(); function will evaluate the expression, in this case (display.value) and return its value
//honestly the eval function is so convenient!

function calculate(){
try {
    showMe.value=eval(showMe.value);
    
} catch (error) {
    showMe.value = "Error";
}    
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
// The try...catch statement in JavaScript provides a mechanism for handling runtime errors, 
// also known as exceptions. It allows you to execute a block of code and, if an error occurs 
// within that block, gracefully handle it instead of letting the program crash.

//ironincally enough, I had a coffee chat with someone after submitting this that mentioned how common the try
// catch statements were for him at work


// consider adding a slice with delete button in case user makes a mistake
