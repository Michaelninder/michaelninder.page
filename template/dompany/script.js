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
