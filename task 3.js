//Создаем новый объект myObj с помощью функции createEmptyObject. 
//Затем объекту myObj добавляются два новых свойства. 
//В конце выводится значение свойств prop1 и prop2, 
//а также проверяется, что прототип объекта myObj действительно равен null.

function createEmptyObject() {
    return Object.create(null);
  }

const myObj = createEmptyObject();
myObj.prop1 = "hello";
myObj.prop2 = 123;

console.log(myObj.prop1); // "hello"
console.log(myObj.prop2); // 123
console.log(Object.getPrototypeOf(myObj)); // null



