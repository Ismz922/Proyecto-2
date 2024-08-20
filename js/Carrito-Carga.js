document.addEventListener('DOMContentLoaded', function () {
  displayContactsLocalStorage();
});
function EjecutarCalculo() {
  displayCalculo()
}

const displayContactsLocalStorage = () => {
  const envios = JSON.parse(localStorage.getItem("envios")) || [];
  const contactListLocal = document.getElementById("ConteCarrito");
  displayContacts(envios, contactListLocal);
};
const displayCalculo = () => {
  const envios = JSON.parse(localStorage.getItem("envios")) || [];

  updateCalculos(envios);
};
const displayContacts = (data, contactList) => {
  contactList.innerHTML = "";
  var fila = 0
  data.forEach((envio) => {
    const contactItem = document.createElement("div");
    contactItem.className = "card mb-3";
    contactItem.innerHTML = `
                    
              <div class="row">
                <div class="col-md-4" >
                  <img src="${envio.imagenes[0]}"  style="height: auto; width: 100%;">
                </div>
                <div class="col-md-8">
                  <div class="card-body ">
                    <h5 class="card-title">${envio.nombre}</h5>
                    <p class="card-text">Precio: $<p class="Monto">${envio.precio}</p></p>
                    <div class="input-group" style="width: 30%;">
                      <button class="btn btn-outline-secondary"  onClick="Menos(${fila})"  type="button">-</button>
                      <input id="${envio.id}" type="text" name="Campo[${fila}]" class="form-control text-center" value="1" readonly>
                      <button class="btn btn-outline-secondary" onClick="Mas(${fila})" type="button">+</button>
                    </div>
                  </div>
                  <button class="btn btn-danger btn-sm ms-3 mb-4 " id="${envio.id}" type="button" onClick="deleteRow2(this)">Eliminar</button>
                </div>
              </div>
            </div>

              `;
    fila = fila + 1
    contactList.appendChild(contactItem);

  });
  EjecutarCalculo()
};

updateCalculos = (Json) => {
  const lista = document.getElementById('Factura')
  const totalElement = document.getElementById('Total')
  totalElement.innerHTML = ''
  lista.innerHTML = ''
  var subtotales = []
  var elementos = []
  var cantidades = []
  var total = 0;
  for (let index = 0; index < Json.length; index++) {
    const campo = document.createElement('li')
    campo.className = "list-group-item d-flex justify-content-between align-items-center"
    var valor = document.getElementsByName(`Campo[${index}]`)[0]
    var subtotal = valor.value * Json[index].precio
    subtotal=parseFloat(subtotal.toFixed(2));
    subtotales.push(subtotal)
    elementos.push(`${Json[index].nombre}`)
    cantidades.push(`${valor.value}`)
    
    campo.innerHTML = `<p>${Json[index].nombre}:    ${subtotal}  <br> Cantidad: ${valor.value}</p>`
    lista.appendChild(campo);
    
    total += subtotal
    total=parseFloat(total.toFixed(2));
  }
  totalElement.innerHTML = ` $${total}`
  var factura = {
    subtotales,
    elementos,
    cantidades,
    total
  }

  localStorage.removeItem('facturas');


  localStorage.setItem("facturas", JSON.stringify(factura));
}


