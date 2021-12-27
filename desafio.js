



// DESAFIO "**** 12. jQuery: selectores y eventos ****"
$("MisProductos").append('<button id="btn"> boton ejercicio</button>');

const tiendas = [];

class tienda{
    constructor(nombre, precio){
        this.id = tiendas.length;
        this.nombre = nombre.toUpperCase();
        this.precio = Number(precio);
    }

    mostrar(){
        return `El Producto: ${this.nombre}, Tiene un valor de: $ ${this.precio}`;
    } 
}

tiendas.push(new tienda("Monitor 27 samsung", '25000'));
tiendas.push(new tienda("Monitor  Gamer Asus LED 27'", '25000'));
tiendas.push(new tienda("Monitor Gamer LG LED 25'", '53800'));
tiendas.push(new tienda("CPU armada AMD A6 7480", '48000'));

function seleccion(id){

    let innerSelect = '';
    tiendas.forEach(producto => innerSelect += `<option value='${producto.id}'>${producto.nombre}</option>` )

    return `<select  id="${id}">${innerSelect}</select>`;
}

$('body').append(seleccion('ElegirProducto'));
$('#ElegirProducto').change(function (e){
    e.preventDefault();

    const seleccionar = tiendas.find(elemento => elemento.id == e.target.value);

    $("body").append(`<h3>${seleccionar.mostrar()}</h3>`)
});