

// // // // // // // // let nombre = "alejo";
// // // // // // // // let apellido = "santiago"


// // // // // // // // console.log(nombre, apellido)

// // // // // // // // console.log(nombre.length)
// // // // // // // // console.log(nombre.toUpperCase())
// // // // // // // // console.log(apellido.toLowerCase())

// // // // // // // // console.log(apellido.toLowerCase());

// // // // // // // // let nuevo = "El amigo es Excelente";

// // // // // // // // let amigonu = "Hola Soy aleajoel ingeniero de sistemas estudio en la universidad de la costad   hola bebe"
// // // // // // // // console.log(nuevo.toUpperCase());

// // // // // // // // console.log(nuevo.toLowerCase()); 

// // // // // // // // console.log(nombre.trim())

// // // // // // // // console.log(nuevo.includes("amigo"));


// // // // // // // // console.log(nuevo.includes("es"))

// // // // // // // // console.log(amigonu.trim())
// // // // // // // // console.log(amigonu.split("  "))

// // // // // // // // console.log(amigonu.includes("Hola"))

// // // // // // // // console.log(amigonu.toUpperCase());

// let nuevoAA = [1212,1212, 123, 3434, 3455, , ,];

// for (let index = 0; index < nuevoAA.length; index++) {
//     const muestra = nuevoAA;
//     console.log(muestra);
    
// }

// // // // // // // // var suma = 0;
// // // // // // // // var numeros = [10, 20, 30, 40, 50];
// // // // // // // // let numerosA = 0;
// // // // // // // // let aux = 0;

// // // // // // // var miVector = [1, 2, 3, 2, 4, 5, 4];



// // // // // // // // console.log(miVector.pop())
// // // // // // // // miVector.pop();
// // // // // // // // console.log(miVector.pop());
// // // // // // // // if(miVector.includes(2 && 10)){
// // // // // // // //   console.log("tiene el numero")
// // // // // // // //   miVector.pop();
// // // // // // // // }else{
// // // // // // // //   console.log("no lo tiene")
// // // // // // // //   console.log(miVector)
// // // // // // // // }


// // // // // // // // let b = new Number(1);
// // // // // // // // let a = 1.455;
// // // // // // // // console.log(a.toFixed(2))
// // // // // // // // console.log(parseInt(a))
// // // // // // // // console.log(b);

// // // // // // // // function isPrime(element, index, array) {
// // // // // // // //   var start = 2;
// // // // // // // //   while (start <= Math.sqrt(element)) {
// // // // // // // //     if (element % start < 1) {
// // // // // // // //       return false;
// // // // // // // //     } else {
// // // // // // // //       start++;
// // // // // // // //     }
// // // // // // // //   }
// // // // // // //   // return element > 1;
// // // // // // // // }

// // // // // // // // console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, no encontrado
// // // // // // // // console.log([4, 6, 7, 12].findIndex(isPrime)); 


// // // // // // // // let nombre = 'Alejo';
// // // // // // // // let nuevo = nombre + 2 + 4;
// // // // // // // // console.log(typeof za);
// // // // // // // // console.log(nuevo); 

// // // // // // // // nombre = 'Jose';
// // // // // // // // console.log(nombre)


// // // // // // // var hayRepetidos = false;

// // // // // // // for (var i = 0; i < miVector.length; i++) {
// // // // // // //   for (var j = i + 1; j < miVector.length; j++) {
// // // // // // //     if (miVector[i] === miVector[j]) {
// // // // // // //       hayRepetidos = true;
// // // // // // //       break; 
// // // // // // //     }
// // // // // // //   }
// // // // // // //   if (hayRepetidos) {
// // // // // // //     break; 
// // // // // // //   }
// // // // // // // }

// // // // // // // if (hayRepetidos) {
// // // // // // //   console.log("Se encontraron datos repetidos en el vector.");
// // // // // // // } else {
// // // // // // //   console.log("No se encontraron datos repetidos en el vector.");
// // // // // // // }

// // // // // // // // //Residuo
// // // // // // // // let a = 6, b = 4;
// // // // // // // // let z = a + b;
// // // // // // // // console.log(a % b, "Residuo")
// // // // // // // // console.log("");


// // // // // // // // //Pre-Incremento
// // // // // // // // console.log("Pre-Incremento");
// // // // // // // // z = ++a;
// // // // // // // // console.log(z);
// // // // // // // // console.log(a);
// // // // // // // // console.log(nuevosAr);

// // // // // // // // //Post-Incremento
// // // // // // // // console.log("Post-Incremento");
// // // // // // // // u = b++;
// // // // // // // // console.log(b);
// // // // // // // // console.log(u);
// // // // // // // // console.log(b);


// // // // // // // // console.log("   -          -         -");

// // // // // // // // let o = 1;
// // // // // // // // o += 2;
// // // // // // // // console.log(o);

// // // // // // // // console.log("-            -           -");
// // // // // // // // let numero = 10;

// // // // // // // // numero += 2;
// // // // // // // // let ha = numero++;
// // // // // // // // console.log(numero);
// // // // // // // // console.log(ha);

// // // // // // // // console.log("-            -           -");
// // // // // // // // let mm = 5, fff = "5", ggg = 8;
// // // // // // // // let prueba = mm == fff, prueba2 = mm === fff;

// // // // // // // // console.log("Prueba con 3 Iguales",prueba2);
// // // // // // // // console.log("Prueba con 2 Iguales",prueba);

// // // // // // // // console.log(parseInt(fff),"Esta es la conversion");
// // // // // // // // console.log(fff);
// // // // // // // // let ina = ++mm + ggg--;
// // // // // // // // console.log(ina);
// // // // // // // // console.log(mm);
// // // // // // // // console.log(ggg);

// // // // // // // // let estacion = ['Yamaha', 'TVS', 'Suzuki', 'Honda', 'Pulsar'];

// // // // // // // // estacion[4] = 'Raptor';
// // // // // // // // console.log(estacion);

// // // // // // // setTimeout(() => {
// // // // // // //   console.log("Retrasado por 1 segundo.");
// // // // // // // }, "1000");

// // // // // // // //Objetos literales

// // // // // // // let nombre = "Alejo S", edad = 7;

// // // // // // // const perro = {
// // // // // // //               nombre,
// // // // // // //               edad,
// // // // // // //               ladras(){
// // // // // // //                 console.log("guauu gua");
// // // // // // //                       }
// // // // // // //               }
// // // // // // //                       console.log(perro);

// // // // // // // // Parametros REST 

// // // // // // // const pruebaNueva = function(a,b, ...c){
// // // // // // //       let resultado = a + b;

// // // // // // //       c.forEach(function(n){
// // // // // // //           resultado = resultado + n;
// // // // // // //       })

// // // // // // //       return resultado; 
// // // // // // // }

// // // // // // // console.log(pruebaNueva(1,2));

// // // // // // // // Operad Spread
// // // // // // // const array1 = [1, 2, 3, 4, 5];
// // // // // // // const array2 = [6, 7, 8, 9, 10];

// // // // // // // const array3 = [...array1,...array2]

// // // // // // // console.log(array3);

// // // // // // // array1.forEach(function(a){
// // // // // // //   console.log(a);
// // // // // // // })

// // // // // // // function saludarArriba(){
// // // // // // //   return console.log("Hola, Como estas?");
// // // // // // // }
// // // // // // // saludarArriba()



// // // // // // // const Hola = () => console.log("Hola, de nuevo");
// // // // // // // console.log(Hola); 

// // // // // // // function Perro(){
// // // // // // //     console.log(this);
// // // // // // // }

// // // // // // // Perro();

// // // // // // // const perroSeg = {
// // // // // // //    nombre: "Kenai",
// // // // // // //    ladrar: () =>{
// // // // // // //     console.log(this);
// // // // // // //    }
// // // // // // // }

// // // // // // // perroSeg.ladrar()

// // // // // // // const PersonaSeg = {
// // // // // // //   nombre: "Kenai",
// // // // // // //   apellido: "Saantiago",
// // // // // // //   edad: 12
// // // // // // // }

// // // // // // //  // CICLOS 'FOR IN'  Y 'FOR OF' ---- 
 
// // // // // // // let numeroAlejo = "Hola Mundo";
// // // // // // // console.log(numeroAlejo.length, "Conteo");
// // // // // // // for (let i = 0; i < numeroAlejo; i++){
// // // // // // //   const element = numeroAlejo;
// // // // // // //   console.log(element);
// // // // // // // }

// // // // // // // for (const iterator of array3) {
// // // // // // //     console.log(iterator, "Prueba Ale");
// // // // // // // }

// // // // // // // for (const key in PersonaSeg) {
// // // // // // //   if (Object.hasOwnProperty.call(PersonaSeg, key)) {
// // // // // // //     console.log(`Prop Nuevo ${key} Valor Nuevo ${PersonaSeg[key]}`);  
// // // // // // //   }
// // // // // // // }


