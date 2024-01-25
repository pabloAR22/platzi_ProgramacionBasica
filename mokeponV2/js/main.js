window.addEventListener('load', iniciarJuego);

let ataqueJugador;
let ataqueEnemigo;
let vidasEnemigo = 3;
let vidasJugador = 3;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function iniciarJuego(){

    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReinicar.addEventListener('click', reiniciarJuego);

    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);

    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let campoMascotaJugador = document.getElementById('mascota-jugador');

    if (inputHipodoge.checked){
        alert('hipodoge')
        campoMascotaJugador.innerHTML = 'hipodoge';
    } else if (inputCapipepo.checked){
        alert('capipepo')
        campoMascotaJugador.innerHTML = 'capipepo';
    } else if (inputRatigueya.checked){
        alert('ratigueya')
        campoMascotaJugador.innerHTML = 'ratigueya';
    } else {
        alert('debes seleccionar una mascota')
    }

    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = random(1,3);
    let campoMascotaEnemigo = document.getElementById('mascota-enemigo');

    switch (ataqueAleatorio) {
        case 1:
            campoMascotaEnemigo.innerHTML = 'Hipodoge';
            break;
        case 2:
            campoMascotaEnemigo.innerHTML = 'Capipepo'
            break;
        case 3:
            campoMascotaEnemigo.innerHTML = 'Ratigueya'
            break;
    }
}

function ataqueAgua(){
    ataqueJugador = 'AGUA';
    alert(ataqueJugador + " " + "💧💧💧");
    seleccionarAtaqueEnemigo();
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA';
    alert(ataqueJugador + " " + "🌱🌱🌱");
    seleccionarAtaqueEnemigo();
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO';
    alert(ataqueJugador + " " + "🔥🔥🔥");
    seleccionarAtaqueEnemigo();
}

function seleccionarAtaqueEnemigo(){
    let ataque = random(1,3);
    switch (ataque) {
        case 1:
            ataqueEnemigo = 'AGUA';
            break;
        case 2:
            ataqueEnemigo = 'TIERRA'
            break;
        case 3:
            ataqueEnemigo = 'FUEGO'
            break;
    }
    batalla();
}

function batalla(){
    let resultado;
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');

    if (ataqueJugador == ataqueEnemigo) {
        alert("empate");
        resultado = 'empate';
      } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        alert("Ganaste");
        vidasEnemigo = vidasEnemigo--
        vidasEnemigo.innerHTML = vidasEnemigo;
        resultado = 'ganaste';
      } else if (ataqueJugador ==  'AGUA' && ataqueEnemigo == 'FUEGO') {
        alert("Ganaste");
        vidasEnemigo = vidasEnemigo--
        vidasEnemigo.innerHTML = vidasEnemigo;
        resultado = 'ganaste';
      } else if (ataqueJugador ==  'TIERRA' && ataqueEnemigo == 'AGUA'){
        alert('Ganaste');
        vidasEnemigo = vidasEnemigo--
        vidasEnemigo.innerHTML = vidasEnemigo;
        resultado = 'ganaste';
      } else {
        alert('perdiste');
        vidasJugador = vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
        resultado = 'perdiste';
      }

    revisarVidas();
    crearMensaje(resultado);
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes');
    let parrafo = document.createElement('p');

    if (resultado == 'ganaste'){
        emoji = '🥳🎉';
    } else {
        emoji = '🤕🤕'
    }

    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' ' + resultado + ' ' + emoji;

    sectionMensajes.appendChild(parrafo);
}

function revisarVidas(){
    if (vidasEnemigo == 0){
        alert('GANASTE')
    } else if ( vidasJugador == 0){
        alert('perdiste')
    }
}

function reiniciarJuego(){
    location.reload();
}