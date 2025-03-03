let plan = parseInt(prompt(`Ingrese su plan de membresia deseado \n 1: 15 dias \n 2: 30 dias \n 3: 3 Meses`));

if (plan == 1) {
    costo = 18000;
    dias = "15 Dias"
} else if (plan == 2) {
    costo = 35000;
    dias = "30 Dias"
} else if (plan == 3) {
    costo = 86000;
    dias = "3 Meses"
} else {
    costo = "Ingrese un plan valido";
}

alert(`El costo de la mensualidad es ${costo} y su plan es por ${dias}`);
