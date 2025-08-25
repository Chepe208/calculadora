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

  alert(
    "la operacion es " +
      opcion +
      " el primer valor es " +
      num1 +
      " el segundo valor es " +
      num2
  );
}

// Llamar a la función principal
calculadora();