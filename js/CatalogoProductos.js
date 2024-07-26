$(document).ready(function () {

  $("#prueba").html('')
    productos.forEach((producto)=>{
  
        const imagen=` 
        <div class="col">
            <div class="card h-100">
                <img class="card-img-top" src="${producto.imagenes[0]}" alt="${producto.imagenes[0]}">
                <div class="card-body ">
                    <h5 class="card-title ">${producto.nombre}</h5>
                    <p class="card-text fs-4 mt-2">$${producto.precio}</p>
                </div>
                <div class="card-footer d-flex justify-content-center">
                    <button type="button" class="btn btn-primary" style="width:80%;">Detalles</button>
                </div>
            </div>
        </div>`
            $('#prueba').append(imagen)
    })

  });
  
