let precioBoleta;
let totalPagar = 0;
let impuesto = 0;
let cargoServicio = 5000;
let localidad = parseInt(prompt("Seleccione la localidad:\n1. General ($50000)\n2. Preferencial ($150000)\n3. VIP ($300000)"));

switch (localidad) {
    case 1:
        console.log("Ha seleccionado General.");
        precioBoleta = 50000;
        break;
    case 2:
        console.log("Ha seleccionado Preferencial.");
        precioBoleta = 150000;
        break;
    case 3:
        console.log("Ha seleccionado VIP.");
        precioBoleta = 300000;
        break;
    default:
        console.log("Opción de localidad inválida.");
        precioBoleta = null;
}

if (precioBoleta !== null) {
    let cantidad = parseInt(prompt("Ingrese la cantidad de boletas a comprar (máximo 5):"));

    if (cantidad < 1 || cantidad > 5) {
        console.log("Cantidad inválida. Solo puede comprar entre 1 y 5 boletas.");
    } else {
        totalPagar = (precioBoleta * cantidad) + (cargoServicio * cantidad);
        impuesto = (totalPagar * 0.10);
        if (localidad === 3) {
            console.log("La localidad VIP no tiene descuentos ni promociones.");
        } else {
            totalPagar += impuesto;
        }

        alert("Resumen de compra:");
        alert("Subtotal: $" + (precioBoleta * cantidad));
        alert("Cargo por servicio: $" + (cargoServicio * cantidad));
        alert("Impuesto (10%): $" + impuesto);
        alert("Total a pagar: $" + totalPagar);

let metodoPago = parseInt(prompt("Seleccione el método de pago:\n1. Efectivo\n2. Tarjeta de crédito"));

        if (metodoPago === 1) {
            console.log("Ha seleccionado pago en efectivo.");
        } else if (metodoPago === 2) {
            console.log("Ha seleccionado pago con tarjeta de crédito.");
        } else {
            console.log("Método de pago inválido.");
        }
    }
}