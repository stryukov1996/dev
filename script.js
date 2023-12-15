// // ассоциативные массивы
// let mas = {
//     'one' : 4,
//     'two' : 33,
//     'name one' : 'Alex',
//     'age' : 44,
//     'bool' : true
// };

// console.log(mas);
// console.log(mas['name one']);

// let myage = 'age';
// console.log(mas[myage]);

// // out.innerHTML = mas;

// for (let key in mas) {
//     out.innerHTML += key + ' : ' + mas[key] + '<br>';
// }


// // Угадай число
// Math.floor((Math.random() * 10) + 1);


// // Циклы
// function f1(){
//     let p = document.getElementById('out');
//     // заданное количество повторений
//     for (let i = 0; i < 100; i++) {
//         p.innerHTML += i + '<br>';
//     }
//     let fruits = ['Апельсин','Лимон'];
//     for (x of fruits){
//         p.innerHTML += x + '<br>';
//     }

//     let i = 0;
//     while (i < 50) {
//         p.innerHTML += i + '<br>';
//         i++;
//     } 

//     let i = 0;
//     do {
//         p.innerHTML += i + '<br>';
//         i++;
//     }
//     while (i < 50);
// }


// // Массивы - упорядоченный набор данных
// let m = [];
// let m1 = [99, 33, 'Hello'];
// m1[3] = 'aaa';
// m1[4] = '23'
// // alert(m1.length);

// function masOut() {
//     let p = document.getElementById('out');
//     let str = '';
//     for (let i = 0; i < m1.length; i++) {
//         str += i + '---' + m1[i] + '<br>';
//     }
//     p.innerHTML = str;
// }
// masOut();

// function p1() {
//     let i1 = document.getElementById('i1').value;
//     m1.push(i1);
//     masOut();
// }

// function p2() {
//     m1.pop();
//     masOut();
// }


// // По элементу и классу
// let p = document.getElementsByTagName('p');
// console.log(p);
// p[1].onclick = f1;

// function f1() {
//     console.log(this);
//     this.style.background = "pink";
// }

// for (let i = 0; i < p.length; i++) {
//     p[i].onclick = f1;
// }

// Слайдер + по таймера
// let sliderL = document.getElementById('slider-left');
// let sliderR = document.getElementById('slider-right');
// sliderL.onclick = sliderLeft;
// sliderR.onclick = sliderRight;
// let left = 0;
// let polosa = document.getElementById('polosa');
// let timer = 0;
// autoSlider();

// function sliderLeft(){
//     left = left - 128;
//     if (left < -512) {
//         left = 0;
//         clearTimeout(timer);
//         notClick(sliderL);
//     } else {
//         yesClick(sliderL);
//     }
//     polosa.style.left = left + 'px';
//     autoSlider();
// }

// function autoSlider(){
//     timer = setTimeout(sliderLeft, 1000);
// }

// function sliderRight(){
//     left = left + 128;
//     if (left >= 0) {
//         notClick(sliderR);
//     } else {
//         yesClick(sliderR);
//     }
//     polosa.style.left = left + 'px';
// }

// function notClick(rotate){
//     rotate.style.opacity = 0.5;
//     rotate.style.pointerEvents = 'none';
// }

// function yesClick(rotate){
//     rotate.style.opacity = '';
//     rotate.style.pointerEvents = '';
// }

// Работаем с радиобаттон
// let radio = document.getElementsByName('prim');

// for (let i = 0; i < radio.length; i++) {
//     radio[i].onchange = testRadio;
// }

// function testRadio(){
//     console.log(this.value);
// }

// document.getElementById('one').onclick = checkRadio;

// function checkRadio(){
//     for (let i = 0; i < radio.length; i++) {
//         if (radio[i].checked == true) {
//             alert(radio[i].value);
//             break;
//         }
//     }
// }

// CSS генератор
// document.getElementById('r1').oninput = cssGenerator;

// function cssGenerator(){
//     let div = document.getElementById('test');
//     let out = document.getElementById('out');
//     div.style.borderRadius = this.value + 'px';
//     out.innerHTML = '-webkit-border-radius: ' + this.value + 'px\n';
//     out.innerHTML += 'border-radius: ' + this.value + 'px';
// }

