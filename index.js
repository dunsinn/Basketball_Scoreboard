
let count = 0;
let g_count = 0;
let plusOne = document.getElementById("h_score");

let plus1 = document.getElementById("g_score");

console.log(plusOne);
console.log(plus1);

function add1(){
    console.log("add 1");
    count += 1;
    plusOne.innerText = count;
}

function add2(){
    console.log("add 2");
    count += 2;
    plusOne.innerText = count;
}

function add3(){
    console.log("add 3");
    count += 3;
    plusOne.innerText = count;
}

function addOne(){
    console.log("add 1");
    g_count += 1;
    plus1.innerText = g_count;
}

function addTwo(){
    console.log("add 2");
    g_count += 2;
    plus1.innerText = g_count;
}

function addThree(){
    console.log("add 3");
    g_count += 3;
    plus1.innerText = g_count;
}