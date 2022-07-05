// let btn = document.querySelector(".btn")

// btn.addEventListener("click", () => {
//     document.querySelector(".div7").style.display = "flex"
// })

// let close = document.querySelector(".div9 img")

// close.addEventListener("click", () => {
//     document.querySelector(".div7").style.display = "none"
// })


// let div5 = document.querySelector(".div5")
// let div4 = document.querySelector(".div4")
// let div10 = document.querySelector(".div10")
// let pick = document.getElementsByClassName("pick")
// let picked = document.getElementsByClassName("picked")
// let img = document.getElementsByClassName("img")
// let link = document.getElementsByClassName("src")
// let div11div = document.querySelector(".div11 div")
// let div6 = document.getElementsByClassName("div6")
// let play = document.querySelector(".play")
// let computer = document.querySelector(".computer")
// let winLose = document.querySelector(".win-lose")
// let butn = document.querySelector(".butn")
// let result = 0

// for (let i = 0; i < div6.length; i++) {
//     div6[i].addEventListener("click", () => {
//         div5.style.display = "none"
//         div10.style.display = "flex"
//         for (let i = 0; i < pick.length; i++) {
//             pick[0].style.display = "none"
//             pick[1].style.display = "none"
//             pick[2].style.display = "none"
//             pick[i].style.display = "flex"
//         }

//         setTimeout(() => {
//             if (winLose.innerHTML === "YOU WIN") {
//                 result += 1
//                 div4.innerHTML = eval(`${result}`)
//             }
//         }, 2000);

//         setTimeout(() => {
//             for (let i = 0; i < picked.length; i++) {
//                 picked[0].style.display = "none"
//                 picked[1].style.display = "none"
//                 picked[2].style.display = "none"
//                 picked[Math.round([i] * Math.random(1))].style.display = "flex"
//                 picked[0].style.outline = "30px solid hsl(230, 89%, 62%)"
//                 picked[1].style.outline = "30px solid hsl(39, 89%, 49%)"
//                 picked[2].style.outline = "30px solid hsl(349, 71%, 52%)"
//             }
//         }, 1000);

//         setTimeout(() => {
//             play.style.display = "block"
//         }, 2000);


//     })

//     div6[0].addEventListener("click", () => {
//         pick.src = "./images/icon-paper.svg"
//         div11div.style.background = "white"
//         div11div.style.outline = "30px solid hsl(230, 89%, 62%)"

//         for (let i = 0; i < pick.length; i++) {
//             pick[0].style.display = "none"
//             pick[1].style.display = "none"
//             pick[2].style.display = "none"
//             pick[0].style.display = "flex"
//         }

//         setTimeout(() => {
//             if (picked[1].style.display == "flex") {
//                 winLose.innerHTML = "YOU LOSE"
//             }

//             if (picked[2].style.display == "flex") {
//                 winLose.innerHTML = "YOU WIN"
//             }

//             if (picked[0].style.display == "flex") {
//                 winLose.innerHTML = "DRAW"
//             }
//         }, 2000);
//     })

//     div6[1].addEventListener("click", () => {
//         pick.src = "./images/icon-scissors.svg"
//         div11div.style.background = "white"
//         div11div.style.outline = "30px solid hsl(39, 89%, 49%)"

//         for (let i = 0; i < pick.length; i++) {
//             pick[0].style.display = "none"
//             pick[1].style.display = "none"
//             pick[2].style.display = "none"
//             pick[1].style.display = "flex"
//         }

//         setTimeout(() => {
//             if (picked[1].style.display == "flex") {
//                 winLose.innerHTML = "DRAW"
//             }

//             if (picked[2].style.display == "flex") {
//                 winLose.innerHTML = "YOU LOSE"
//             }

//             if (picked[0].style.display == "flex") {
//                 winLose.innerHTML = "YOU WIN"
//             }
//         }, 2000);
//     })
//     div6[2].addEventListener("click", () => {
//         pick.src = "./images/icon-rock.svg"
//         div11div.style.background = "white"
//         div11div.style.outline = "30px solid hsl(349, 71%, 52%)"

//         for (let i = 0; i < pick.length; i++) {
//             pick[0].style.display = "none"
//             pick[1].style.display = "none"
//             pick[2].style.display = "none"
//             pick[2].style.display = "flex"
//         }

