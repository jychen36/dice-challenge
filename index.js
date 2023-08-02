var randNum1 = Math.floor(Math.random()*6)+1;
var src1 = "./images/dice" + randNum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", src1);

var randNum2 = Math.floor(Math.random()*6)+1;
var src2 = "./images/dice" + randNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", src2);

if (src1  > src2 ){
    document.querySelector("h1").innerHTML = " 🚩 Player1 Wins!";
} else if(src2 > src1) {
    document.querySelector("h1").innerHTML = "Player2 Wins 🚩!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}