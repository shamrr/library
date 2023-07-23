export const filter = () => {
    const allRadiobuttons = document.querySelectorAll('input[type="radio"][name="season"]');
    
    allRadiobuttons.forEach(input => {
        input.addEventListener('click', () => { // Обработчик событий должен быть функцией, а не объектом
            if (input.checked) {
                // console.log(input.id);
                filterSeason(input.id);
                // console.log(input.id);
            }
        });
    });
};

const filterSeason = (id) => {
    const favoritesItem = document.querySelectorAll('.favorites-item'); // Заменили favoritesItems на правильный селектор
    
    favoritesItem.forEach(item => {
        if (item.classList.contains(id)) {
            // console.log(item);
            item.style.display = "block";
        } else {
            item.style.display = "none"; // Скрываем элемент, если класс не совпадает
        }
    });
};

