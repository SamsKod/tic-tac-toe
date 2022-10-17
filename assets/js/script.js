window.onload = function() {
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