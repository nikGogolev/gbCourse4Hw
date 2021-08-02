//Задание 1
let text1 = document.querySelector('.text1').textContent;
let newText1 = text1.replace(/\'/g, '"');
document.querySelector('.text1').textContent = newText1;
//Задание 2
let text2 = document.querySelector('.text2').textContent;
let regExp2 = new RegExp("\\B\\'|\\'\\B",'g');
let newText2 = text2.replace(regExp2, '"');
document.querySelector('.text2').textContent = newText2;