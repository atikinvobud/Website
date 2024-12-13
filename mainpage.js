const header1 = document.querySelector('h3');
header1.textContent = 'Добро пожаловать на наш сайт!!!';

const header2 =document.querySelectorAll('h4');
header2.forEach(item => item.style.color='red');

const findP =document.querySelectorAll('p');
findP[0].textContent ='Это новый текст параграфа.';

const video =document.querySelectorAll('video');
video[0].style.display='none';