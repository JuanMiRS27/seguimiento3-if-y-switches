let precioClasicos = 500000;
let precioRunning = 800000;
let precioBasketball = 1000000;
let modeloSeleccionado = parseInt(prompt("Seleccione el modelo de tenis:\n1. Clásicos [$500.000]\n2. Running [$800.000]\n3. Basketball [$1.000.000]"));

switch (modeloSeleccionado) {
    case 1:
        precioUnitario = precioClasicos;
        alert("Se ha seleccionado tenis Clásicos.");
        break;
    case 2:
        precioUnitario = precioRunning;
        alert("Se ha seleccionado tenis Running.");
        break;
    case 3:
        precioUnitario = precioBasketball;
        alert("Se ha seleccionado tenis Basketball.");
        break;
    default:
        alert("Opción de modelo inválida.");
        precioUnitario = 0;
} 
if (precioUnitario !== 0) {
    let talla = parseInt(prompt("Ingrese la talla (35-44):"));
    if (talla < 35 || talla > 44) {
        alert("Talla inválida. Debe seleccionar entre 35 y 44.");
    } else { 
        let cantidad = parseInt(prompt("Ingrese la cantidad de pares a comprar (1-5):"));
        if (cantidad < 1 || cantidad > 5) {
            alert("Cantidad inválida. Debe seleccionar entre 1 y 5 pares.");
        } else {
            totalPagar = precioUnitario * cantidad;
            if (cantidad >= 3) {
                totalPagar *= 0.90; // 10% de descuento
                alert("Se ha aplicado un 10% de descuento.");
            }

            alert(`Total a pagar $${totalPagar}`);
        }
    }
}