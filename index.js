const home = document.querySelector('.home');
const aboutMe = document.querySelector('.aboutMe');
const projects = document.querySelector('.projects');
const favoriteQuote = document.querySelector('.favoriteQuote');
const contact = document.querySelector('.contact');

home.addEventListener('click', () => {
    // alert("aboutMe");
    window.scroll(0, 500);
})

aboutMe.addEventListener('click', () => {
    // alert("aboutMe");
    window.scroll(0, 500);
})

projects.addEventListener('click', () => {
    window.scroll(0, 1000);
})

favoriteQuote.addEventListener('click', () => {
    window.scroll(0, 1500);
})

contact.addEventListener('click', () => {
    window.scroll(0, 2000);
})

// let scrollHeight = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
//   );
// alert('Full document height, with scrolled out part: ' + scrollHeight);

