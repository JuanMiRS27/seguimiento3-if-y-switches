alert("Por Favor Ingrese su Nota del 1 al 10")
let fisica = parseInt(prompt("Ingrese su Nota de Fisica"))
let quimica = parseInt(prompt("Ingrese su Nota de Quimica"))
let biologia = parseInt(prompt("Ingrese su Nota de Biologia"))
let matematicas = parseInt(prompt("Ingrese su Nota de Matematicas"))
let informatica = parseInt(prompt("Ingrese su Nota de Informatica"))
let calificacion = (((fisica + quimica + biologia + matematicas + informatica) / 50) * 100)

alert(calificacion)

