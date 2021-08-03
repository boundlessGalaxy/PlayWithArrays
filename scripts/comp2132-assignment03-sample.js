/*
grab an HTML element
*/ 
const output        = document.getElementById("output");

/*
some test data to use as the first argument
for the makeListFromArray() function
*/
const notAnArray    = 23;
const arrayTooSmall = ["Shania"];
const arrayOk       = ["Shania", "Joe", "Jane", "Sandy"];

/*
run the makeListFromArray()  function from my-functions.js
*/
let function_results = "";

/* 
try invalid parameter data... 
*/
//display our intentions to the the HTML
output.innerHTML += "<h2>Providing invalid parameter (not an array)</h2>";
//run the function, capture the return
function_results = makeListFromArray(notAnArray);
//display results returned by the function
output.innerHTML += function_results;

output.innerHTML += "<h2>Providing invalid parameter (array is too small)</h2>";
function_results = makeListFromArray(arrayTooSmall);
output.innerHTML += function_results;

output.innerHTML += "<h2>Providing invalid second parameter (can only make 'ul' or 'ol' lists)</h2>";
function_results = makeListFromArray(arrayOk, "cheeseburger");
output.innerHTML += function_results;

/* 
try valid parameter data... 
*/
output.innerHTML += "<h2>Providing valid parameter array, using default second parameter for list type 'ul'</h2>";
function_results = makeListFromArray(arrayOk);
output.innerHTML += function_results;

output.innerHTML += "<h2>Providing valid parameter array with second parameter of 'ol' instead of 'ul'</h2>";
function_results = makeListFromArray(arrayOk, "ol");
output.innerHTML += function_results;


