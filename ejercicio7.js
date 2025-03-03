let genero = parseInt(prompt(`Ingrese su genero:
    1: Hombre
    2: Mujer`));
let edad = parseInt(prompt("Ingrese su edad"));

if (genero == 1){
    ayuda = 40000
    alert(`El valor de ayuda mensual es: $${ayuda}.`)
} else if (genero == 2){
    if (edad > 50){
        ayuda = 120000
        alert(`El valor de ayuda mensual es: $${ayuda}.`)
    } else if(edad >= 30 && edad <= 50){
        ayuda = 100000
        alert(`El valor de ayuda mensual es: ${ayuda}.`)
    } else if(edad < 30){
        alert("No recibe ayuda mensual")
    }
}