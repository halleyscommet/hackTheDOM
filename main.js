const currentLevel = new URLSearchParams(window.location.search).get('level') || '0';
document.getElementById('app').innerHTML = levels[currentLevel];