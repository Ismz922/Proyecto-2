function Carga() {
  let facturas = JSON.parse(localStorage.getItem("facturas")) || [];
  var texto = document.getElementById('Dinero')
  var fecha = document.createElement('h2')
  const fechaActual = new Date();
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1; 
  const anio = fechaActual.getFullYear();

  fecha.innerHTML = `Fecha de la factura: ${dia}/${mes}/${anio}`
  
  var total = document.getElementById('Total')
  for (let index = 0; index < facturas[0].subtotales.length; index++) {
    var parrafo = document.createElement("tr")
    parrafo.innerHTML = `
         <td>${facturas[0].elementos[index]}</td>
         <td>${facturas[0].cantidades[index]}</td>
         <td style="text-align:right;">$${facturas[0].subtotales[index]}</td>
    `
    texto.appendChild(parrafo)
  }
  var totalColocar = document.createElement('h2');
  totalColocar.style.color = '#333';
  totalColocar.style.fontWeight = 'bold';
  totalColocar.innerHTML = `Total: $${facturas[0].total}`;
  total.appendChild(totalColocar);

  var totalColocar3 = document.createElement('h3');
  totalColocar3.style.color = '#555';
  totalColocar3.innerHTML = `Envío: ${facturas[1]}`;
  total.appendChild(totalColocar3);

  var totalColocar2 = document.createElement('h3');
  totalColocar2.style.color = '#555';
  totalColocar2.innerHTML = `Tarjeta: ${facturas[2]}`;
  total.appendChild(totalColocar2);
}

document.addEventListener('DOMContentLoaded', function () {
  Carga();
});