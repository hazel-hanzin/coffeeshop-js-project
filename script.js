const countElement = document.querySelector(".count");
let count = 0;
let customerCount = [];
// cannot write with const since it cannot be reassigned
const titleElement = document.querySelector("h1");
let greeting = "Welcome";
let customerName = "Hazel";

countElement.innerText = count;

function increase() {
  count = count + 1;
  countElement.innerText = count;
}
function decrease() {
  count = count - 1;
  countElement.innerText = count;
}

function save() {
  //console.log("saved", count);
  customerCount.push(count);
  console.log(customerCount);
}

function greet(){
titleElement.innerText = greeting + " " + customerName;
}