alert("Buenas, ingrese [si] o [no] dependiendo de la reaccion que tiene su Computadora para determinar su estado");
let pitido = prompt("Su Computadora emite un pitido al Iniciarse?");
let disco = prompt("La unidad de Disco Duro de su computadora gira?");

if (pitido == "si"){
    if (disco == "si"){
        alert("Póngase en contacto con el técnico apoyo")
    } else if (disco == "no"){
        alert("Verificar contactos de la unidad")
    }
} else if (pitido == "no"){
    if (disco == "si"){
        alert("Compruebe las conexiones de altavoces")
    } else if (disco == "no") {
        alert("Traiga la computadora para repararla en la central.")
    }
} else {"Ingrese una repsuesta Valida"}