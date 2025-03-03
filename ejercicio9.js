alert(`Ingrese 1 Valor para cada angulo de el triangulo`);
let angulo1 = parseInt(prompt("Ingrese el 1er Angulo"));
let angulo2 = parseInt(prompt("Ingrese el 2do Angulo"));
let angulo3 = parseInt(prompt("Ingrese el 3er Angulo"));

let triangulo = angulo1 + angulo2 + angulo3

if(triangulo == 180){
    alert("El Triangulo es valido");
} else{
    alert("El Triangulo es invalido");
}