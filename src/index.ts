let btnEnviar = document.getElementById("enviar");
let dato1 = document.getElementById("dato1");
btnEnviar.addEventListener("click", () => {
  switch (Number(dato1.value)) {
    case 1:
      console.log("entregar medalla de oro");
      break;
    case 2:
      console.log("entregar medalla de plata");
      break;
    case 3:
      console.log("entregar medalla de bronce");
      break;
    default:
      console.log("entregar mención de participación");
  }
});
