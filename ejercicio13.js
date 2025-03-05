alert("Bienvenido a CeluMovil")
let operador = prompt(`Ingrese su Operador: \n tigo \n claro \n movistar`)
let minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales usados"))
let plan = prompt("Posee plan de datos? [si] [no]")

if (operador == "tigo"){
    cargoFijo = 45000
    minutoTotal = minutos * 200
    if (plan == "si"){
        precioFinal = cargoFijo + minutoTotal + 12000
        alert(`El Costo Total del plan de Febrero es ${precioFinal}`)
    } else{
        precioFinal = cargoFijo + minutoTotal
        alert(`El Costo Total del plan de Febrero es ${precioFinal}`)
    }

} else if (operador == "claro"){
    cargoFijo = 30000
    minutoTotal = minutos * 100
    if (plan == "si"){
        precioFinal = cargoFijo + minutoTotal + 18000
        alert(`El Costo Total del plan de Febrero es ${precioFinal}`)
    } else{
        precioFinal = cargoFijo + minutoTotal
        alert(`El Costo Total del plan de Febrero es ${precioFinal}`)
    }

} else if (operador == "movistar"){
    cargoFijo = 40000
    minutoTotal = minutos * 250
    if (plan == "si"){
        precioFinal = cargoFijo + minutoTotal + 8000
        alert(`El Costo Total del plan de Febrero es ${precioFinal}`)
    } else{
        precioFinal = cargoFijo + minutoTotal
        alert(`El Costo Total del plan de Febrero es ${precioFinal}`)
    }

} else {"operador invalido"}