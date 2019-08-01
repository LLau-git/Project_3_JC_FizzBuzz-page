const btnRef = document.getElementById("btnRefresh"); 
// const main = document.getElementById("container");



// var myDiv = document.createElement("div");
// // for(let i=1; i<= 100; i++) 
// myDiv.innerHTML = "numbers 1";
// document.getElementById("container").appendChild(myDiv); 


function main() {

    console.log("Creating container");

    const main = document.getElementById('container');


    for(let i=1; i<= 100; i++) {
        const myDiv = document.createElement("div");
        myDiv.innerText = "Number # "+i;
        myDiv.id = "myid"+i;
        // console.log(i);
        main.appendChild(myDiv);
        console.log("Create Main");
    }    
}
main();
     
        

// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   }