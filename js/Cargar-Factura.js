function Carga() {
    let facturas = JSON.parse(localStorage.getItem("facturas")) || [];
    var texto= document.getElementById('Dinero')
    for (let index = 0; index < facturas[0].subtotales.length; index++) {
        var parrafo = document.createElement("div")
        parrafo.innerHTML = `<p><b style="font-size:22px ;">${facturas[0].elementos[index]}:</b><br> ${facturas[0].cantidades[index]} <br> $${facturas[0].subtotales[index]}
        <br>------------------------------------------</p> `

texto.appendChild(parrafo);
    }
    var sub=document.createElement("div")
    sub.innerHTML=`<p>Total: $${facturas[0].total} <br><br>  </p>`
     var info=document.createElement("div")
    info.innerHTML=`<p>Tipo de envío: ${facturas[1]} <br> Numero de tarjeta: ${facturas[2]}</p>`
    texto.appendChild(sub)
    texto.appendChild(info)
}
document.addEventListener('DOMContentLoaded', function () {
    Carga();
  });
