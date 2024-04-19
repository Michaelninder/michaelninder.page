// Dark Mode toggle
const modeSwitch = document.getElementById('modeSwitch');
modeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Scroll to top button functionality
window.onscroll = function() {scrollFunction()};
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Form submission handling
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = new FormData(contactForm);
    
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Here you can handle the form submission, like sending an AJAX request or logging the data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Optionally, you can reset the form after submission
    contactForm.reset();
});
function toggleNav() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// Funktion zum Speichern des Dark-Modus-Zustands in einem Cookie
function setDarkModeCookie(darkModeEnabled) {
    document.cookie = "darkMode=" + (darkModeEnabled ? "enabled" : "disabled") + "; path=/";
}

// Funktion zum Lesen des Dark-Modus-Zustands aus dem Cookie
function getDarkModeCookie() {
    var name = "darkMode=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// Funktion zum Initialisieren des Dark-Modus-Zustands basierend auf dem Cookie
function initDarkMode() {
    var modeSwitch = document.getElementById("modeSwitch");
    var darkModeCookie = getDarkModeCookie();
    if (darkModeCookie === "enabled") {
        modeSwitch.checked = true;
        document.body.classList.add("dark-mode");
    } else {
        modeSwitch.checked = false;
        document.body.classList.remove("dark-mode");
    }
}

// Funktion zum Umschalten des Dark-Modus und Aktualisieren des Cookies
function toggleDarkMode() {
    var modeSwitch = document.getElementById("modeSwitch");
    if (modeSwitch.checked) {
        document.body.classList.add("dark-mode");
        setDarkModeCookie(true);
    } else {
        document.body.classList.remove("dark-mode");
        setDarkModeCookie(false);
    }
}

// Initialisierung des Dark-Modus beim Laden der Seite
window.onload = function () {
    initDarkMode();
    document.getElementById("modeSwitch").addEventListener("change", toggleDarkMode);
};
