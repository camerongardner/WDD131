function adjustMenuVisibility() {
    var screenWidth = window.innerWidth;
    var navItems = document.querySelector('nav ul');

    if (screenWidth < 1000) {
        if (navItems.style.display === 'flex' || navItems.style.display === '') {
            navItems.style.display = 'none';
        }
    } else {
        navItems.style.display = 'flex';
    }
}

document.getElementById('menu').addEventListener('click', function() {
    var navItems = document.querySelector('nav ul');
    if (navItems.style.display === 'none' || navItems.style.display === '') {
        navItems.style.display = 'flex';
    } else {
        navItems.style.display = 'none';
    }
});


window.addEventListener('resize', adjustMenuVisibility);


adjustMenuVisibility();