// // // // // // // function contarCaracteres(texto) {
// // // // // // //   // Contar caracteres
// // // // // // //   var numeroCaracteres = texto.length;
// // // // // // //   // Contar palabras
// // // // // // //   var palabras = texto.match(/\b[-?(\w+)?]+\b/gi);
// // // // // // //   var numeroPalabras = palabras ? palabras.length : 0;

// // // // // // //   return {
// // // // // // //       caracteres: numeroCaracteres,
// // // // // // //       palabras: numeroPalabras
// // // // // // //   };
// // // // // // // }

// // // // // // // // Ejemplo de uso
// // // // // // // var textoEjemplo = "¡Esto es un ejemplo de conteo de caracteres y palabras!";
// // // // // // // var resultado = contarCaracteres(textoEjemplo);
// // // // // // // console.log("Número de caracteres:", resultado.caracteres);
// // // // // // // console.log("Número de palabras:", resultado.palabras);

// // // // // // // console.log("-------------   | |  --------------------  |  -----");

// // // // // // // let iterable = [10, 20, 30, 40, 50];

// // // // // // // for (let value in iterable) {
// // // // // // //   value += 1;
// // // // // // //   console.log(value);
// // // // // // // }
// // // // // // // // 11
// // // // // // // // 21
// // // // // // // // 31

// // // // // // // let arr = [3, 5, 7];
// // // // // // // arr.foo = "hola";
// // // // // // // console.log(arr, "Prueba");

// // // // // // // for (let i in arr) {
// // // // // // //   console.log(i); // logs "0", "1", "2", "foo"
// // // // // // // }

// // // // // // // for (let i of arr) {
// // // // // // //   console.log(i); // logs "3", "5", "7"
// // // // // // // }

// // // // // // // // console.clear();

// // // // // // // //  REPASO OPERADOR SPREAD Y PARAMETRO REST

// // // // // // // let Camisas = ["Tommy Hilfiger", "Puma", "Nike", "Lacoste"]
// // // // // // // let Zapatos = ["Velez", "Diesel", "Hugo Boss"]

// // // // // // // let prendas = [...Camisas,...Zapatos];

// // // // // // // console.log(prendas);

// // // // // // // const NuevoArchivo = (a,b,...c) =>{
// // // // // // //        let camisasNuevas = ["Puma", "Nike", "Lacoste"]
// // // // // // //        camisasNuevas.push(a,b)
// // // // // // //        console.log(camisasNuevas);
       
// // // // // // //        c.forEach(e =>{
// // // // // // //          camisasNuevas.push(e)
// // // // // // //         })
// // // // // // //         console.log(camisasNuevas);
// // // // // // // }

// // // // // // // NuevoArchivo("Nautica", "Fils","America", "Quiksilver");

// // // // // // // // OBJETO DATE (FECHA)

// // // // // // // let nfech =  new Date();

// // // // // // // console.log(nfech.toLocaleDateString());
// // // // // // // console.log(nfech.toDateString());
// // // // // // // console.log(nfech);
// // // // // // // console.log(nfech.getDay());
// // // // // // // console.log(nfech.getMonth());
// // // // // // // console.log(nfech.toLocaleString());

// // // // // // // console.log(nfech.getDate());
// // // // // // // console.log(nfech.getDay());
// // // // // // // console.log(nfech.getFullYear());
// // // // // // // console.log(nfech.getMinutes());
// // // // // // // console.log(nfech.toLocaleTimeString());  // para obtener la hora del reloj completa
// // // // // // // console.log(nfech.getTime());


// // // // // // // // console.clear();

// // // // // // // // OBJETO MATH (NUMERICOS)

// // // // // // // console.log(Math.abs(-7.2));  //absoluto
// // // // // // // console.log(Math.ceil(7.2));  //Redondea el numero 
// // // // // // // console.log(Math.floor(7.2));


// // // // // // // console.log(Math.round(7.2)); //REDONDEAR DE 7.5 HACIA ARRIBA
// // // // // // // console.log(Math.sqrt(81)); // RAIZ CUADRADA

// // // // // // // console.log(Math.pow(2,3)); //elevar el numero
// // // // // // // console.log(Math.sign(-2)); // verifica si es negaivo o positivo


// // // // // // // // console.clear();

// // // // // // // let num2 = 2, num3 = 3

// // // // // // // if (num2 > 3 || num3 < 4) {
// // // // // // //   console.log("Excelent!");
// // // // // // // }else{
// // // // // // //   console.log("Mal");
// // // // // // // }


// // // // // // // let nombredc = "ss";

// // // // // // // let muestra = !nombredc;
// // // // // // // console.log(muestra);


// // // // // // // let nuevosAr = [1,2,3,4,5,66,7,8,9];
// // // // // // // const Camisas2 = ["Tommy Hilfiger", "Puma", "Nike", "Lacoste"];

// // // // // // // console.log(nuevosAr[1]);
// // // // // // // // console.log(Camisas2.sort());
// // // // // // // // console.log(Camisas2.unshift("Monastery 2"));
// // // // // // // console.log(Camisas2 , "Eliminados");
        

// // // // // // // console.log(nuevosAr.slice(-2));

// // // // // // // let cadena = "Lorem ipsum dolor sit amet conessd asisi alele. cfcsd fuga dolores dolorem"


// // // // // // // let exRegular = new RegExp("lorem", "ig");
// // // // // // // console.log(exRegular.test(cadena));

// // // // // // // let exRegular2 = /lorem/ig;

// // // // // // // console.log(exRegular.test(cadena));
// // // // // // // console.log(exRegular.exec(cadena));



// // // // // // // // FUNCION ANONIMA AUTOEJECUTABLE
// // // // // // // (function (){
// // // // // // //   console.log("Mi primer IIFE");
// // // // // // // })();


// // // // // // // (function (d,w,c){
// // // // // // //   console.log("Mi segundo IIFE");
// // // // // // //   console.log(d);
// // // // // // //   console.log(w);
// // // // // // //   console.log(c);

// // // // // // // })(document, window, console);

// // // // // // // // Formas de Escribir las funciones anonimas Autoejecutables
// // // // // // // // Clasica
// // // // // // // (function (){
// // // // // // //   console.log("version clasica");
// // // // // // // })();

// // // // // // // // La Crockford (JavaScript The Good Parts)
// // // // // // // ((function (){
// // // // // // //   console.log("Version Crockford");
// // // // // // // }))

// // // // // // // //Unaria
// // // // // // // +function (){
// // // // // // //   console.log("version Unaria");
// // // // // // // }();

// // // // // // // //Facebook
// // // // // // // !function (){
// // // // // // //   console.log("version Facebook");
// // // // // // // }();

// // // // // // // // console.clear();


// // // // // // // // --------------    PROGRAMCION ORIENTADA A OBJETOS (POO)  -------------

// // // // // // // function Animal(nombre, genero){
// // // // // // //   //Atributos
// // // // // // //   this.nombre = nombre;
// // // // // // //   this.genero = genero;
// // // // // // // }

// // // // // // // //Metodos agregados al prototipo de la funcion constructora
// // // // // // // Animal.prototype.sonar = function(){
// // // // // // // console.log("SOnidos de animal");
// // // // // // // }

// // // // // // // Animal.prototype.saludar = function (){
// // // // // // //   console.log(`Hola me llamo ${this.nombre}`);
// // // // // // // }

// // // // // // // //Herencia Prototipica
// // // // // // //  function Perro(nombre, genero, tamanio){
// // // // // // //   this.super = Animal;
// // // // // // //   this.super(nombre,genero)
// // // // // // //   this.tamanio = tamanio;
// // // // // // //  }

// // // // // // //  //Perro esta heredando de Animal
// // // // // // //     Perro.prototype = new Animal()
// // // // // // //     Perro.prototype.constructor = Perro;
    
// // // // // // //     //Sobreescritura de metodos del prototipo padre en el hijo
// // // // // // //     Perro.prototype.sonar = function(){
// // // // // // //       console.log("Soy un perro y estoy listo");
// // // // // // //     }

// // // // // // //     Perro.prototype.ladrar = function(){
// // // // // // //         console.log("Guauuuu guauuu");
// // // // // // //     }

// // // // // // //   const snoopy = new Perro("Snoopy", "Genero", "Mediano"),
// // // // // // //   lolaBunny = new Animal("Lola Bonny", "Hembra");

// // // // // // //   console.log(snoopy);
// // // // // // //   console.log(lolaBunny);
    
// // // // // // //   snoopy.sonar();

// // // // // // //   class Persona {
// // // // // // //     constructor(nombre, edad, celular){
// // // // // // //       this.nombre = nombre;
// // // // // // //       this.edad = edad;
// // // // // // //       this.celular = celular;
// // // // // // //       this.raza = null;
// // // // // // //     }

// // // // // // //   hablar(){
// // // // // // //     console.log("Hola Soy una Persona");
// // // // // // //     }

