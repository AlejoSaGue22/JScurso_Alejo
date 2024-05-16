

// let nombre = "alejo";
// let apellido = "santiago"


// console.log(nombre, apellido)

// console.log(nombre.length)
// console.log(nombre.toUpperCase())
// console.log(apellido.toLowerCase())

// console.log(apellido.toLowerCase());

// let nuevo = "El amigo es Excelente";

// let amigonu = "Hola Soy aleajoel ingeniero de sistemas estudio en la universidad de la costad   hola bebe"
// console.log(nuevo.toUpperCase());

// console.log(nuevo.toLowerCase()); 

// console.log(nombre.trim())

// console.log(nuevo.includes("amigo"));


// console.log(nuevo.includes("es"))

// console.log(amigonu.trim())
// console.log(amigonu.split("  "))

// console.log(amigonu.includes("Hola"))

// console.log(amigonu.toUpperCase());

// let nuevoAA = [1212,1212, 123, 3434, 3455, , ,];

// for (let index = 0; index < nuevoAA.length; index++) {
//     const muestra = nuevoAA;
//     console.log(muestra);
    
// }

// var suma = 0;
// var numeros = [10, 20, 30, 40, 50];
// let numerosA = 0;
// let aux = 0;

var miVector = [1, 2, 3, 2, 4, 5, 4];



// console.log(miVector.pop())
// miVector.pop();
// console.log(miVector.pop());
// if(miVector.includes(2 && 10)){
//   console.log("tiene el numero")
//   miVector.pop();
// }else{
//   console.log("no lo tiene")
//   console.log(miVector)
// }


// let b = new Number(1);
// let a = 1.455;
// console.log(a.toFixed(2))
// console.log(parseInt(a))
// console.log(b);

// function isPrime(element, index, array) {
//   var start = 2;
//   while (start <= Math.sqrt(element)) {
//     if (element % start < 1) {
//       return false;
//     } else {
//       start++;
//     }
//   }
//   return element > 1;
// }

// console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, no encontrado
// console.log([4, 6, 7, 12].findIndex(isPrime)); 



// let nombre = 'Alejo';
// let nuevo = nombre + 2 + 4;
// console.log(typeof za);
// console.log(nuevo); 

// nombre = 'Jose';
// console.log(nombre)


var hayRepetidos = false;

for (var i = 0; i < miVector.length; i++) {
  for (var j = i + 1; j < miVector.length; j++) {
    if (miVector[i] === miVector[j]) {
      hayRepetidos = true;
      break; 
    }
  }
  if (hayRepetidos) {
    break; 
  }
}

if (hayRepetidos) {
  console.log("Se encontraron datos repetidos en el vector.");
} else {
  console.log("No se encontraron datos repetidos en el vector.");
}

// //Residuo
// let a = 6, b = 4;
// let z = a + b;
// console.log(a % b, "Residuo")
// console.log("");


// //Pre-Incremento
// console.log("Pre-Incremento");
// z = ++a;
// console.log(z);
// console.log(a);

// //Post-Incremento
// console.log("Post-Incremento");
// u = b++;
// console.log(b);
// console.log(u);
// console.log(b);


// console.log("   -          -         -");

// let o = 1;
// o += 2;
// console.log(o);

// console.log("-            -           -");
// let numero = 10;

// numero += 2;
// let ha = numero++;
// console.log(numero);
// console.log(ha);

// console.log("-            -           -");
// let mm = 5, fff = "5", ggg = 8;
// let prueba = mm == fff, prueba2 = mm === fff;

// console.log("Prueba con 3 Iguales",prueba2);
// console.log("Prueba con 2 Iguales",prueba);

// console.log(parseInt(fff),"Esta es la conversion");
// console.log(fff);
// let ina = ++mm + ggg--;
// console.log(ina);
// console.log(mm);
// console.log(ggg);

// let estacion = ['Yamaha', 'TVS', 'Suzuki', 'Honda', 'Pulsar'];

// estacion[4] = 'Raptor';
// console.log(estacion);

