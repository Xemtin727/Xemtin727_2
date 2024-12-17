document.getElementById('forma').addEventListener('submit', function(event) {
    const Name = document.getElementById('Name');
    const Number = document.getElementById("Number");
    const errorSound = document.getElementById('errorSound');
    const errorMessage = document.getElementById('errorMessage');

    errorSound.volume = 0.1;

    // Проверяем, заполнено ли поле
    if (Name.value.trim() === '' || Name.validity.valid === false) {
        event.preventDefault(); // Останавливаем отправку формы
        errorSound.currentTime = 0;
        errorSound.play(); // Проигрываем звук ошибки
        Name.style.border = '2px solid red'; // Подсвечиваем поле
        errorMessage.style.display = 'block';
    } 
    else {
        Name.style.border = ''; // Убираем подсветку, если поле заполнено
    }
    if (Number.value.trim() === '' || Number.validity.valid === false) {
        event.preventDefault(); // Останавливаем отправку формы
        errorSound.currentTime = 0;
        errorSound.play(); // Проигрываем звук ошибки
        Number.style.border = '2px solid red'; // Подсвечиваем поле
        errorMessage.style.display = 'block';
    } 
    else {
        Number.style.border = ''; // Убираем подсветку, если поле заполнено
    }
});

document.getElementById('button2').addEventListener('click', function() {
    // Находим форму или первый элемент ввода по id
    const formElement = document.getElementById('forma');
    
    // Используем scrollIntoView для прокрутки к элементу
    formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
