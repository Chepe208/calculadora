// Función para sumar dos números
function sumar(num1, num2) {
  return num1 + num2;
}

// Función para restar dos números
function restar(num1, num2) {
  return num1 - num2;
}

// Función para multiplicar dos números
function multiplicar(num1, num2) {
  return num1 * num2;
}

// Función para dividir dos números
function dividir(num1, num2) {
  if (num2 === 0) {
    return "Error: división por cero";
  }
  return num1 / num2;
}

function factorial(n) {
  if (n < 0) return "Error: no existe factorial de negativos";
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Funcion para tener el exponente de un numero
function exponente(base, exp) {
  return Math.pow(base, exp);
}

// Funcion para tener la raiz de un numero
function raizCuadrada(num) {
  if (num < 0) return "Error: no existe raíz cuadrada de negativos";
  return num ** 0.5;
}


// Función principal del programa
function calculadora() {
  var opcion = prompt(
    "Elija una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Factorial\n6. Exponente\n7. Raíz cuadrada"
  );
  var num1 = parseFloat(prompt("Ingrese el primer número:"));
  var num2, resultado;

  if (opcion !== "5" && opcion !== "7") {
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
  }

  switch (opcion) {
    case "1":
      resultado = sumar(num1, num2);
      break;
    case "2":
      resultado = restar(num1, num2);
      break;
    case "3":
      resultado = multiplicar(num1, num2);
      break;
    case "4":
      resultado = dividir(num1, num2);
      break;
    case "5":
      resultado = factorial(num1);
      break;
    case "6":
      var exponenteNum = parseFloat(prompt("Ingrese el exponente:"));
      resultado = exponente(num1, exponenteNum);
      break;
    case "7":
      resultado = raizCuadrada(num1);
      break;
    default:
      resultado = "Opción no válida";
      break;
  }

  alert("El resultado es: " + resultado);
}

// Llamar a la función principal
calculadora();