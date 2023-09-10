const dropMenuNoAuth = document.querySelector('.dropMenu__noAuth');
const dropMenuAuth = document.querySelector('.dropMenu__auth');
const modalSign = document.querySelector('.modal-overlay__register');
const modalLogin = document.querySelector('.modal-overlay__login');
const modalProfile = document.querySelector('.modal-overlay__profile');
// const dropMenus = document.querySelectorAll('.dropMenu');
// const body = document.body;
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

let auth = false;

export const showDropMenu = () => {
    if(!auth) {
        dropMenuNoAuth.style.display = 'block';
    } else {
        dropMenuAuth.style.display = 'block';
    }
}

export const showPopupLogIn = () => {
    modalLogin.style.display = 'block';
    document.body.style.overflow = 'hidden';

    closeAllDropMenu();
}

export const showPopupSignUp = () => {
    modalSign.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    closeAllDropMenu();
}

export const showPopupProfile = (name) => {
    modalProfile.style.display = 'block';
    document.body.style.overflow = 'hidden';

    const modalName = document.querySelector('.modal__name');
    const modalImg = document.querySelector('.modal__img');

    modalName.innerText = name;
    modalImg.innerText = name;

    closeAllDropMenu();
}

export const closePopup = () => {
    const modalClose = document.querySelectorAll('.modal__close');

    modalClose.forEach(modal => {
        closeAllModals();
    })
}

export const closeAllModals = () => {
    modalSign.style.display = 'none';
    modalLogin.style.display = 'none';
    modalProfile.style.display = 'none';
    document.body.style.overflow = 'auto';
}

export const closeAllDropMenu = () => {
    dropMenuAuth.style.display = 'none';
    dropMenuNoAuth.style.display = 'none';
}

export const changeModalWindow = (event) => {
    const link = event.currentTarget; // Получаем элемент, на который было совершено событие клика
    const modalClass = link.closest('.modal-overlay'); 

    if (modalClass.classList.contains('modal-overlay__login') && modalClass.classList.contains('modal-overlay')) {
        closeAllModals();   
        showPopupSignUp();
    }
    if (modalClass.classList.contains('modal-overlay__register') && modalClass.classList.contains('modal-overlay')) {
        closeAllModals();
        showPopupLogIn();
    }
}

// export const closeDropMenu = () => {
//     body.addEventListener('click', () => {
//         let clickedOutsideMenu = true;

//         console.log('a')
//         if (clickedOutsideMenu) {
//             dropMenus.forEach((dropMenu) => {
//                 dropMenu.style.display = 'none';
//             });
//         }
//     });
// }

// export const closeDropMenu = () => {
//     document.addEventListener('click', function (event) {
//         const {target} = event;  
//         if (!target.classList.contains('dropMenu')) {
//             dropMenus.forEach((menu) => {
//                 menu.style.display = 'none';
//             });
//         }
//     });
// }

// export const closeDropMenuAndOpenNav = () => {
//     if(navbar.classList.contains('active')){
//         closeAllDropMenu();
//     }
// }