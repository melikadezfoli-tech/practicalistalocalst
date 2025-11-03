//VARIABLES
const formulario = document.querySelector('#formulario');
const producto = document.querySelector('#producto');
const carrito = document.querySelector('#carrito');
const listaProductos = [];
// const listaProductos = ['boligrafo','lápiz','libreta','goma','sacapuntas','grapadora'];


//EVENTOS
//Agregar
formulario.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const valor = producto.value;
    agregarProducto(valor);
})


//Eliminar
//eliminarProducto();

//FUNCIONES


// const validar = (input) => {
    

//     return (true/false)
// }
const agregarProducto = (valor) => {
        console.log(producto.value);
    //recibir
    //validar(input);
    // to local
    //Si válido - pasamos y guardamos en localStorage {nombre, cantidad}
    //Si un producto ya existe, su contador se incrementa en lugar de duplicarlo.
    //Creamos y pintamos la fila con el producto nuevo (nombre, cantidad y el botón eliminar)o incrementamos el que existe
}

const eliminarProducto = () => {
    //al hacer clic, debe decrementar el contador de ese producto. 
// Si el contador llega a cero, el producto debe eliminarse de la lista y del Local Storage.
}

/**ALMACENAR EN LOCAL */