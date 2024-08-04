//Ejercicio Nº 1


let num1 = 45;
let num2 = 1200;

function sumar(num1, num2) {

  const resultado = num1 + num2;

  return `La suma de ${num1} y ${num2} es ${resultado}`;

}

console.log('Rpta. Ejercicio Nº 1:\n\n', sumar(num1, num2), '\n');



//Ejercicio Nº 2

let number = 105;

function eresPar(number) {

  if (typeof number !== 'number') {
    console.log('\nRpta. Ejercicio Nº 2:\n\nNúmero no válido.');
  } else {

    if (number % 2 === 0) {
      return `El número ${number} es par.`;
    } else {
      return `El número ${number} es impar.`;
    }
  }
}

console.log('\nRpta. Ejercicio Nº 2:\n\n', eresPar(number));


//Ejercicio Nº 3

let numero1 = 50;
let numero2 = 250;
let numero3 = 80;

function mayorde3(numero1, numero2, numero3) {

  let mayor;

  if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
  }
  else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
  }
  else {
    mayor = numero3;
  }

  console.log(`\nRpta. Ejercicio Nº 3:\n\nEl mayor de los 3 números: ${numero1}, ${numero2} y ${numero3} es: ${mayor}`);
}

mayorde3(numero1, numero2, numero3);


//Ejercicio Nº 4

function promedio(ex01, ex02, ex03, ex04) {

  const suma = ex01 + ex02 + ex03 + ex04;

  const promedio = suma / 4;

  console.log(`\nRpta. Ejercicio Nº 4:\n\nNotas: ${ex01}, ${ex02}, ${ex03}, ${ex04}`, `Su promedio: ${promedio}`);

}

promedio(18, 12, 20, 10);


//Ejercicio Nº 5

function areaRectangulo(base, altura) {

  const area = base * altura;

  console.log(`\nRpta. Ejercicio Nº 5:\n\nBase: ${base} Altura: ${altura} Área del Rectángulo: ${area}`);

}

areaRectangulo(240, 180);


//Ejercicio Nº 6

function areaTriangulo(baseT, alturaT) {

  const areaT = (baseT * alturaT) / 2;

  console.log(`\nRpta. Ejercicio Nº 6:\n\nLa base del triángulo es: ${baseT}`);
  console.log(`La altura del triángulo es: ${alturaT}`);
  return `El área del triángulo es: ${areaT}`;
}

console.log(areaTriangulo(80, 20));


//Ejercicio Nº 7

function areaCircunferencia(radio) {

  const pi = 3.14;
  const areaci = pi * radio * radio

  console.log(`\nRpta. Ejercicio Nº 7:\n\nRadio de la circunferencia: ${radio}`);
  console.log(`Área de la circunferencia: ${areaci}`);
}

areaCircunferencia(5);



//Ejercicio Nº 8

function valida(chequeo) {

  if (chequeo > 0) {
    console.log(`${chequeo} es número positivo`);
  } else if (chequeo < 0) {
    console.log(`${chequeo} es número negativo`);
  } else {
    console.log(`${chequeo} El Número es cero.`);
  }
}


const num = prompt(`Determinando si un número es positivo, negativo o 0

Número a validar:`);

valida(num);



//Ejercicio Nº 9

function menor(num01, num02) {

  if (num01 < num02) {
    console.log(`El número menor es: ${num01}`);
  }
  else if (num02 < num01) {
    console.log(`El número menor es: ${num02}`);
  }
  else {
    console.log('Los números son iguales');
  }
}

const entrada1 = prompt(`Determinando el menor de 2 números:
  
Ingresa el primer número:`);

const entrada2 = prompt('Ingresa el segundo número:');

menor(entrada1, entrada2);


//Ejercicio Nº 10

function esDivisible2(numdiv) {

  if (numdiv % 2 === 0) {
    console.log(`${numdiv} es divisible entre 2`);
  } else {
    console.log(`${numdiv} no es divisible entre 2`);
  }
}

const numdet = prompt(`Determinando si un número es divisible entre 2 o no
  
Ingresa un número:`);

esDivisible2(numdet);


//Ejercicio Nº 11

function laborableOno(nombreDia) {

  const diaSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

  if (nombreDia === diaSemana[5] || nombreDia === diaSemana[6]) {
    console.log(`${nombreDia} es un día considerado fin de semana`);
  } else {
    console.log(`${nombreDia} es un día laborable`);
  }
}

const dia = prompt(`Determinando si un día es laborable o fin de semana
  
Ingrese el nombre de un día de la semana:`);

laborableOno(dia);


//Ejercicio Nº 12

function divisible3y5(numTD) {

  if (numTD % 3 === 0 && numTD % 5 === 0) {
    console.log(`${numTD} es divisible por 3 y 5`);
  }
  else {
    console.log(`${numTD} no es divisible por 3 y 5`);
  }
}

const inputnum = prompt(`Determinando si un número es divisible por 3 y 5
  
Ingresa un número:`);

divisible3y5(inputnum);


//Ejercicio Nº 13

function multiplo2y3(numDT) {

  const multi2 = numDT % 2 === 0;
  const multi3 = numDT % 3 === 0;

  if (multi2 && multi3) {
    console.log(`${numDT} es múltiplo de 2 y 3`);
  }
  else if (multi2) {
    console.log(`${numDT} es múltiplo de 2`);
  }
  else if (multi3) {
    console.log(`${numDT} es múltiplo de 3`);
  }
  else {
    console.log(`${numDT} no es múltiplo de 2 ni de 3`);
  }
}

const inputNumDT = prompt(`Determinando si un número es múltiplo de 2 y 3

Ingresa un número:`);

multiplo2y3(inputNumDT);


//Ejercicio Nº 14

const anioVigente = 2024;

function calcEdad(anioNacimiento) {

  const edad = anioVigente - anioNacimiento;

  console.log(`La edad del postulante es ${edad} años`);
}

const inputyear = prompt(`Calculando edad del postulante
  
¿Cuál es tu año de nacimiento?`);

calcEdad(inputyear);



//Ejercicio Nº 15

function bono(anioTrabajado) {

  const bonoTrab = ["$ 100", "$ 200", "$ 300", "$ 400", "$ 500"];

  if (anioTrabajado > 5) {
    console.log(`Su bono es de: $ 1000`);
  } else {
    console.log(`Su bono es de: ${bonoTrab[anioTrabajado - 1]}`);
  }
}

const detBono = prompt(`Determinando Bono x años trabajados 
  
Ingrese el número de años trabajados:`);

bono(detBono);


//Ejercicio 16

function aptoVotacion(anioNac, mesNac, diaNac) {

  const anioElecciones = 2026;
  const mesElecciones = 4;
  const diaElecciones = 26;

  let edad = anioElecciones - anioNac;

  if (edad > 18) {
    console.log(`Estas apto para votar`);
  }
  else if (edad == 18 && mesNac >= mesElecciones && diaNac >= diaElecciones) {
    console.log(`Estas apto para votar`);
  }
  else {
    console.log(`No estas apto para votar`);
  }

}

const anioNac = prompt(`Determinando si es apto para votar
  
Ingresa año de nacimiento:`);
const mesNac = prompt('Ingresa mes de nacimiento[1-12]:');
const diaNac = prompt('Ingresa día de nacimiento[1-31]:');

aptoVotacion(anioNac, mesNac, diaNac);