// Ejercicio 1-a

let arrayDeFrutas = [];

for (let i = 0; i < 5; i++) {
  let unidadFruta = prompt("Ingrese una fruta");
  arrayDeFrutas.push(unidadFruta); // empuja de a una por vez a las frutas ingresadas mediante el prompt
}
console.log(arrayDeFrutas);

// Ejercicio 1-b

let arrayDeFrutas2 = [];
let unidadFruta2 = "";

do {
  unidadFruta2 = prompt("Ingresa otra fruta (elige cancelar para salir)", "");
  arrayDeFrutas2.push(unidadFruta2);
} while (unidadFruta2 != null);

arrayDeFrutas2.pop(null); // borra el null del array

console.log(arrayDeFrutas2);

// Ejercicio 1-c

const ambosArrays = arrayDeFrutas.concat(arrayDeFrutas2);
console.log(ambosArrays);

const viceversaArrays = arrayDeFrutas2.concat(arrayDeFrutas);
console.log(viceversaArrays);

// Ejercicio 2

const ciudades = new Array(
  "Buenos Aires",
  "Tokyo",
  "Estambul",
  "Lima",
  "Nueva York",
  "La Paz",
  "Milan",
  "San Pablo",
  "Paris",
  "Roma"
);

// console.log(ciudades[prompt("Escriba un numero del 1 al 10") - 1]);

// Ejercicio 3

// ciudades.pop(prompt("Ingrese el numero de ciudades a eliminar"));
// console.log(ciudades);

let quitarCiudades = prompt("Ingrese un numero");

ciudades.splice(0, quitarCiudades);
console.log(ciudades);

// quitarCiudades = ciudades.splice(-quitarCiudades);
// console.log(ciudades);
