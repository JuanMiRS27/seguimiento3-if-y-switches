alert("Por Favor Ingrese su Nota del 1 al 10")
let fisica = parseInt(prompt("Ingrese su Nota de Fisica"))
let quimica = parseInt(prompt("Ingrese su Nota de Quimica"))
let biologia = parseInt(prompt("Ingrese su Nota de Biologia"))
let matematicas = parseInt(prompt("Ingrese su Nota de Matematicas"))
let informatica = parseInt(prompt("Ingrese su Nota de Informatica"))
let porcentaje = (((fisica + quimica + biologia + matematicas + informatica) / 50) * 100)

if (porcentaje <= 59){ calificacion = "Mala"}
else if (porcentaje >= 60 && porcentaje <= 80) { calificacion = "Buena"}
else if (porcentaje > 80) { calificacion = "Excelente"}

alert(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}`)
