const btnRef = document.getElementById("btnRefresh"); 


function main() {

    console.log("Creating container");

    const main = document.getElementById('container');


    for (let i=1; i<= 100; i++) {
        let myDiv = document.createElement("div");
        myDiv.innerText = i;
        myDiv.id = "myid"+i;
        myDiv.className = "myDivs";
        myDiv.className += " numbers";
        
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

        if (i % 15 == 0){
            console.log("FizzBuzz");
            // myDiv.innerText += " FizzBuzz";
            myDiv.className = "fizzbuzzClass"
            } 
        
        // console.log(i);
        main.appendChild(myDiv);
        console.log("Create Main");
    }    
}

main();

/* <button onclick="myFizz()" id="btnFizz">FIZZ</button> */

function myFizz() {
    let fizz = document.getElementById('container');
    while (fizz.hasChildNodes()) {
        fizz.removeChild(fizz.firstChild);
    }

    function finalFizz() {
    let finFizz = document.getElementById('container');
    let fFizz = document.getElementsByClassName('fizzClass');
    fFizz.appendChild(finFizz);
    console.log("making Fizz");
    }
}




    

