let tarifaDiaria;
let totalPagar = 0;

let categoria = parseInt(prompt("Seleccione la categoría del libro:\n1. Bestsellers ($500/día)\n2. Literatura ($100/día)\n3. Académicos (Gratuito)"));

switch (categoria) {
    case 1:
        alert("Ha seleccionado Bestsellers.");
        tarifaDiaria = 500;
        break;
    case 2:
        alert("Ha seleccionado Literatura.");
        tarifaDiaria = 100;
        break;
    case 3:
        alert("Ha seleccionado Académicos.");
        tarifaDiaria = 0;
        break;
    default:
        alert("Opción de categoría inválida.");
        tarifaDiaria = null;
}

if (tarifaDiaria !== null) {
    let cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros a solicitar (máximo 5):"));

    if (cantidadLibros < 1 || cantidadLibros > 5) {
        alert("Cantidad inválida. Solo puede solicitar entre 1 y 5 libros.");
    } else {
        let diasPrestamo = parseInt(prompt("Ingrese la cantidad de días del préstamo (1-30):"));

        if (diasPrestamo < 1 || diasPrestamo > 30) {
            alert("Número de días inválido. Solo puede solicitar entre 1 y 30 días.");
        } else {
            totalPagar = tarifaDiaria * cantidadLibros * diasPrestamo;

            if (diasPrestamo > 10 && tarifaDiaria > 0) {
                totalPagar *= 0.90;
                alert("Se ha aplicado un 10% de descuento por préstamo mayor a 10 días.");
            }

            alert("Total a pagar: $" + totalPagar);
        }
    }
}