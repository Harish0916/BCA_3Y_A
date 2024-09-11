// window.alert("Show Document")
// let ip = window.prompt("Enter Name")
// document.getElementById("demo").innerHTML = `<h1>Hello, ${ip}</h1>`
// document.write("Thankyou")


// function show(ip){
//     // document.write("Welcome")
//     document.getElementById("demo").innerHTML = `<h1>Welcome ${ip}</h1>`
//     // document.getElementById("demo").innerText = `<h1>Welcome ${ip}</h1>`
// }



//---------------- INPUT

// if(window.confirm("Do you want enter name"))
//     window.prompt("Enter name")
// else
//     document.write("Sorry")

// --------------
// for-in loop
// let obj = {
//     rol: 101,
//     name: "Ravi",
//     age: 23
// }

// for(let k in obj){
//     console.log(`${k}= ${obj[k]}`);
// }

// -----------------

// for-of loop

// let arr = ['apple','banana','cherry', 'pineapple']

// for(let item of arr){
//     console.log(item);
// }

// -------------------- filter method


// let arr = [10,20,30,40,55,67,89]

// let remove = i => i!=55
// let filterArr = arr.filter(remove)

// document.write(filterArr)


// -------- find method

// let arr = [10,20,30,40,55,67,89]

// arr.find((i, index) => i==55 && document.write(`find ${i} at index ${index}`))

// document.write(findArr)

// function myfun(arr){
//     return arr*10;
// }
// let arr=[10,20,30,40,50]
// let arr1=arr.map(myfun)


// console.log(arr1)

//---------------------

// const numArr = [10, 20, 30]
// console.log(numArr.reduce((acc, item)=> acc+item, 0));

// OR

// acc=0
// const numArr = [10, 20, 30]
// for (const item of numArr){
//     acc = acc + item
// }
// console.log(acc);

// OR

// const numArr = [10, 20, 30]
// const red = (acc, item)=> acc+item
// console.log(numArr.reduce(red, 0));

// ------------------------
// Default Set to Prevent update or delete
let book = {
    title: "1984",
    author: "George Orwell"
};
console.log(book.publisher); // undefined
// undefined

Object.defineProperty(book, "publisher", {
    value: "Sumita Arora",
    configurable: false
});
book.publisher = "Sumita Gupta"
console.log(book);

delete book.publisher; // TypeError: Cannot delete property 'year' of #<Object>
console.log(book);










