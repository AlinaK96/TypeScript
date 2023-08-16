function Add (a: number, b: number): number {
    return a + b
}

//перезагрузка функции - вызов функции с разными параметрами и получение разных значений 

interface IPosition {
    x: number | undefined,
    y : number | undefined
}

interface IPositionWithDefault extends IPosition{
    default: string
}

function Position (): IPosition
function Position (a:number): IPositionWithDefault
function Position (a: number, b: number): IPosition

function Position (a?: number, b?: number) {
    if (!a && !b){
        return {x:undefined, y: undefined}
    }

    if (a && !b){
        return {x:a, y: undefined, default: a.toString()}
    }

    return {x:a, y:b}
}

console.log('Empty:', Position());
console.log('1:', Position(42));
console.log('2:', Position(42,35));
