/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections= document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY= window.pageYOffset;

    sections.forEach(section=>{
        const sectionHeight= section.offsetHeight;
            sectionTop= section.offsetTop-50;
            sectionId= section.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.add('active__link');
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId+']').classList.remove('active__link');
        }
    })
}

window.addEventListener("scroll",scrollActive);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll__header'); else header.classList.remove('scroll__header')
}
window.addEventListener('scroll', scrollHeader)