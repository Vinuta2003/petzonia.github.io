let titl = document.getElementById('titl');
let bird = document.getElementById('bird');
let dog = document.getElementById('dog');
let rabiit = document.getElementById('rabiit');
let hare = document.getElementById('hare');
let sparrow = document.getElementById('sparrow');
let pet_group = document.getElementById('pet_group');
let login = document.getElementById('login');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    titl.style.marginBottom = value * 4 + 'px';
    bird.style.marginBottom = value * 4 + 'px';
    // sparrow.style.marginTop = value * 9.5 + 'px';
    hare.style.marginRight = value * -4.5 + 'px';
    dog.style.marginLeft = value * -4.5 + 'px';
    login.style.marginBottom= value * 4 + 'px';

} );