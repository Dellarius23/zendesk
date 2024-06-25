const menuBottom = document.querySelector('.menu__bottom');
const body =  document.querySelector('body');
const menuBtn = document.querySelector('.burger__open-btn');
const menuClose = document.querySelector('.burger__close-btn');
const footerListTitle = document.querySelector('.footer__list-title')
const footerItemOpen = document.querySelector('.footer__item');
const footerListTitle2 = document.querySelector('.footer__list-title-2')
const footerItem2 = document.querySelector('.footer__item-2')
const footerListTitle3 = document.querySelector('.footer__list-title-3')
const footerItem3 = document.querySelector('.footer__item-3')
const footerListTitle4 = document.querySelector('.footer__list-title-4')
const footerItem4 = document.querySelector('.footer__item-4')
const footerListTitle5 = document.querySelector('.footer__list-title-5')
const footerItem5 = document.querySelector('.footer__item-5')

menuBtn.addEventListener('click',()=>{
    menuBottom.classList.toggle('menu__bottom-open');
    body.classList.toggle('wrapper__hidden');
});
menuClose.addEventListener('click',()=>{
    menuBottom.classList.remove('menu__bottom-open')
    body.classList.remove('wrapper__hidden');
});

footerListTitle.addEventListener('click', () =>{
    footerItemOpen.classList.toggle('footer__item-open')
});

footerListTitle2.addEventListener('click', () =>{
    footerItem2.classList.toggle('footer__item-open')
});
footerListTitle3.addEventListener('click', () =>{
    footerItem3.classList.toggle('footer__item-open')
});
footerListTitle4.addEventListener('click', () =>{
    footerItem4.classList.toggle('footer__item-open')
});
footerListTitle5.addEventListener('click', () =>{
    footerItem5.classList.toggle('footer__item-open')
});

