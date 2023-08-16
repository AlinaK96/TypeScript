// вспомогательные конструкции для типов

function strip (x: string | number){
    if (typeof x === 'number'){
        return x.toFixed(2)
    }

    return x.trim()
}

// indtance of проверяет принадлежность обьекта к классу

class MyResponse {
    header: 'Response header'
    result : 'Response result'
}

class MyErrror{
    header: 'error header'
    message: 'error message'
}

function Handle(res: MyErrror | MyResponse){
    // если res - экземпляр класса Response, то выводим его поле result
    if (res instanceof MyResponse){
        return {
            info: res.header + res.result
        }
    } else {
        info: res.header + res.message
    }
}

//

type AlertTtype = 'success'| 'danger' | 'warning'
function SetAlertType (type:AlertTtype){
}

SetAlertType('success')
SetAlertType('warning')
//SetAlertType('default ') - ошибка т.к. такого свойства не существует 