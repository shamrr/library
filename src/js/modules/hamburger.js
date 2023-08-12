const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.navbar__link'); 
const icons = document.querySelector('.icons');

export const toggleHamburger = () => {
    sidebar.addEventListener('click', () => {
        navbar.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                closeNavbar();
            }
        });
    });
    // if (navbar.classList.contains('active')) {
    //     closeWhenClickedOutsideOfElement();
    // }
    
}

function closeNavbar() {
    navbar.classList.remove('active');
    hamburger.classList.remove('active');
}

// function closeWhenClickedOutsideOfElement() {
//     document.addEventListener('click', (e) => {
//         const withinBoundaries = e.composedPath().includes(navbar);

//         if (!withinBoundaries) {
//             closeNavbar();
//         }
//     });
// }


