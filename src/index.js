// Треугольник
let k = ' ';
for (let i = 0; i < 7; i++){
    k += '#'
    console.log(k);  
}

// Шахм.доска
// let k1 = "# # # # ";
// let k2 = " # # # #";
//     for(let i = 0; i <4 ;i++){
//     console.log(k1);
//     console.log(k2);
// }

// Шахм.доска
let b =  '';
for( let i=0; i<=8; i++){
    for(k=1; k<=8; k++){
        if ((i+k)%2 ==0){
            b+= '#';                //если четное
        }
        else{
            b += ' '                //если нечетное
        }
    }
    b +='\n';
  }

  console.log(b);

//-------------------------------Анкета----------------------------//
let lastname;
do {lastname = prompt('Ваша фамилия?')}
while (lastname.length === 0 || lastname === ' ');

let firstname;
do {firstname = prompt('Ваше имя?')}
while (firstname.length === 0 || firstname === ' ');

let patronymic;
do {patronymic = prompt('Ваше отчество?')}
while (patronymic.length === 0 || patronymic === ' ');

let age;
do {age = Number(prompt('Ваш возраст?'))}
while (!age);


let gender = confirm('Ваш пол - мужской?');
gender = (gender) ? 'мужской' : 'женский';
let pension = (age >= 60) ? 'да' : 'нет';

alert(
    `Ваше ФИО: ${lastname} ${firstname} ${patronymic} `+'\n' +
    `Ваш возраст в годах: ${age}`+'\n' +
    `Ваш возраст в днях: ${age * 365}` + '\n' +
    `Через 5 лет вам будет: ${age + 5}` + '\n' +
    `Ваш пол: ${gender}` + '\n' +
    `Вы на пенсии: ${pension}`+ '\n' 
);