// Ассоциативные массивы + задачи
// let m = {};
// let n = {
//     "one" : 12,
//     "hello" : "world",
//     "prim" : 2000,
//     "double key" : 777
// };
// console.log(n['double key']);
// let ppp = 'hello';
// console.log(n[ppp]);

// let out = document.getElementById('out');
// for (let key in n) {
//     out.innerHTML += key + '---' + n[key] + '<br>';
// }

// let man = {
//     "name" : "Alex",
//     "age" : 52,
//     "sex" : "male",
//     "id" : "23233d",
//     "year" : function(){
//         return new Date().getFullYear() - this.age;
//     }
// }
// console.log(man.year());

// let masOuter = {
//     "mas" : [5, 6, 34, 12, 45],
//     "sum" : function(){
//         let sum = 0;
//         for (let i = 0; i < this.mas.length; i++) {
//             sum = sum + this.mas[i];
//         }
//         return sum;
//     }
// }
// console.log(masOuter.sum());

// let goods = {
//     "28245" : {
//         "name" : "Banan",
//         "cost" : 255,
//         "img" : "yes",
//         "sklad" : "da"
//     },
//     "28246" : {
//         "name" : "Pomidor",
//         "cost" : 40,
//         "img" : "no",
//         "sklad" : "net"
//     }
// };
// console.log(goods);
// let out2 = '';
// for (let key in goods) {
//     out2+= "Name: " + goods[key].name + '<br>';
//     out2+= "Price: " + goods[key].cost + '<br>';
//     out2+= "Sklad: " + goods[key].sklad + '<br>';
// }
// document.getElementById('out2').innerHTML = out2;

// Функции
// function one(){
//     alert("Hello");
// }

// function summa(a,b){
//     let c = 50;

//     a = a || 10;
//     b = b || 20;
//     return a + b;
// }
// document.getElementById('b1').onclick = function(){
//     alert(summa(12,6));
// }

// let d = function(){
//     alert('work');
// }
// d();

// События мыши
// let block = document.getElementById('one');
// block.onclick = function(){
//     this.style.background = 'green';
//     this.onclick = null;
// }
// block.ondblclick = function(){
//     this.style.background = 'red';
// }
// block.oncontextmenu = function(){
//     this.style.background = 'black';
//     return false;
// }
// document.oncontextmenu = function(){
//     return false;
// }
// block.onmouseenter = function(){
//     this.style.background = 'gold';
// }
// block.onmouseleave = function(){
//     this.style.background = 'orange';
// }
// let a = 0;
// block.onmousemove = function(){
//     a++;
//     this.style.width = 100 + a + 'px';
// }
// block.onmousedown = function(event){
//     this.style.background = 'cyan';
//     console.log(event.button);
//     console.log(event.which);
// }
// block.onmouseup = function(event){
//     this.style.background = 'pink';
// }

// document.onmousemove = function(){
//     document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="https://avatars.steamstatic.com/818e19579fc239c7f8edd7ac98938b1b478c30fe_medium.jpg" alt="" id="cat">');
//     let cat = document.getElementById('cat');
//     cat.style.position = 'fixed';
//     document.onmousemove = function(event){
//         cat.style.left = event.clientX + 20 + 'px';
//         cat.style.top = event.clientY + 20+ 'px';
//     }
// }

// Классный эффект переключения между фото
// document.getElementById('myslide').onmousemove = function(event){
//     document.getElementById('two').style.transition = '';
//     // document.getElementById('two').style.borderRight = '2px solid red';
//     let x = event.offsetX; // относительно родителя
//     document.getElementById('two').style.width = x + 'px';
// }
// document.getElementById('myslide').onmouseleave = function(event){
//     document.getElementById('two').style.transition = 'all ease 1s';
//     // document.getElementById('two').style.borderRight = '';
//     document.getElementById('two').style.width = '';
// }

// // Таймеры и интервалы
// let sdvig = 0;
// let timer;
// let test = document.getElementById('test');
// // move();
// function move(){
//     test.style.marginLeft = sdvig + 'px';
//     sdvig+=3;
//     timer = setTimeout(move, 50);
// }

