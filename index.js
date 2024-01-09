const home = document.querySelector('.home');
const contact = document.querySelector('.contact');
const aboutMe = document.querySelector('.aboutMe');
const projects = document.querySelector('.projects');
const aboutMePage = document.querySelector('.aboutMePage');
const projectsPage = document.querySelector('.projectsPage');
const favoriteQuote = document.querySelector('.favoriteQuote');
const contactPage = document.querySelector('.myContacts');

const learnMore = document.getElementById("popup-link");
const closeAboutme = document.getElementById("close-aboutMe");
const learnMorePage = document.getElementById("popup-window");
const closeContact = document.getElementById("close-contactPage");
const closelearnMorePage = document.getElementById("close-button");
const closeProjects = document.getElementById("close-projectsPage");

//-----handling home button----
home.addEventListener("click", () => {
  learnMorePage.style.display = "none";
  aboutMePage.style.display = "none";
  projectsPage.style.display = "none";
});

//-----handling learnMore button----
learnMorePage.style.display = "none";
learnMore.addEventListener("click", function(event) {
  event.preventDefault();
  learnMorePage.style.display = "block";
});
closelearnMorePage.addEventListener("click", function() {
  learnMorePage.style.display = "none";
});

//-----handling aboutMe button----
aboutMePage.style.display = "none";
aboutMe.addEventListener("click", function(event) {
  event.preventDefault();
  aboutMePage.style.display = "block";
});
closeAboutme.addEventListener("click", function() {
  aboutMePage.style.display = "none";
});

//-----handling projects button----
projectsPage.style.display = "none";
projects.addEventListener('click', (event) => {
  event.preventDefault();
  projectsPage.style.display = "block";
});
closeProjects.addEventListener("click", function() {
  projectsPage.style.display = "none";
});

//-----handling contact button----
contactPage.style.display = "none";
contact.addEventListener('click', (event) => {
  event.preventDefault();
  contactPage.style.display = "block";
});
closeContact.addEventListener("click", function() {
  contactPage.style.display = "none";
});

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

