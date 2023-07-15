// Funcion que le da la bienvenida al Usuario cuando ingresa a nuestra pagina en HTML
const bienvenidaUsuarios = () => {
    alert('El juego consiste en que se va a crear un número aleatorio entre los rangos 1 al 20. Si adivinas en el primer intento obtendrás 20 puntos, caso contrario se irán restando puntos como números de intentos realices. Que comience el juego.')
    nombreUsuario = prompt('¡Bienvenido!. Ingrese su nombre')
    let div = document.getElementById('bienvenidaUsuario')
    let mensajeUsuarioBienvenida = document.createElement('h1')
    mensajeUsuarioBienvenida.innerHTML = `Bienvenido/a ${nombreUsuario}.`
    div.appendChild(mensajeUsuarioBienvenida)
}

// Funcion que le explica el juego al usuario en HTML
const explicacionJuegoUsuario = () => {
    let div = document.getElementById('explicacionJuego')
    let mensajeExplicacionJuego = document.createElement('p')
    mensajeExplicacionJuego.innerHTML = `El juego consiste en que se va a crear un
    número aleatorio entre los rangos 1 al 20. Si adivinas en el primer intento obtendrás 20 puntos, caso contrario
    se irán restando puntos como números de intentos realices. <h2><br>Gracias por habier jugado con nosotros, ${nombreUsuario}.</h2>`
    div.appendChild(mensajeExplicacionJuego)
}

// Funcion que crea un numero aleatorio entre el 1 y el 20
const numeroAleatorio = () =>{
    let numAleatorio = Math.round(Math.random()* 19 + 1)
    return numAleatorio
}
// Funcion que le solicita un numero al usuario
const numUsuario = () => {
    let numeroUsuario = 0;
    do {
        numeroUsuario = parseInt(prompt('Ingrese un numero entre el 1 y el 20'))
        if(numeroUsuario<1 || numeroUsuario>20){
            alert('¡ERROR!. El numero no corresponde al rango especificado.')
        }
    } while (numeroUsuario < 1 || numeroUsuario > 20);
    return numeroUsuario;
}

// Funcion que realiza el juego
function jugar () {
    let puntuacionJuego = 21;
    let nUsuario = 0
    let nAleatorio = numeroAleatorio()
    let arrayNumElegidos = []

    while(nUsuario !== nAleatorio){
        if(puntuacionJuego === 0){
            alert('¡GAME OVER!. Juego terminado, la puntuacion llego a 0.')
            break
        }else{
        puntuacionJuego--
        nUsuario = numUsuario()
        arrayNumElegidos.push(nUsuario)
        if (nUsuario>nAleatorio){
            alert(`¡AYUDA!. Numero elegido: ${nUsuario}. Necesitas un numero MENOR para ganar.`)
        }else if (nUsuario<nAleatorio){
            alert(`¡AYUDA!. Numero elegido: ${nUsuario}. Necesitas un numero MAYOR para ganar.`)
        }else{
            alert(`¡FELICITACIONES! El numero que ingresaste es igual al numero aleatorio.`)
        }
        //alert('el numero aleatorio es '+nAleatorio)                  // Ayuda para conocer el numero y terminar el juego
        }
    }
    // console.log('Puntuacion obtenida: '+puntuacionJuego)
    // console.log('Numeros elegidos: '+arrayNumElegido.pop())
    // console.log('El numero aleatorio era '+nAleatorio)
    juegoTerminado(puntuacionJuego, arrayNumElegidos, nAleatorio);
}

// Funcion donde se termino el juego e inyecta todo en el HTML
const juegoTerminado = (puntuacionJuego, arrayNumElegidos, nAleatorio) =>{
    let finJuego = document.getElementById('juegoTerminado')
    let mensajeFinJuego = document.createElement('h3')
    mensajeFinJuego.innerHTML= `
    <br><br><br><br><br>¡FELICITACIONES!. Lo haz logrado. <br>Los numeros con los que intentaste fueron: ${arrayNumElegidos}. <br>
    El numero aleatorio era ${nAleatorio}.<br>
    <h2>Tu puntuacion final es de: ${puntuacionJuego}.</h2>
    `
    finJuego.appendChild(mensajeFinJuego)
}