// // let timer = setInterval(move, 50);

// document.getElementById('stop').onclick = function(){
//     // clearInterval(timer);
//     clearTimeout(timer);
// }

// let a = 5;
// obr();
// function obr(){
//     document.getElementById('out').innerHTML = a;
//     a--;
//     if (a < 0) {
//         clearTimeout(timer);
//     } else {
//         timer = setTimeout(obr,1000);
//     }
// }

// // Клавиши клавиатуры - onkeypress
// // document.onkeypress = function(event){
// //     console.log(event);
// // }

// document.getElementById('test').onkeypress = function(event){
//     // console.log(event);
//     if (event.keyCode < 48 || event.keyCode > 57) {
//         console.log('Ne cifra');
//         return false;
//     }
// }

// // Поле ввода пароля
// let str = '';
// document.getElementById('test').onkeypress = function(event){
//     // console.log(event);
//     str = str + event.key
//     console.log(str);
//     this.value += String.fromCharCode(getRandomInt(65,122));
//     return false;
//     // 97-122 65-90
// }
// console.log(String.fromCharCode(122));

// function getRandomInt(min,max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// // Двигаем блок стрелками мыши
// let block = document.getElementById('test');
// let left = 0;
// let top1 = 0;
// document.onkeydown = function(event) {
//     console.log(event);
//     if (event.key == 'ArrowRight') {
//         block.style.left = left + 'px';
//         left++;
//     }
//     if (event.key == 'ArrowDown') {
//         block.style.top = top1 + 'px';
//         top1++;
//     }
// }
// document.onkeyup = function(event) {
//     console.log('Otp');
// }

// // Прокрутка колесом мыши
// document.onwheel = function(event) {
//     console.log(event);
//     if (event.deltaY > 0) {
//         document.getElementById('line').innerHTML = 'Вниз';
//     } else {
//         document.getElementById('line').innerHTML = 'Вверх';
//     }

//     let speed = event.deltaY;
//     speed = Math.abs(speed);
//     if (speed < 100) {
//         document.getElementById('speed').innerHTML = 'Низкая';
//     } else if (speed < 150) {
//         document.getElementById('speed').innerHTML = 'Средняя';
//     } else if (speed < 250) {
//         document.getElementById('speed').innerHTML = 'Высокая';
//     } else {
//         document.getElementById('speed').innerHTML = 'Оч высокая';
//     }
// }

// let left = 295;
// document.getElementById('test').onwheel = function(event) {
//     let line = event.deltaY;
//     left = left + line;
//     if (left < 0) {
//         left = 0;
//     } else if (left > 590) {
//         left = 590;
//     }
//     document.getElementById('test2').style.left = left + 'px';
//     return false;
// }

// // Плавная прокрутка страницы вверх
// window.onload = function(){
//     let scrolled;
//     let timer;

//     document.getElementById('top').onclick = function(){
//         scrolled = window.pageYOffset;
//         // window.scrollTo(0,0);
//         scrollToTop();
//     }

//     function scrollToTop(){
//         if (scrolled > 0) {
//             window.scrollTo(0, scrolled);
//             scrolled = scrolled - 20; // скорость прокрутки
//             timer = setTimeout(scrollToTop, 4);
//         } else {
//             clearTimeout(timer);
//             window.scrollTo(0, 0);
//         }
//     }
// }

// Игра Угадай число
// let number = Math.floor(10 * Math.random()) + 1;
// console.log(number);
// let count = 3;

// document.getElementById('check').onclick = function(){
//     if (count > 0) {
//         let usernum = document.getElementById('mynum').value;
//         usernum = parseInt(usernum);
//         let out = document.getElementById('out');
//         if (usernum == number) {
//             out.innerHTML = 'URA';
//         } else if (usernum > number) {
//             out.innerHTML = 'More';
//         } else if (usernum < number) {
//             out.innerHTML = 'Little';
//         }
//         count--;
//     } else {
//         alert('Попытки кончились');
//         location.reload();
//     }
// }

