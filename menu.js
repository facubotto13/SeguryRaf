document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.img.menu');
    const navbar = document.querySelector('.menu .navbar');
    const menuContainer = document.querySelector('.menu.container');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        menuContainer.classList.toggle('scrolled'); // Ajustar según sea necesario
    });

    // Cerrar el menú si se hace clic en el mismo botón de toggle
    menuToggle.addEventListener('click', function(event) {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuContainer.classList.remove('scrolled'); // Ajustar según sea necesario
        }
    });
});


document.addEventListener('scroll', function() {
    const header = document.querySelector('.menu.container');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// menu.js
document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.btn-4');
    const closeBtns = document.querySelectorAll('.close-btn');
    const volverBtns = document.querySelectorAll('.volver-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            } else {
                console.error(`Modal with ID ${modalId} not found.`);
            }
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    volverBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
