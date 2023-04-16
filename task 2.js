
// Функция hasOwnProp проверяет, является ли свойство propName собственным
// свойством объекта obj, и возвращает true, если свойство является собственным,
// и false, если свойство не существует или унаследовано от прототипа объекта.
// В этом варианте использован метод hasOwnProperty(), который проверяет 
//только собственные свойства объекта, и не учитывает свойства, 
//унаследованные от его прототипа. Также изменено название функции 
//для большей ясности.

function hasOwnProp(obj, propName){
    return obj.hasOwnProperty(propName);
}

//тестирование

const obj = {prop1: 123, prop2: "hello"};

console.log(hasOwnProp(obj, "prop1")); // true
console.log(hasOwnProp(obj, "prop2")); // true
console.log(hasOwnProp(obj, "toString")); // false (унаследованный метод)
console.log(hasOwnProp(obj, "prop3")); // false (свойства не существует)


