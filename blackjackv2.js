
let carta1 = Math.floor(Math.random() * 11) + 1; 
let carta2 = Math.floor(Math.random() * 11) + 1; 
let totalJugador = carta1 + carta2;

alert("Tus cartas: " + carta1 + " y " + carta2);
alert("Total: " + totalJugador);

if (totalJugador === 21) {
    alert("¡Blackjack! Ganaste.");
} else if (totalJugador > 21) {
    alert("Te pasaste de 21. Perdiste.");
} else {
    let decision = parseInt(prompt("Tu total es " + totalJugador + ". Quieres otra carta?\n1. Sí\n2. No"));

    switch (decision) {
        case 1:
            let nuevaCarta = Math.floor(Math.random() * 11) + 1;
            totalJugador += nuevaCarta;
            alert("Nueva carta: " + nuevaCarta);
            alert("Nuevo total: " + totalJugador);

            if (totalJugador === 21) {
                alert("¡Blackjack! Ganaste.");
            } else if (totalJugador > 21) {
                alert("Te pasaste de 21. Perdiste.");
            } else {
                alert("Juego terminado. Tu total es " + totalJugador);
            }
            break;

        case 2:
            alert("Te plantas con " + totalJugador);
            break;

        default:
            alert("Opción Erronea. Se toma como que te plantas.");
    }
}

// Cabe aclarar que este es la version 2 usando switches, cuando aun no tenia en cuenta como hacer que el jugador seleccionaba si se plantaba o no.