//VARIABLES
const formulario = document.querySelector('#formulario');
const producto = document.querySelector('#producto');
const carrito = document.querySelector('#carrito');
let listaProductos = [];

//EVENTOS
//Agregar
formulario.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const valor = producto.value.toLowerCase().trim();
    agregarProducto(valor);
})


//Eliminar
//eliminarProducto();

//FUNCIONES

const validarInput = (valor) => {
    //comprobar que sean letras y pueden estar separadas por un espacio, 
    // no números, no símbolos,
    const regexp = /^[a-záéíóúüñÁÉÍÓÚÜÑ\s]+$/gi;
    if (regexp.test(valor)) {
        return true;
    } else {
        alert('Escribe el producto correctamente.');
        return false;
    }
}

const comprobarRepetido = (productosLocal, valor) => {
    //una variable para devolver un valor booleano fuera del forEach
    let encontrado = false;
    productosLocal.forEach((producto) => {
        if (producto.nombre === valor) {
            producto.cantidad++;
            console.log("iguales")
            console.log(producto.nombre);
            encontrado =  true;
        }
    });
    return encontrado;
}

//Creamos y pintamos la fila con el producto nuevo 
// (nombre, cantidad y el botón eliminar) o incrementamos el que existe
const pintarTabla = () => {

}


const agregarProducto = (valor) => {
    let valido = true;
    valido = validarInput(valor);
    if (valido === true) {
        //obtener productos
        //Busca el valor en localStorage; si no existe, devuelve null.
        //Si se devuelve null, se asigna un valor vacío [] para evitar errores.
        productosLocal = JSON.parse(localStorage.getItem('listaProductos')) || [];
        console.log(listaProductos);
        //Comprobamos si el producto está repetido
        let productoRepetido = comprobarRepetido(productosLocal, valor);

        if (productoRepetido === false) {
            productosLocal.push({ nombre: valor, cantidad: 1 });
        }
        //guardar productos:
        localStorage.setItem('listaProductos', JSON.stringify(productosLocal));
        pintarTabla();
    }
}



const eliminarProducto = () => {
    //al hacer clic, debe decrementar el contador de ese producto. 
    // Si el contador llega a cero, el producto debe eliminarse de la lista y del Local Storage.
}
