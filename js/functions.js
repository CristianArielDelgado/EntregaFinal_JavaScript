// Funcion que le da la bienvenida al usuario, para chequear si se introduce o no.
// const bienvenidaUsuario = () =>{
//     let nombreUsuario;
//     do {
//         nombreUsuario = prompt('Ingrese su nombre para continuar');
//     } while (nombreUsuario==null || nombreUsuario.length <=2);
//     const nombre = document.querySelector('.nombreUsuario');
//     nombre.innerHTML = `${nombreUsuario}`
// }


/* Agregamos los articulos al carrito */
const btnAgregar = document.querySelectorAll('.btn.btn-success');
let cantidadComprar = document.querySelector('#cantidadComprar');
let contador = 0;

btnAgregar.forEach((btn) => {
  btn.addEventListener('click', () => {
    contador++;
    actualizarContador();
  });
});
const actualizarContador = () => {
  cantidadComprar.innerText = contador;
};

// const btnDisminuir = document.querySelector('.btn-danger');
// btnDisminuir.addEventListener('click', () => {
//   if (contador != 0) {
//     contador--;
//   }
//   actualizarContador();
// });


