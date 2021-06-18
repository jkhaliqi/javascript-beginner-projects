// DOM APPROACH FOR DISPLAYING ITEMS COMMENTED OUT

const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.png",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.png",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.png",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.png",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.png",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.png",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.png",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.png",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.png",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const sectionCenter = document.querySelector(".section-center");
  const btn = document.querySelector('.btn-container');

  window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    displayFilteredItems();


    // for(let i = 0; i < menu.length; i++){
    //   addItem(menu[i]);
    // }
})

function displayMenuItems(menuItems){
  //displayMenu assigned to a big array of items that we want to show
  let displayMenu = menuItems.map(function(item){
    return `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  })
  //displayMenu gets rid of comma by joining array with nothing ''
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}

function displayFilteredItems(){
  const categories = menu.reduce(function(acc,curr){
    if(!acc.includes(curr.category)){
      acc.push(curr.category);
    }
    return acc;
  },['all'])

  const categoryBtns = categories.map(function(category){
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  }).join('');
  btn.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(function(item){
    item.addEventListener('click',function(e){
      let show = menu.filter(curr => curr.category == e.currentTarget.dataset.id);
      if(e.currentTarget.dataset.id == "all"){
        displayMenuItems(menu);
      }
      else{
        displayMenuItems(show);
      }
    })
})
}



  // function addItem(item){
  //   let article = document.createElement('article');
  //   let img = document.createElement('img');
  //   let itemInfo = document.createElement('div');
  //   let header = document.createElement('header');
  //   let name = document.createElement('h4');
  //   let price = document.createElement('h4');
  //   let text = document.createElement('p');

  //   article.className = 'menu-item';

  //   img.src = item.img;
  //   img.className = 'photo';
  //   img.alt = item.title;

  //   itemInfo.className = 'item-info';

  //   name.textContent = item.title;
  //   price.textContent = item.price;

  //   text.textContent = item.desc;

  //   sectionCenter.appendChild(article);

  //   article.appendChild(img);
  //   article.appendChild(itemInfo);

  //   itemInfo.appendChild(header);
    
  //   header.appendChild(name);
  //   header.appendChild(price);

  //   itemInfo.appendChild(text);

  // }
