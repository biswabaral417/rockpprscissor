let game = document.querySelectorAll('.ubtn');
let allbtns = document.querySelectorAll('.btns')

let u_scoret = document.querySelector('#usr');
let c_scoret = document.querySelector('#comp');

function comc() {//this function what is chosen by computer and give border to it
    rndm = Math.floor(Math.random() * 100);
    if (rndm >= 66) {
        return "rock";
    }
    
    else if (rndm >= 33) {
        return "scissor";
    }
    
    else {//this is the rest 0-33 and 100 assined to paper
        return "paper";
    }
}

function compare(computer_choice,user_choice) {//this function compares and determine wheather the user won or lost
    if (user_choice == computer_choice) {
        return "draw";
    }
    else if (user_choice == "rock" && computer_choice == "scissor") {
        return 'win';
    }
    else if (user_choice == "paper" && computer_choice == "rock") {
        return 'win';
    }
    else if (user_choice == "scissor" && computer_choice == "paper") {
        return 'win';
    }
    else {
        return 'lose';
    }
    
}

let u_score = 0;
let c_score = 0;
function scores(result) {
    console.log(result);
    if (result == "win") {
        u_score+=1;
        u_scoret.textContent=`${u_score}`
        
    }
    else if (result == "lose") {
        c_score+=1;
        c_scoret.textContent=`${c_score}`
    }
    else {
        u_score+=1;
        c_score+=1;
        u_scoret.textContent=`${u_score}`
        c_scoret.textContent=`${c_score}`
        

    }

}
function borders(uc, cc) {
    allbtns.forEach(element => {
        element.style.border = "";
    });
    document.querySelector(`#${uc}`).style.border = "10px solid green";
    document.querySelector(`#c${cc}`).style.border = "10px solid red";

}
game.forEach(element => {
    element.addEventListener("click", (e) => {
        let cc = comc();
        let uc = element.getAttribute("id");
        borders(uc, cc);
        let result = compare(cc,uc);
        scores(result)
    });
});

