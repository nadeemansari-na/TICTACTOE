console.log("Welcome to Tic Tac Toe")


let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let Turn = "X"
let isgameover = false;

//function to change the turn
const changeTurn = () => {
    return Turn === "X" ? "0" : "X"
}

//funtion to check for a win 
const checkWin = () => {
    let textbox = document.getElementsByClassName("textbox");
    let gamecontainer = document.querySelector(".gamecontainer");
    //define media query
    const mediaquery = window.matchMedia("(max-width:900px)")
    //function to handle changes
    function handlemediachange(e){

        if (e.matches) {
           let wins = [
                [0, 1, 2, 10, 9, 0],
                [3, 4, 5, 10, 29, 0],
                [6, 7, 8, 10, 50, 0],
                [0, 3, 6, -10, 30, 90],
                [1, 4, 7, 10, 30, 90],
                [2, 5, 8, 30, 30, 90],
                [0, 4, 8, 10, 30, 45],
                [2, 4, 6, 10, 30, 135]
    
            ]
         
              wins.forEach(e => {
            if ((textbox[e[0]].innerText === textbox[e[1]].innerText) && (textbox[e[2]].innerText === textbox[e[1]].innerText) && (textbox[e[0]].innerText !== "")) {
                document.querySelector('.info').innerText = textbox[e[0]].innerText + " Won"
                isgameover = true;
                document.querySelector(".line").style.width = `40vw`
                document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                document.querySelector('.image').querySelector(`img`).style.width = "300px";
            }
        })
            
        } else {

             let wins = [
                [0, 1, 2, 3, 5, 0],
                [3, 4, 5, 3, 15, 0],
                [6, 7, 8, 3, 25, 0],
                [0, 3, 6, -7, 15, 90],
                [1, 4, 7, 3, 15, 90],
                [2, 5, 8, 13, 15, 90],
                [0, 4, 8, 3, 15, 45],
                [2, 4, 6, 3, 15, 135]
    
            ]
           
            
            wins.forEach(e => {
                if ((textbox[e[0]].innerText === textbox[e[1]].innerText) && (textbox[e[2]].innerText === textbox[e[1]].innerText) && (textbox[e[0]].innerText !== "")) {
                    document.querySelector('.info').innerText = textbox[e[0]].innerText + " Won"
                    isgameover = true;
                    document.querySelector(".line").style.width = `24vw`
                    document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                    document.querySelector('.image').querySelector(`img`).style.width = "300px";
                }
            })
        }
    }

    //initial check
    handlemediachange(mediaquery);
    //add event listener for changes
    mediaquery.addEventListener("change",handlemediachange);

}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let textbox = element.querySelector(`.textbox`);
    element.addEventListener(`click`, () => {
        if (textbox.innerText === ``) {
            textbox.innerText = Turn;
            Turn = changeTurn();

            checkWin();
            if (!isgameover) {
                console.log(isgameover)
                document.getElementsByClassName("info")[0].innerText = "Turn for" + Turn;
            }

        }
    })
})

//reset all logic

reset.addEventListener(`click`, () => {
    let textbox = document.querySelectorAll(".textbox");
    Array.from(textbox).forEach((element) => {
        element.innerText = ""

    })
    document.querySelector('.image').querySelector(`img`).style.width = "0px";
    Turn = "X"
    isgameover = false;
    document.querySelector(".line").style.width = `0vw`
    document.getElementsByClassName("info")[0].innerText = "Turn for" + Turn;

})