const btnRef = document.getElementById("btnRefresh"); 
// const main = document.getElementById("container");

let myDiv = document.createElement("div");
let myPar = document.createElement("p");



function main() {

    console.log("Creating container");

    const main = document.getElementById('container');


    for (let i=1; i<= 100; i++) {
        let myDiv = document.createElement("div");
        myDiv.innerText = i;
        myDiv.id = "myid"+i;
        myDiv.className = "myDivs";
        myDiv.className += " numbers";

        if (i % 15 == 0){
            console.log("FizzBuzz");
            myDiv.innerText += " FizzBuzz";
            myDiv.className = "fizzbuzzClass"
            } 
        if (i % 3 == 0) {
            console.log("Fizz");
            myDiv.innerText += " Fizz";
            myDiv.className = "fizzClass"
            } 
        if (i % 5 == 0) {
            console.log("Buzz");
            myDiv.innerText += " Buzz";
            myDiv.className = "buzzClass"
            }
        
        // console.log(i);
        main.appendChild(myDiv);
        console.log("Create Main");
    }    
}

main();
    


// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   }