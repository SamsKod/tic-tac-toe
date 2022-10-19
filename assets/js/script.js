 let playerX = ("x");
 let playerO = ("o");
 let boxes = document.getElementsByClassName("grid-item");
 let clickCounter = 0;
 console.log(boxes);

 function clicked(e) {
     if (e.currentTarget.hasChildNodes()) {
         e.currentTarget.style.backgroundColor = 'pink';
         return;
     }
     if (clickCounter % 2 == 0) xClicked(e);
     else oClicked(e);
     clickCounter += 1;
     console.log(clickCounter);

 }

 function xClicked(e) {

     let box = e.target;
     let x = document.createElement("img");
     x.setAttribute("src", "assets/images/x.png");
     x.setAttribute("height", "150");
     x.setAttribute("width", "150");
     x.setAttribute("alt", "X");
     console.log(box);

     box.appendChild(x);
 }

 function oClicked(e) {

     let box = e.target;
     let o = document.createElement("img");
     o.setAttribute("src", "assets/images/o.png");
     o.setAttribute("height", "140");
     o.setAttribute("width", "140");
     o.setAttribute("alt", "O");
     console.log(box);

     box.appendChild(o);
 }

 for (let i = 0; i < boxes.length; i++) {
     let box = boxes[i];
     console.log(box);

     box.addEventListener('click', clicked);