//         setTimeout(() => {
//             if (picked[1].style.display == "flex") {
//                 winLose.innerHTML = "YOU WIN"
//             }

//             if (picked[2].style.display == "flex") {
//                 winLose.innerHTML = "DRAW"
//             }

//             if (picked[0].style.display == "flex") {
//                 winLose.innerHTML = "YOU LOSE"
//             }
//         }, 2000);
//     })
// }

// butn.addEventListener("click", () => {
//     div10.style.display = "none"
//     div5.style.display = "block"
// })


let myChoice = "";
let opponentChoice = ""
let winCount = 0

let play = document.querySelector(".play");
let scissors = document.querySelector(".scissors");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let showMyChoice = document.getElementById("myChoice");
let showOpponentChoice = document.getElementById("opponentChoice");
let choosingDiv = document.querySelector(".div5");
let resultDiv = document.querySelector(".div10")
let result = document.querySelector(".win-lose");
let div4 = document.querySelector(".div4");
let pick = document.querySelector(".pick-div");
let computer = document.querySelector(".computer");


let handleOpponentChoice = () => {
    let number = Math.round(Math.random() * 3)

    console.log("random number", number)
    switch (number) {
        case 0:
            opponentChoice = "scissors"
            break;
        case 1:
            opponentChoice = "scissors"
            break;
        case 2:
            opponentChoice = "rock"
            break;
        case 3:
            opponentChoice = "paper"
            break;

        default:
            break;
    }
}

let calculateResult = () => {
    setTimeout(() => {
        if (myChoice === "paper" && opponentChoice === "rock" || myChoice === "scissors" && opponentChoice === "paper" || myChoice === "rock" && opponentChoice === "scissors") {
            result.innerHTML = "YOU WIN";
            winCount += 1
            div4.innerHTML = winCount
        } else if (myChoice === opponentChoice) {
            result.innerHTML = "DRAW"
        } else {
            result.innerHTML = "YOU LOSE"
        }
    }, 2000);


    console.log("Your choice is => ", myChoice)
    console.log("opponentChoice is => ", opponentChoice)
    console.log(result, winCount)
    showMyChoice.src = `./images/icon-${myChoice}.svg`;
    setTimeout(() => {
        showOpponentChoice.src = `./images/icon-${opponentChoice}.svg`;
    }, 1000);
    choosingDiv.style.display = "none";
    resultDiv.style.display = "flex"
}


let handleClick = (value) => {
    myChoice = value;
    handleOpponentChoice()
    calculateResult()

    if (value == "paper") {
        pick.style.outline = "20px solid hsl(230, 89%, 62%)"
        pick.style.background = "white"
    }
    if (value == "scissors") {
        pick.style.outline = "20px solid hsl(39, 89%, 49%)"
        pick.style.background = "white"
    }
    if (value == "rock") {
        pick.style.outline = "20px solid hsl(349, 71%, 52%)"
        pick.style.background = "white"

    }

    setTimeout(() => {
        if (opponentChoice == "paper") {
            computer.style.outline = "20px solid hsl(230, 89%, 62%)"
            computer.style.background = "white"
        }
        if (opponentChoice == "scissors") {
            computer.style.outline = "20px solid hsl(39, 89%, 49%)"
            computer.style.background = "white"
        }
        if (opponentChoice == "rock") {
            computer.style.outline = "20px solid hsl(349, 71%, 52%)"
            computer.style.background = "white"

        }
    }, 1000);

    setTimeout(() => {
        play.style.display = "block"
    }, 2000);
}

let playAgain = () => {
    choosingDiv.style.display = "block";
    resultDiv.style.display = "none"
    play.style.display = "none"
    computer.style.outline = ""
    computer.style.background = ""
    pick.style.outline = ""
    pick.style.background = ""
    showOpponentChoice.src = "";
}

let btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    document.querySelector(".div7").style.display = "flex"
})

let close = document.querySelector(".div9 img")

close.addEventListener("click", () => {
    document.querySelector(".div7").style.display = "none"
})

let rulesImg = document.querySelector(".rules-img img")

rulesImg.addEventListener("click", () => {
    document.querySelector(".div7").style.display = "none"
})