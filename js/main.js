document.addEventListener('DOMContentLoaded', () => {

    //VARIABLES
    const formulario = document.querySelector('#formulario');
    const producto = document.querySelector('#producto');
    const carrito = document.querySelector('#carrito');
    const botonEliminar = document.querySelectorAll('.eliminar');

    cargarProductos();

    //EVENTOS
    //Agregar producto
    formulario.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const valor = producto.value.toLowerCase().trim();
        agregarProducto(valor);
    })

    //Eliminar producto
    document.addEventListener('click', (ev) => {
        let botonClicado = ev.target;
        if (botonClicado.matches('.eliminar')) {
            eliminarProducto(botonClicado);
        }
    })

    //FUNCIONES

    //cargar los productos del locaStorage al cargar la página
    //esta declarada con "function" para poder llamarla antes del declarar
    function cargarProductos() {
        let listaProductos = JSON.parse(localStorage.getItem('productosLocal')) || [];
        //limpiar el carrito antes de recargar los productos
        carrito.innerHTML = '';
        listaProductos.forEach((producto) => {
            pintarFila(producto);
        });
    };

    const validarInput = (valor) => {
        //comprobar que sean letras
        const regexp = /^[a-záéíóúüñÁÉÍÓÚÜÑ]+$/gi;
        if (regexp.test(valor)) {
            return true;
        } else {
            alert('Escribe el producto correctamente.');
            return false;
        }
    }

    const agregarProducto = (valor) => {
        let valido = true;
        valido = validarInput(valor);
        if (valido === true) {
            //obtener productos
            //Busca el valor en localStorage; si no existe, devuelve null.
            //Si se devuelve null, se asigna un valor vacío [] para evitar errores.
            let listaProductos = JSON.parse(localStorage.getItem('productosLocal')) || [];

            //Comprobamos si el producto está repetido
            const productoExiste = listaProductos.find((prod) => prod.nombre === valor);
            if (productoExiste) {
                productoExiste.cantidad++;
                actualizarCantidad(valor, productoExiste.cantidad);
            } else {
                const nuevoProducto = { nombre: valor, cantidad: 1 }
                listaProductos.push(nuevoProducto);
                pintarFila(nuevoProducto);
            }
            //guardar productos:
            localStorage.setItem('productosLocal', JSON.stringify(listaProductos));
        }
    }

    //Creamos y pintamos la fila con el producto nuevo 
    // (nombre, cantidad y el botón eliminar) o incrementamos el que existe
    //esta declarada con "function" para poder llamarla antes del declarar
    function pintarFila(productoNuevo) {

        const filaElemento = document.createElement('TR');
        const nombreProducto = document.createElement('TD');
        const cantidadProducto = document.createElement('TD');
        const btnProducto = document.createElement('TD');
        const btnEliminar = document.createElement('BUTTON');

        nombreProducto.textContent = productoNuevo.nombre;
        cantidadProducto.textContent = productoNuevo.cantidad;
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('btn', 'eliminar');

        btnProducto.append(btnEliminar);
        filaElemento.append(nombreProducto);
        filaElemento.append(cantidadProducto);
        filaElemento.append(btnProducto);

        carrito.append(filaElemento);
    }

    const actualizarCantidad = (nombre, cantidadNueva) => {
        const filas = carrito.querySelectorAll('tr');
        filas.forEach((fila) => {
            if (fila.children[0].textContent === nombre) {
                fila.children[1].textContent = cantidadNueva;
            }
        })
    }

    //al hacer clic, debe decrementar el contador de ese producto. 
    // Si el contador llega a cero, el producto debe eliminarse de la lista y del Local Storage.
    const eliminarProducto = (botonClicado) => {
        //obtener la fila-padre que contiene el botón:
        const fila = botonClicado.closest('tr');
        const nombreProducto = fila.children[0].textContent;

        let listaProductos = JSON.parse(localStorage.getItem('productosLocal')) || [];
        const productoAEliminar = listaProductos.find((producto) => producto.nombre === nombreProducto)
        productoAEliminar.cantidad--;
        if (productoAEliminar.cantidad > 1) {
            fila.children[1].textContent = productoAEliminar.cantidad;
        } else {
            //filtramos y eliminamos de la lista el producto del botón clicado.
            listaProductos = listaProductos.filter((producto) => producto.nombre !== nombreProducto);
            carrito.removeChild(fila);
        }
        localStorage.setItem('productosLocal', JSON.stringify(listaProductos));
    }

});
