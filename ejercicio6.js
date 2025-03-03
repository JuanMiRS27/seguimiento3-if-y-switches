let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

if (num1 >= num2) {
    if (num1 >= num3) {
        mayor = num1;
    } else {
        mayor = num3;
    }
} else {
    if (num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }
}

alert("El número mayor es: " + mayor);