function deleteRow(button) {
  const envios = JSON.parse(localStorage.getItem("envios")) || [];
  var nuevos = []

  for (let index = 0; index < envios.length; index++) {
    var valor = document.getElementsByName(`Campo[${index}]`)[0]
    var cantidad = parseInt(valor.value)
    if (envios[index].id != button.id || cantidad != 0) {
      nuevos.push(envios[index])

    }

  }
  localStorage.removeItem('envios');
  localStorage.setItem("envios", JSON.stringify(nuevos));
  document.getElementById(`${button.id}`).id='nose'
  const modal=document.querySelector('#Modal')
  modal.close();
  displayContactsLocalStorage();
}
function deleteRow2(button) {
  const envios = JSON.parse(localStorage.getItem("envios")) || [];
  var nuevos = []

  for (let index = 0; index < envios.length; index++) {
    var valor = document.getElementsByName(`Campo[${index}]`)[0]
    var cantidad = parseInt(valor.value)
    if (envios[index].id != button.id ) {
      nuevos.push(envios[index])

    }

  }
  localStorage.removeItem('envios');
  localStorage.setItem("envios", JSON.stringify(nuevos));
  
  const modal=document.querySelector('#Modal')
  modal.close();
  displayContactsLocalStorage();
}
function Mas(numero) {

  var valor = document.getElementsByName(`Campo[${numero}]`)[0]
  var cantidad = parseInt(valor.value)

  cantidad++;

  valor.value = cantidad
  document.getElementsByName(`Campo[${numero}]`).innerHTML = valor
  EjecutarCalculo()
}
function Menos(numero) {


  var valor = document.getElementsByName(`Campo[${numero}]`)[0]
  var enviar=valor.id
  var cantidad = parseInt(valor.value)

  cantidad--;
  if (cantidad < 1) {
    
    abrirVentana(enviar,numero)
    

  }
  valor.value = cantidad
  document.getElementsByName(`Campo[${numero}]`).innerHTML = valor
  EjecutarCalculo()
}
function abrirVentana(enviar,numero){
  const modal=document.querySelector('#Modal')
  document.getElementsByName('Si')[0].id=10000
  document.getElementsByName('No')[0].id=20000
document.getElementById('10000').id=enviar
document.getElementById('20000').id=numero
  modal.showModal();
}

function cerrar() {
  const modal=document.querySelector('#Modal')
  var numero= document.getElementsByName('No')[0].id
  var valor = document.getElementsByName(`Campo[${numero}]`)[0]
   valor.value=1
  document.getElementsByName(`Campo[${numero}]`).innerHTML = valor
  
  modal.close();
  EjecutarCalculo()
}
function ValidarTarjeta() {

  var numero_tarjeta = document.getElementsByName(`Nombre`)[0]
  numero_tarjeta = numero_tarjeta.value
  let bin = numero_tarjeta.length >= 8 ? numero_tarjeta.slice(0, 8) : numero_tarjeta.slice(0, 6);

var boton = document.getElementById('Concretar')

  var imagen = document.createElement("img")
  const ejecutar = (bi2) => {
    fetch(`https://data.handyapi.com/bin/${bi2}`)
      .then(response => response.json())
      .then(result => {
        if (result.Scheme == "VISA") {
          var caja = document.getElementById("imagenTarjeta")
          
          caja.innerHTML=''
           caja.innerHTML=`
           <p><br><br></p>
                  <img src="https://static.vecteezy.com/system/resources/previews/020/975/576/non_2x/visa-logo-visa-icon-transparent-free-png.png" alt="Tarjeta de crédito/débito" width = "200px"; height = "150px";>`
          boton.disabled =false
        }else{
          if (result.Scheme == "MASTERCARD") {
            var caja = document.getElementById("imagenTarjeta")
         caja.innerHTML=''
           caja.innerHTML=`
           <p><br><br></p>
                  <img src=" https://www.freepnglogos.com/uploads/mastercard-png/mastercard-new-logo-vector-eps-svg-download-3.png" alt="Tarjeta de crédito/débito" width = "200px"; height = "150px";>`
            boton.disabled =false
          }else{
            boton.disabled =true
          }
        }
      
      })
      .catch(error => console.log('error', error));

  }
  ejecutar(bin)
}

function Facturar() {
  displayCalculo()
  let facturas = JSON.parse(localStorage.getItem("facturas")) || [];
  var select = document.getElementById("exampleSelect1");
  var indiceSeleccionado = select.selectedIndex;
  var valorSeleccionado = select.options[indiceSeleccionado].value;
  localStorage.removeItem('facturas');
  var nuevo = []
  nuevo.push(facturas)
  nuevo.push(valorSeleccionado);
  var numero_tarjeta = document.getElementsByName(`Nombre`)[0].value
  nuevo.push(numero_tarjeta)

  localStorage.setItem("facturas", JSON.stringify(nuevo));

  window.location.href = `Factura.html`;

}

