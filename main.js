/******Tipo de dato Set***********/
const data = new Set();
data.add("Juan Carlos");
data.add("Coronel");

console.log(data);














/*************Tipo d datos Maps************/
// const lista = new Map();
// lista.set("Nombre", "Juan");
// lista.set("aPELLIDO", ["Coronel", "Rodriguez"]);
// lista.delete("aPELLIDO");
// console.log(lista);








// 



/*Tipo de dato Objeto*/
// const informacion = {
//     personal: {
//         edad: 36,
//         nombre: "Juan Carlos",
//         altuta: 1.80
//     },
//     vivienda: {
//         dirrecion: "Calle 35",
//         pais: "Colombia",
//         departamento: "Santander",
//         lan: -7554.545,
//         lon: 546.468
//     },
//     motrar(){
//         return `${this.personal.nombre} * ${this.personal.edad}`;
//     }
// };
// informacion.personal.nombre = "Juan Carlos Coronel";
// console.log(informacion.motrar());
// console.log(informacion);









// /*Tipo de dato null y undefined*/
// let variableExistente = null;
// let variableNoExistente = undefined;

// console.log(typeof(variableExistente));
// console.log(typeof(variableNoExistente));














/*Tipo de dato Bolean*/
// let soySuProfesor = flase;
// let soyUnEstudiante = true;
// console.log(`Verdadero: ${soySuProfesor} Falso: ${soyUnEstudiante}`);














/*Tipo de datos Number*/
// let edad = 36;
// let altura = 1.80;

// let moneda = Intl.NumberFormat("de-DE", {style: "currency", currency: "COP"}).format(1000);

// console.log(`
//     Edad : ${edad},
//     Altura: ${altura},
//     Moneda: ${moneda}
// \n`);














/*Tipo de datos String*/
// let primerNombre = "Juan";
// let segundoNombre = 'Carlos';
// let apellidos = `Coronel Rodriguez`;

// console.log(primerNombre, segundoNombre, apellidos);
// console.log(primerNombre+' "'+"'"+toString(555).value+"\\n'"+'"');
// console.log(segundoNombre.concat(apellidos));
// console.log(`${primerNombre} "'${segundoNombre}'" `);














// let nombre = `Juan Carlos Coronel Rodriguez`;

/****Dato almacenado en el cache del navegador 'localStorage' ****/
// localStorage.setItem("Dato", "Libro de cocina");
// let recuperar = localStorage.getItem("Dato");
// console.log(recuperar);


/****** Constantes en JS ********/
// const libros = 'Libro de cocina';
// // libros = "Matematica";
// console.log(libros);


/*******Declaracion de tipo de datos heredado del objeto*****/
// let numero = new Number(1000000);
// let nombre = new String("Hola");
// console.log(numero);











// // document.getElementById("botonCerrar")

// //Abrir Ventana
// document.querySelector("#mostrarVentana").addEventListener("click", (e)=>{
//     document.querySelector("#ventana").show();
// })

// //Cerrar Ventana
// document.querySelector("#botonCerrar").addEventListener("click", (e)=>{
//     document.querySelector("#ventana").close();
// })



