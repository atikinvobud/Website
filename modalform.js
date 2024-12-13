var modal = document.getElementById('modal');
var btn1 = document.getElementById('openModal1');
var btn2 = document.getElementById('openModal2');
var btn3 = document.getElementById('openModal3');
var closeBtn = document.querySelector('.close');

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

btn1.onclick = openModal;
btn2.onclick = openModal;
btn3.onclick = openModal;
closeBtn.onclick = closeModal;

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};



var modal = document.getElementById('modal');
var btn1 = document.getElementById('openModal1');
var btn2 = document.getElementById('openModal2');
var btn3 = document.getElementById('openModal3');
var closeBtn = document.querySelector('.close');

// Функции для открытия и закрытия модального окна
function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

btn1.onclick = openModal;
btn2.onclick = openModal;
btn3.onclick = openModal;
closeBtn.onclick = closeModal;

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};

// Проверка номера телефона
function checkphone(input) {
    const pattern = /^\+7[0-9]{10}$/;
    return input.match(pattern);
}

// Функция для вывода значений формы
function PrintData(formdata) {
    const elementNames = Array.from(formdata.keys());
    elementNames.forEach(name => {
        const value = formdata.get(name);
        console.log(`${name} : ${value}`);
    });
}

function showSubmissionMessage() {
    const messageElement = document.createElement('div');
    messageElement.textContent = "Форма отправлена!";
    
    // Стиль для контейнера сообщения
    messageElement.style.position = "fixed";
    messageElement.style.top = "50%";
    messageElement.style.left = "50%";
    messageElement.style.transform = "translate(-50%, -50%)";
    messageElement.style.width = "20%";
    messageElement.style.textAlign = "center"; // Выравнивание текста по центру
    messageElement.style.padding = "10px";
    messageElement.style.backgroundColor = "#87CEEB"; // Голубой фон
    messageElement.style.color = "#000"; // Чёрный текст
    messageElement.style.fontSize = "18px";
    messageElement.style.fontWeight = "bold"; // Полужирный текст
    messageElement.style.borderRadius = "5px";
    messageElement.style.opacity = "0";
    messageElement.style.transition = "opacity 1s, transform 1s";
    
    // Добавляем элемент на страницу
    document.body.appendChild(messageElement);

    // Плавное появление
    setTimeout(() => {
        messageElement.style.opacity = "1";
        messageElement.style.transform = "translate(-50%, -50%) scale(1.1)";
    }, 100);

    // Удаление сообщения через 3 секунды
    setTimeout(() => {
        messageElement.style.opacity = "0";
        setTimeout(() => messageElement.remove(), 1000);
    }, 3000);
}

function checkphone(input)
 {
    const pattern = /^\+7[0-9]{10}$/;
    return input.match(pattern);
}
function PrintData(formdata)
{
    const elementNames = Array.from(formdata.keys());
    elementNames.forEach(name => {
        const value = formdata.get(name);
        console.log(`${name} : ${value}`);
    });
}
document.getElementById('Contactform').addEventListener('submit', function(event) 
{
    event.preventDefault();
    const formData = new FormData(this);
    const phoneNumber = formData.get("phone");
    if (checkphone(phoneNumber))
    {
        PrintData(formData);
        showSubmissionMessage();
    }
    else
     {
        console.log("Неправильный формат номера телефона.");
        return false; 
    }
    closeModal();
});



