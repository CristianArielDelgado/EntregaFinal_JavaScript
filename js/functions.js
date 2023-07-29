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



/* Función para encontrar el precio del artículo */
const precioArticulo = (id) => {
  const articuloEncontrado = articulosJSON.find((articulo) => articulo.id === idArt);

  if (articuloEncontrado) {
      console.log("Precio del artículo:", articuloEncontrado.precio);
  } else {
      console.log("Artículo no encontrado.");
  }
};

