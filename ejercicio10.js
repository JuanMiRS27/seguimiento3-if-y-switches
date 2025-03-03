let copias = prompt("Ingrese el Numero de copias que desea imprimir")

if (copias <= 499){
    precio = 120
    precioFinal = copias * precio
} else if (copias >= 500 && copias <= 749){
    precio = 100
    precioFinal = copias * precio
} else if (copias >= 750 && copias <= 999){
    precio = 80
    precioFinal = copias * precio
} else if (copias >= 1000){
    precio = 50
    precioFinal = copias * precio
}

alert(`Se van a imprimir ${copias} las cuales valen $${precio} por copia. \n El Valor final por la impresión es $${precioFinal}`)