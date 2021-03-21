// Toggle Theme
function theme_set(toggled) {
    document.getElementById('style-light').disabled = toggled;
    document.getElementById('style-dark').disabled = !toggled;
    localStorage.setItem('experement-toggled', toggled ? '1' : '');
}

function theme_toggle() {
    theme_set(!document.getElementById('style-light').disabled);
}

theme_set(localStorage.getItem('experement-toggled'));