const navLinks = document.querySelector(".nav-links");

const toggleMenu = (e) =>{
    e.name = e.name === 'menu-outline' ? 'close' : 'menu-outline';
    navLinks.classList.toggle('top-[13.5%]'); //not working dunno why
}