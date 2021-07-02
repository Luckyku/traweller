const menutoogle = document.querySelector('.menutoogle input');
const nav = document.querySelector('nav ul');

menutoogle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

