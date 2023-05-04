let computer_choice = "";
let user_choice = "";


let rbtn=document.querySelector('#rbtn');
let pprbtn=document.querySelector('#pprbtn');
let scbtn=document.querySelector('#scbtn');
let crbtn=document.querySelector('#crbtn');
let cpprbtn=document.querySelector('#cpprbtn');
let cscbtn=document.querySelector('#cscbtn');
let resulttxt=document.querySelector('#resulttxt');


function a() {//this function what is chosen by computer and give border to it
    rndm = Math.floor(Math.random() * 100);
    if (rndm >= 66) {
        crbtn.style.border="10px solid red"
        cpprbtn.style.border="none"
        cscbtn.style.border="none"
        return "rock";
    }

    else if (rndm >= 33) {
        cscbtn.style.border="10px solid red"
        crbtn.style.border="none"
        cpprbtn.style.border="none"
        return "scissor";
    }

    else {//this is the rest 0-33 and 100 assined to paper
        cpprbtn.style.border="10px solid red"
        cscbtn.style.border="none"
        crbtn.style.border="none"
        return "paper";
    }
}


function compare() {//this function compares and determine wheather the user won or lost
    if (user_choice == computer_choice) {
        resulttxt.innerText="draw";
    }
    else if (user_choice == "rock" && computer_choice == "scissor") {
        resulttxt.innerText='u win';
    }
    else if (user_choice == "paper" && computer_choice == "rock") {
        resulttxt.innerText='u win';
    }
    else if(user_choice == "scissor" && computer_choice == "paper"){
        resulttxt.innerText='u win';
    }
    else {
        resulttxt.innerText='u lose';
    }

}

//below function are called when a button is pressed

function rock() {
    user_choice = "rock";
    rbtn.style.border="10px solid green"
    pprbtn.style.border="none"
    scbtn.style.border="none"
    computer_choice = a();
    compare();
}



function scissor() {
    user_choice = "scissor";
    scbtn.style.border="10px solid green"
    rbtn.style.border="none"
    pprbtn.style.border="none"
    computer_choice = a();
    compare();
}



function paper() {
    user_choice = "paper";
    pprbtn.style.border="10px solid green"
    scbtn.style.border="none"
    rbtn.style.border="none"
    computer_choice = a();
    compare();
}
