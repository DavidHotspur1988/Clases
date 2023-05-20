// CLOUSURE -> METODO PARA PROTEGER LA INFORMACION

// CLOUSURE GLOBAL
// var a = 1;
// function global() {
//     console.log ('a interno ->', a)
//     function local () {
//         console.log ('a local interna ->', a )
//     }
//     local();
// }
// global(); // 1
// console.log('a salida global ->', a); // 1
// local(); // 

// CLOUSURE CON FUNCION LOCAL Y FUNCION INTERNA
function fxClousure(){
    var mensaje = 'Hola desde fxClousure'
    function clouser(){
        console.log(mensaje)
    }
    return clouser
}
var miFuncion = fxClousure()
miFuncion();
// clouser();

function outerFunction(){
    var count = 0
    function innerFunction(){
        count++;
        console.log(count)
    }
    return innerFunction
}
var clouser = outerFunction();
clouser();
clouser();
clouser();

// IIFE -> OTRO METODO PARA PROTEGER LA INFORMACION
(function(){
    var interna = 'variable dentro de IIFE';
    console.log("Salida de interna ->", interna)
})()

var lenguaje = 'Ruby';
(function(){
    var lenguaje = 'JS';
    console.log(lenguaje+" "+"es un lenguaje de programacion");
})()
console.log('Salida de lenguaje global->', lenguaje);

// MODULO
const moduloPrueba = ( ()=>{
    let contador = 0;
    return{
        incrementaContador:()=>{
            contador++;
            return contador;
        },
        reseteoContador:()=>{
            console.log(`valor del contador antes de reiniciar: ${contador}`);
            contador = 0
            return contador;
        },
    }
})()
console.log('Salida del contador ->', moduloPrueba.incrementaContador());
console.log('Salida del contador ->', moduloPrueba.incrementaContador());
console.log('Salida del contador ->', moduloPrueba.incrementaContador());
console.log('Salida del reseteo ->', moduloPrueba.reseteoContador());
console.log('Salida del contador ->', moduloPrueba.incrementaContador());

// var uno = function(){                                   // FORMATO ECMAS5
//     console.log('Hola...')
// }

// const uno = string => console.log(string)             // FORMATO ECMAS6
// uno('Hola');

// EJERCICIO
const salida = document.querySelector('#salida');
const resultado = document.querySelector('#resultado');
const lugares = (() => {
    return {
        salidaCine:() => {
            return 'Cine'
        },
        salidaTeatro:() => {
            return 'Teatro'
        },
        salidaRecital:() => {
            return 'Recital'
        },
        salidaConcierto:() => {
            return 'Concierto'
        },
        noSeleccionado:() => {
            return 'Seleccione una opción'
        },
    }
})();

salida.addEventListener('change', function(){
    switch (salida.value) {
        case 'cine':
            resultado.innerHTML = lugares.salidaCine();
            break;
        case 'teatro':
            resultado.innerHTML = lugares.salidaTeatro();
            break;
        case 'concierto':
            resultado.innerHTML = lugares.salidaConcierto();
            break;
        case 'recital':
            resultado.innerHTML = lugares.salidaRecital();
            break;
        default:
            resultado.innerHTML = lugares.noSeleccionado();
            break;
    }
})      