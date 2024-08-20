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

var students = {
    id: 101,        // number
    sname: "Kapil", // string
    isPassed: true, // boolean
    img:"https://cdn-icons-png.flaticon.com/512/2784/2784461.png"
}

// console.log(students);

let show = `
<div class="section">
    <img src=${students.img} height="100px" width="100px">
    <h1 style="background:Tomato; color:white;">Student Name: ${students.sname}</h1><hr>
    <h2>ID: ${students.id}</h2>
    <h2>Passed: ${students.isPassed ? "Pass out": "Pursuing"}
</div>
`
document.write(show)