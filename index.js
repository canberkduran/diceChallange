var zar=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var x=Math.floor(Math.random()*6);
var y=Math.floor(Math.random()*6);

document.getElementsByTagName("img")[0].setAttribute("src", zar[x]); 
document.getElementsByTagName("img")[1].setAttribute("src", zar[y]); 
if (x>y) {
    document.querySelector("h1").innerHTML="Player 1 Win!";
}else {if(x<y) {
    document.querySelector("h1").innerHTML="Player 2 Win!";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}
}