// // // // // // //   cantar(){
// // // // // // //     console.log("Estoy cantando");
// // // // // // //     }

// // // // // // //   }

// // // // // // //   class Alumno extends Persona {

// // // // // // //     constructor(nombre, edad, celular, curso){
// // // // // // //           super(nombre, edad, celular);
// // // // // // //           this.curso = curso;
// // // // // // //     }

// // // // // // //     hablar(){
// // // // // // //       console.log("Soy un alumno");
// // // // // // //     }

// // // // // // //     estudiar(){
// // // // // // //       console.log("Estoy estudiando" );
// // // // // // //     }

// // // // // // //     // Metodo estatico que puede ejecutarse sin necesidad de instanciar la clase
// // // // // // //     static muestraPersona(){
// // // // // // //     console.log("El ser humano tiene 5 personalidades, cualidades y valores");
// // // // // // //     }
    
// // // // // // //       get getraza(){
// // // // // // //             return this.raza; 
// // // // // // //       }

// // // // // // //       set setRaza(raza){
// // // // // // //         return this.raza = raza
// // // // // // //       }

// // // // // // //   }



// // // // // // //   Alumno.muestraPersona();


// // // // // // //   const alejo = new Alumno("alejo", "22", "3104736655", "Desarrollo Web");

// // // // // // //   console.log(alejo);
// // // // // // //   alejo.hablar();
// // // // // // //   console.log(alejo.getraza);
// // // // // // //   alejo.setRaza = "Pitbull"
// // // // // // //   console.log(alejo.getraza);

// // // // // // //   // console.clear();
// // // // // // //   //Primer Ejercicio
// // // // // // //   /* 
// // // // // // //   1) Programa una función que cuente el número de caracteres de una cadena
// // // // // // //    de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// // // // // // //   */
// // // // // // // function numeroCaracteres(texto = ""){
  
// // // // // // //        return numcara = texto.length;
// // // // // // // }
// // // // // // // console.log("El caracter tiene ",numeroCaracteres("Hola mundo"), " Caracteres");

// // // // // // //          // Con funcion flecha
// // // // // // // const longuitudCaracter = (cadena) => {(!cadena) ? console.warn("Texto vacio")
// // // // // // //  : console.log(`El numero de caracter es ${cadena.length}`);}

// // // // // // //  longuitudCaracter()
// // // // // // //  longuitudCaracter("Hola mundo")


// // // // // // // //Segundo Ejercicio
// // // // // // // /* Programa una función que te devuelva el texto recortado según el
// // // // // // //  número de caracteres indicados, pe. miFuncion("Hola Mundo", 4)
// // // // // // //   devolverá "Hola".*/

// // // // // // // function devolverTexto(texto, numCaracter){
// // // // // // //         let Textodivido = texto.slice(0,numCaracter);
// // // // // // //         return Textodivido;
// // // // // // // }

// // // // // // // console.log(devolverTexto("Hola Mundo",4));

// // // // // // // // Tercer Ejercicio
// // // // // // // /*
// // // // // // // 3) Programa una función que dada una String te devuelva un Array
// // // // // // //  de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ')
// // // // // // // */

// // // // // // // const TextoSeparado = (texto, caracter) => (!texto) ? 
// // // // // // // console.warn("No has colocado texto") : console.log(texto.split(caracter));


// // // // // // // TextoSeparado()
// // // // // // // TextoSeparado("Hla que tal", " ");

// // // // // // // // Cuarto Ejercicio
// // // // // // // /**
// // // // // // // 4) Programa una función que repita un texto X veces, 
// // // // // // // pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. 
// // // // // // //  */

// // // // // // // function repetirtexto(tex,rep){
// // // // // // //        return (!tex) ? console.warn("No has escrito el texto") : (Math.sign(rep) == -1) ? 
// // // // // // //        console.warn("El numero no puede ser negativo") : tex.repeat(rep)
// // // // // // // }
// // // // // // // console.log(repetirtexto());
// // // // // // // console.log(repetirtexto("Hola mundo", -3));

// // // // // // // console.log(repetirtexto("Hola mundo", 3));



// // // // // // // var cadena1 = "La mañana se nos echa encima.";
// // // // // // // var cadena2 = cadena1.slice(10, 15);
// // // // // // // console.log(cadena2);
// // // // // // // console.log(cadena1.indexOf());

// // // // // // // /**
// // // // // // // 5) Programa una función que invierta las palabras de una cadena de texto,
// // // // // // //  pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". 
// // // // // // //  */
// // // // // // // console.clear();

// // // // // // // console.log(Math.pow(2,3));

// // // // // // // const array123 = "Hola Mundo";
// // // // // // // console.log(array123.split("").reverse().join(""));

// // // // // // // /*6) Programa una función para contar el número de veces que se repite 
// // // // // // // una palabra en un texto largo,pe. miFuncion("hola mundo adios mundo", "mundo") 
// // // // // // // devolverá 2.*/

// // // // // // // function letrasIguales(texto, repetido) {
// // // // // // //   i = 0;
// // // // // // //   let contador = 0;
// // // // // // //   while(i != -1){
// // // // // // //     i = texto.indexOf(repetido,i);
// // // // // // //     if (i !== -1) {
// // // // // // //       i++;
// // // // // // //       contador = contador + 1;
// // // // // // //     }
// // // // // // //   } 
// // // // // // //   return console.info(`La palabra ${repetido} se encuentra ${contador} veces`)
// // // // // // // }

// // // // // // // letrasIguales("Hola mundo Adui mundo", "mundo");

// // // // // // // // var indices = [];
// // // // // // // // var array = ["a", "b", "a", "c", "a", "d"];
// // // // // // // // var element = "a";
// // // // // // // // var idx = array.indexOf(element);
// // // // // // // // while (idx != -1) {
// // // // // // // //   indices.push(idx);
// // // // // // // //   idx = array.indexOf(element, idx + 1);
// // // // // // // // }
// // // // // // // // console.log(indices);
  


// // // // // // // // console.clear();
// // // // // // // console.log("------------------  INDEX OF");
// // // // // // // var array =  "Hola mundo. si mi mundo";

// // // // // // // console.log(array.indexOf("mundo",2));
// // // // // // // console.log(array.split("").reverse().join(""));


// // // // // // // // console.log(array.indexOf(3,2));

// // // // // // // console.log("------------------  INDEX OF");

// // // // // // // /* 
// // // // // // // 7) Programa una función que valide si una palabra o frase dada, 
// // // // // // // es un palíndromo (que se lee igual en un sentido que en otro),
// // // // // // //  pe. mifuncion("Salas") devolverá true.
// // // // // // // */

// // // // // // // function validarPolindromo(textoPol){
// // // // // // //   let aux = textoPol.split("").reverse().join("").toUpperCase();
// // // // // // //   if (aux == textoPol.toUpperCase()) {
// // // // // // //     return console.log(true);
// // // // // // //   }else{
// // // // // // //     return console.log(false);
// // // // // // //   }

// // // // // // // }

// // // // // // // validarPolindromo("ssssalas");
// // // // // // // validarPolindromo("Salas");

// // // // // // // /* 
// // // // // // // 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
// // // // // // // pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
// // // // // // // */
// // // // // // // const eliminarCaracterer = (texto, patron) => console.info(texto.replace(new RegExp(patron,"ig"),""))

// // // // // // // function eliminarPtron(textos, elimina){
// // // // // // //      let aux = textos.split(",");
// // // // // // //      for (let i = 0; i < aux.length; i++) {
// // // // // // //       if(aux[i] == elimina){
// // // // // // //         let aux2 = aux[i].join("").replace(elimina)
// // // // // // //         console.log(aux2);
// // // // // // //       }  
// // // // // // //      }
// // // // // // // }

// // // // // // // eliminarPtron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

// // // // // // // eliminarCaracterer("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

// // // // // // // /* 
// // // // // // // 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// // // // // // // */

// // // // // // // function obtenerNumAleatorio(){
// // // // // // //       let numAleatorio = Math.round((Math.random() * 1000) +500);
// // // // // // //       console.log(numAleatorio);
// // // // // // // }

// // // // // // // obtenerNumAleatorio();

// // // // // // // /*
// // // // // // // 11) Programa una función que calcule el factorial 
// // // // // // // de un número (El factorial de un entero positivo n, 
// // // // // // // se define como el producto de todos los números enteros positivos desde 1 hasta n),
// // // // // // //  pe. miFuncion(5) devolverá 120.
// // // // // // // */
// // // // // // // console.clear();

// // // // // // // function factorialCapturaR(numero){
// // // // // // //   var contador = 1;
// // // // // // //     for (let i = numero; i > 1; i--){
// // // // // // //         contador =  i * contador;             
// // // // // // //       }
// // // // // // //       console.log(contador);
// // // // // // // }

// // // // // // // factorialCapturaR(5);

