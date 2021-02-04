let hamburgerMenu = document.querySelector('.hamburger-menu');
let navContainer = document.querySelector('.nav-container');




hamburgerMenu.addEventListener('click' , function(){
    navContainer.classList.toggle('change');
})