const home = document.querySelector('.home');
const aboutMe = document.querySelector('.aboutMe');
const aboutMePage = document.querySelector('.aboutMePage');
const projects = document.querySelector('.projects');
const favoriteQuote = document.querySelector('.favoriteQuote');
const contact = document.querySelector('.contact');

const popupLink = document.getElementById("popup-link");
const popupWindow = document.getElementById("popup-window");
const closeButton = document.getElementById("close-button");
const closeAboutme = document.getElementById("close-aboutMe");

home.addEventListener("click", () => {
  popupWindow.style.display = "none";
  aboutMePage.style.display = "none";
});

popupWindow.style.display = "none";

popupLink.addEventListener("click", function(event) {
  event.preventDefault();
  popupWindow.style.display = "block";
});

closeButton.addEventListener("click", function() {
  popupWindow.style.display = "none";
});

aboutMePage.style.display = "none";

aboutMe.addEventListener("click", function(event) {
  event.preventDefault();
  aboutMePage.style.display = "block";
});

closeAboutme.addEventListener("click", function() {
  aboutMePage.style.display = "none";
});

// home.addEventListener('click', () => {
//     window.scroll(0, 500);
// })

// projects.addEventListener('click', () => {
//     window.scroll(0, 1000);
// })

// favoriteQuote.addEventListener('click', () => {
//     window.scroll(0, 1500);
// })

// contact.addEventListener('click', () => {
//     window.scroll(0, 2000);
// })

// let scrollHeight = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
//   );
// alert('Full document height, with scrolled out part: ' + scrollHeight);