// // // // // // // /* 
// // // // // // // 12) Programa una función que determine si un número es primo (aquel que 
// // // // // // //   solo es divisible por sí mismo y 1) o no,pe. miFuncion(7) devolverá true. 
// // // // // // // */

// // // // // // // function numeroPrimo(numero){
// // // // // // //     if (Math.sign(numero) == -1) {
// // // // // // //       console.log("ERROR, NUMERO ES NEGATIVO");
// // // // // // //     } else{
// // // // // // //       let divisible = false;
// // // // // // //       for (let i = 2; i < numero; i++) {
// // // // // // //             if ((numero % i) === 0) {
// // // // // // //               divisible = true;
// // // // // // //               break;
// // // // // // //             }
// // // // // // //       }
// // // // // // //       // console.log("El numero devuelve un",divisible);
// // // // // // //       return divisible;
// // // // // // //     }     
// // // // // // //   }

// // // // // // // console.log(numeroPrimo(7));
// // // // // // //   numeroPrimo(8);
// // // // // // //   numeroPrimo(13);
// // // // // // //   numeroPrimo(200);


// // // // // // // /* 
// // // // // // // 14) Programa una función para convertir grados 
// // // // // // // Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
// // // // // // // */

// // // // // // // function descuentoMonto(numero, grados){
// // // // // // //     if (grados.toUpperCase() == 'C') {
// // // // // // //       let gradosF = (numero * (9/5)) + 32;
// // // // // // //       console.log(`Los grados ${numero}°C convertidos a Fahrenheit es ${gradosF}°F`);
// // // // // // //     } if (grados.toUpperCase() == 'F'){
// // // // // // //       let gradosC = (numero - 32) * 5/9;
// // // // // // //       console.log(`Los grados ${numero}°F convertidos a Fahrenheit es ${gradosC}°C`);
// // // // // // //     }
// // // // // // // }
// // // // // // // descuentoMonto(20,"C");
// // // // // // // descuentoMonto(20,"F");


// // // // // // // /* 
// // // // // // // 15) Programa una función para convertir números de base binaria a decimal y viceversa,
// // // // // // //  pe. miFuncion(100,2) devolverá 4 base 10.
// // // // // // // */

// // // // // // // const convertiNumero = (numeroBi, base) => { 
// // // // // // //   if (base === 2) {
// // // // // // //     return console.log(`${numeroBi} base ${base} = ${parseInt(numeroBi, base)} base 10`); 
// // // // // // //   } else if (base == 10){
// // // // // // //       return console.log(`${numeroBi} base ${base} = ${numeroBi.toString(2)}`);
// // // // // // //   }
// // // // // // // }

// // // // // // // convertiNumero(4,10);
// // // // // // // convertiNumero(6,10);
// // // // // // // convertiNumero(1101,2);

// // // // // // // /* 
// // // // // // //  16) Programa una función que devuelva el monto final después de aplicar un descuento a una
// // // // // // //   cantidad dada,pe. miFuncion(1000, 20) devolverá 800.
// // // // // // // */

// // // // // // // function descuentoFinal(cantidad, descuento) {
// // // // // // //   let resta = (cantidad * descuento) / 100;
// // // // // // //   let valorTotal = cantidad - resta;
// // // // // // //   console.log(`El monto de final de ${cantidad} con el descuento de ${descuento} 
// // // // // // //   es ${valorTotal}`);
// // // // // // // }

// // // // // // // descuentoFinal(1000,20);

// // // // // // // /*
// // // // // // // 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta 
// // // // // // // el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
// // // // // // // */

// // // // // // // const fechadiadeHoy = (fecha) =>{
// // // // // // //   let fechaActual = new Date();
// // // // // // //   let calculo = fechaActual.getFullYear() - fecha.getFullYear();
// // // // // // //   console.log(`Han pasado ${calculo} años desde la fecha ${fecha.toLocaleDateString()}`);
// // // // // // // }

// // // // // // // fechadiadeHoy(new Date(1984,4,23));

// // // // // // // /*
// // // // // // // 18) Programa una función que dada una cadena de texto cuente el número de vocales y
// // // // // // //  consonantes,pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// // // // // // // */

// // // // // // // function mumerodeVoca(cadena) {
// // // // // // // let vocales = 0, consonates = 0;

// // // // // // // cadena = cadena.toLocaleLowerCase();
// // // // // // // for (let letra of cadena) {
// // // // // // // if (/[aeiou]/.test(letra)) { 
// // // // // // //   vocales++;
// // // // // // // }else if (/[qwrtyplkjhgfdszxcvbnm]/.test(letra)) {
// // // // // // //   consonates++;
// // // // // // // }
// // // // // // // }

// // // // // // // console.log(`En este texto ${cadena} hay ${vocales} vocales y ${consonates} consonantes`);
// // // // // // // }

// // // // // // // mumerodeVoca("Hola mundo Adui mundo");

// // // // // // // /* 
// // // // // // // 19) Programa una función que valide que un texto sea un nombre válido, 
// // // // // // // pe. miFuncion("Jonathan MirCha") devolverá verdadero.
// // // // // // // */

// // // // // // // const validarNombre = (nombresV) => {
// // // // // // //       let expReg = /^[A-Za-zÑñ\s]+$/g.test(nombresV);

// // // // // // //       return (expReg) ? console.info(`"${nombresV}", es un nombre valido`) : 
// // // // // // //       console.warn(`"${nombresV}", NO es un nombre valido`);
// // // // // // // }

// // // // // // // validarNombre("Alejo s");

// // // // // // // /* 
// // // // // // // 20) Programa una función que valide que un texto sea un email válido, pe. 
// // // // // // // miFuncion("jonmircha@gmail.com") devolverá verdadero.
// // // // // // // */

// // // // // // // function validarCorreo(correo) {
// // // // // // //   let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);

// // // // // // //   return (expReg) ? console.info(`"${correo}", es un email valido`) : 
// // // // // // //   console.warn(`"${correo}", NO es un email valido`);
// // // // // // // }

// // // // // // // validarCorreo("alejo@mail.co");
// // // // // // // validarCorreo("alejomail.co");

// // // // // // // /* 
// // // // // // // 21) Programa una función que dado un array numérico devuelve otro array con los números 
// // // // // // // elevados al cuadrado,pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
// // // // // // // */

// // // // // // // function devolverArray(array) {
// // // // // // //   let devolverArray = [];  
// // // // // // //   for (const iterator of array) {
// // // // // // //       devolverArray.push(Math.pow(iterator,2))
// // // // // // //     }

// // // // // // //     console.log(devolverArray);
  
// // // // // // // }

// // // // // // // devolverArray([1,4,5]);

// // // // // // // /* 
// // // // // // // 22) Programa una función que dado un array devuelva el número mas alto
// // // // // // //  y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
// // // // // // // */
// // // // // // // const otraformaNumeroAlto = (array) => {
// // // // // // //   console.log(`Numero Mayor: ${Math.max(...array)}\n Numero menor: ${Math.min(...array)}, "Otra forma"`);
// // // // // // // }

// // // // // // // otraformaNumeroAlto([1,4,5,99,-60])


// // // // // // // function devolverNumeromasAlto(arrau2) {
// // // // // // //   let mayor = 0;
// // // // // // //   let menor = 0;
// // // // // // //   for (const ite of arrau2) {
// // // // // // //       if(ite > mayor){
// // // // // // //           mayor = ite;
// // // // // // //       }else if(ite < menor) {
// // // // // // //             menor = ite;
// // // // // // //       }
// // // // // // //   }

// // // // // // //   console.log(`Numero Mayor: ${mayor}\n Numero menor: ${menor}`);
// // // // // // // }

// // // // // // // devolverNumeromasAlto([1,4,5,99,-60]);

// // // // // // // /* 
// // // // // // // 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos 
// // // // // // // en el primero almacena los números pares y en el segundo los impares, pe. 
// // // // // // // miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
// // // // // // // */

// // // // // // // function devuelveArreglosPares (numeroTo){
// // // // // // //       let pares = [], impares = [];
// // // // // // //       let obj = {};

// // // // // // //       for (const iterator of numeroTo) {
// // // // // // //         if(iterator % 2 == 0){
// // // // // // //               pares.push(iterator);
// // // // // // //         } else{
// // // // // // //             impares.push(iterator);
// // // // // // //         }
// // // // // // //       }

// // // // // // //       obj.Pares = pares;
// // // // // // //       obj.Impares = impares;

// // // // // // //       console.log(obj);
// // // // // // // }

// // // // // // // devuelveArreglosPares([1,2,3,4,5,6,7,8,9,0]);

// // // // // // // // OTRA FORMA -----

// // // // // // // const separarImpareyPares = (arr) => {
// // // // // // //   if(arr === undefined) return console.warn("No ingresaste un arreglo de numero");

// // // // // // //   if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

// // // // // // //   if(arr.length == 0) return console.error("el arreglo esta vacio");

