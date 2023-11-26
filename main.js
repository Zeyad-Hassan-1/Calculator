let num1;
let num2;
let operator;
let Op;
let final_screen;
const monitor = document.querySelector(".monitor");
const ac = document.querySelector(".reset")
const ans = document.querySelector(".memory")
const del = document.querySelector(".delete")
//const ac = document.querySelector(".reset")

//addition function calc num1 + num2
function add(num1, num2) {
  let ans = num1 + num2;
  //alert(ans)
  return ans;
}

//subbtaction function calc num1 - num2
function sub(num1, num2) {
  let ans = num1 - num2;
  //alert(ans)
  return ans;
}

//multiplacation function calc num1 * num2
function mult(num1, num2) {
  let ans = num1 * num2;
  //alert(ans)
  return ans;
}

//divison function calc num1 / num2
function div(num1, num2) {
  let ans = num1 / num2;
  //alert(ans)
  return ans;
}
// if (Op === '+') {
//     add(num1, num2);
// }

// if (Op === '-') {
//     sub(num1, num2)
// }
// if (Op === '*') {
//     mult(num1, num2)
// }
// if (Op === '/') {
//     div(num1, num2)
// }

//first number
let N1 = 0;
//second number
let N2 = 0;
//operation
let Ans = 0;

//result
let firstScreen = "";


const Numberbut = document.querySelectorAll(".number");
const operatorButtun = document.querySelectorAll(".operator");

//setting the value to first number
function numberOne() {
  Numberbut.forEach((element) => {
    operator = "";
    element.addEventListener("click", () => {
      num1 = element.textContent;
      //check if the user clicked on an operation to start setting the value of number to(not more adding numbers to num1)
      if (operator != "" && operator!= "=") {
        N1 = N1;
        console.log("N1", N1);
        firstScreen = firstScreen;
        console.log("first:", firstScreen);
      } else {
        N1 = N1 + num1;
        N1 = Number(N1);
        console.log("N1", N1);
        firstScreen = firstScreen + num1;
        console.log(firstScreen);
        monitor.innerHTML = firstScreen;
      }
      //firstScreen = firstScreen + num1 + operator
      //console.log('firstScreen is :', firstScreen)
    });
  });
}

numberOne();
let secondscreen = "";
function Operator() {
  operatorButtun.forEach((element) => {
    element.addEventListener("click", () => {
      operator = element.textContent;
      console.log("operator ", operator);
      //console.log(element)
      firstScreen = firstScreen + operator;
      monitor.innerHTML = firstScreen;
      num1 = "";
      // firstScreen = firstScreen + num1 + operator
      console.log("firstScreen is :", firstScreen);
      if (operator == "=") {
        if (firstScreen.indexOf("+") > -1) {
          monitor.innerHTML = add(N1, N2);
          Ans = add(N1, N2);
          N1 = 0;
          //numberOne()
          N2 = 0;
          
          console.log(N1, N2, operator,Ans);
        } else if (firstScreen.indexOf("-") > -1) {
          monitor.innerHTML = sub(N1, N2);
          Ans = sub(N1, N2)
          N1 = 0;
          //numberOne()
          
          N2 = 0;
          console.log(N1, N2, firstScreen, operator);
        } else if (firstScreen.indexOf("*") > -1) {
          monitor.innerHTML = mult(N1, N2);
          Ans = mult(N1, N2)
          N1 = 0;
          N2 = 0;
          
          console.log(N1, N2, firstScreen, operator);
        } else if (firstScreen.indexOf("/") > -1) {
          monitor.innerHTML = div(N1, N2);
          Ans = div(N1, N2)
          N1 = 0;
          N2 = 0;
          console.log(N1, N2, firstScreen, operator);
        }
      }
    });
  });
}

Operator();

function numberTwo() {
  Numberbut.forEach((element) => {
    element.addEventListener("click", () => {
      if (
        firstScreen.indexOf("-") > -1 ||
        firstScreen.indexOf("+") > -1 ||
        firstScreen.indexOf("*") > -1 ||
        firstScreen.indexOf("/") > -1
      ) {
        num2 = element.textContent;
        console.log("num2", num2);
        N2 = N2 + num2;
        N2 = Number(N2);
        firstScreen = firstScreen + num2;
        monitor.innerHTML = firstScreen;

        console.log("N2 is :", N2);
        //
      } else {
        num2 = "";
      }
    });
  });
}

numberTwo();

function evaluate(x, y) {
  if (Op == "+") {
    return add(x, y);
  } else if (operator == "-") {
    return sub(N1, N2);
  } else if (operator == "/") {
    return div(N1, N2);
  } else if (operator == "*") {
    return mult(N1, N2);
  }
}

// function result() {

//         evaluate(N1,N2)
// }

//showing numbers on monitor
ac.addEventListener("click",()=>{
    firstScreen = ""
    num1= 0
    num2= 0
    N1= 0
    N2 = 0
    operator=""
    monitor.innerHTML = firstScreen
    console.log("hi",num1,num2,N1,N2,operator,firstScreen)
})


ans.addEventListener('click',()=>{
    N1 = Ans
    console.log(N1,Ans)
    monitor.innerHTML = `Ans(${N1})`
})