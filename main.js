let usuario = prompt("Ingresa tu nombre");
const opcion1 = "1 - Recargar tu cuenta con 50 pesos";
const opcion2 = "2 - Salir";
const salir = true;
const reinicio = true;

if (usuario != "") {
  alert(`Bienvenido ${usuario}`)
  alert(`Este es el menu de servicios de tu operador movil`)
} else {
  alert("Usuario anonimo")
  usuario = "Usuario anonimo"
}


function a() {
  const comprar = Number(prompt(`${usuario}, Quieres:
    ${opcion1}
    ${opcion2}`))
  return comprar

}

let resultado = a();

while (salir) {

  switch (resultado) {
    case 1:
      alert("recarga exitosa");
      alert("gracias por preferirnos");
      salir = false;
      break;

    case 2:
      alert("no recargaste")
      alert("vuelve pronto")
      salir = false;
      break;

    default:
      alert("ingresate una opcion invalida")
      alert("Entra de nuevo al sistema")
      salir = false
      break;
  }

}

