let precioItem;
let totalPagar = 0;
let costoEnvio = 5000;
let restaurante = parseInt(prompt("Seleccione un restaurante:\n1. Hamburguesas\n2. Pizzería\n3. Comida China"));

switch (restaurante) {
    case 1:
        alert("Ha seleccionado Hamburguesas.");
        let menuHamburguesas = parseInt(prompt("Seleccione el menú:\n1. Hamburguesa simple ($25000)"));
        if (menuHamburguesas === 1) {
            precioItem = 25000;
        } else {
            alert("Opción inválida.");
            precioItem = null;
        }
        break;
    case 2:
        alert("Ha seleccionado Pizzería.");
        let menuPizzeria = parseInt(prompt("Seleccione el menú:\n1. Pizza familiar ($85000)"));
        if (menuPizzeria === 1) {
            precioItem = 85000;
        } else {
            alert("Opción inválida.");
            precioItem = null;
        }
        break;
    case 3:
        alert("Ha seleccionado Comida China.");
        let menuChina = parseInt(prompt("Seleccione el menú:\n1. Fideos con pollo ($18000)"));
        if (menuChina === 1) {
            precioItem = 18000;
        } else {
            alert("Opción inválida.");
            precioItem = null;
        }
        break;
    default:
        alert("Opción de restaurante inválida.");
        precioItem = null;
}

if (precioItem !== null) {
    let cantidad = parseInt(prompt("Ingrese la cantidad de unidades a pedir:"));

    if (cantidad < 1) {
        alert("Cantidad inválida. Debe pedir al menos 1.");
    } else {
        totalPagar = (precioItem * cantidad) + costoEnvio;

        if (totalPagar < 23000) {
            alert("El pedido mínimo debe ser de $23000.");
        } else {
            alert("Resumen del pedido:");
            alert("Subtotal: $" + (precioItem * cantidad));
            alert("Costo de envío: $" + costoEnvio);
            alert("Total a pagar: $" + totalPagar);

            let metodoPago = parseInt(prompt("Seleccione el método de pago:\n1. Efectivo\n2. Tarjeta débito/crédito"));

            if (metodoPago === 1) {
                alert("Ha seleccionado pago en efectivo.");
            } else if (metodoPago === 2) {
                alert("Ha seleccionado pago con tarjeta.");
            } else {
                alert("Método de pago inválido.");
            }

            alert("Tiempo estimado de entrega: 45 minutos a 1 hora.");
        }
    }
}