
    const totalCount = document.getElementById("countt");

// Variable to track count
var count = 0;

// Display initial count value
totalCount.innerHTML = count;
    
    var count=0;
    const handleIncrement = () => {
        count++;
        a.innerHTML = count;
      };
      const handleDecrement = () => {
        count--;
        totalCount.innerHTML = count;
      };
    // Select increment and decrement buttons
const incrementCount = document.getElementById("increment");
const decrementCount = document.getElementById("decrement");

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);
