document.addEventListener('scroll', function() {
    const header = document.querySelector('.menu.container');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});