function init() {
  reset();
  var button = document.getElementsByTagName("button");
  var ultimoDigitado = false,
    digitado = false,
    operacion = [],
    fin = false;
  for (i = 0; i < button.length; i++) {
    // button[i].id;
    button[i].addEventListener("click", digitSwitcher);
  }
  function digitSwitcher() {
    console.log("recien entrado");
    ultimoDigitado = digitado;
    if (fin == true || ultimoDigitado == "=" || digitado == "=") {
      ultimoDigitado = 0;
      digitado = 0;
      reset();
    } else if (fin == false) {
      switch (this.id) {
        case "uno":
          digitado = 1;
          disableOperators("no");
          break;
        case "dos":
          digitado = 2;
          disableOperators("no");
          break;
        case "tres":
          digitado = 3;
          disableOperators("no");
          break;
        case "cuatro":
          digitado = 4;
          disableOperators("no");
          break;
        case "cinco":
          digitado = 5;
          disableOperators("no");
          break;
        case "seis":
          digitado = 6;
          disableOperators("no");
          break;
        case "siete":
          digitado = 7;
          disableOperators("no");
          break;
        case "ocho":
          digitado = 8;
          disableOperators("no");
          break;
        case "nueve":
          digitado = 9;
          disableOperators("no");
          break;
        case "cero":
          digitado = 0;
          disableOperators("no");
          break;
        case "division":
          digitado = "/";
          disableOperators("yes");
          break;
        case "multiplicacion":
          digitado = "*";
          disableOperators("yes");
          break;
        case "resta":
          digitado = "-";
          disableOperators("yes");
          break;
        case "suma":
          digitado = "+";
          disableOperators("yes");
          break;
        case "igual":
          digitado = "=";
          resultado();
          break;
        case "reset":
          digitado = "c";
          reset();
          break;
      }
      if (digitado == "c") {
        reset();
      } else if (digitado == "=") {
        resultado();
      } else if (
        document.getElementById("resultado").innerHTML === "0" &&
        digitado != "*" &&
        digitado != "/" &&
        digitado != "+" &&
        digitado != "-"
      ) {
        document.getElementById("resultado").innerHTML = digitado;
      } else {
        document.getElementById("resultado").innerHTML += digitado;
      }
    }
    if (
      document.getElementById("resultado").innerHTML.length == 0 ||
      document.getElementById("resultado").innerHTML == "="
    ) {
      document.getElementById("resultado").innerHTML = 0;
    }
  }
  function resultado() {
    var resultado = eval(document.getElementById("resultado").innerHTML);
    document.getElementById("resultado").innerHTML = resultado;
    fin = true;
  }
  function reset() {
    operacion = 0;
    uptimoDigitado = 0;
    digitado = 0;
    fin = false;
    document.getElementById("resultado").innerHTML = operacion;
  }
  function disableOperators(state) {
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var igual = document.getElementById("igual");
    var operadores = [multiplicacion, division, suma, resta, igual];
    for (i = 0; i < operadores.length; i++) {
      if (state == "yes") {
        operadores[i].disabled = true;
      } else if (state == "no") {
        operadores[i].disabled = false;
      }
    }
  }
}
