let poeng1 = 0;
let poeng2 = 0;

// Spiller 1

function pluss1(){
    poeng1 = poeng1 +1;
    document.getElementById("poeng1").textContent = poeng1;
}

function minus1(){
    poeng1 = poeng1 -1;
    document.getElementById("poeng1").textContent = poeng1;
}

function reset1(){
 poeng1 = 0;
 document.getElementById("poeng1").textContent = poeng1;
}

// Spiller 2

function pluss2(){
    poeng2 = poeng2 +1;
    document.getElementById("poeng2").textContent = poeng2;
}

function minus2(){
    poeng2 = poeng2 -1;
    document.getElementById("poeng2").textContent = poeng2;
}

function reset2(){
 poeng2 = 0;
 document.getElementById("poeng2").textContent = poeng2;
}

// dark mode

function darkMode(){
    document.body.classList.toggle("mork");
    if(document.body.classList.contains("mork")){
        document.getElementById("darkModeButton").textContent = " ☀️Lys Modus";
    } else {
        document.getElementById("darkModeButton").textContent = " 🌙Mørk Modus"
    }
}

function sitat(){
    alert("NEVER BACK DOWN NEVER WHAT?")
}