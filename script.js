const countElement = document.querySelector(".count");
let count = 0;
let customerCount = [];

// cannot write with const since it cannot be reassigned
const titleElement = document.querySelector("h1");
let greeting = "Welcome";
let customerName = "Hazel";

const totalCount = document.querySelector("h2");

countElement.textContent = count;

function increase() {
  count += 1;
  // count = count + 1;
  countElement.textContent = count;
}
function decrease() {
  if (count > 0) {
    //count = count - 1;
    count -= 1;
  }
  countElement.textContent = count;
}

function save() {
  //console.log("saved", count);
  customerCount.push(count);
  totalCount.textContent = "Daily Saved Counts are" + " " + customerCount;
}

function greet() {
  titleElement.textContent = greeting + " " + customerName;
}

function reset() {
  count = 0;

  countElement.textContent = count;
}
