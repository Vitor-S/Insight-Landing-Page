let stars = document.getElementById('stars');
const nuvens = document.getElementById("nuvens")

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    stars.style.left = value * 0.5 + 'px' ;
    nuvens.style.right = value * 0.5 + 'px';
})