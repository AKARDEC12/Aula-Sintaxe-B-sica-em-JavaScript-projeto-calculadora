/*var time1 = -1;
var time2 = 0;
var placar;

time1 != -1 && time2 != -1 ? console.log("Times são válidos") :
console.log("Times são inválidos");
    
// usando if
if (time1 > 0 && time2 == 0){
    console.log("Time 1 marcou ponto!");
    placar = time1 > time2;
    
// usando else if
} else if(time2 > 0 && time1 == 0){
    console.log("Time 2 marcou ponto!");
    placar = time2 > time1;
    
//usando else
} else{
    console.log("Ninguem marcou");
}

switch (placar) {
    case placar = time1 > time2 :
        console.log("Time 1 ganhou");
        break;
    case placar = time2 > time1 :
        console.log("Time 2 ganhou!");
        break;
    default:
        console.log("Ninguem ganhou!");
}
*/

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3',};

//FOR = EXECUTA UMA INSTRUÇÃO ATÉ QUE ELA SEJA FALSA

/*for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}*/

// FOR/IN EXECUTA UMA REPETIÇÃO A PARTIR DE UMA PROPRIEDADE

// com array
/*for (let i in array){
    console.log(i);
}

// com object
for(i in object){
    console.log(i);
}*/

//FOR/OF EXECUTA REPETIÇÃO A PARTIR DE UM VALOR
//com array

/*for(i of array){
    console.log(i);
}
//com object

for(i of object.propriedade2){
    console.log(i);
}*/


var a = 0;
//WHILE
/*while (a < 10){
    a++;
    console.log(a);
}*/

//DO WHILE
do{
    a++;
    console.log(a);
} while (a < 10);