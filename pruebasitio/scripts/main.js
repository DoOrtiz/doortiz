



/*
const miTitulo = document.querySelector('h1');
miTitulo.textContent = '!Hola Mundo';*/

// If
/*
let helado = 'chocolate';

if( helado === 'chocolate' ) {
    alert('Si, me gusta el helado del chocolate!');
} else {
    alert('Awwww, pero mi favorito es el de chocolate...')
}*/

// Funciones
/*
function multiplicar( num1, num2 ) {
    let resultado = num1 * num2;
    return resultado;
}
*/

// Eventos
/*
document.querySelector('html').onclick = function() {
    alert('Ouch, deja de pincharme');
}

let miHtml = document.querySelector('html');
miHtml.onclick = function() {
    alert('Ouch, deja de pincharme');
};
*/

let miImage = document.querySelector('img');
miImage.onclick = function() {
    let miSrc = miImage.getAttribute('src');
    if( miSrc === 'images/firefox.webp' ) {
        miImage.setAttribute('src', 'images/firefox2.png');
    } else {
        miImage.setAttribute('src', 'images/firefox.webp');
    }
}


// Añadir un mensaje de bienvenida personalizado
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function establecerNombreUsuario() {
   
    let miNombre = prompt('Introduzca su nombre.');
    if( !miNombre ) {
        establecerNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = 'Mozilla es genial, ' + miNombre;
    }
    
}

miBoton.onclick = function() {
    establecerNombreUsuario();
}
