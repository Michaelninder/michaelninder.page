// Laden der externen Seitenleiste
window.addEventListener('DOMContentLoaded', (event) => {
    fetch('building-seitenleiste.html')
        .then(response => response.text())
        .then(data => document.getElementById('content').insertAdjacentHTML('afterbegin', data));
});
