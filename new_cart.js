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
  if(count!=0)
  {count--;}
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
  if(count!=0)
  {countt--;}
  total.innerHTML = countt;
};

// Add click event to buttons
incremen.addEventListener("click", handleIncremen);
decremen.addEventListener("click", handleDecremen);

function totall() {
  parseInt(total) = 0;
  itemID = document.getElementById("countt");
  var a=document.getElementById("individual");
  total = parseInt(itemID.value) * parseInt(a.value);
  document.getElementById("amount").innerHTML =total;
   
}


// function calculate2(elm) {
//   var chk = $(elm),                // the checkbox
//       vlu = chk.val(),             // the current qty value
//       pid = chk.data("productid"), // product id
//       unt = chk.data("unitprice"), // unit price
//       res = $("amount" + pid),   // the result for this product
//       tot = vlu * unt;             // total
  
//   res.text("$" + tot);
// }


// function calculate(elm) {
//   var vlu = elm.value,           // the current qty value
//       pid = elm.getAttribute("data-productid"), // product id
//       unt = elm.getAttribute("data-unitprice"), // unit price
//       res = document.getElementsByClassName("amout" + pid),   // the result for this product
//       tot = vlu * unt;             // total
  
//   res[0].innerHTML = "$" + tot;
// }



