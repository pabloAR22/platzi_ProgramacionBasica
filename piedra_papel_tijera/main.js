function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function eleccion(jugada){
    let resultado = ""
    switch (jugada) {
      case "1":
        resultado = "Piedra! ✊";
        break;
      case "2":
        resultado = "Papel! ✋";
        break;
      case "3":
        resultado = "Tijera! ✌️";
        break;
      default:
        resultado = "Debes escoger una opcion";
        break;
    }
    return resultado;
  }

  let jugador = 0;
  let pc = 0;
  let triunfos = 0;
  let perdidas = 0;

  while (triunfos < 3 && perdidas < 3) {
    pc = random(1,3);
    pc = pc.toString();
    jugador = prompt("Elige: 1 = piedra, 2 = papel, 3 = tijera");

    alert("Jugador eligio: " + eleccion(jugador))
    alert("PC escogio: " + eleccion(pc))

    if (pc == jugador) {
      alert("empate");
    } else if (jugador - pc == 1 || jugador - pc == -2) {
      alert("Ganaste");
      triunfos++
    } else {
      alert("Perdiste");
      perdidas++
    }
  }
  alert("Ganaste: " + triunfos + ", perdiste: "+ perdidas)