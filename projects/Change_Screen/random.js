const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const currentColor = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let buildColor = "#";
    for(let i = 0; i < 6; i++){
        const val = Math.floor(Math.random() * hex.length);
        buildColor += hex[val];
    }
    document.body.style.backgroundColor = buildColor;
    currentColor.textContent = buildColor;
})

