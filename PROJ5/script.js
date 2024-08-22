// a = 15      // definition
// console.log(a);     // operation
// let a       // initialization


// --------------

// let str1 = "hello GLA"
// console.log(str1);

// let str2 = 'hello GLA'
// console.log(str2);

// let str3 = new String("Hello, GLA")
// console.log(str3);

// -------------------------

// var a = Symbol(12)
// console.log(a);
// var a = Symbol("A")
// console.log(a);

//--------------------

// var students = {
//     id: 101,        // number
//     sname: "Kapil", // string
//     isPassed: true, // boolean
//     img:"https://cdn-icons-png.flaticon.com/512/2784/2784461.png"
// }

// console.log(students);

// let show = `
// <div class="section">
//     <img src=${students.img} height="100px" width="100px">
//     <h1 style="background:Tomato; color:white;">Student Name: ${students.sname}</h1><hr>
//     <h2>ID: ${students.id}</h2>
//     <h2>Passed: ${students.isPassed ? "Pass out": "Pursuing"}
// </div>
// `
// document.write(show)

// ------------------
// Destructure an object
// var employee = {
//     id: 101,
//     name: "Nikhil",
//     age: 21,
//     isEmployee: false,
// }
// var {id:eid, name:ename, age:eage, isEmployee:eise} = employee

// document.writeln(eid)
// document.writeln(ename)
// document.writeln(eage)
// document.writeln(eise)

// --------------------------------
// Update an Object
// let student = {
//     id: 101,
//     name: "Devesh"
// }
// console.log(student["id"]);
// console.log(student.name);

// student.id = 105
// student["name"] = "Krish"
// student.age = 23

// console.log(student["id"]);
// console.log(student.name);
// console.log(student.age)

//------------------------
// DElete key
// let student = {
//     id: 101,
//     name: "Devesh"
// }
// console.log(student)

// delete student.id

// console.log(student)
//-------------------------------
// Nested object

let employee = {
    eid: 101,       // number
    ename: "Rajeev",    // string
    isEmployee: true,        // boolean
    exp: {          // object
        oracle: 2,
        google: 3,
        microsoft: 2,
        deloit: 1
    }
}
console.log(employee.eid)
console.log(employee.exp.google)





