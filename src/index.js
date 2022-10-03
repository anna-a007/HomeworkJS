let arr = [ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8];

let sum = 0;

function sumTree(array){
    array.forEach((item) =>{
        Array.isArray(item) ? sumTree(item) : sum +=item;
    });
    return sum;
}
console.log(sumTree(arr));
