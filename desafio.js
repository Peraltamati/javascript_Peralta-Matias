

/*var nombre= prompt("Hola, Como te llamas");
var edad= prompt("¿que edad tenes?");

alert("Hola "+nombre+". Tenes: "+edad+"años");

alert("Vamos a calcular el area de un triangulo te pedire los siguientes datos...");

var base= prompt("Introduce la Base del triagulo: ");
var altura= prompt("Introduce la altura del triangulo");

var area;

area=(base*altura)/2;

alert("El area del triangulo es: "+area+" cm²");*/

/*let numero= prompt("Ingrese un numero entero determinar si es par o impar: ");

if(numero % 2 == 0 ){

    alert("El numero " +numero+ " es par");


}else {
    alert("El numero " +numero+ " es impar");
}

let edad = prompt("Ingrese su edad para saber a que categoria compite: ");

if(edad >=12 && edad <=14){
    alert("Estas en la categoria Infantil");
}else if(edad >14 && edad<=16 ){
    alert("Estas en la categoria Cadetes");
}else if(edad >16 && edad<=18){
    alert("Estas en la categoria Juveniles");
}else if(edad >18 && edad<=20){
    alert("Estas en la categoria Junior");
}else if(edad >20 && edad<=30){
    alert("Estas en la categoria Mayores");
}else{
    alert("No tenes la edad requerida para competir");
}*/

let cant= prompt("Ingrese la cantidad de notas del alumno");

let promedio=0;
let suma=0;
for (i=1;i<=cant;i++){//inicie con i=1 cuando en realidad es i=0 y puse "<=" para que cuando inicie diga nota 1, nota 2... y no diga nota 0, nota 1...
notas=prompt("Ingrese la nota "+i, "");
notas=parseInt(notas);

suma=suma+notas;

}
promedio=(suma)/cant;
alert("El promedio del alumno es: "+promedio);








