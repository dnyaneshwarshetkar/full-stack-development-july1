function buttonClick(inputStr){
    alert(inputStr);
}

/*a = document.getElementsByTagName("h1");

console.log(a[0]);*/

// document.getElementById("firstH1").innerText = "Hello MMEAC Students !!!";

//console.log(document.getElementsByClassName("first-h1")[0]);

let singleH1 = document.querySelector("h1");

singleH1.innerText = "Helllo Everyone from MMEAC";
singleH1.style.color = "orange";

console.log(singleH1.id);

console.log(singleH1.classList);

singleH1.classList.add("top-heading");