// // // // // // //   for (const nume of arr) {
// // // // // // //     if(typeof nume !== 'number') return console.error(`El valor ${nume} ingresado, NO es un numero`);
// // // // // // //   }

// // // // // // //   return console.info({
// // // // // // //     pares: arr.filter(nume => nume % 2 === 0),
// // // // // // //     impares: arr.filter(nume => nume % 2 === 1)
// // // // // // //   })
// // // // // // // }



// // // // // // // /*  
// // // // // // // 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
// // // // // // //  el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma 
// // // // // // //  descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
// // // // // // // */
// // // // // // // console.clear();
// // // // // // // let  nuevol = [1,2,3,4];

// // // // // // // console.log(nuevol.map(el => el));

// // // // // // // function devolverAsc_y_Desc(array) {
// // // // // // //     let devolver = {}, aux = []
// // // // // // //     aux = array;
// // // // // // //     let asecendente = aux.map(el => el).sort();
// // // // // // //     let descend = array.map(el => el).sort().reverse();
// // // // // // //     console.log(aux);
// // // // // // //     devolver.asc = asecendente;
// // // // // // //     devolver.desc = descend;
  
// // // // // // //     console.log(devolver);
// // // // // // // }


// // // // // // // devolverAsc_y_Desc([7,5,7,8,6])

// // // // // // // /* 
// // // // // // // 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. 
// // // // // // // miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
// // // // // // // */

// // // // // // // function eliminarDuplicados(array) {
// // // // // // //  console.log(
// // // // // // //   {
// // // // // // //     array: array,
// // // // // // //     repetidos: array.filter((el,self,index) =>  index.indexOf(el) === self)
// // // // // // //   }
// // // // // // //  ); 
// // // // // // // } 

// // // // // // // eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);


// let al = ["x",2,2,3,2,3, "s"];

// console.log(al.indexOf("s"));

// // // // // // // /* 
// // // // // // // 26) Programa una función que dado un arreglo de números obtenga el promedio, 
// // // // // // // pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
// // // // // // // */

// // // // // // // function promedioDevolver(arrayPro){
// // // // // // //   let suma = 0;
// // // // // // //   // arrayPro.map((ele,index,self) => {
// // // // // // //   //     suma += ele; 
// // // // // // //   // })  
// // // // // // //   arrayPro.forEach((ele,index,self) => {
// // // // // // //             suma += ele;   
// // // // // // //   })
// // // // // // //   console.log({
// // // // // // //     Promedio2: suma/arrayPro.length
// // // // // // //   });
// // // // // // //   // console.log({
// // // // // // //   //     Promedio: suma/arrayPro.length
// // // // // // //   //   }, "ESTAMOS LISTO PROFE");
// // // // // // // }

// // // // // // // promedioDevolver([9,8,7,6,5,4,3,2,1,0]);

// // // // // // // // OTRA FORMA ECMA SCRIPT 6 ACTUALIZADA

// // // // // // // function devolverPromedioNuevo(arrayNuevo) {
// // // // // // //   console.log(
// // // // // // //     arrayNuevo.reduce((total, num1, index, arr) =>{
// // // // // // //       total += num1;
// // // // // // //       if (index === arr.length-1) {
// // // // // // //         return `El promedio de ${arr.join(" + ")} es ${total/arr.length}`
// // // // // // //       }
// // // // // // //                                                  })
// // // // // // //             )
// // // // // // //                                           }

// // // // // // // devolverPromedioNuevo([9,8,7,6,5,4,3,2,1,0]);


// // // // // // // console.clear()
// // // // // // // let titulo = "Alejo Santiago Guerrero";

// // // // // // // if(titulo.length > 100) {
// // // // // // //     console.log("El titulo es mayor a 100 caracteres");
// // // // // // // }else{
// // // // // // //     console.log("el titulo es menor a 100 caracteres");
// // // // // // // }

// // // // // // // console.clear();
// // // // // // // //  ---------------------TEMPORIZADORES ---------------------------------------------------------

// // // // // // // //   console.log('inicio');


// // // // // // // //  -----------------  // SET TIMEOUT -----------------
// // // // // // // //   setTimeout(() =>{
// // // // // // // //     console.log("Ejecuntando un Timeout, se ejecuta una sola vez");
// // // // // // // //   },3000)

// // // // // // // //  ----------- // SET INTERVAL  ---------------

// // // // // // // //   // setInterval(() => {
// // // // // // // //   // console.log("Ejecuntando un setInterval, se ejecuta indefinidamente dependiendo el tiempo colocado");
// // // // // // // //   // },1000)

// // // // // // // //   // --------   DARLE FIN AL TEMPORIZADOR  ----------------------------
// // // // // // // //   let temporizador = setTimeout(() => {
// // // // // // // //     console.log(new Date().toLocaleDateString())
// // // // // // // //   },1000)

// // // // // // // //   clearTimeout(temporizador);
// // // // // // // //   console.log("Despues del fin");

// // // // // // // //   let temporizador2 = setInterval(() =>{
// // // // // // // //     console.log(new Date().toLocaleDateString());
// // // // // // // //   },3000)

// // // // // // // //   clearInterval(temporizador2);
// // // // // // // //   console.log("Despues del setInterval");

// /                         / // // // // // // // ----------------------------------  FIN ---------------------------------------

// // // // // // // // console.log("Asincronos y Event Loop");

//   -----------------------------                            // // // /----------- CALLBACK, EJEMPLO: ------

// // // // // // // // function crearCita(cita, callback){ 
// // // // // // // //   var miCita = "Como yo siempre digo, " + cita;
// // // // // // // //   callback(miCita); // 2
// // // // // // // // }

// // // // // // // // function logCita(cita){
// // // // // // // //   console.log(cita);
// // // // // // // // }

// // // // // // // // crearCita("come tus vegetales!", logCita); // 1

// // // // // // // // Resultado en la consola: 
// // // // // // // // Como yo siempre digo, come tus vegetales!v  

// // // // // // // console.clear();


// //                                       // // // // // // -------------------  PROMESAS  --------------------
// // // // // // // function cuadradoPromise(value) {
// // // // // // //   if(typeof value !== "number"){
// // // // // // //     return Promise.reject(`Error, el valor "${value}" ingresado no es un numero`)
// // // // // // //   }
// // // // // // //   return new Promise((resolve, reject) => {
// // // // // // //     setTimeout(() => {
// // // // // // //       resolve({
// // // // // // //         value,
// // // // // // //         result: value * value
// // // // // // //       });
// // // // // // //     }, 0 | Math.random() * 1000)
// // // // // // //   });
// // // // // // // }

// // // // // // // cuadradoPromise(0)
// // // // // // // .then(obj => {
// // // // // // //   console.log("Inicio Promise");
// // // // // // //   console.log(`Promise: ${obj.value}, ${obj.result}`);
// // // // // // //   return cuadradoPromise(1);
// // // // // // // }).then(obj => {
// // // // // // //   console.log(`Promise: ${obj.value}, ${obj.result}`);
// // // // // // //   return cuadradoPromise(2);
// // // // // // // }).then(obj => {
// // // // // // //   console.log(`Promise: ${obj.value}, ${obj.result}`);
// // // // // // //   return cuadradoPromise(3);
// // // // // // // }).then(obj => {
// // // // // // //   console.log(`Promise: ${obj.value}, ${obj.result}`);
// // // // // // //   return cuadradoPromise(4);
// // // // // // // }).then(obj => {
// // // // // // //   console.log(`Promise: ${obj.value}, ${obj.result}`);
// // // // // // // })


//                                    // // // // // // // --------------  ASYNC , AWAIT -------------------------

// // // // // // // async function asincrono() {
// // // // // // //   try {
// // // // // // //     console.log("INICIO DE ASYNC - declarada");
// // // // // // //     let obj = await cuadradoPromise(0)
// // // // // // //     console.log(`Funcion Asyncdeclarada: ${obj.value}, ${obj.result}`);

// // // // // // //     obj = await cuadradoPromise(1)
// // // // // // //     console.log(`Funcion Asyncdeclarada: ${obj.value}, ${obj.result}`);

// // // // // // //     obj = await cuadradoPromise(2)
// // // // // // //     console.log(`Funcion Asyncdeclarada: ${obj.value}, ${obj.result}`);

// // // // // // //     obj = await cuadradoPromise(3)
// // // // // // //     console.log(`Funcion Asyncdeclarada: ${obj.value}, ${obj.result}`);
// // // // // // //   } catch (error) {
// // // // // // //     console.log(error);
    
// // // // // // //   }
// // // // // // // }

// // // // // // // asincrono()

// // // // // // // // con funcion expresada

// // // // // // // const funcionexpresada = async () => {
// // // // // // //   try {
// // // // // // //     console.log("INICIO DE ASYNC expresada -");
// // // // // // //     let obj = await cuadradoPromise(4)
// // // // // // //     console.log(`Funcion Asyncexpresada: ${obj.value}, ${obj.result}`);

