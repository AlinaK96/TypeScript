// tsc types.ts
//node types.js

const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2

const message: string = 'Hello'

//массивы из чисел и строк
const numberArray: number[] = [1,1,2,3,5,8,13]
const numberArray2: Array<number> =  [1,1,2,3,5,8,13]
//все элементы массива должны быть одного типа данных (number)

const stringArray: Array<string> = ['Hello', 'Hi', 'HoHoho']

//Tuple - массив из разных типов данных
const contact: [string, number] = ['Alina', 2014573452]

//переопределение типа данных 
//Any

let variable:any = 42
variable = 'new string'

//функции
//когда мы ничего не возращаем в нашем методе, нам необходимо указать void чтобы единственным возможным выходным значением было undefined
//function имя(параметр: тип, параметр: тип, ...): тип выходного значения {} - 
//должны задать тип параметрам, которые принимаем и которые функция возвращает
function SayMyName(name:string):void {
    console.log(name);
    
}

//Never - функция возвращает ошибку или постоянно что-то делает 
//тип never вообще не разрешает помещать в себя значения. Это полезно, 
//когда метод один раз запустится и не завершится до окончания выполнения программы или если метод прерывает обычный флоу (кидает ошибку):


function ThrowError (message: string): never{
    throw new Error('error');
}

//unknown 
//неизвестный тип переменной, у которой нет свойств и методов 
//Когда дело касается чего-то неизвестного, что нужно только проверить только на существовование, то нужно использовать unknown:



//Type
//Aliases
// создаём своё тип
type Login = string

const login: Login = 'admin'

type ID = string | number //два варианта типа

const id1: ID = 5165
const id2: ID = 'Alina'

//null
//undefined