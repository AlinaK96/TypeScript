// когда нужно менять массивы из разных типов, которые мы не знаем в данныйс момент

function Reverse <T>(array: T[]): T[]{
    return array.reverse()
}