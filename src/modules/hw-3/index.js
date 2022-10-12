//========================1==================================
// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// let veg = ['sfsf', 'fggsfg', 'sgsggg', 'Морковка'];


// let copyArr = (array) =>{
//     return array.slice()
// }
// console.log(copyArr(vegetables))
//===========================================================


//========================2==================================
// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// let str = (arr) =>{
//     return arr.join()
// }

// let str2 = (arr) =>{
//     return arr.toString()
// }
// console.log(str(vegetables))
// console.log(str2(vegetables))
//===========================================================


//========================4==================================
// let txt = prompt('Введите слово')
// function changeRegister(str) {
//     return str.split('')
//     .map(item => item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase()).join('');
// }
// console.log(changeRegister(txt));
//===========================================================


//========================5==================================
// let arr = ["php", "php", "css", "css","script", "script", "html", "html", "java"];

// let removeDuplicates = (arr) =>{
//     const tempArr = [];
//     arr.forEach((item) => {
//         if(!tempArr.includes(item)){
//             tempArr.push(item);
//         }
//     });
//     return tempArr;
// };

// console.log(removeDuplicates(arr))
//=============================================================


//??========================7==================================
// let arr = [3,3,7,7,3,3,4,5,5,8,8,8]
// let arr2 = [15,14,13,19,13,14,14,14,7,9,9]
// const countIdentic1 = (array) => {
//     let check = [];
//     let res = array.reduce((acc, item) => {
//         if (check.includes(item)) {
//             acc += 1;
//         } else {
//             check.push(item);
//         }
//         return acc;
//     }, 0);

//     return res;
// };

// console.log(countIdentic1(arr));



//========================8==================================
// let numbers = [3,8,7,6,5,-4,3,2,1]

// const compareNumbers = (arr) =>{
//     return arr.slice().sort((a,b)=>b-a)  
// };
// console.log(compareNumbers(numbers))
//===========================================================


//========================9==================================
// let litmir = [
//     {
//         author:'Хэленка',
//         title:'Улетела сказка'
//     },

//     {
//         author:'Коул Кресли',
//         title:'Восстание Аркан'
//     },

//     {
//         author:'Райчел Мид',
//         title:'Золотая лилия'
//     },
// ]
// let totalTitle = litmir
// .map((item) => {
//     return item.title
// })
//console.log(totalTitle.sort().join(', '))
//=========================================================


//========================10==================================
// let litmir = [{
//     author: 'Хэленка',
//     title: 'Улетела сказка'
//   },
//   {
//     author: 'Коул Кресли',
//     title: 'Восстание Аркан'
//   },
//   {
//     author: 'Райчел Мид',
//     title: 'Золотая лилия'
//   }
// ];

// function propertyValue(array, key) {
//   return array.map((item) => item[key]);
// }

// console.log(propertyValue(litmir, 'title'));
// console.log(propertyValue(litmir, 'author'));