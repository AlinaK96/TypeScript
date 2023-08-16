// позволяет структурировать код с однотипными элементами

enum Membership {
    Basic, Standart, Premium // перечисление может быть объединено вместе с классом или интерфейсом
}

const membership = Membership.Standart // вернёт 1 - т.е. индексе
const membershipReverse = Membership[2] //вернёт строчку "Премиум"

enum SocialMedia {
    VK = 'VK',
    YouTube = 'Youtube'
} // такой метож аписи позволяет получить значение не делая реверс 