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
