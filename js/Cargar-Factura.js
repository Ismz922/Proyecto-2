function Carga() {
    let facturas = JSON.parse(localStorage.getItem("facturas")) || [];
    var texto = document.getElementById('Dinero')
    var total=document.getElementById('Total')
    for (let index = 0; index < facturas[0].subtotales.length; index++) {
        var parrafo = document.createElement("tr")
        parrafo.innerHTML = `<tr>
         <td>
              <p>${facturas[0].elementos[index]}</p>
            </td>
            <td > 
              <p class="Titulos2">${facturas[0].cantidades[index]}</p>
            </td>
            <td>
              <p  style="margin-left: 10em;">$${facturas[0].subtotales[index]}</p>
            </td>
            </tr> `
texto.appendChild(parrafo)

    }
    var totalColocar=document.createElement('h2')
    var totalColocar2=document.createElement('h2')
    var totalColocar3=document.createElement('h2')
    totalColocar.innerHTML=`Total: $${facturas[0].total}`
    total.appendChild(totalColocar)
    totalColocar3.innerHTML=`Envío: ${facturas[1]}`
    total.appendChild(totalColocar3)
    totalColocar2.innerHTML=`Tarjeta: ${facturas[2]}`
    total.appendChild(totalColocar2)
}
document.addEventListener('DOMContentLoaded', function () {
    Carga();
});
