// HTML 

// Create HTML body structure, with
// Create ID elements (buttons) for: id="equals", one number each from 0-9, corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", 
// id="six", id="seven", id="eight", and id="nine". 
// The calculator should contain 4 primary mathematical operators corresponding IDs: id="add", id="subtract", id="multiply", id="divide".
// The calculator should contain an element with a .(decimal point) symbol with a corresponding id="decimal".
// The calculator needs a clear button (id="clear")
// My calculator should contain an element to display values with a corresponding id="display". 


// CSS

// Add CSS to the code to make it look like a real calculator (use the same font as used on blog). 
// Create row display (CSS property that specifies if/how an element is displayed, display value used, block or inline. Look in to using grid display element too). 
// Make it so that when you hover over the buttons a different colour is shown. 

// JavaScript 

// Create variables for numString (numString = ''), numArray (numArray = []), 
// and declare variables using for display to getElementById and isPreviousResult ((let display = document.getElementById('display')) and (let isPreviousResult = false))
// Create a function to add an Event Listener so that buttons can be clicked. (e.g document.addEventListener('click', function))
// Create a function to getButtonValue using functions already created (number, allClear, clear, calculate and storeNumber), using for loops and if else statements. 
// Create a number function for button, so that if buttons include decimals it will return. 
// Create an allClear function and declare variables for numString = '', numArray = [], and display.value = '0'.
// Create a clear function that define's variables numString = '' and numArray = [].
// Create a storeNumber function for button (e.g function storeNumber (button) {}). Create an if/else statement. 
// - if numString is an empty string '' and the length of numArray is equal to 0 then return. If the variable numString is just an empty string '', then the length of numArray will equal -1 and
// the button value will be pushed in to the Array. 
// - else the string and button will be pushed in to the array, and numString will equal an empty string. 
// Create a calculate function. This function needs to include the number object and the maths.abs function so that the absolute value of a number can be returned. 
// (e.g. let currentNumber = Number(numArray[0])) and create a for loop for numArray. 
// The calculate function needs to include reference to the symbols used to calculate the numbers on the board. 
// If the currentNumber is less than 0 it will use the Math.abs function to use the '-' symbol.  
// Assign currentNumber to display.value. 
// Assign JSON.stringify(currentNumber) to numString (JSON.stringify) (If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server) 
// In the calculate function assign true to isPreviousResult and [] to numArray again. 

// FREECODECAMP CALCULATOR INSTRUCTIONS: 

// The elements in HTML need to be 'clickable' (buttons) 
// At any time, pressing the clear button clears the input and output values, 
// and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.
// As I input numbers, I should be able to see my input in the element with the id of display.
// In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, 
// the correct result should be shown in the element with the id of display.
// When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
// When the decimal element is clicked, a .should append to the currently displayed value; two .in one number should not be accepted.
// I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.
// If 2 or more operators are entered consecutively, the operation performed should be the last operator entered.
// Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.
// My calculator should have several decimal places of precision when it comes to rounding 
// (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).