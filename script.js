function  ShowMessage(text)
{
    console.log(text);
}
function LogCurrentTime()
{
    let now = new Date();
    let hours = now.getHours();     
    let minutes = now.getMinutes(); 
    let seconds = now.getSeconds(); 
    console.log(`${hours}:${minutes}:${seconds}`);
}
function ChangeBackgroundColor(Color)
{
    let body =document.querySelector("main");
    body.style.backgroundColor = Color;
}
function ResetBackgroundColor()
{
    let body1 =document.querySelector("main");
    body1.style.backgroundColor = "rgb(236, 214, 214)";
}
function ToggleVisibility(selector) {
    const elem = document.querySelector(selector);
    if (!elem) {
        console.error(`Элемент ${selector} не найден`);
        return;
    }
    const currentDisplay = window.getComputedStyle(elem).display;

    if (currentDisplay === "none") elem.style.display = "block"; 
    else elem.style.display = "none"; 
}

function  GetUrlParametr(name)
{
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}
function FindTerm()
{
    const Utm_Term =GetUrlParametr("utm_term")
    const header1 =document.querySelector("h3");
    if(Utm_Term)  header1.textContent = Utm_Term;
    else header1.textContent ="Текст по умолчанию";
    
}
ShowMessage("Скрипт загружен");
LogCurrentTime();
ResetBackgroundColor();
alert();
ChangeBackgroundColor("lightblue");
ToggleVisibility("#back");
