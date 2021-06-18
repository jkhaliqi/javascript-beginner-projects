const btn = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id){
        btn.forEach(function(item){
            item.classList.remove('active');
            e.target.classList.add('active');
        })
        articles.forEach(function(article){
            article.classList.remove('active');
            if(article.id == id){
                article.classList.add('active');
            }
        })
    }
})
