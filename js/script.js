const itemCard = document.querySelectorAll('.people__wrapper-item');

itemCard.forEach(item =>{
    item.addEventListener('click', () =>{
        item.classList.toggle('active');
    });
});

// floating

const arrow = document.getElementById('#arrow');
const floating = document.querySelector('.floating');

arrow.addEventListener('click', () =>{
    floating.classList.toggle('active');
    arrow.classList.toggle('active');
});

// menu 
const close = document.querySelector('.close');
const menu = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const links = document.querySelectorAll('.header__menu-link');

hamburger.addEventListener('click', () =>{
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () =>{
    menu.classList.remove('active');
    document.body.style.overflow = '';
});

links.forEach(link =>{
    link.addEventListener('click', (e) =>{
        e.preventDefault();
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });
});
document.addEventListener('keydown', (e) =>{
    if(e.code === 'Escape'){
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }
});