

const form  = document.querySelector("#form");
//const input = document.querySelector("#Nombre_Producto");
const evento = 'submit';
/*input.addEventListener('change', validacion);
function validacion(){

    if (input.value.length < 3) {
		input.classList.add('is-invalid');
		input.classList.remove('is-valid');
		
	} else {
		input.classList.remove('is-invalid');
		input.classList.add('is-valid');
		
	}
}*/
form.addEventListener(evento, recogerDatos);
function recogerDatos(e){
    e.preventDefault();
  
	
    const nombre= document.querySelector("#Nombre_Producto").value;
    const codi= document.querySelector("#Codigo").value;
    const precio= document.querySelector("#Precio").value;
    
    let suma= parseFloat(precio) * 1.21;
  

let productos=[];

let mostrarProductos = document.querySelector("#productos");

mostrarProductos.innerHTML +=`
    <div>
    <h3> ${nombre}</h3> 
    <p>Cod: ${codi}</p>
    <p>Precio + Iva: $${suma}</p>
    </div><br>
    `

for(i=0; i<productos.length; i++){
   const element = productos[i];
   mostrarProductos+= element + " ";
    
}
}

