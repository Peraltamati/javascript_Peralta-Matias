

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




/*

//DESAFIO FUNCIONES  Simulador interactivo !!!
alert("INICIO DE Simulador interactivo");

    function operando(){ 
    let cant= prompt("Ingrese la cantidad de notas del alumno");

    let prom=0;
    let suma=0;
    for (i=1;i<=cant;i++){//inicie con i=1 cuando en realidad es i=0 y puse "<=" para que cuando inicie diga nota 1, nota 2... y no diga nota 0, nota 1...
    notas=prompt("Ingrese la nota "+i, "");
    notas=parseInt(notas);
    
    suma=suma+notas;
    
    }
    prom=(suma)/cant;
    alert("El promedio del alumno es: "+prom);

}
operando();
alert("FIN DE Simulador interactivo");


alert("INICIO DE DESAFIO COMPLEMENTARIO");

// DESAFIO COMPLEMENTARIO!!!

function operaciones(){
    let n= prompt("Ingrese la cantidad de numeros que va a ingresar");
    let porcentaje=0.50;
    let iva=0.16;
    let suma=0;
    
    for(i=0; i<n; i++){
        nume=prompt("Ingrese el numero: ");
        nume=parseInt(nume);
        suma=suma+nume;

    }
    if(suma>100){
                
        porcentaje=suma*porcentaje;
        alert(`El porcentaje de la suma mayor a 100 es : ${porcentaje}`);
    }else if(suma<100){
        iva=suma*iva;
        alert(`El iva de la suma menor a 100 es : ${iva}`);
    }else{
        alert("datos mal ingresados");
    }
    
}
operaciones();



function op(){
    let cantidad= prompt("Ingrese la cantidad de numeros que va a ingresar para saber si es par o impar");
    let porc=0.37;
    let iv=0.16;
    let suma=0;
  
    for(i=0;i<cantidad;i++){
        num=prompt("Ingrese el numero: ");
        num=parseInt(num);
       suma=suma+num;

    }
    if(suma % 2 == 0){
                
        porc=suma*porc;
        alert(`El porcentaje de la suma de numeros par es : ${porc}`);
    }else if(suma % 2 !==0){
        
        iv=suma*iv;
        alert(`El el iva de la suma de numeros impar es : ${iv}`);
    }else{
        alert("datos mal ingresados");
    }
    
}

op();
*/
//--------------------------*******ARRAY********---------------------------
//ARRAY!!!
 let productoss=[];
class Pro{
    constructor(nombre, codigo, precio){
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
}
sumaIva() {
    this.precio = this.precio * 1.21;
}
mostrarDatos(){
    
		console.log(`Nombre del producto: ${this.nombre} codigo: ${this.codigo} precio + iva: ${this.precio}`);
	
}


}
 let cantidad= prompt("Ingrese la cantidad de productos que va a ingresar");
 for(i=0; i<cantidad; i++){

    let nom= prompt("nombre del producto: ");
    nom=String(nom);
    cod= prompt("codigo del producto: ");
    cod=parseInt(cod);
     pre= prompt("precio: ");
     pre=parseFloat(pre);
     const producto1 = new Pro(nom,cod, pre);
     producto1.sumaIva();
     console.log(productoss=[producto1]);
}





