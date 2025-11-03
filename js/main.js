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
    const valor = producto.value.toLowerCase().trim();
    agregarProducto(valor);
})


//Eliminar
//eliminarProducto();

//FUNCIONES

const validar = (valor) => {
    const regexp = /^[a-záéíóúüñÁÉÍÓÚÜÑ]+$/gi;
    //comprobar que sean letras, no números, no símbolos, + espacio entre palabras?
    if (regexp.test(valor)){
        console.log(true);
        return true;
    } else {
        alert('Escribe el producto correctamente.');
        console.log(false);
        return false;
    }
}

const agregarProducto = (valor) => {
    let valido = true;
    valido = validar(valor);
    if (valido === true) {

        const productoCarro = {nombre: `${valor}`, cantidad: `${1}`};
        listaProductos = JSON.parse(localStorage.getItem(productoCarro)) || []
        productoCarro.forEach(() => {
        })
    }
    }
        localStorage.setItem('productoCarro', JSON.stringify(productoCarro));
        console.log(productoCarro)
        // to local
    //Si válido - pasamos y guardamos en localStorage {nombre, cantidad}
//     Pintar {

    //Si un producto ya existe, su contador se incrementa en lugar de duplicarlo.
    //Creamos y pintamos la fila con el producto nuevo (nombre, cantidad y el botón eliminar)o incrementamos el que existe


const eliminarProducto = () => {
    //al hacer clic, debe decrementar el contador de ese producto. 
// Si el contador llega a cero, el producto debe eliminarse de la lista y del Local Storage.
}

/**ALMACENAR EN LOCAL */