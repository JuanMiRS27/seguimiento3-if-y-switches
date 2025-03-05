let precioBase
let precioAdicional = 0;

let modelo = parseInt(prompt("Seleccione el modelo de escoba:\n1. Escoba dura\n2. Escoba suave\n3. Cepillo"));

switch (modelo) {
    case 1:
        alert("Ha seleccionado Escoba dura.");
        break;
    case 2:
        alert("Ha seleccionado Escoba suave.");
        break;
    case 3:
        alert("Ha seleccionado Cepillo.");
        break;
    default:
        alert("Opción de modelo inválida.");
        modelo = null;
}

if (modelo !== null) {
    let material = parseInt(prompt("Seleccione el material:\n1. Cerdas sintéticas\n2. Cerdas naturales"));

    switch (material) {
        case 1:
            alert("Ha seleccionado Cerdas sintéticas.");
            if (modelo === 1) {
                precioBase = 8000; 
            } else if (modelo === 3) {
                precioBase = 12000; 
            } else {
                alert("Opción inválida.");
                precioBase = null;
            }
            break;

        case 2:
            alert("Ha seleccionado Cerdas naturales.");
            if (modelo === 1) {
                precioBase = 10000; 
            } else if (modelo === 3) {
                precioBase = 15000; 
            } else {
                alert("Opción inválida.");
                precioBase = null;
            }
            break;

        default:
            alert("Opción de material inválida.");
            precioBase = null;
    }
}

if (precioBase !== null) {
    let opcionAdicional = parseInt(prompt("Seleccione una opción adicional:\n1. Mango largo (+$2.000)\n2. Gancho en punta (+$500)\n3. Ninguna"));

    switch (opcionAdicional) {
        case 1:
            alert("Ha seleccionado Mango largo.");
            precioAdicional = 2000;
            break;
        case 2:
            alert("Ha seleccionado Gancho en punta.");
            precioAdicional = 500;
            break;
        case 3:
            alert("Sin opciones adicionales.");
            break;
        default:
            alert("Opción adicional inválida.");
            precioAdicional = null;
    }
}

if (precioAdicional !== null) {
    let cantidad = parseInt(prompt("Ingrese la cantidad de escobas a fabricar (mínimo 3, máximo 30):"));

    if (cantidad < 3 || cantidad > 30) {
        alert("Cantidad inválida. Debe ser entre 3 y 30.");
    } else {
        let totalPagar = (precioBase + precioAdicional) * cantidad;
        alert("Total a pagar: $" + totalPagar);
    }
}