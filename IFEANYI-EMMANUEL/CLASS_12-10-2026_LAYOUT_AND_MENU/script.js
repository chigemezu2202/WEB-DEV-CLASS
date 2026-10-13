const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Open and close the navigation menu
menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

});

// Close the menu when a navigation link is clicked
const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");

    });

});

// Close the menu when clicking outside it
document.addEventListener("click", function (event) {

    if (
        !menuToggle.contains(event.target) &&
        !navMenu.contains(event.target)
    ) {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");

    }

});