// // // // // // //     obj = await cuadradoPromise(5)
// // // // // // //     console.log(`Funcion Asyncexpresada: ${obj.value}, ${obj.result}`);

// // // // // // //     obj = await cuadradoPromise(6)
// // // // // // //     console.log(`Funcion Asyncexpresada: ${obj.value}, ${obj.result}`);

// // // // // // //     obj = await cuadradoPromise(7)
// // // // // // //     console.log(`Funcion Asyncexpresada: ${obj.value}, ${obj.result}`);
// // // // // // //   } catch (error) {
// // // // // // //     console.log(error);
// // // // // // //   }
// // // // // // // }

// // // // // // // funcionexpresada();


// // // // // // // MIRAR VIDEO DE SOBRE SYMBOLS, PROMESAS, Sets

// /                                               / // // // // // Sets ----------------------------------
// // // // // // let set = new Set([1,2,3,3,5,true,true, "hola", "Al"])
// // // // // // console.log(set);
// // // // // // console.log(set.size);  

// // // // // // console.log("Recorriendo set");
// // // // // // for (iterator of set) {
// // // // // //   console.log(iterator);
// // // // // // }
// // // // // // set.forEach(item => console.log(item));

// // // // // // console.log(set.has("hola"));

                                                    // // // // // // // Maps ------------------------------

// // // // // // const mapa = new Map();
// // // // // //     mapa.set("nombre", "Jon");
// // // // // //     mapa.set("apellido", "MirCha");
// // // // // //     mapa.set("edad", 35);

// // // // // //     console.log(mapa);
// // // // // //     console.log(mapa.size);
// // // // // //     console.log(mapa.has("correo"));
// // // // // //     console.log(mapa.has("nombre"));
// // // // // //     console.log(mapa.get("nombre"));
// // // // // //     mapa.set("nombre", "Jonathan MirCha");
// // // // // //     console.log(mapa.get("nombre"));
// // // // // //     mapa.delete("apellido");

// // // // // //     mapa.set(19, "diecinueve");
// // // // // //     mapa.set(false, "falso");
// // // // // //     mapa.set({}, {});
// // // // // //     console.log(mapa);

// // // // // //     for (let [key, value] of mapa) {
// // // // // //       console.log(`Llave: ${key}, Valor:${value}`);
// // // // // //     }

// // // // // //     const mapa2 = new Map([
// // // // // //       ["nombre", "kEnAi"],
// // // // // //       ["edad", 7],
// // // // // //       ["animal", "perro"],
// // // // // //       [null, "nulo"]
// // // // // //     ]);

// // // // // //     console.log(mapa2);

// // // // // //     const llavesMapa2 = [...mapa2.keys()];
// // // // // //     const valoresMapa2 = [...mapa2.values()];

// // // // // //     console.log(llavesMapa2);
// // // // // //     console.log(valoresMapa2);



// // /                                               / // // // // - ------------------------  GENERADORES

// // // // //  function* iterable(){
// // // // //   yield "Hola";
// // // // //   console.log("Hola consola");
// // // // //   yield "Hola 2";
// // // // //   console.log("Seguimos con mas instrucciones de nuestro codigo");
// // // // //   yield "Hola 3";
// // // // //   yield "Hola 4";
// // // // //  }

// // // // //  const arr = [...iterable()];
// // // // //  console.log(arr);

// // // // //  function cuadrado(valor){
// // // // //   setTimeout(() => {
// // // // //     console.log({valor, resultado: valor*valor});
// // // // //   }, Math.random()*1000);

// // // // //   return {
// // // // //     valor,
// // // // //     resultado: valor*valor
// // // // //   }
// // // // //  }

// // // // //  function* generador(){
// // // // //   console.log("Inicia generator");
// // // // //   yield cuadrado(0)
// // // // //   yield cuadrado(2)
// // // // //   yield cuadrado(4)
// // // // //   yield cuadrado(8)
// // // // //  }

// // // // //  let gen = generador();
// // // // //  for (const I of gen) {
// // // // //   console.log(I);
// // // // //  }

// // // // const persona = {
// // // //   nombre: "",
// // // //   apellido: "",
// // // //   edad: 0
// // // // }

// // // // const manejador = {
// // // //   set(obj,prop, valor){
// // // //  obj[prop] = valor
// // // //   }
// // // // }

// // // // const jon = new Proxy(persona,manejador)
// // // // jon.nombre = "Alejandro";
// // // // jon.apellido = "Santiago";
// // // // jon.edad = 22;


// // // // console.log(jon); 

                           //   // --------------    THIS  -------------------------------------
// // // console.log(this);
// // // console.log(window);

// console.log(this == window);
// // // this.nombre = "Contexto Global";  
// // // console.log(this.nombre);

// // // function imprimir() {
// // //     console.log(this.nombre);
// // // }

// // // imprimir();

// // // const obj = {
// // //     nombre: "Contexto Objeto",
// // //     imprimir
// // // }

// // // obj.imprimir();

// // // const obj2 = {
// // //     nombre: "Contexto Objeto 2",
// // //     imprimir
// // // }

// // // obj2.imprimir();

// // // const obj3 = {
// // //     nombre: "Contexto Global 3",
// // //     imprimir: ()=> {
// // //         console.log(this.nombre);
// // //     }
// // // }

// // // obj3.imprimir(); 



                    // // // // -------------------      APPLY ,  BIND,   CALL    --------------------

// // console.log(this);
// // this.lugar = "Contexto Global";

// // function saludar(saludo, aquien){
// //     console.log(`${saludo} ${aquien} desde el ${this.lugar}`);
// // }

// // saludar();

// // const obj = {
// //     lugar: "Contexto Objeto"
// //     }

// // saludar.call(obj, "Hola", "Jon");
// // saludar.call(null, "Hola", "Jon");

// // saludar.apply(obj, ["Adios", "Mircha"]); 
// // saludar.apply(null, ["Adios", "Mircha"]);

// // const persona = {
// //     nombre: "Jon",
// //     saludar: function() {
// //         console.log(`Hola ${this.nombre}`);
// //     }
// //         }

// // persona.saludar();


// // const otraPersona = {
// //     saludar: persona.saludar.bind(persona)
// // }

// // otraPersona.saludar();

// //                                ____|-------------- JSON -----------------|___

// // const JsonA = {
// //     "cadena": "Jon",
// //     "numero": "35",
// //     "booleano": "true",
// //     "arreglo": ["correr", "programar", "cocinar"],
// //     "objeto":{
// //         "twitter": "@alejo",
// //         "email": "alejo@gmail.com"
// //              },
// //     "nulo": null
// //             }

// // const lrrap = [1,2,3,5,7,4,12];

// // console.log(JSON);
// // console.log(JSON.parse("{}"));
// // console.log(JSON.parse("[]"));
// // console.log(JSON.parse("[1,2,3,4,5]"));
// // console.log(JSON.parse(`[${lrrap}]`));
// // console.log(`${lrrap}`);
// // console.log(JSON.stringify(JsonA));
// // console.log(JSON.stringify(lrrap));


// //                                            -------------   VOZ DE JS  ---------------
// // let texto = "Bienvenido Kevin"

// // const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
// // // hablar(texto);

//                                    // -----------------------   WEB API  --------------------
// // console.log("********** Elementos del Documento ************");
// // console.log(window.document);
// // console.log(document);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.documentElement);
// // console.log(document.doctype);
// // console.log(document.characterSet);
// // console.log(document.title);
// // console.log(document.links);
// // console.log(document.images);
// // console.log(document.forms);
// // console.log(document.styleSheets);
// // console.log(document.scripts);
// // console.log(document.getSelection().toString()); 

// // //                                  --------------- NODOS ELEMENTOS Y SELECTORES -------------------------
// // console.log(document.getElementsByName("nombre"))
// // console.log(document.getElementsByTagName("a"));
// // console.log(document.getElementsByClassName("card"));
// // console.log(document.getElementById("menu"));
// // console.log(document.querySelector("#menu"), "Por el ID");
// // console.log(document.querySelector(".card"), "Por la Clase");
// // console.log(document.querySelectorAll(".card"));
// // console.log("----------  Numero de Clases card -----------------");
// // console.log(document.querySelectorAll(".card").length);
// // document.querySelectorAll(".card").forEach((el) => console.log(el));
// // console.log(document.querySelectorAll(".cards"));
// // console.log("----------  Clases Figure -----------------");
// // console.log(document.querySelectorAll(".cards figure")); 
// // console.log(document.querySelectorAll(".card")[3]);

// // console.log(document.documentElement.lang);
// // console.log(document.documentElement.getAttribute("lang")); 
// // console.log(document.querySelector(".link-dom").href);
// // console.log(document.querySelector(".link-dom").getAttribute("href"));

// // document.documentElement.setAttribute("lang", "es-MX")
// // console.log(document.documentElement.lang);

