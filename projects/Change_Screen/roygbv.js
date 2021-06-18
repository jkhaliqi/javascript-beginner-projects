const color = ["red", "orange", "yellow", "green", "blue", "violet"];
const currentColor = document.querySelector(".color");
const btn = document.getElementById("btn");
var i = 0;

btn.addEventListener("click", function(){
    i = i%6;
    document.body.style.backgroundColor = color[i];
    document.querySelector(".color").textContent = color[i++];
})