const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(item) {
    item.addEventListener('click', function() {
        let parent = item.parentElement.parentElement;
        btns.forEach(function(btn) {
            if(btn.parentElement.parentElement != parent){
                btn.parentElement.parentElement.classList.remove('show-text');
            }
        })
        parent.classList.toggle('show-text');
    })
})
