// document.write("Function Topic")

// -------------------

// Simple function

// function greeting(name){      // perimeter      // function definition
//     console.log("Happy Holiday!", name)
// }

// greeting("Abhay")       // argument

// ---------------------
// Function Expression

// let oddEven = function(num){
//     if(num%2==0) {
//         return `${num} is even`
//     } else {
//         return `${num} is odd`       
//     }
// }
// let hold = oddEven(prompt("Enter number to check even/odd"))
// console.log(hold)

// ---------------

// Swap by using third variable
// let swap1 = function(num1, num2) {
//     console.log(`Before Swap: ${num1} and ${num2}`);
//     let temp = num1;
//     num1 = num2;
//     num2 = temp;
//     console.log(`After Swap: ${num1} and ${num2}`);
// }

// num1 = prompt("Enter first number")
// num2 = prompt("Enter second number")
// swap1(num1, num2)

//-----------------------
// Arrow function

// let greeting = (name) =>`Welcome ${name}`

// console.log(greeting("Pushpendra"))


// let sum = (a,b) => a+b

// console.log(sum(12,13))

// -----------------
// IIFE function

// let greeting = (function(name){
//     return `Welcome, ${name}`
// })("Anushka")

// console.log(greeting)
//-------------------------------------
// Generator function

// function *generatorFun(){
//     let i=0;
//     for(i=0; i<10; i++){
//         yield i;
//     }
// }
// const gen = generatorFun();

// for(let i=0; i<10; i++){
//     console.log(gen.next().value)
// }


//------------------

// function *gen(){
//     for(let i=0; i<10; i++)
//         yield i
// }
// const g = gen();
// for(let i=0; i<10; i++)
//     console.log(g.next().value)


// ---------------------
// && Operator
// console.log("hello" && "Welcome");      // Welcome
// console.log("hello" && "");         // blank
// console.log("hello" && 15);          // 15
// console.log(!!"hello");             // true
// console.log(!!"");                  // false
// ----------------------
// || Operator
// console.log("hello" || "Welcome");      // Hello
// console.log("" || "welcome");             // ""
// console.log(null || 15);                // 15

// ---------------------

// console.log(typeof("hello"));   // string
// console.log(typeof(""));        // string
// console.log(typeof(null));      // object
// console.log(typeof(undefined)); // undefined
// console.log(typeof(12.4));      // number
// console.log(typeof(true));      // boolean
// console.log(typeof({id:101, name: "ravi"}));    // object
// console.log(typeof([12,"hi", true]));   // object
// console.log(typeof(function(){}));      // function
//-----------------------



// // program for a simple calculator

// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;

// // using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// // display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);



//--------------------------------

// Switch case
// let uname = "naman"
// switch(uname){
//     case "naman": console.log(`Hello, ${uname}`);
//     case "raj": console.log(`Hello, ${uname}`);
//     default: console.log("Invalid Username");
// }

// let days = 28
// switch(days){
//     case 28||29: console.log("february"); break;
//     case 30: console.log("April June  September November");break;
//     case 31: console.log("Jan Mar May july aug Oct Dec"); break;
//     default: console.log("Not days in any month");
// }





//-------------------------------
// // program for a simple calculator
// let result;

// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//          result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;

//     case '-':
//          result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;

//     case '*':
//          result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;

//     case '/':
//          result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }

//-------------------------

// console.log(x); // ACCESS
// var x = 12  // INITIALIZATION

x=12
console.log(x); // ACCESS
var x  // INITIALIZATION








