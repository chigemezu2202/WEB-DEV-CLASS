const hamburgerBtn = document.getElementById('hamburger-btn');
const navGroup = document.getElementById('nav-group');

// if (hamburgerBtn && navGroup) {
//   hamburgerBtn.addEventListener('click', () => {
//     hamburgerBtn.classList.toggle('active');
//     navGroup.classList.toggle('active');
//   });
// }

hamburgerBtn.addEventListener('click', () => {
    navGroup.classList.toggle('active');
});