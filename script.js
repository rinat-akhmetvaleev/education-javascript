// подьезд 1: 1-10кв
// подьезд 2: 11-20кв
// подьезд 3: 21-30кв


// let pod1 = [1,2,3,4,5,6,7,8,9,10];
// let pod2 = [11,12,13,14,15,16,17,18,19,20];// подьезд 1: 1-10кв
// подьезд 2: 11-20кв
// подьезд 3: 21-30кв


// let pod1 = [1,2,3,4,5,6,7,8,9,10];
// let pod2 = [11,12,13,14,15,16,17,18,19,20];
// let pod3 = [21,22,23,24,25,26,27,28,29,30];
// let kv = 5;
//
// if(kv == pod1){
//     console.log("Подъезд 1");
// } else if (kv == pod2){
//     console.log("Подъезд 2");
// } else if (kv == pod3){
//     console.log("Подъезд 3");
// } else{
//     console.log("Нет таких данных!");
// }

// let kv = 45;

// if(kv >= 1 && kv <= 10){
//     console.log("Подъезд 1");
// } else if (kv >= 11 && kv <= 20){
//     console.log("Подъезд 2");
// } else if (kv >= 21 && kv <= 30){
//     console.log("Подъезд 3");
// } else{
//     console.log("Нет таких данных!");
// }
// function snow(a,b){
//     //
//     a = a || 10;
//     b = b || 20;
//     return (a+b);
// }
// console.log(snow(13,14));

// let el = document.querySelectorALL('.pr');
// console.log(el);
// el.innerHTML = '<b>777</b>';
// el.innerText = '<b>777</b>';




// Неоходимо создать в HTML input(в котором вводится год рождения)
// и создать div с классом куда будет выводиться результат
// 2021 - число вводимое в input.

// Попытка 1
// function take(){
//     document.querySelectorAll('input');
//     console.log(take());
// }
// function btn(){
//     document.querySelector('button');
//     btn.onclick = function (match){
//         if(btn>0){
//             take() - 2021 = return;
//         }
//     }
// }
//
// take();


// Попытка 2
// Найдена в интернете и попытка подгона под мои требования
// let year = 2021;
// const birthYear = document.querySelector('input').value;
// const btn = document.querySelector('button');
// let matc = year - birthYear;
//
//
// btn.onclick = function(){
//
//     if(matc > 0){
//         return document.querySelector('.pr').innerHTML="Ваш возраст: "+ matc;
//     } else {
//         console.log('None');
//     }
// }

// Попытка 3
// Метод с анонимной фукций

const year = 2021;
const btn = document.querySelector('button');

btn.onclick = function(){
    let birthYear = document.querySelector('.birthYear').value;
    let matc = year - birthYear;
    if(matc > 0){
        return document.querySelector('.pr').innerHTML=`Ваш возраст: <b>${+ matc}</b>лет`;
    } else {
        console.log('None');
    }
}



//Попытка 4
// Метод через именную функцию

const year = 2021;
const btn = document.querySelector('button');

function ageCalc(){
    let birthYear = document.querySelector('.birthYear').value;
    let matc = year - birthYear;
    
    if(matc > 0){
        return document.querySelector('.pr').innerHTML=`Ваш возраст: <b>${+ matc}</b>лет`;
    } else {
        console.log('None');
    }
}
btn.onclick = ageCalc;






// Если переменная a равна 10,
// то выведите 'Верно', иначе выведите 'Неверно'.
//

let a = 10;
if(a == 10){
    console.log('Верно');
} else {
    console.log('Неверно');
}


// В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает это число
// (в первую, вторую, третью или четвертую).
//

let min = 5;

if(min>0 && min<=15){
    console.log('Первая четверь часа');
}else if(min>=16 && min<=30){
    console.log('Вторая четверь часа');
}else if(min>=31 && min<=45){
    console.log('Третья четверь часа');
}else if(min>=46 && min<=59){
    console.log('Четвертая четверь часа');
}


// Переменная lang может принимать 2 значения:
// 'ru' 'en'. Если она имеет значение 'ru',
// то в переменную arr запишем массив дней недели на русском языке,
// а если имеет значение 'en' – то на английском.

let lang = "en";
let arr;

if(lang == "ru"){
    arr = [
        "Понедельник", 
        "Вторник", 
        "Среда", 
        "Четверг", 
        "Пятница", 
        "Суббота", 
        "Восскресенье"
    ];
} else if(lang == "en"){
    arr = [
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday", 
        "Sunday"
    ];
}
console.log(arr);
