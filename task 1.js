
// Функция logObjProps принимает объект obj в качестве параметра 
//и выводит в консоль имена и значения его свойств, если свойство 
//является прямым свойством объекта (а не унаследованным из его прототипа).


function logObjProps(obj){
    for (let propName in obj){
        if(obj.hasOwnProperty(propName)){
            console.log(propName, obj[propName]);
        }
    }
}

logObjProps("test");