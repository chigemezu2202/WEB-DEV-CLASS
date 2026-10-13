 // Select the hamburger button and the navigation menu
// const menuToggle = document.getElementsById('menu-toggle');
const menuToggle = document.getElementById('menuToggle')
const navMenu = document.getElementById('navMenu')

// Add a click event listener to the button
menuToggle.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation menu
    // This makes the menu visible based on our CSS rules
    navMenu.classList.toggle('active');
});
alert("Hello Welcome To My Site!");