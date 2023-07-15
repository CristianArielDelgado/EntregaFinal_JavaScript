alert('Bienvenidos a Calculin.')

// Funcion que realiza el pedido de datos al usuario
const pedidoDatos = () => {
    numeroUno = parseInt(prompt('Ingrese el primer numero entero positivo.','Ej: 1'));
    numeroDos = parseInt(prompt('Ingrese el segundo numero entero positivo.','Ej: 2'));
    validacionNumeros(numeroUno, numeroDos);
    signo = prompt('Ingrese el signo matematico de la cuenta.','Ej: + - * /');
    return numeroUno, numeroDos, signo
}

// Funcion que valida que los numeros ingresados sean enteros y positivos.
const validacionNumeros = (numeroUno, numeroDos) => {
    while(Number.isNaN(numeroUno) || Number.isNaN(numeroDos) || numeroUno <= 0 || numeroDos <=0){
    alert('Uno de los dos numeros ingresados no es correcto. Vuelve a intentarlo.')
    numeroUno = parseInt(prompt('Ingrese el primer numero entero positivo','Ej: 1'))
    numeroDos = parseInt(prompt('Ingrese el segundo numero entero positivo','Ej: 2'))
    }
    return numeroUno, numeroDos
}

// Funcion que realiza el calculo matematico
const calculoMatematico = (signo, numeroUno, numeroDos) => {
    let resultado = 0
    switch (signo) {
        case '+':
            resultado = numeroUno + numeroDos
            break;
        case '-':
            resultado = numeroUno - numeroDos
            break;
        case '*':
            resultado = numeroUno * numeroDos
            break;
        case '/':
            resultado = numeroUno / numeroDos
            break;
        default:
            alert('Signo incorrecto.')
            resultado = 0
            break;
    }
    return resultado
}

// Inicializacion de las variables
let numeroUno = 0;
let numeroDos = 0;
let signo = '';
let edadPersona = parseInt(prompt('Por favor, ingrese su edad','Ej: 18'))

// Comprobacion que el usuario es mayor de edad y realizacion de calculo
if (edadPersona>=18){
    pedidoDatos();
    resultado = calculoMatematico(signo, numeroUno, numeroDos);
    alert('Resultado de la cuenta: '+numeroUno+ ' '+signo+' '+numeroDos+' = '+resultado);
}else{
    alert('Tenes que ser mayor de edad para usar la Calculadora. Te recomendamos seguir practicando las cuentas manualmente para el examen de matematicas del colegio.')
}

