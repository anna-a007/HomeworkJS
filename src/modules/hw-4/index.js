class Worker {
    constructor (name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary(){
        return this.rate*this.days
    }
}

const worker1 = new Worker('Ivan', 'Ivanov',10,31)

console.log(worker1.name);
console.log(worker1.surname);
console.log(worker1.rate);
console.log(worker1.days);
console.log(worker1.getSalary());


class MyString{
    constructor(){
    }

    reverse(str){
        return str.split('').reverse().join('') 
    };

    ucFirst(str){
        return str[0].toUpperCase() + str.substring(1)
    }

    ucWords(str){
        return str
        .split(' ') //разделяет строку на эл.массива
        .map((item) =>{
            return item[0].toUpperCase() + item.substring(1);
        })
        .join(' ');
    }

} 
const str = new MyString();
console.log(str.reverse('abcde'));
console.log(str.ucFirst('abcde'));
console.log(str.ucWords('abcde abcde abcde'));