let tipolavadora = prompt(`Ingrese el tipo de lavadora que desea alquilar:
    1: Lavadora Grande [Costo por Hora: $4000]
    2: Lavadora Pequeña [Costo por Hora: $3000]
    `);
let cantidad = prompt("Ingrese cuantas lavadoras va a alquilar")
let horas = prompt("Ingrese el numero de horas en el que va a utilizar las lavadoras")

if (tipolavadora == 1) { 
    costobase = 4000
    tipo = "Lavadora Grande"
    if (cantidad > 3) {
        costotal = cantidad * costobase * horas
        alert("Costo total por alquilar " + cantidad + " " + tipo + " por " + horas + " horas: $" + parseInt(costotal - (costotal / 100 * 3)))
    
    }
    else{
        costotal = cantidad * costobase * horas
        alert("Costo total por alquilar " + cantidad + " " + tipo + " por " + horas + " horas: $" + costotal)
    }
} else if (tipolavadora == 2){
    costobase = 3000
    tipo = "Lavadora Pequeña"
    if (cantidad > 3) {
        costotal = cantidad * costobase * horas
        alert("Costo total por alquilar " + cantidad + " " + tipo + " por " + horas + " horas: $" + parseInt(costotal - (costotal / 100 * 3)))
    
    }
    else{
        costotal = cantidad * costobase * horas
        alert("Costo total por alquilar " + cantidad + " " + tipo + " por " + horas + " horas: $" + costotal)
    }
} else if (tipolavadora >2 ){
    alert("ingrese un numero valido")
}


