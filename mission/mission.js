document.addEventListener('DOMContentLoaded', function() {
    var themeSelector = document.getElementById('theme');
    var imageSelector = document.querySelector('footer img');
    themeSelector.addEventListener('change', function() {
        document.body.classList.toggle('dark', this.value === 'dark');
        if (this.value === 'dark') {
            imageSelector.src = './byui-logo_white.png';
        } else {
            imageSelector.src = './byui-logo_blue.webp'; //test
        }
    });
});