// Крестики нолики
// window.onload = function() {
//     for (var i = 0; i < 9; i++) {
//         document.getElementById('game').innerHTML+='<div class="block"></div>'
//     }
//     let hod = 0;
//     document.getElementById('game').onclick = function(event) {
//         console.log(event);
//         if (event.target.className == 'block' && event.target.innerHTML == '') {
//             if (hod >= 8) {
//                 alert('Никто не выйграл');
//             } else {
//                 if (hod % 2 == 0) {
//                     event.target.innerHTML = 'X';
//                 } else {
//                     event.target.innerHTML = '0';
//                 }
//                 hod++;
//                 checkWinner();
//             }
//         } else {
//             alert('Поле уже занято');
//         }
//     }

//     function checkWinner() {
//         let allblock = document.getElementsByClassName('block');
//         console.log(allblock);
//         if (allblock[0].innerHTML == 'X' && allblock[1].innerHTML == 'X' && allblock[2].innerHTML == 'X') {
//             alert('Победили крестики');
//         }
//         if (allblock[3].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[5].innerHTML == 'X') {
//             alert('Победили крестики');
//         }
//         if (allblock[6].innerHTML == 'X' && allblock[7].innerHTML == 'X' && allblock[8].innerHTML == 'X') {
//             alert('Победили крестики');
//         }
//         if (allblock[0].innerHTML == 'X' && allblock[3].innerHTML == 'X' && allblock[6].innerHTML == 'X') {
//             alert('Победили крестики');
//         }
//         if (allblock[1].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[7].innerHTML == 'X') {
//             alert('Победили крестики');
//         }
//         if (allblock[2].innerHTML == 'X' && allblock[5].innerHTML == 'X' && allblock[8].innerHTML == 'X') {
//             alert('Победили крестики');
//         }
//         if (allblock[0].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[8].innerHTML == 'X') {
//             alert('Победили крестики');
//         }
//         if (allblock[2].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[6].innerHTML == 'X') {
//             alert('Победили крестики');
//         }

//         if (allblock[0].innerHTML == '0' && allblock[1].innerHTML == '0' && allblock[2].innerHTML == '0') {
//             alert('Победили нолики');
//         }
//         if (allblock[3].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[5].innerHTML == '0') {
//             alert('Победили нолики');
//         }
//         if (allblock[6].innerHTML == '0' && allblock[7].innerHTML == '0' && allblock[8].innerHTML == '0') {
//             alert('Победили нолики');
//         }
//         if (allblock[0].innerHTML == '0' && allblock[3].innerHTML == '0' && allblock[6].innerHTML == '0') {
//             alert('Победили нолики');
//         }
//         if (allblock[1].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[7].innerHTML == '0') {
//             alert('Победили нолики');
//         }
//         if (allblock[2].innerHTML == '0' && allblock[5].innerHTML == '0' && allblock[8].innerHTML == '0') {
//             alert('Победили нолики');
//         }
//         if (allblock[0].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[8].innerHTML == '0') {
//             alert('Победили нолики');
//         }
//         if (allblock[2].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[6].innerHTML == '0') {
//             alert('Победили нолики');
//         }
//     }
// }

// Local Storage
// window.onload = function(){
//     if (localStorage.getItem('bgcolor') != null) {
//         let color = localStorage.getItem('bgcolor');
//         document.getElementsByTagName('body')[0].style.background = color;
//     }

//     document.getElementById('green').onclick = function(){
//         document.getElementsByTagName('body')[0].style.background = 'green';
//         localStorage.setItem('bgcolor','green');
//     }

//     document.getElementById('red').onclick = function(){
//         document.getElementsByTagName('body')[0].style.background = 'red';
//         localStorage.setItem('bgcolor','red');
//     }
// }

// ToDo лист
// window.onload = function(){
//     let todoList = [];
//     if (localStorage.getItem('todo') != null) {
//         todoList = JSON.parse(localStorage.getItem('todo'));
//         out();
//     }

//     document.getElementById('add').onclick = function(){
//         let d = document.getElementById('in').value;
//         let temp = {};
//         temp.todo = d;
//         temp.check = false;
//         let i = todoList.length;
//         todoList[i] = temp;
//         console.log(todoList);
//         out();
//         localStorage.setItem('todo', JSON.stringify(todoList));
//     }
    
