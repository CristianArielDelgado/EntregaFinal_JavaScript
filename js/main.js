/* DECLARACION DE VARIABLES */
let carritoLS = localStorage.getItem("carrito")
carritoLS = JSON.parse(carritoLS)
const contenedorProductos = document.querySelector(".main__container-articulos_cards")

cargarProductos()

let contador = 0
let carrito = []
const btnAgregar = document.querySelectorAll('.btn.btn-success')
let cantidadComprar = document.querySelector('#cantidadComprar')
const productoElegido = document.getElementsByClassName("card")
const btnVaciarCarrito = document.getElementById('btn-vaciar-carrito')


/* FIN DECLARACION DE VARIABLES */

/* Funcion que carga los productos al HTML*/
function cargarProductos() {
  productos.forEach(producto => {
    const article = document.createElement("article")
    article.classList.add("card")
    article.innerHTML = `
    <div class="card__header">
      <small class="card__descuentos">${producto.descuento}</small>
      <img src="${producto.imagen}" alt="${producto.articulo}">
    </div>
    <h2>${producto.articulo} <span class="bold color">$${producto.precio}</span></h2>
      <button  type="button" class="btn btn-success" id="${producto.id}">Agregar al carrito</button>
    </article>
    `
    contenedorProductos.append(article)
  })
}


/* Funcion que agrega los productos al carrito */
for (let i=0; i<productoElegido.length; i++){
    productoElegido[i].addEventListener('click', (e) =>{
        if(e.target.classList.contains('btn')){
            validarProducto(e.target.id)
        }
        guardarCarritoEnLocalStorage()
    })
}


/* Funcion que valida si el producto esta repetido para sumarlo */
const validarProducto = (id) => {
  const estaRepetido = carrito.some(producto => producto.id == id)
  if (!estaRepetido) {
      const producto = productos.find(producto => producto.id == id)
      producto.cantidad = 1
      producto.precioTotal = producto.precioBase
      carrito.push(producto)
      mostrarProductoCarrito(producto)
  } else {
      // Si el producto está repetido, actualiza cantidad y precioTotal
      const producto = carrito.find(producto => producto.id == id)
      producto.cantidad++
      producto.precioTotal = producto.precioBase * producto.cantidad

      const cantidad = document.getElementById(`cantidad${producto.id}`)
      const precio = document.getElementById(`precio${producto.id}`)
      cantidad.innerText = `Cantidad: ${producto.cantidad}`
      precio.innerText = `$ ${producto.precioTotal}\t\t`
  }
  actualizarPrecioTotal()
  guardarCarritoEnLocalStorage()
}

/* Funcion que muestra el producto en el carrito */
const mostrarProductoCarrito = (producto) =>{
    const contenedor = document.getElementById('carrito-contenedor')
    const div = document.createElement('div')
    producto.precioBase = producto.precio
    div.classList.add('productoEnCarrito')

    div.innerHTML=`
    <p style="white-space: pre"> ${producto.articulo}\t\t</p>
    <p style="white-space: pre" id=precio${producto.id}>$ ${producto.precio}\t\t</p>
    <p style="white-space: pre">Descuento: ${producto.descuento}\t\t  </p>
    <p style="white-space: pre" id=cantidad${producto.id}>Cantidad: ${producto.cantidad}\t\t</p>
    `
    contenedor.append(div)
}

/* Funcion que cambia el numero del carrito en HTML */
btnAgregar.forEach((btn) => {
  btn.addEventListener('click', () => {
    contador++
    actualizarContador()
    guardarCarritoEnLocalStorage()
  })
})
const actualizarContador = () => {
  cantidadComprar.innerText = contador
}

/* Calculamos el total a pagar */
const calcularPrecioTotal = () => {
    let totalPagar = 0
    for (let i = 0; i < carrito.length; i++) {
      totalPagar += carrito[i].precioBase * carrito[i].cantidad
    }
    return totalPagar
}

/* Funcion para vaciar el carrito */
btnVaciarCarrito.addEventListener('click', () => {
    vaciarCarrito()
    guardarCarritoEnLocalStorage()
})
const vaciarCarrito = () => {
  carrito.forEach(producto => {
      producto.cantidad = 1
      producto.precio = producto.precioBase // Restaurar el precio original del producto
  })
  carrito = []
  const contenedorCarrito = document.getElementById('carrito-contenedor')
  contenedorCarrito.innerHTML = ''
  actualizarPrecioTotal()
  contador = 0
  actualizarContador()
  guardarCarritoEnLocalStorage()
}

// Función para actualizar el precio total a pagar
const actualizarPrecioTotal = () => {
    const precioTotalCarrito = calcularPrecioTotal()
    const precioTotalElemento = document.getElementById('precioTotal')
    precioTotalElemento.innerText = `${precioTotalCarrito}`
}

// Funcion para almacernar el carrito en el localstorage
const guardarCarritoEnLocalStorage = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito))
}