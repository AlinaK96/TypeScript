function Add(a, b) {
    return a + b;
}
function Position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty:', Position());
console.log('1:', Position(42));
console.log('2:', Position(42, 35));
