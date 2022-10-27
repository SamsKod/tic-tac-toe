 let playerX = ("x");
 let playerO = ("o");
 let boxes = document.getElementsByClassName("grid-item");
 let clickCounter = 0;
 let restart = document.getElementById("restartBtn");

 // Listen on restart-button

 restart.addEventListener('click', newstart);

 // Restarts the game

 function newstart() {
     let boxes = document.getElementsByClassName("grid-item");
     var modal = document.getElementById("myModal");
     for (let i = 0; i < boxes.length; i++) {
         let box = boxes[i];
         box.setAttribute("data-box", "");
         box.innerHTML = '';
         box.style = '';
         clickCounter = 0;
     }
     modal.style.display = "none";
 }


 function checkStatus(player) {

     let winningLines = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6]
     ];

     let boxArray = [];
     for (let j = 0; j < boxes.length; j++) {
         let boxValue = boxes[j].getAttribute("data-box");
         if (player == boxValue) {
             boxArray.push(j);
         }
     }

     //Check each winning combination against the board.
     for (let i = 0; i < winningLines.length; i++) {
         if (isLineWinning(boxArray, winningLines[i]))
             return true;
     }

     return false;
 }

 function isLineWinning(boxArray, winningLine) {
     for (let j = 0; j < winningLine.length; j++) {
         if (!boxArray.includes(winningLine[j])) {
             return false;
         }
     }

     return true;
 }

 // Check if a box has an image, count click and switch between PlayerX and PlayerO

 function clicked(e) {
     if (e.currentTarget.hasChildNodes()) {
         e.currentTarget.style.backgroundColor = 'pink'; //If you click twice on same box
         return;
     }

     let isLastClick = clickCounter >= 8;
     if (clickCounter % 2 == 0) xClicked(e, isLastClick);
     else oClicked(e, isLastClick);
     clickCounter += 1;
 }

 // Set X-image and attribute when a box is clicked

 function xClicked(e, isLastClick) {

     let box = e.target;
     box.setAttribute("data-box", playerX);
     let x = document.createElement("img");
     x.setAttribute("src", "assets/images/x.png");
     x.setAttribute("alt", "X");

     function smallScreen(xScreen) {
        if (xScreen.matches) { // If media query matches
            x.setAttribute("height", "100");
            x.setAttribute("width", "100");
        } else {
            x.setAttribute("height", "150");
            x.setAttribute("width", "150");
        }
    }

    //Handle small screen

    let xScreen = window.matchMedia("(max-width: 400px)");
    smallScreen(xScreen); // Call listener function at run time

    // Check game
     box.appendChild(x);
     let hasWon = checkStatus("x");
     if (hasWon == true) openModal("X Wins!");
     else if (isLastClick == true) openModal("It's a Draw");

 }

 // Set O-image and attribute when a box is clicked

 function oClicked(e, isLastClick) {
     let box = e.target;
     box.setAttribute("data-box", playerO);
     let o = document.createElement("img");
     o.setAttribute("src", "assets/images/o.png");
     o.setAttribute("alt", "O");

     function smallScreen(oScreen) {
         if (oScreen.matches) { // If media query matches
             o.setAttribute("height", "90");
             o.setAttribute("width", "90");
         } else {
             o.setAttribute("height", "140");
             o.setAttribute("width", "140");
         }
     }

     //Handle small screen

     let oScreen = window.matchMedia("(max-width: 400px)");
     smallScreen(oScreen); // Call listener function at run time
     

     box.appendChild(o);
     let hasWon = checkStatus("o");
     if (hasWon == true) openModal("O Wins!!");
     else if (isLastClick == true) openModal("It's a Draw");
 }

 for (let i = 0; i < boxes.length; i++) {
     let box = boxes[i];
     box.addEventListener('click', clicked);
 }

 // Some modal code is copied from w3school.com

 // Open modal when game is over
 function openModal(text) {
     var modal = document.getElementById("myModal");
     let p = modal.querySelector("p");
     p.innerText = text;
     modal.style.display = "block";
 }