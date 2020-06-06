// This is where we are capturing the element (in HTML file) so we have refrence to this JS file
let startBtn = document.querySelector("#startButton");

// Adding event listener to have the 'somefunction' run when button is clicked
startBtn.addEventListener("click", someFunction);

function someFunction(){
    console.log("I work!");
}

//Set - interval will be used in hw

//Example of how to call data from browser API
let name = "Yessy";

//store the item in local storage
localStorage.setItem("name", name);

//retrieve the value we just stored and save to a new variable
let gottenFromLocalStorage = localStorage.getItem("name");

//console.log to retrieve value
console.log(gottenFromLocalStorage);


//client-side storage / local storage persisted the string (data/words typed)
//meaning it kept the data even though you navigated away and came back
//local storage and session storage are database LIGHT


//Open developer tools -> Click on "Application" tab
//Storage section: local , session , index dv , Web SQL , and cookies
//Click on local storage -> drop down -> and click on link
//This shows stored data 