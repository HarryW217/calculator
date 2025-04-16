// Variables to store display and determine if the result is displayed
let currentDisplay = '0'
let resultDisplayed = false

// Function to append a value to the current display
function appendToDisplay(value){
    if(currentDisplay === '0' || resultDisplayed){
        /*
        If the current display is 0 or a result was just displayed,
        replace the display with the new value.
        */
        currentDisplay = value;
    } else {
        /*
        Otherwise, append the new value to the current display.
        This allows for multi-digit numbers.
        */
        currentDisplay += value;
    }
    // set resultDisplayed to false, as the user entered a new value
    resultDisplayed = false;
    // Update the display with the new value
    updateDisplay();
}

// Function to update the display with the current value
function updateDisplay(){
    // Get the display element and set its text content to the current display
    const display = document.getElementById('display');
    display.textContent = currentDisplay;
}
 
