let carrera = parseInt(prompt("Seleccione la carrera:\n1. Carrera 1 (Pilotos: A, B, C)"));

switch (carrera) {
    case 1:
        alert("Ha seleccionado Carrera 1.");
        break;
    default:
        alert("Carrera no disponible.");
        carrera = null;
}
if (carrera !== null) {
    let edad = parseInt(prompt("Ingrese su edad:"));
    if (edad < 18) {
        alert("Debe ser mayor de edad para apostar.");
    } else {
        let tipoApuesta = parseInt(prompt("Seleccione el tipo de apuesta:\n1. Ganador de la carrera\n2. Posiciones exactas"));

        switch (tipoApuesta) {
            case 1:
                alert("Ha seleccionado apostar por el ganador.");
                break;
            case 2:
                alert("Ha seleccionado apostar por posiciones exactas.");
                break;
            default:
                alert("Tipo de apuesta inválido.");
                tipoApuesta = null;
        }
        if (tipoApuesta !== null) {
            let piloto = prompt("Ingrese la letra del piloto (A, B, C):");
            let cuota;

            switch (piloto) {
                case "A":
                    cuota = 1.5;
                    break;
                case "B":
                    cuota = 2.3;
                    break;
                case "C":
                    cuota = 1.8;
                    break;
                default:
                    console.log("Piloto inválido.");
                    cuota = null;
            }
            if (cuota !== null) {
                let monto = parseInt(prompt("Ingrese el monto a apostar ($10,000 - $1,000,000):"));

                if (monto < 10000 || monto > 1000000) {
                    alert("Monto inválido. Debe ser entre $10,000 y $1,000,000.");
                } else {
                    alert("Apuesta registrada:");
                    alert("Carrera: 1");
                    alert("Tipo de apuesta: " + (tipoApuesta === 1 ? "Ganador" : "Posiciones exactas"));
                    alert("Piloto elegido: " + piloto);
                    alert("Monto apostado: $" + monto);
                    alert("Posible ganancia: $" + (monto * cuota));
                }
            }
        }
    }
}