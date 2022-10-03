//сумма всех элементов массива 

let arr = [ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8];


function sumTree(array){
    let sum = 0;
    array.forEach((item) =>{
        sum += Array.isArray(item) ?
        sumTree(item) : item;
    });
    return sum;
}
console.log(sumTree(arr));

