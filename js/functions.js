/* Agregamos los articulos al carrito */
const btnAgregar = document.querySelectorAll('.btn.btn-success')
let cantidadComprar = document.querySelector('#cantidadComprar')
let contador = 0
btnAgregar.forEach((btn) => {
  btn.addEventListener('click', () => {
    contador++;
    actualizarContador()
  })
});
const actualizarContador = () => {
  cantidadComprar.innerText = contador
};


/* Obtener ID del producto */
const obtenerID = document.querySelectorAll('.btn.btn-success');
obtenerID.forEach((boton) => {
    boton.addEventListener('click', () => {
        const idArticulo = parseInt(boton.id)

        /* Buscamos el precio del articulo */
        console.log(idArticulo)
    })
});
