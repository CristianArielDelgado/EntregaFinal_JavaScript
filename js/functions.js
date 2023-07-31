/* DECLARACION DE VARIABLES */
const contenedorProductos = document.querySelector(".main__container-articulos_cards");


/* Fin declaracion de las variables

/* Inicio llamado a las funciones */
cargarProductos()
/* Fin llamado a las funciones */






/* Funcion que carga los productos */
function cargarProductos() {
  productos.forEach(producto => {
    const article = document.createElement("article");
    article.classList.add("card");
    article.innerHTML = `
    <div class="card__header">
      <small class="card__descuentos">${producto.descuento}</small>
      <img src="${producto.imagen}" alt="${producto.articulo}">
    </div>
    <h2>${producto.articulo} <span class="bold color">$${producto.precio}</span></h2>
      <button  type="button" class="btn btn-success" id="${producto.id}">Agregar al carrito</button>
    </article>
    `;
    contenedorProductos.append(article);
  })
}









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
