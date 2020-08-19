function validar() {
  var nombre, apellidos, correo, usuario, pass, telefono;
  nombre = document.getElementById("nombre").value;
  apellidos = document.getElementById("apellidos").value;
  correo = document.getElementById("correo").value;
  usuario = document.getElementById("usuario").value;
  pass = document.getElementById("pass").value;
  telefono = document.getElementById("telefono").value;

  if (
    nombre === "" ||
    apellidos === "" ||
    correo === "" ||
    usuario === "" ||
    pass === "" ||
    telefono === ""
  ) {
    alert("Todos los campos son obligatorios");
    return false;
  } else if (nombre.length > 30) {
    alert("El nombre es muy largo");
    return false;
  } else if (apellidos.length > 80) {
    alert("Los apellidos son muy largos");
    return false;
  } else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo) == false
  ) {
    alert("Ingrese un correo electrónico válido");
    return false;
  } else if (correo.length > 100) {
    alert("El correo electrónico es muy largo");
    return false;
  } else if (usuario.length > 20) {
    alert("El usuario es muy largo");
    return false;
  } else if (telefono.length > 15) {
    alert("El teléfono es muy largo");
    return false;
  } else if (/^\d+$/.test(telefono) == false) {
    alert("El teléfono debe contener solo dígitos");
    return false;
  }

  alert(
    "¡Muchas gracias " +
      nombre +
      " por registrarte!\nTu nombre completo es " +
      nombre +
      " " +
      apellidos +
      ", tu nombre de usuario es " +
      usuario +
      " y tu contraseña " +
      pass +
      "."
  );
}
