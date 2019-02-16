var colors = [];


for (var i = 0; i < 6; i++) {
    colors[i] = rgb();
}
function rgb() {

    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var rg = "rgb(" + r + ", " + g + ", " + b + ")";
    return rg;
}

var sq = document.getElementsByClassName("square");
hardHelper();
var color = pickColor();
var level = hard;
document.querySelector("#rgb").textContent = color.slice(3, color.length);

for (var i = 0; i < sq.length; i++) {

    sq[i].style.backgroundColor = colors[i];
    sq[i].addEventListener("click", function () {
        if (this.style.backgroundColor === color) {
            document.getElementById("message").textContent = "Correct!";
            colorChange();
        }
        else {
            this.style.backgroundColor = "#232323";
            document.getElementById("message").textContent = "Try Again";
        }
    });
}

document.querySelector(".easy").addEventListener("click", helper);

function helper() {
    for (var i = 3; i < sq.length; i++) {
        sq[i].style.backgroundColor = "#232323";
        colors[i - 3] = rgb();
    }
    for (var i = 0; i < 3; i++) {
        sq[i].style.backgroundColor = colors[i];

    }
    easy();
}

function easy() {
    document.querySelector(".easy").style.backgroundColor = "steelblue";
    document.querySelector(".easy").style.color = "white";

    document.querySelector(".hard").style.backgroundColor = "white";
    document.querySelector(".hard").style.color = "steelblue";

    color = colors[Math.floor(Math.random() * 3)];
    document.getElementById("top").style.backgroundColor = "steelblue";
    document.querySelector("#rgb").textContent = color.slice(3, color.length);
    document.getElementById("message").textContent = " ";
    var level = easy;
}

document.querySelector(".hard").addEventListener("click", hardHelper);

function hardHelper() {
    for (var i = 0; i < 6; i++) {
        colors[i] = rgb();
    }
    for (var i = 0; i < sq.length; i++) {
        sq[i].style.backgroundColor = colors[i];
    }
    hard();
}

function hard() {
    document.querySelector(".hard").style.backgroundColor = "steelblue";
    document.querySelector(".hard").style.color = "white";
    document.querySelector(".easy").style.backgroundColor = "white";
    document.querySelector(".easy").style.color = "steelblue";
    color = pickColor();
    document.getElementById("top").style.backgroundColor = "steelblue";

    document.querySelector("#rgb").textContent = color.slice(3, color.length);
    document.getElementById("message").textContent = " ";
}


function colorChange() {

    for (var i = 0; i < sq.length; i++) {
        sq[i].style.backgroundColor = color;
    }
    document.getElementById("top").style.backgroundColor = color;
}

function pickColor() {

    var i = Math.floor(Math.random() * colors.length);
    return colors[i];
}

document.querySelector(".change").addEventListener("click", function () {
    if (level == "easy") {
        helper();
    }
    else {
        hardHelper();
    }

});

document.querySelector(".change").addEventListener("mouseover", function () {
    document.querySelector(".change").classList.add("over");
   



});

document.querySelector(".change").addEventListener("mouseout", function () {
    document.querySelector(".change").classList.remove("over");




});
document.querySelector(".easy").addEventListener("mouseover", function () {
    document.querySelector(".easy").classList.add("over");




});

document.querySelector(".easy").addEventListener("mouseout", function () {
    document.querySelector(".easy").classList.remove("over");




});
document.querySelector(".hard").addEventListener("mouseover", function () {
    document.querySelector(".hard").classList.add("over");




});

document.querySelector(".hard").addEventListener("mouseout", function () {
    document.querySelector(".hard").classList.remove("over");




});