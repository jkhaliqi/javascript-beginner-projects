let count = 0;
var value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(item) {
    item.addEventListener("click", function(e){
        let type = e.currentTarget.classList;
        if(type.contains("decrease")){
            count--;
        }
        else if(type.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count == 0){
            value.style.color = "black";
        }
        value.textContent = count;
    })
})

