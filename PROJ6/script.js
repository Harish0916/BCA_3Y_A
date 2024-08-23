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

function *gen(){
    for(let i=0; i<10; i++)
        yield i
}
const g = gen();
for(let i=0; i<10; i++)
    console.log(g.next().value)