// const $lingDOM = document.querySelector(".link-dom")

// // $lingDOM.setAttribute("target", "_blank");
// // $lingDOM.setAttribute("href", "http://youtube.com");
// // console.log($lingDOM.hasAttribute("href"));
// // $lingDOM.removeAttribute("target");

//                      // //---------------- Data-Attributes --------------------------------
// // console.log($lingDOM.getAttribute("data-description"));
// // console.log($lingDOM.dataset);
// // $lingDOM.setAttribute("data-description", "Nuevo Cambio");
// // console.log($lingDOM.dataset.description);
// // $lingDOM.dataset.description = "Otro Cambio";
// // console.log($lingDOM.dataset);
// // console.log($lingDOM.hasAttribute("data-id"));
// // console.log($lingDOM.removeAttribute("data-id"));
// // console.log($lingDOM.hasAttribute("data-id"));

// // console.log($lingDOM.style);
// // console.log($lingDOM.getAttribute("style"));
// // console.log($lingDOM.style.backgroundColor);
// // console.log($lingDOM.style.color);
// // console.log($lingDOM.style.textDecoration = 'none');
// // console.log($lingDOM.style.display = 'block');
// // console.log($lingDOM.style.width = '50%');
// // console.log($lingDOM.style.textAlign = 'center');
// // console.log($lingDOM.style.marginLeft = 'auto');
// // console.log($lingDOM.style.marginRight = 'auto');
// // console.log($lingDOM.style.padding = '1rem');
// // console.log($lingDOM.style.borderRadius = '1rem');



// // console.log(getComputedStyle($lingDOM).getPropertyValue("color"));

// ---------------------------------------------- // Variables CSS  ----------------------------------------------
// //  const $html = document.documentElement,
// //        body = document.body;

// //  let color1 = getComputedStyle($html).getPropertyValue("--yellow-color"), color2 = getComputedStyle($html).getPropertyValue("--dark-color");
// //  console.log(getComputedStyle($html).getPropertyValue("--yellow-color"));
// //  console.log(getComputedStyle($html).getPropertyValue("--dark-color"));

// //  body.style.backgroundColor = color2;
// //  body.style.color = color1;

// //  $html.style.setProperty("--dark-color","pink");
// //  color2 = getComputedStyle($html).getPropertyValue("--dark-color");
// //  body.style.setProperty("background-color", color2);


// //      -----------------------------------------------  -  ---- CLASES EN JS DOM ---  -  ---------
// const card = document.querySelector(".card");
// console.log(card);
// console.log(card.className);
// console.log(card.classList);
// console.log(card.classList.contains("rotate-45"));
// card.classList.add("rotate-45");
// console.log(card.classList.contains("rotate-45"));
// console.log(card.classList);
// console.log(card.className);
// card.classList.remove("rotate-45");
// console.log(card.classList);
// card.classList.toggle("rotate-45");
// console.log(card.classList.contains("rotate-45"));
// card.classList.toggle("rotate-45");
// console.log(card.classList.contains("rotate-45"));
// card.classList.toggle("rotate-45");
// console.log(card.classList.contains("rotate-45"));
// card.classList.replace("rotate-45","rotate-135");
// card.classList.add("opacity-80", "sepia");
// card.classList.remove("opacity-80", "sepia");
// card.classList.remove("rotate-45","rotate-135");
// card.classList.toggle("opacity-80", "sepia");


// --------------- ------------------------------------         ----// // INSERTAR TEXTO A HTML  -----------------------
const textDom = document.getElementById("que-es");
console.log(textDom);

let text = `
  <p> El modelo de objetos del documento (<b><i>DOM - Document Object Model</i></b>) 
  es una API para documentos HTML y XML.
  </p>
  <p>
  Este proveé una representacion estructural del documento, permitiendo modificar su 
  contenido y presentacion visual mediante codigo JS
  </p>
  <mark>
  Este proveé una representacion estructural del documento, permitiendo modificar su 
  contenido y presentacion visual mediante codigo JS
  </mark>
  `;
  // textDom.innerText = text;
  // textDom.textContent = text;
  textDom.innerHTML = text;
  // textDom.outerHTML = text;
  console.log(textDom);

              // //   //                ---------------------------------- RECORRIENDO EL DOM --------------------------------

// //   const $cards = document.querySelector(".cards");
// //   const $cardsAL = document.querySelectorAll("figure");


// //   console.log($cards);
// //   console.log($cardsAL);
// //   console.log($cards.children);
// //   console.log($cards.children[2]);
// //   console.log($cards.parentElement);
// //   console.log($cards.firstElementChild);
// //   console.log($cards.lastElementChild);
// //   console.log($cards.previousElementSibling);
// //   console.log($cards.nextElementSibling);
// //   console.log($cards.children[3].closest("section"));
// //   console.log($cards.closest("div"));

// const $figure = document.createElement("figure"),
//       $img = document.createElement("img"),
//       $figcaption = document.createElement("figcaption"),
//       $figcaptionText = document.createTextNode("Animals"),
//       $figure2 = document.createElement("figure"),
//       $cards = document.querySelector(".cards");

//       $img.setAttribute("src","https://img.freepik.com/foto-gratis/leon-melena-arcoiris-ojos-azules_1340-39421.jpg")
//       $img.setAttribute("alt","Leon")
//       $figure.className = "card";
//       $figure.appendChild($img);
//       $figcaption.appendChild($figcaptionText);
//       $figure.appendChild($figcaption);
//       $cards.appendChild($figure);
//       $cards.appendChild($figure2);

//       $figure2.innerHTML = `
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-7YwWXIy3mGbNtCZsm52Wblz4G5YXVfiaQ&usqp=CAU" alt="People">
//       <figcaption>People</figcaption>
//       `

//       const especies = ["loro", "perros", "gatos", "ovejas"]
//       $ul1 = document.createElement("ul");
//       document.body.appendChild($ul1);

//       especies.forEach(el =>{ 
//           const $li = document.createElement("li")
//           $li.textContent = el;
//           $ul1.appendChild($li)
//                       })

//       const carros = ["yamaha", "audi", "chevrolet", "renault"]
//       $ul2 = document.createElement("ul");    
//       document.body.appendChild($ul2);      
    
//       carros.forEach((el) => ($ul2.innerHTML +=  `<li>${el}</li>`));
      
// //                                                                 ----------------------------------   FRAGMENTOS  -----------
//                  const meses = [
//                   "EEnero",
//                   "FEnero",
//                   "AAEnero",
//                   "EEAAAnero",
//                   "EEnerdDo",
//                   "EEneroSS",
//                   "Abril",
//                   "Diciembre",
//                   "Noviembre",
//                  ],
//                  $ul3 = document.createElement("ul")
//                  $fragmento = document.createDocumentFragment();
                 
//                  meses.forEach(el => {
//                   const $li4 = document.createElement("li");
//                   $li4.textContent = el;
//                   $fragmento.appendChild($li4)
//                  })
//                  $ul3.appendChild($fragmento)
//                  document.body.appendChild($ul3)



// //    -                       ---------------------------    TEMPLATE HTML   -----------------------------------------------

      // const $cardss = document.querySelector(".cards"),
      // $template = document.getElementById("template-card").content,
      // $fragment = document.createDocumentFragment();

      // cardContent = [

      //   {
      //     title: "Neymar",
      //     img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt7507270b526494f3/638c961f66367a1c91d3f179/NEEEY.jpg?auto=webp&format=pjpg&width=3840&quality=60"
      //   },
      //   {
      //     title: "Messi",
      //     img: "https://www.fcbarcelona.com/fcbarcelona/photo/2022/08/02/ae5252d1-b79b-4950-9e34-6e67fac09bb0/LeoMessi20092010_pic_fcb-arsenal62.jpg"
      //   },
      //   {
      //     title: "Ronaldinho",
      //     img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt85973333bf5c385f/60df20aeeecbe32c83826cfe/e2b7206cf38259fa5b4b340816691b6b8630c6dd.jpg?auto=webp&format=pjpg&width=3840&quality=60"
      //   },
      //   {
      //     title: "CR7",
      //     img: "https://assets.manutd.com/AssetPicker/images/0/0/10/126/687707/Legends-Profile_Cristiano-Ronaldo1523460877263.jpg"
      //   }
      // ]

      // cardContent.forEach(element => {
      //   $template.querySelector("img").setAttribute("src", element.img)
      //   $template.querySelector("img").setAttribute("alt", element.title)
      //   $template.querySelector("figcaption").textContent = element.title

      //   let clone = document.importNode($template, true)
      //   $fragment.appendChild(clone);                 
      // });

      // $cardss.appendChild($fragment); 


        //                       ----------------------------      MODIFICAR ELEMENTOS (Old Style)--------------------

      //   let cards = document.querySelector(".cards"),
      //   nuewCard = document.createElement("figure"),
      //   clonecard = cards.cloneNode(true);

      //   nuewCard.innerHTML = `
      //   <img src="https://placebeard.it/640x360" alt="Any">
      //   <figcaption>Any</figcaption>            
      //   `

      //   nuewCard.classList.add("card");

      // // cards.replaceChild(nuewCard, cards.children[2])
      // // cards.insertBefore(nuewCard, cards.firstElementChild);
      //   cards.removeChild(cards.children[1]);
      //   document.body.appendChild(clonecard);


  //                             -------------------------------- MODIFICAR ELEMENTOS (Cool Style) ------------
                                
       // - InsertAdjacent:
