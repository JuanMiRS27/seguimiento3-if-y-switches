alert("Bienvenido a SandwichOrder")
let tamaño = prompt("Ingrese el tamaño del sándwich (pequeño o grande):");
let costo;

if (tamaño === "pequeño") {
    costo = 6000;
} else if (tamaño === "grande") {
    costo = 12000;
} else {
    costo = 0;
}
if (costo > 0) {
    let tocineta = prompt("¿Desea agregar tocineta? (si/no)");
    let jalapeño = prompt("¿Desea agregar jalapeño? (si/no)");
    let pavo = prompt("¿Desea agregar pavo? (si/no)");
    let queso = prompt("¿Desea agregar queso? (si/no)");
    if (tocineta === "si") {
        costo += 3000;
    }
    if (pavo === "si") {
        costo += 3000;
    }
    if (queso === "si") {
        costo += 2500;
    }
    alert("El costo total de su sándwich es: " + costo);
} else {
    alert("Tamaño de sándwich no válido.");
}