 /* window.onload = function() {
    let x = document.createElement("img");
    x.setAttribute("src", "assets/images/x.png");
    x.setAttribute("height", "150");
    x.setAttribute("width", "150");
    x.setAttribute("alt", "Flower");
    document.getElementById("boxA").appendChild(x);
    
    let o = document.createElement("img");
    o.setAttribute("src", "assets/images/o.png");
    o.setAttribute("height", "140");
    o.setAttribute("width", "140");
    o.setAttribute("alt", "Flower");
    document.getElementById("boxC").appendChild(o);
    }
*/

   let boxes = document.getElementsByClassName("grid-item");
    console.log(boxes);

 function boxClicked(e) {
    
    let box = e.target;
    let x = document.createElement("img");
    x.setAttribute("src", "assets/images/x.png");
    x.setAttribute("height", "150");
    x.setAttribute("width", "150");
    x.setAttribute("alt", "X");
    console.log(box);
    if (box.innerHTML === "") {
        box.appendChild(x);
    }
    else {
    box.style.backgroundColor = 'pink';
    }
}

for (let i = 0; i < boxes.length;i++) {
    let box = boxes[i];
    console.log(box);
    
    box.addEventListener('click', boxClicked);
}

/* 
let square = document.getElementById("boxA");

function changeBorder() {
    square.style.borderColor = "grey";
}

function changeBackground() {
    square.style.backgroundColor = "pink";
}

function revertBack() {
    square.style.borderColor = "white";
    square.style.backgroundColor = "lightblue";
}

square.addEventListener('click', changeBorder);
square.addEventListener('mouseover', changeBackground);
square.addEventListener('mouseleave', revertBack);
*/