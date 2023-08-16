// tsc types.ts
//node types.js
var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var message = 'Hello';
//массивы из чисел и строк
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
//все элементы массива должны быть одного типа данных (number)
var stringArray = ['Hello', 'Hi', 'HoHoho'];
//Tuple - массив из разных типов данных
var contact = ['Alina', 2014573452];
//переопределение типа данных 
//Any
var variable = 42;
variable = 'new string';
//функции
//void - функция ничего не вернёт
function sayMyName(name) {
    console.log(name);
}
//Never - функция возвращает ошибку или постоянно что-то делает 
function throwError(message) {
    throw new Error('error');
}
var login = 'admin';
var id1 = 5165;
var id2 = 'Alina';
//null
//undefined
