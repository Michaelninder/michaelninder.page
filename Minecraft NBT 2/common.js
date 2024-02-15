let darkMode = false;

function toggleDarkMode() {
    darkMode = !darkMode;
    applyDarkMode();
}

function applyDarkMode() {
    const body = document.body;
    const modeToggle = document.getElementById('modeToggle');

    if (darkMode) {
        body.style.backgroundColor = '#000';
        body.style.color = '#fff';
        modeToggle.textContent = 'Light Mode';
    } else {
        body.style.backgroundColor = '#fff';
        body.style.color = '#000';
        modeToggle.textContent = 'Dark Mode';
    }
}

// Initial dark mode application
applyDarkMode();
