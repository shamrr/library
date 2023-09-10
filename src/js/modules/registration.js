export const registration = () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('mail').value;
    const password = document.getElementById('pass').value;

    // Получение данных о пользователях из localStorage, если они уже есть
    let users = JSON.parse(localStorage.getItem('users')) || {};

    const userId = generateUUID();

    users[userId] = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    }

    localStorage.setItem('users', JSON.stringify(users));
    
    afterAuthorization(firstName);
    checkLoggedOrNot(firstName, email);
    // resetForm();
}

export const checkLoggedOrNot = (firstName, email) => {
    window.onload = function () {
        const loggedInUser = localStorage.getItem(email);

        console.log('d')
        if(loggedInUser) {
            afterAuthorization(firstName)
        }
    }
}

export function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const changeIconsToText = (firstName) => {
    const headerContainer = document.querySelector('.header__container');

    const icons = document.querySelector('.icons');
    icons.style.display = 'none';

    const name = document.createElement('a');
    name.innerText = firstName;
    name.className = 'header__name';
    headerContainer.append(name);

    name.addEventListener('click', () => {
        menu.showPopupProfile(firstName);
    })
}

export const afterAuthorization = (firstName) => {
    menu.closeAllModals();
    changeIconsToText(firstName);
}
