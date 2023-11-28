/* 5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.
 */

let tiempoRef = Date.now();
let cronometrar = false;
let acumulado = 0;

function iniciar() {
  cronometrar = true;
}

function pausar() {
  cronometrar = false;
}

function resetear() {
  acumulado = 0;
}
setInterval(() => {
  let tiempo = document.getElementById("tiempo");
  if (cronometrar) {
    acumulado += Date.now() - tiempoRef;
  }
  tiempoRef = Date.now();
  tiempo.innerHTML = formatearMS(acumulado);
}, 1000 / 60);

function formatearMS(tiempo_ms) {
  let MS = tiempo_ms % 1000;
  let St = Math.floor((tiempo_ms - MS) / 1000);
  let S = St % 60;
  let M = Math.floor((St / 60) % 60);
  let H = Math.floor(St / 60 / 60);
  Number.prototype.ceros = function (n) {
    return (this + "").padStart(n, 0);
  };
  return H.ceros(2) + ":" + M.ceros(2) + ":" + S.ceros(2) + "." + MS.ceros(3);
}
