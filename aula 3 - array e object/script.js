//O QUE SÃO VETORES OU ARRAYS

//COMO DECLARAR UM ARRAY
/*let array = ["string", 2, true];
console.log(array);*/

//PODE GUARDAR VARIOS TIPOS DE DADOS:
let array = ["string", 8, true,["array1"], ["array2"], ["array3"]];
/*console.log(array[5]);*/

//forEach
/*array.forEach(function(item, index){console.log(item, index)})*/

//Push
/*array.push("novo item");
console.log(array)*/

//Pop
/*array.pop();
console.log(array);*/

//shift 
/*array.shift();
console.log(array);*/

//unShift
/*array.unshift("novo item no inicio");
console.log(array);*/

//indexOf
/*console.log(array.indexOf(8));*/

//Splice
/*array.splice(0, 3);
console.log(array);*/

//Slice
/*let novoArray = array.slice(0, 3);
console.log(novoArray);*/

//OBJETOS

let object = {string: "allan", number: 4, boolean: true, array: ["array"], 
objectInterno: {objectInterno: "Objetão"}};

/*console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);*/

var {number, boolean, string} = object;
console.log(number, boolean, string);