document.getElementById('install-link').addEventListener('click', function(event) {
    event.preventDefault();
    const xpiPath = event.target.getAttribute('href');
    window.location.href = xpiPath;
});