setTimeout(() => {
  console.log("Retrasado por 1 segundo.");
}, "1000");

//Objetos literales

let nombre = "Alejo S", edad = 7;

const perro = {
              nombre,
              edad,
              ladras(){
                console.log("guauu gua");
                      }
              }
                      console.log(perro);

// Parametros REST 

const pruebaNueva = function(a,b, ...c){
      let resultado = a + b;

      c.forEach(function(n){
          resultado = resultado + n;
      })

      return resultado; 
}

console.log(pruebaNueva(1,2));

// Operad Spread
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const array3 = [...array1,...array2]

console.log(array3);

array1.forEach(function(a){
  console.log(a);
})

function saludarArriba(){
  return console.log("Hola, Como estas?");
}
saludarArriba()



const Hola = () => console.log("Hola, de nuevo");
console.log(Hola); 

function Perro(){
    console.log(this);
}

Perro();

const perroSeg = {
   nombre: "Kenai",
   ladrar: () =>{
    console.log(this);
   }
}

perroSeg.ladrar()

const PersonaSeg = {
  nombre: "Kenai",
  apellido: "Saantiago",
  edad: 12
}

 // CICLOS 'FOR IN'  Y 'FOR OF' ---- 
 
let numeroAlejo = "Hola Mundo";
console.log(numeroAlejo.length, "Conteo");
for (let i = 0; i < numeroAlejo; i++){
  const element = numeroAlejo;
  console.log(element);
}

for (const iterator of array3) {
    console.log(iterator, "Prueba Ale");
}

for (const key in PersonaSeg) {
  if (Object.hasOwnProperty.call(PersonaSeg, key)) {
    console.log(`Prop Nuevo ${key} Valor Nuevo ${PersonaSeg[key]}`);  
  }
}


function contarCaracteres(texto) {
  // Contar caracteres
  var numeroCaracteres = texto.length;
  // Contar palabras
  var palabras = texto.match(/\b[-?(\w+)?]+\b/gi);
  var numeroPalabras = palabras ? palabras.length : 0;

  return {
      caracteres: numeroCaracteres,
      palabras: numeroPalabras
  };
}

// Ejemplo de uso
var textoEjemplo = "¡Esto es un ejemplo de conteo de caracteres y palabras!";
var resultado = contarCaracteres(textoEjemplo);
console.log("Número de caracteres:", resultado.caracteres);
console.log("Número de palabras:", resultado.palabras);

console.log("-------------       --------------------     -----");

let iterable = [10, 20, 30, 40, 50];

for (let value in iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31

let arr = [3, 5, 7];
arr.foo = "hola";
console.log(arr, "Prueba");

for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // logs "3", "5", "7"
}

console.clear();

//  REPASO OPERADOR SPREAD Y PARAMETRO REST

let Camisas = ["Tommy Hilfiger", "Puma", "Nike", "Lacoste"]
let Zapatos = ["Velez", "Diesel", "Hugo Boss"]

let prendas = [...Camisas,...Zapatos];

console.log(prendas);

const NuevoArchivo = (a,b,...c) =>{
       let camisasNuevas = ["Puma", "Nike", "Lacoste"]
       camisasNuevas.push(a,b)
       console.log(camisasNuevas);
       
       c.forEach(e =>{
         camisasNuevas.push(e)
        })
        console.log(camisasNuevas);


}

NuevoArchivo("Nautica", "Fils","America", "Quiksilver");

// OBJETO DATE (FECHA)

let nfech =  new Date();

console.log(nfech.toLocaleDateString());
console.log(nfech.toDateString());
console.log(nfech);
console.log(nfech.getDay());
console.log(nfech.getMonth());
console.log(nfech.toLocaleString());

console.log(nfech.getDate());
console.log(nfech.getDay());
console.log(nfech.getFullYear());
console.log(nfech.getMinutes());

console.clear();

// OBJETO MATH (NUMERICOS)
console.log(Math.ceil(7.5));
console.log(Math.floor(7.5));

console.log(Math.round(7.5));










































 













