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
