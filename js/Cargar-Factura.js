function Carga() {
    let facturas = JSON.parse(localStorage.getItem("facturas")) || [];
    var texto= document.getElementById('Dinero')
    for (let index = 0; index < facturas[0].subtotales.length; index++) {
        var parrafo = document.createElement("div")
        parrafo.innerHTML = `<p>${facturas[0].elementos[index]}:<br> ${facturas[0].cantidades[index]} <br> $${facturas[0].subtotales[index]}</p> `

texto.appendChild(parrafo);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    Carga();
  });