alert("hola")
let nombre = prompt("Ingrese su nombre por favor")
let hora = prompt("Ingrese Sus horas trabajadas por semana");

if (hora <= 10) {
    resultado = hora * 30000
    alert("Señor/a " + nombre + ", el número de horas es " + horas + "y su salario equivale a $" + resultado)
} else if (hora => 11) {
    resultado = hora * 33000
    alert("Señor/a " + nombre + ", el número de horas es " + horas + "y su salario equivale a $" + resultado)
}