//     function out(){
//         let out = '';
//         for (let key in todoList) {
//             if (todoList[key].check === true) {
//                 out += '<input type="checkbox" checked>';
//             } else {
//                 out += '<input type="checkbox">';
//             }
//             out += todoList[key].todo + '<br>';
//         }
//         document.getElementById('out').innerHTML = out;
//     }
// }

// Адаптивное меню
// window.onload = function(){
//     document.querySelector('#menu').onmouseover = menuShow;
//     document.querySelector('#menu').onmouseout = menuHide;
//     document.onkeydown = function(event) {
//         console.log(event);
//         if (event.code == 'KeyM') {
//             menuShow();
//         }
//         if (event.code == 'Escape') {
//             menuHide();
//         }
//     }
//     function menuShow(){
//         document.querySelector('#menu').style.left = 0;
//     }
//     function menuHide(){
//         document.querySelector('#menu').style.left = '-230px';
//     }
// }

// Часы
// window.onload = function(){
//     setInterval(fSec, 100);
//     let sec = 0;
//     let min = 0;
//     function fSec(){
//         document.querySelector('#sec').style.transform = 'rotate('+ sec +'deg)';
//         document.querySelector('#min').style.transform = 'rotate('+ min +'deg)';
//         if (sec == 360) {
//             sec = 0
//             min+=6;
//         }
//         sec+=6;
        
//     }
// }
// window.onload = function(){
//     setInterval(fSec,1000);
//     function fSec(){
//      var date  = new Date();
//      document.querySelector('#sec').style.transform = 'rotate('+(date.getSeconds()*6)+'deg)';
//      document.querySelector('#min').style.transform = 'rotate('+(date.getMinutes()*6)+'deg)';
//      document.querySelector('#hour').style.transform = 'rotate('+(date.getHours()*30)+'deg)';
//     }
//    }

// AJAX и JSON стрим
// let mas = ['Alex', 17, 5, true];
// mas[100] = 'Hi'
// console.log(mas);

// let out = '';
// for (let i = 0; i < mas.length; i++) {
//     if (mas[i] != undefined) {
//         out += mas[i] + ' ';
//     }
// }
// document.querySelector('#out').innerHTML = out;

// let m2 = {
//     name : 'Alex',
//     age: 17,
//     kod : 5,
//     auto : true
// };

// out = '';
// for (let k in m2) {
//     out += k + ' --- ' + m2[k] + '<br>';
// }
// document.querySelector('#out').innerHTML = out;

// let m = {
//     "name" : "Sergey",
//     "age" : 44,
//     "sex" : "Male",
//     "iin" : 3432,
//     "phone" : ["+38050", "79954"],
//     "email" : {
//         "gmail" : "dfsdf@gmail.com",
//         "ya" : "fsfsd@yandex.ru"
//     }
// }
// let str = JSON.stringify(m);
// console.log(str);
// console.log(JSON.parse(str));

// Сумма двух чисел в массиве которая равна k
// function twoSum (k, mas) {
//     for (let i = 0; i < mas.length; i++) {
//         for (let j = 0; j < mas.length; j++) {
//             if (i < j) {
//                 if (mas[i] + mas[j] == k) {
//                     console.log('I ' + mas[i] + ' J ' + mas[j]);
//                 }
//             } else {
//                 continue;
//             }
//         }
//     }
// }
// twoSum(7, [-1, 2, 5, 8]);

// Вкладки
// window.onload = function(){
//     document.querySelector('.tabs-header').addEventListener('click', fTabs);

//     function fTabs(event) {
//         console.log(event);
//         if (event.target.className == 'tab-h') {
//             let dataTab = event.target.getAttribute('data-tab');
//             let tabH = document.getElementsByClassName('tab-h');
//             for (let i = 0; i < tabH.length; i++) {
//                 tabH[i].classList.remove('active');
//             }
//             event.target.classList.add('active');
//             let tabBody = document.getElementsByClassName('tab-b');
//             for (let i = 0; i < tabBody.length; i++) {
//                 if (dataTab == i) {
//                     tabBody[i].style.display = 'block';
//                 } else {
//                     tabBody[i].style.display = 'none';
//                 }
//             }
//         }
        
