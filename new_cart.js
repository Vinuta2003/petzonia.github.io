// Select increment and decrement buttons
const incrementCount = document.getElementById("increment");
const decrementCount = document.getElementById("decrement");

// Select total count
const totalCount = document.getElementById("countt");

// Variable to track count
var count = 0;

// Display initial count value
totalCount.innerHTML = count;

// Function to increment count
const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
};

// Function to decrement count
const handleDecrement = () => {
  count--;
  totalCount.innerHTML = count;
};

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);

// ----end-----

// Select increment and decrement buttons
const incremen = document.getElementById("incrementt");
const decremen = document.getElementById("decrementt");

// Select total count
const total = document.getElementById("counttt");

// Variable to track count
var countt = 0;

// Display initial count value
total.innerHTML = countt;

// Function to increment count
const handleIncremen = () => {
  countt++;
  total.innerHTML = countt;
};

// Function to decrement count
const handleDecremen = () => {
  countt--;
  total.innerHTML = countt;
};

// Add click event to buttons
incremen.addEventListener("click", handleIncremen);
decremen.addEventListener("click", handleDecremen);




