// let a = 10;
// document.write(a, "<br>")
// ---------------------
// let b = 5;
// document.write(b, "<br>")
// ---------------------

// let sum = a + b;        // 15
// document.write(`Sum of ${a} and ${b} is ${sum} <br>`)
// ---------------------

// let difference = a - b; // 5
// document.write(`Differ of ${a} and ${b} is ${difference} <br>`)
// ---------------------


// let product = a * b;    // 50
// ---------------------
// let quotient = a / b;   // 2
// ---------------------
// let remainder = a % b;  // 0
// ---------------------

// let isEqual = (a == b) ? "Equal" : "Not Equal"; // false
// document.write(`Values ${a} and ${b} is ${isEqual}`)
// ---------------------
// let a = 10
// let b = 12
// let isEqual = !(a == b) ? "Not Equal" : "Equal"; // false
// document.write(`Values ${a} and ${b} is ${isEqual}`)

// ---------------------

// let a = 10
// let b = 12
// let isNotEqual = (a != b) ? "Not Equal" : "Equal"; // false
// document.write(`Values ${a} and ${b} is ${isNotEqual}`)

// ----------------------
// let a = prompt("Enter first value")
// let b = prompt("Enter Second value")
// let isGreater = (a > b) ? `${a} is greater`: `${b} is greater`;   // true
// document.write(isGreater)


// --------------------
// let a = 100
// let b = 20
// let logicalAnd = (a > b && b < 10); // true
// console.log(logicalAnd);


// --------------------

function morning(){
    document.getElementById("demo").innerHTML = "GOOD MORNING"
    document.getElementById("mode").style.background = "skyblue"
    document.getElementById("mode").style.color = "black"
}
function afternoon(){
    document.getElementById("demo").innerHTML = "GOOD AFTERNOON"
    document.getElementById("mode").style.background = "#f9f5a2"
    document.getElementById("mode").style.color = "black"
}
function evening(){
    document.getElementById("demo").innerHTML = "GOOD EVENING"
    document.getElementById("mode").style.background = "goldenrod"
    document.getElementById("mode").style.color = "black"
}
function night(){
    document.getElementById("demo").innerHTML = "GOOD NIGHT"
    document.getElementById("mode").style.background = "black"
    document.getElementById("mode").style.color = "white"
}