//     }
// }

// Колонки равной высоты
// window.onload = function(){
//     let left = document.querySelector('.left');
//     let right = document.querySelector('.right');
//     function equalHeight(){
//         left.style.height = 'auto';
//         right.style.height = 'auto';
//         let leftH = left.offsetHeight;
//         let rightH = left.offsetHeight;
//         let max = Math.max(leftH, rightH);
//         left.style.height = max + 'px';
//         right.style.height = max + 'px';
//     }
//     equalHeight();
//     window.onresize = equalHeight;
// }

// Определяем Desktop или Mobile
// document.querySelector('#out').innerHTML = navigator.userAgent;
// console.log(navigator);

// if (navigator.userAgent.match('iPhone') || navigator.userAgent.match('Android') || navigator.userAgent.match('iPad')) {
//     alert('mobile');
// }

// Jens Lehmann
// window.onload = function(){
//     let mas = document.getElementsByClassName('layer');
//     let j = 0;
//     let y = 0;
//     document.querySelector('.jens').onmousewheel = function(event){
//         y = y + Math.round(event.deltaY);
//         if (event.deltaY > 0) {
//             console.log('листание вниз');
//         } else {
//             console.log('листание вверх');
//         }
//         console.log(y);
//         mas[j].style.top = -(y) + 'px';
//         if (j == 0 && event.deltaY < 0) {
//             y = 0;
//         }
        
//         if (y >= 500) {
//             j++;
//             y = 0;
//         }

//         if (j == mas.length-1 && event.deltaY > 0) {
//             document.querySelector('.jens').onmousewheel = function(){
//                 return false;
//             };
//         }
//     }
// }

// Задача на стек
// let mas = [13, 12, 15, 11, 9, 12, 16];
// for (let i = 0; i < mas.length; i++) {
//     for (let j = i+1; j < mas.length; j++) {
//         if (i < j) {
//             if (mas[j] > mas[i]) {
//                 console.log(j - i);
//                 break;
//             }
//         }
//     }
// }

// Дан массив целых чисел и целое число k. Нужно определить, есть ли в массиве два числа, сумма которых равна k
// let mas = [1, 4, 6, 8, 9];
// let k = 16;
// for (let i = 0; i < mas.length; i++) {
//     for (let j = 0; j < mas.length; j++) {
//         if (i < j) {
//             if (mas[i] + mas[j] == k) {
//                 console.log('Число ' + mas[i] + ' и число ' + mas[j])
//             } else {
//                 console.log('Нет');
//             }
//         }
//     }
// }

// Добавляем класс по клику
// window.onload = function(){
//     document.onclick = function(event) {
//         // console.log(event.target.tagName);
//         event = event || window.event;
//         if (event.target.tagName == 'IMG') {
//             event.target.classList.toggle('bordered');
//         }
//     }
// }

// Координаты мыши
// document.querySelector('#test').onmousemove = function(event){
//     event = event || window.event;
//     console.log(event);
//     document.querySelector('#offx').innerHTML = event.offsetX;
//     document.querySelector('#offy').innerHTML = event.offsetY;
// }

// Работаем с DOM
// let p = document.createElement('p');
// document.body.insertBefore(p, document.querySelector('#out'));
// p.innerHTML = 'Primer';
// p.classList.add('main', 'green');
// console.log(p);

// let div4 = document.getElementById('four4');
// // let p = div4.getElementsByTagName('p');
// // let div = document.getElementsByTagName('div');
// let p = document.getElementsByClassName('p');
// // div[2].style.color = 'red';
// // let div = document.querySelector('div');
// // let div = document.querySelectorAll('div p');
// // console.log(div);
// four4.style.background = 'red';
// let div = document.querySelector('div');
// // let child = div.childNodes;
// let child = div.children;
// console.log(child);

// let hyper = document.querySelector('a');
// console.log(hyper.parentElement.nextElementSibling);
// console.log(hyper.parentElement.previousElementSibling);

