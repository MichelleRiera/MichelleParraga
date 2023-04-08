let redBtn = document.getElementById("red");
let amarilloBtn = document.getElementById("amarillo");
let verdeBtn = document.getElementById("verde");
let imgchange = document.getElementById("imgchange");


redBtn.onclick = function() {

    imgchange.src = "https://i.pinimg.com/564x/46/8c/53/468c53503c8386c8302bf4980e2f289c.jpg";
}

amarilloBtn.onclick = function() {
    imgchange.src = "https://i.pinimg.com/564x/63/5e/a5/635ea52e2de5ce2cc3dd250b1e56d631.jpg";
}

verdeBtn.onclick = function() {
    imgchange.src = "https://i.pinimg.com/564x/f9/fb/de/f9fbde62a64128a0addfda00882c2da9.jpg";
}
