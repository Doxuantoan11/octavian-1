 const $ = document.querySelector.bind(document);
 const $$ = document.querySelectorAll.bind(document);

 const menuToggle = $('.menu-toggle');
 const menu = $('.menu');
 const closeBtn = $('.menu-close');


 menuToggle.addEventListener('click',()=>{
    if (!menu || !menuToggle || !closeBtn) return;
    menu.classList.add("active");
 });
 closeBtn.addEventListener('click',() => {
    if (!menu || !menuToggle || !closeBtn) return;
    menu.classList.remove("active");
 });