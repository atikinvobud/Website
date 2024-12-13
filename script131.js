let header3 = document.querySelector("caption");
header3.addEventListener("click", function(){
alert("Вы кликнули на заголовок - так держать!")})

let button1 =document.querySelector(".semestr")
button1.addEventListener("click", function(){
    const table =document.querySelector("#practice");
    let column =1;
    let ThemeArray =["Базовое бэкенд-приложение", "HTTP-запросы", "JSON и работа с ним", "HTTP-ответы", "Проектирование API", "Роутинг и его настройка",
    "NoSQL базы данных", "Обеспечение авторизации и доступа пользователей", "Работа сторонних сервисов уведомления и авторизации", 
    "Основы ReactJS", "Работа с компонентами динамической DOM", "Использование хуков в React", "Основы микросервисной архитектуры", 
    "Разработка классических модулей веб-приложений", "Разработка классических модулей веб-приложений"];
    for(let i =0; i<table.rows.length;i++)
    {
        let cell = table.rows[i].cells[column];
        if (cell) {
            cell.textContent = ThemeArray[i-1];
    }
    }
})
