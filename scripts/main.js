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


function myFizz() {
    let container = document.getElementById('container');
    let buzzClass = document.getElementsByClassName('buzzClass');
    let fizzbuzzClass = document.getElementsByClassName('fizzbuzzClass');
    let myDivs = document.getElementsByClassName('myDivs');

    // container.classList.remove("buzzClass", "fizzbuzzClass", "myDivs");
    container.classList.remove("buzzClass");
    container.classList.remove("fizzbuzzClass");
    container.classList.remove("myDivs");

    // buzzClass.classList.add("hidden");
    // fizzbuzzClass.classList.add("hidden");
    // myDivs.classList.add("hidden");

}

function btnRefresh() {
    let fizz = document.getElementById('container');
    while (fizz.hasChildNodes()) {
        fizz.removeChild(fizz.firstChild);
}
main();
}



    