/*
insertAdjacentElement(position,el)
insertAdjacentHtml(position,html)
insertAjacentText(position,text)
*/

      // - Posiciones:
/*
beforebegin(hermano anterior)
afterbegin(primer hijo)
beforeend(ultimo hijo)
afterend(hermano siguiente)
*/


// -----------  insertAdjacentElement(position,el)

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

 $newCard.innerHTML = `
  <img src="https://picsum.photos/200/300/?blur" alt="Any">
  <figcaption>InsertELEment</figcaption> `;

 $newCard.classList.add("card");
$cards.insertAdjacentElement("beforebegin", $newCard);
 



// -----------    insertAdjacentHtml(position,html) y insertAjacentText(position,text) 

const $cards2 = document.querySelector(".cards"),
  $newCard2 = document.createElement("figure");

 let contencard = `
  <img src="https://picsum.photos/200/300?grayscale" alt="Foca">
  <figcaption></figcaption> `;

 $newCard2.classList.add("card");
 $newCard2.insertAdjacentHTML("afterbegin", contencard);
 $newCard2.querySelector("figcaption").insertAdjacentText("afterbegin", "Nuevo Img");
 $cards2.insertAdjacentElement("afterbegin", $newCard2);

// Tambien se puede asi para las posiciones
// $cards.prepend($newCard2)
// $cards.before($newCard2)
// $cards.append($newCard2)



// let obj22 = {
//   TIPORIESGO:"tipo",
//   ZONAINHERENTE:"zona",
//   CODIGO:"codigo",
//   DESCRIPCION:"des",
//   NOMPROCESOS:"procesosR"
//      }

// Using for...of loop

// const obj = { a: 5, b: 7, c: 9 };
// for (const [key, value] of Object.entries(obj22)) {
//   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
// }

// Using array methods
// Object.entries(obj22).forEach(([key, value]) => { // "a: 5", "b 7", "c 9"
// });
// console.log(Object.entries(obj22));

// let nuevo = Object.entries(obj22).map(([ele, ele2])=>(ele))

// console.log(nuevo);

//              -------------------  Manejador de Eventos ---------------------
// function holamundo(){
//     alert("Hola");
//     console.log(Event);
// }

// function saludar(nombre = 'Desconocido'){
//   alert(`Hola ${nombre}`)
// }

// const eventBotonSemantico = document.getElementById("botonEven")
 
// eventBotonSemantico.onclick = holamundo;
// eventBotonSemantico.onclick = function(e){
//   alert("Hola mundo Manejador de Eventos Semantico");
//   console.log(e);
//   console.log(event);
// };

const eventoM = document.getElementById("botonEven-Multiple");


// eventoM.addEventListener("click",holamundo)
eventoM.addEventListener("click", (e)=>{
  alert("Manejador de eventos Multiples");
})

// //  Con parametros

// eventoM.addEventListener("click", function () {
//   saludar()
//   saludar("Alejo")
// });

// // Eliminado Eventos
// const eventoMRemover = document.getElementById("botonEven-Remover");


// const removerFunction =  (e)=> {
//   alert("Removiendo el evento de tipo "+e.type)
//   eventoMRemover.removeEventListener("dblclick",removerFunction)
// }
// eventoMRemover.addEventListener("dblclick",removerFunction)



// --------------------       Flujo de Eventos (Burbuja y Captura) -----------------

// let divEventos = document.querySelectorAll(".eventos-flujo div")
  
// function flujoEventos(e) {
//   console.log("Hola bien Carrito: "+this.className+" el click lo origino "+e.target.className);
//   console.log(this);
//   e.stopPropagation();
// }
// document.addEventListener("click", (e)=>{ 
//   console.log("Click en", e.target);

//   if (e.target.matches(".eventos-flujo a")) {
//     alert("Soy tu amigo y docente digital");
//     e.preventDefault();
//   }
//   })

// console.log(divEventos);
// divEventos.forEach((div)=>{
//   //Fase de burbuja (del mas interno al mas externo)
//   // div.addEventListener("click",flujoEventos, false)
//     //Fase de captura (del mas externo al mas interno)
//     div.addEventListener("click",flujoEventos)
//     // para que solo se de un solo click y ya
//     // div.addEventListener("click",flujoEventos, {
//     //   capture: false,
//     //   once: true,
//     // })
// })


// ||------------------------------------------   DOM: stopPropagation & preventDefault ---------------------||
// let linkEventos = document.querySelector(".eventos-flujo a");
// linkEventos.addEventListener("click", (e) =>{
//   alert("Soy tu amigo y docente digital");
//   console.log("Esto es una prueba");
//   console.log(e);
//   e.preventDefault();
//   e.stopPropagation();
// })

// || -------------- ------------| ---------------  DOM: Delegación de Eventos -------------------| ----------||





// document.addEventListener("click", (e)=>{
//   if (e.target.matches(".eventos-flujo a")){
//     console.log("click en el enlace",e.target);
//     console.log(e);
//     e.preventDefault();
//   }
//   if(e.target.matches(".eventos-flujo div")){
//     flujoEventos(e)
//   }
//     })

//     // BOM: Propiedades y Eventos 

//     window.addEventListener("resize",(e)=>{
//       console.clear();
//       console.log("---------------| EVENTOS RESIZE |------------------");
//       console.log(window.innerWidth);
//       console.log(window.innerHeight);
//       console.log(window.outerHeight);
//       console.log(window.outerWidth);
//       console.log(e);
    
//     })

//     window.addEventListener("scroll", (e)=>{
//       console.clear();
//       console.log("---------------| EVENTOSCROLL |------------------");
//       console.log(window.scrollX);
//       console.log(window.scrollY);
//       console.log(e);
//     })

 
    // console.log(document.readyState);
    // setTimeout(()=>{
    //   console.log(document.readyState);
    
    // },800)
    // setTimeout(()=>{
    //   console.log(document.readyState);

    // },2000)
    
    // LOAD sale cuando el documento HTML este listo con los Script y si espera a que cargue todo el contenido con imagenes y mas.
    
    // window.addEventListener("load",(e) =>{
    //   console.log("---------------| EVENTO Load |------------------");
    //   console.log(window.scrollX);
    //   console.log(window.scrollY);
    //   console.log(e);   
    // })

    // // DOMContentLoaded sale cuando el documento HTML este listo con los Script pero no espera a que cargue el contenido
    // document.addEventListener("DOMContentLoaded" ,(e)=>{
    //   console.log("---------------| EVENTO DOMcontendloaded |------------------");
    //   console.log(window.scrollX);
    //   console.log(window.scrollY);
    //   console.log(e);  
    // })

    //   const AbrirBoton = document.getElementById("abrir-ventana"),
    //   CerrarBoton = document.getElementById("cerrar-ventana"),
    //   imprimirBtn = document.getElementById("imprimir-ventana")

    // let ventana;

    //   AbrirBoton.addEventListener("click", e =>{
    //      ventana =  window.open("https://angularjs.org/")
    //   })
    //   CerrarBoton.addEventListener("click", e =>{
    //       ventana.close();
    //   })
    //   imprimirBtn.addEventListener("click", e =>{
    //       print()
    //   })


    //   console.log("************** Objeto URL (location) **************");

    //   console.log(location);
    //   console.log(location.origin, "----- | origin");
    //   console.log(location.protocol, "----- | protocol");
    //   console.log(location.host, "----- | host");
    //   console.log(location.hostname, "----- | hostname");
    //   console.log(location.port, "----- | port");
    //   console.log(location.href, "----- | href");
    //   console.log(location.hash, "----- | hash");
    //   console.log(location.pathname, "----- | pathname");


    //   console.log("************** Objeto Historial (history) **************");
    //   console.log(history);
    //   // las flechitas de los navegadores de devolverse y pasar a la pagina
    //   history.back;
    //   history.forward;
    //   history.go(-1);

      
    //   console.log("************** Objeto Navigator (navigator) **************");
    //   console.log(navigator);
    //   console.log(navigator.connection);
    //   console.log(navigator.geolocation);
    //   console.log(navigator.mediaDevices);
    //   console.log(navigator.mimeTypes);
    //   console.log(navigator.onLine);
    //   console.log(navigator.serviceWorker);
    //   console.log(navigator.storage);
    //   console.log(navigator.usb);
    //   console.log(navigator.userAgent);

    
      


    





























 




























































 






   


















































 

























































































 













