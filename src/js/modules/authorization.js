export const loginUser = () => {
    const email = document.getElementById('mail').value;
    const password = document.getElementById('pass').value;

    const storedUsers = JSON.parse(localStorage.getItem('users'));

    if (storedUsers && storedUsers[email] && password === storedUsers[email].password) {
        alert('Вход выполнен успешно!');
    } else {
        alert('Неверный email или пароль.');
    }
}
