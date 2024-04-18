document.addEventListener("DOMContentLoaded", function() {
    // Scroll-Spy für die Navigation
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", function() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === current) {
                link.classList.add("active");
            }
        });
    });

    // Zeige den "hoch" Button, wenn der Benutzer nach unten scrollt
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    // Scrollen nach oben, wenn der "hoch" Button geklickt wird
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
