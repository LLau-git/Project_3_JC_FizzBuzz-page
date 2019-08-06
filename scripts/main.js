// const btnRef = document.getElementById("btnRefresh"); 



function main() {

    const fizzValue = document.getElementById('fizz_value').value;
    const buzzValue = document.getElementById('buzz_value').value;


    console.log("Creating container");

    const main = document.getElementById('container');


    for (let i=1; i<= 100; i++) {
        let myDiv = document.createElement("div");
        myDiv.innerText = i;
        myDiv.id = "myid"+i;
        myDiv.className = "myDivs";
        myDiv.className += " numbers";
        
        if (i % fizzValue == 0) {
            console.log("Fizz");
            myDiv.innerText += " Fizz";
            myDiv.className = "fizzClass"
            } 
        if (i % buzzValue == 0) {
            console.log("Buzz");
            myDiv.innerText += " Buzz";
            myDiv.className = "buzzClass"
            }

        if (i % fizzValue == 0 && i % buzzValue == 0){
            console.log("FizzBuzz");
            myDiv.className = "fizzbuzzClass"
            } 
        
        // console.log(i);
        main.appendChild(myDiv);
        console.log("Create Main");
    }    
}

main();

function myFizz() {
    const container = document.getElementById('container');
    let allDivs = container.getElementsByTagName('div');
    
    for (let i = 0; i < allDivs.length; i++) {
        if (allDivs[i].className != 'fizzClass') {
            allDivs[i].setAttribute('class', 'hidden')
        }
    }
};
    
function myBuzz() {  
    const container = document.getElementById('container');
    let allDivs = container.getElementsByTagName('div');  
    
    for (let i = 0; i < allDivs.length; i++) {
        if (allDivs[i].className != 'buzzClass') {
            allDivs[i].setAttribute('class', 'hidden')
        }
    }
};

function myFizzbuzz() {
    const container = document.getElementById('container');
    let allDivs = container.getElementsByTagName('div');

    for (let i = 0; i < allDivs.length; i++) {
        if (allDivs[i].className != 'fizzbuzzClass') {
            allDivs[i].setAttribute('class', 'hidden')
        }
    }
};

function btnRefresh() {
    let fizz = document.getElementById('container');
    while (fizz.hasChildNodes()) {
        fizz.removeChild(fizz.firstChild);
}
main();
};